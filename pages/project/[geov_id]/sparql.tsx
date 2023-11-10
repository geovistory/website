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
import { QueryTab } from '@geovistory/design-system-web/loader';

export interface ProjectSparqlProps {
  params: ProjectParams;
  projectPageLayout: ProjectPageLayoutProps;
  queryTabs: QueryTab[] | null;
}
const ProjectSparqlPage: NextPage<ProjectSparqlProps> = (props) => {
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
          <geov-yasgui
            id="el-1"
            default-plugin="table"
            collapse="false"
            ref={(el: HTMLGeovYasguiElement) => {
              el.plugins = new Set<'mapCircles'>(['mapCircles']);
              el.queryTabs = props.queryTabs ?? [
                {
                  name: 'Geographical Places',
                  sparqlEndpoint: `https://sparql.geovistory.org/api_v1_project_${props.params.geovID}`,
                  selectedPlugin: 'mapCircles',
                  query: `PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ontome: <https://ontome.net/ontology/>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>

SELECT ?label ?long ?lat ?link ("Geographical Place" as ?type)
WHERE {

  # Geographical Place -had presence-> Presence -was at-> Place (lat/long)
  ?s ontome:p147i/ontome:p148 ?place.

  # Geographical Place -label-> label
  ?s rdfs:label ?label.

  # Extract lat and long from WKT
  bind(replace(str(?place), '<http://www.opengis.net/def/crs/EPSG/0/4326>', "", "i") as ?rep)
  bind(xsd:float(replace(str(?rep), "^[^0-9\\\\.-]*([-]?[0-9\\\\.]+) .*$", "$1" )) as ?long )
  bind(xsd:float(replace( str(?rep), "^.* ([-]?[0-9\\\\.]+)[^0-9\\\\.]*$", "$1" )) as ?lat )

  # Append the project query param to the URI
  bind(concat(str(?s), "?p=${props.params.geovID}") as ?link )
}
GROUP BY ?label ?long ?lat ?type ?link
                  
                  `
                },
                {
                  name: 'Selection of triples',
                  sparqlEndpoint: `https://sparql.geovistory.org/api_v1_project_${props.params.geovID}`,
                  selectedPlugin: 'table',
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
            }}
          ></geov-yasgui>
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
