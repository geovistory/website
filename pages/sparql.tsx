import type { GetStaticProps, NextPage } from 'next';
import { CCLicense } from '../components/elements/CCLicense.component';
import { Yasgui } from '../components/elements/Yasgui.component';
import {
  DefaultPage,
  DefaultPageProps
} from '../components/layouts/DefaultPage.component';
import { projectsParams } from '../lib/projectParams';
import styles from './sparql.module.css';
export interface SparqlProps {
  defaultPage: DefaultPageProps;
}
const Sparql: NextPage<SparqlProps> = (props) => {
  return (
    <DefaultPage {...props.defaultPage}>
      <h1 className={styles.title}>Access Geovistory Community Data via SPARQL</h1>
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
