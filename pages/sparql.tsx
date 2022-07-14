import type { GetStaticProps, NextPage } from 'next';
import { DefaultPage, DefaultPageProps } from '../components/layouts/DefaultPage.component';
import { projectsParams } from '../projects/config';

export interface SparqlProps {
  defaultPage: DefaultPageProps;
}
const Sparql: NextPage<SparqlProps> = (props) => {
  return (
    <DefaultPage {...props.defaultPage}>
      <h1>About us</h1>
      
    </DefaultPage>
  );
};

export default Sparql;
export const getStaticProps: GetStaticProps<SparqlProps> = async () => {
  return {
    props: {
      defaultPage:{
        footer: {
          featuredProjects: projectsParams.filter((pp) => pp.featured)
        }
      }
    },
    revalidate: 86400,
  };
};
