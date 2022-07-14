import type { GetStaticProps, NextPage } from 'next';
import { DefaultPage, DefaultPageProps } from '../components/layouts/DefaultPage.component';
import { projectsParams } from '../projects/config';

export interface AboutGeovistoryProps {
  defaultPage: DefaultPageProps;
}
const AboutGeovistory: NextPage<AboutGeovistoryProps> = (props) => {
  return (
    <DefaultPage {...props.defaultPage}>
      <h1>About us</h1>
      
    </DefaultPage>
  );
};

export default AboutGeovistory;
export const getStaticProps: GetStaticProps<AboutGeovistoryProps> = async () => {
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
