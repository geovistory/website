import { useEffect, useRef } from 'react';
import type { GetStaticProps, NextPage } from 'next';
import { CCLicense } from '../../../components/elements/CCLicense.component';
import {
    ProjectPageLayout,
    ProjectPageLayoutProps,
} from '../../../components/layouts/ProjectPageLayout.component';
import {
    ProjectParams,
    projectParamsToNavbarProps,
    projectsParams,
} from '../../../lib/projectParams';
import styles from './sparql.module.css';
import '@matdata/yasgui/build/yasgui.min.css';

export interface ProjectSparqlProps {
    params: ProjectParams;
    projectPageLayout: ProjectPageLayoutProps;
    queryTabs:
        | {
        name: string;
        sparqlEndpoint?: string;
        query: string;
    }[]
        | null;
}

const ProjectSparqlPage: NextPage<ProjectSparqlProps> = (props) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { geovID } = props.params;
    const endpointUrl = `https://sparql.geovistory.org/api_v1_project_${geovID}`;
    const persistenceKey = `geovistory_project_sparql_tabs_${geovID}`;

    useEffect(() => {
        if (!containerRef.current) return;

        const defaultTabs = props.queryTabs ?? [
            {
                name: 'Map example',
                sparqlEndpoint: endpointUrl,
                query: `PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ontome: <https://ontome.net/ontology/>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>

SELECT ?label (?long as ?lon) ?lat ?link ("Geographical Place" as ?type) ${
                    geovID ? '(count(?label) as ?radius)' : ''
                }
WHERE {

  # Geographical Place -had presence-> Presence -was at-> Place (lat/long)
  ?geoplace ontome:p147i/ontome:p148 ?place.

  # Geographical Place -label-> label
  ?geoplace rdfs:label ?label.

  # Extract lat and long from WKT
  bind(replace(str(?place), '<http://www.opengis.net/def/crs/EPSG/0/4326>', "", "i") as ?rep)
  bind(xsd:float(replace(str(?rep), "^[^0-9\\\\.-]*([-]?[0-9\\\\.]+) .*$", "$1" )) as ?long )
  bind(xsd:float(replace( str(?rep), "^.* ([-]?[0-9\\\\.]+)[^0-9\\\\.]*$", "$1" )) as ?lat )

  # Append the project query param to the URI
  bind(concat(str(?geoplace), "?p=${geovID}") as ?link )

  ${
                    geovID === 153
                        ? `# Find how many events are linked
  ?event ontome:p7 ?geoplace`
                        : ''
                }

  FILTER(BOUND(?lat) && BOUND(?long))
}
GROUP BY ?label ?long ?lat ?type ?link`,
            },
            {
                name: 'Timeline example',
                sparqlEndpoint: endpointUrl,
                query: `PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX xml: <http://www.w3.org/XML/1998/namespace>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX geo: <http://www.opengis.net/ont/geosparql#>
PREFIX time: <http://www.w3.org/2006/time#>
PREFIX ontome: <https://ontome.net/ontology/>
PREFIX geov: <http://geovistory.org/resource/>

SELECT
(concat(str(?e), "?p=${geovID}") as ?entityLink)
(MIN(?date) as ?startDate) (MAX(?date) as ?endDate) (SAMPLE(?l) as ?entityLabel) (SAMPLE(?classLabel) as ?entityClassLabel)
WHERE {
  # event -> is a -> birth
  ?e a ontome:c61 .
  # event class label
  ontome:c61 rdfs:label ?classLabel .
  # birth -> brought into life -> person -> has label -> label
  ?e ontome:p86/rdfs:label ?l .
  # event -> has -> time span
  ?e ontome:p4 ?timespan.
  # time span -> timeprop -> date time description
  ?timespan ontome:p71|ontome:p72|ontome:p150|ontome:p151|ontome:p152|ontome:p153 ?dtd.
  # date time description -> year;month;day
  ?dtd time:year ?y ; time:month ?m  ; time:day ?d .
  FILTER regex(str(?y), '^-') # necessary because of https://github.com/geovistory/toolbox-streams/issues/124
  # parse to xsd:date
  bind(xsd:date(concat(replace(str(?y), "^-", "" ), replace(str(?m), "^-", "" ),replace(str(?d), "^--", "" ))) as ?date)
}
GROUP BY ?e ?classLabel
LIMIT 10`,
            },
            {
                name: 'Selection of triples',
                sparqlEndpoint: endpointUrl,
                query: `PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX xml: <http://www.w3.org/XML/1998/namespace>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX geo: <http://www.opengis.net/ont/geosparql#>
PREFIX time: <http://www.w3.org/2006/time#>
PREFIX ontome: <https://ontome.net/ontology/>
PREFIX geov: <http://geovistory.org/resource/>

SELECT ?subject ?predicate ?object
WHERE {
  ?subject ?predicate ?object .
}
LIMIT 10`,
            },
        ];

        Promise.all([
            import('@matdata/yasgui'),
            import('@matdata/yasgui-graph-plugin'),
            import('@matdata/yasgui-geo-plugin'),
        ]).then(([{ default: Yasgui }, { default: GraphPlugin }, GeoModule]) => {
            if (containerRef.current && !containerRef.current.hasChildNodes()) {
                const GeoPlugin = GeoModule.default || GeoModule;

                Yasgui.Yasr.registerPlugin('Graph', GraphPlugin);
                Yasgui.Yasr.registerPlugin('geo', GeoPlugin);

                const hasSavedSession = Boolean(localStorage.getItem(persistenceKey));

                const yasgui = new Yasgui(containerRef.current, {
                    requestConfig: {
                        endpoint: endpointUrl,
                    },
                    copyEndpointOnNewTab: true,
                    persistenceId: persistenceKey,
                });

                if (!hasSavedSession) {
                    const firstTab = yasgui.getTab();
                    if (firstTab && defaultTabs.length > 0) {
                        firstTab.setName(defaultTabs[0].name);
                        firstTab.setEndpoint(defaultTabs[0].sparqlEndpoint ?? endpointUrl);
                        firstTab.setQuery(defaultTabs[0].query);
                    }

                    for (let i = 1; i < defaultTabs.length; i++) {
                        const tab = yasgui.addTab(false);
                        tab.setName(defaultTabs[i].name);
                        tab.setEndpoint(defaultTabs[i].sparqlEndpoint ?? endpointUrl);
                        tab.setQuery(defaultTabs[i].query);
                    }
                }
            }
        });
    }, [geovID, props.queryTabs, endpointUrl, persistenceKey]);

    return (
        <ProjectPageLayout {...props.projectPageLayout}>
            <div className={styles.container}>
                <h1 className={styles.title}>
                    Project&apos;s Open Data{' '}
                    <ion-text color={'medium'}>
                        <small>SPARQL access</small>
                    </ion-text>
                </h1>
                <div className="ion-margin-top">
                    <div ref={containerRef} style={{ marginBottom: '2rem' }} />
                </div>
                <CCLicense />
            </div>
        </ProjectPageLayout>
    );
};

export default ProjectSparqlPage;

export const getServerSideProps: GetStaticProps<ProjectSparqlProps> = async (
    context
) => {
    const projectId = parseInt(context.params?.geov_id as string, 10);

    const params = projectsParams.find((pp) => pp.geovID === projectId);
    if (!params) return { notFound: true };
    const props: ProjectSparqlProps = {
        queryTabs: params.sparqlQueryTabs ?? null,
        projectPageLayout: {
            head: {
                headTitle: 'SPARQL ' + params.shortName,
                headOgDescription: params.description,
                headOgImage: params.headOgImage,
            },
            navbar: projectParamsToNavbarProps(params),
        },
        params,
    };
    return {
        props,
    };
};