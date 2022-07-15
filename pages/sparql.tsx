import type { GetStaticProps, GetStaticPropsResult, NextPage } from 'next';
import { CCLicense } from '../components/elements/CCLicense.component';
import { Yasgui } from '../components/elements/Yasgui.component';
import {
  DefaultPage,
  DefaultPageProps,
} from '../components/layouts/DefaultPage.component';
import { projectsParams } from '../projects/projectParams';

export interface SparqlProps {
  defaultPage: DefaultPageProps;
}
const Sparql: NextPage<SparqlProps> = (props) => {
  return (
    <DefaultPage {...props.defaultPage}>
      <h1>Access Geovistory Community Data via SPARQL</h1>
      <Yasgui endpoint="https://sparql.geovistory.org/api_v1_community_data" />
      <CCLicense />
    </DefaultPage>
  );
};

export default Sparql;
export const getStaticProps: GetStaticProps<SparqlProps> = async ()=> {
  return {
    props: {
      defaultPage: {
        expand: true,
        footer: {
          featuredProjects: projectsParams.filter((pp) => pp.featured),
        },
      },
    },
    revalidate: 86400,
  };
};
