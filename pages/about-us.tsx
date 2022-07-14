import type { GetStaticProps, NextPage } from 'next';
import { DefaultPage, DefaultPageProps } from '../components/layouts/DefaultPage.component';
import { projectsParams } from '../projects/config';

export interface AboutUsProps {
  defaultPage: DefaultPageProps;
}
const AboutUs: NextPage<AboutUsProps> = (props) => {
  return (
    <DefaultPage {...props.defaultPage}>
      <h1>About us</h1>
      
    </DefaultPage>
  );
};

export default AboutUs;
export const getStaticProps: GetStaticProps<AboutUsProps> = async () => {
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
