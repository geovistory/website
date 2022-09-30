import type { GetStaticProps, NextPage } from 'next';
import {
  DefaultPage,
  DefaultPageProps,
} from '../components/layouts/DefaultPage.component';
import { projectsParams } from '../projects/projectParams';

export interface ResourcesProps {
  defaultPage: DefaultPageProps;
}
const Resources: NextPage<ResourcesProps> = (props) => {
  return (
    <DefaultPage {...props.defaultPage}>
      <h1>Explore Geovistory Resources</h1>
      <br />

      <ion-card
        class="restricted-width"
        href="https://docs.geovistory.com/"
        target="_blank"
      >
        <ion-card-header>
          <ion-card-subtitle>User Manual</ion-card-subtitle>
          <ion-card-title>Geovistory Toolbox Documentation</ion-card-title>
        </ion-card-header>

        <ion-card-content>
          Information, hints and tips on how to use the Geovistory Toolbox, a
          virtual research environment for the humanities and social sciences.
        </ion-card-content>
      </ion-card>
      <br />
      <ion-card
        class="restricted-width"
        href="https://design.geovistory.org/"
        target="_blank"
      >
        <ion-card-header>
          <ion-card-subtitle>Developer Documentation</ion-card-subtitle>
          <ion-card-title>Geovistory Webcomponents</ion-card-title>
        </ion-card-header>

        <ion-card-content>
          Documentation of the Geovistory design system, which consists of web
          components that you can embed on your website, as we do on
          Geovistory.org.
        </ion-card-content>
      </ion-card>
    </DefaultPage>
  );
};

export default Resources;
export const getStaticProps: GetStaticProps<ResourcesProps> = async () => {
  return {
    props: {
      defaultPage: {
        footer: {
          featuredProjects: projectsParams.filter((pp) => pp.featured),
        },
      },
    },
    revalidate: 86400,
  };
};
