import type { GetStaticProps, NextPage } from 'next';
import {
  DefaultPage,
  DefaultPageProps,
} from '../../components/layouts/DefaultPage.component';
import { projectsParams } from '../../lib/projectParams';

export interface ResourcesProps {
  defaultPage: DefaultPageProps;
}
const Resources: NextPage<ResourcesProps> = (props) => {
  return (
    <DefaultPage {...props.defaultPage}>
      <h1>Documentation</h1>
      <br />

      <ion-card
        class="restricted-width"
        href="https://docs.geovistory.com/"
        target="_blank"
      >
        <ion-card-header>
          <ion-card-title>Toolbox Documentation</ion-card-title>
          <ion-card-subtitle>User Manual</ion-card-subtitle>
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
          <ion-card-title>Webcomponents</ion-card-title>
          <ion-card-subtitle>Developer Documentation</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
          Documentation of the Geovistory design system, which consists of web
          components that you can embed on your website, as we do on
          Geovistory.org.
        </ion-card-content>
      </ion-card>
      <br />
      <ion-card
        class="restricted-width"
        href="/documentation/uri-dereferencing"
        target="_blank"
      >
        <ion-card-header>
          <ion-card-title>URI Dereferencing</ion-card-title>
          <ion-card-subtitle>Data API</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
          Geovistory entities have URIs. Learn here how to obtain different
          representations of the entities in HTML and RDF.
        </ion-card-content>
      </ion-card>
      <br />
      <ion-card
        class="restricted-width"
        href="https://github.com/geovistory"
        target="_blank"
      >
        <ion-card-header>
          <ion-card-title>Open Source</ion-card-title>
          <ion-card-subtitle>Source Code</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
          Geovistory is developed and maintained by the GitHub Organization
          Geovistory. Click to open the GitHub page.
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
        head: {
          headTitle: 'Documentation',
          headOgDescription: 'Documentation of the Geovistory ecosystem.',
          headOgImage: null,
        },
        footer: {
          featuredProjects: projectsParams.filter((pp) => pp.featured),
        },
      },
    },
    revalidate: 86400,
  };
};
