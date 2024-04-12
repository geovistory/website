import { CustomPlugin } from '@geovistory/design-system-web/loader';
import type { GetStaticProps, NextPage } from 'next';
import { CCLicense } from '../components/elements/CCLicense.component';
import {
  DefaultPage,
  DefaultPageProps,
} from '../components/layouts/DefaultPage.component';
import { projectsParams } from '../lib/projectParams';
import styles from './sparql.module.css';
export interface SparqlProps {
  defaultPage: DefaultPageProps;
}
const Sparql: NextPage<SparqlProps> = (props) => {
  return (
    <DefaultPage {...props.defaultPage}>
      <h1 className={styles.title}>
        Access Geovistory Community Data via SPARQL
      </h1>
      <geov-yasgui
        id="el-1"
        default-plugin="table"
        collapse="false"
        ref={(el: HTMLGeovYasguiElement) => {
          el.plugins = new Set<CustomPlugin>(['mapCircles', 'timeline']);
          el.queryTabs = [
            {
              name: 'Selection of triples',
              sparqlEndpoint: `https://sparql.geovistory.org/api_v1_community_data`,
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
            {
              name: 'Map example',
              sparqlEndpoint: `https://sparql.geovistory.org/api_v1_community_data`,
              selectedPlugin: 'mapCircles',
              query: `PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ontome: <https://ontome.net/ontology/>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>

SELECT ?label ?long ?lat ?link ("Geographical Place" as ?type)
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
bind(concat(str(?geoplace)) as ?link )

}
GROUP BY ?label ?long ?lat ?type ?link
              
              `
            },
            {
              name: 'Timeline example',
              sparqlEndpoint: 'https://sparql.geovistory.org/api_v1_community_data',
              selectedPlugin: 'timeline',
              query: `PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX xml: <http://www.w3.org/XML/1998/namespace>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX geo: <http://www.opengis.net/ont/geosparql#>
PREFIX time: <http://www.w3.org/2006/time#>
PREFIX ontome: <https://ontome.net/ontology/>
PREFIX geov: <http://geovistory.org/resource/>

SELECT (str(?e) as ?entityLink) (MIN(?date) as ?startDate) (MAX(?date) as ?endDate) (SAMPLE(?l) as ?entityLabel) ?entityClassLabel
WHERE {
  ### Definition of the events we want to display on a timeline
  
  # Geo-Place "Texel NL" -> is departure place of -> ship voyage
  geov:i209502 ^ontome:p1335 ?e .
  # event -> is a -> ship voyages
  ?e a ontome:c523 .
  # Ship voyage -> class label
  ontome:c523 rdfs:label ?entityClassLabel .
  
  ### Join temproal information for the time line ###

  # event -> has -> time span
  ?e ontome:p4 ?timespan.
  # time span -> timeprop -> date time description
  ?timespan ontome:p71|ontome:p72|ontome:p150|ontome:p151|ontome:p152|ontome:p153 ?dtd.
  # date time description -> year;month;day
  ?dtd time:year ?y ; time:month ?m  ; time:day ?d .
  # parse to xsd:date
  bind(xsd:date(concat(replace(str(?y), "^-", "" ), replace(str(?m), "^-", "" ),replace(str(?d), "^--", "" ))) as ?date)
  # event -> has -> label
  ?e rdfs:label ?l .
}
GROUP BY ?e ?entityClassLabel
LIMIT 10`,
            },
          ];
        }}
      ></geov-yasgui>{' '}
      <CCLicense />
    </DefaultPage>
  );
};

export default Sparql;
export const getStaticProps: GetStaticProps<SparqlProps> = async () => {
  return {
    props: {
      defaultPage: {
        head: {
          headTitle: 'SPARQL',
          headOgDescription:
            'Query our data with SPARQL – the query language for the semantic web.',
          headOgImage: null,
        },
        expand: true,
        footer: {
          featuredProjects: projectsParams.filter((pp) => pp.featured),
        },
      },
    },
    revalidate: 86400,
  };
};
