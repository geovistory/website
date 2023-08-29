import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import ImageWrapper from '../../../components/elements/ImageWrapper';
import { ProjectFooter } from '../../../components/layouts/ProjectFooter.component';
import { ProcessettiBanner } from '../../../components/project-specific/ProcessettiBanner.component';
import { ProcessettiNavbar } from '../../../components/project-specific/ProcessettiNavbar.component';
import theming from '../index.module.css';
import styles from './processetti.module.css';
import testStyles from './test.module.css';

export interface GETProcessettiProps {}
const GETProcessetti: NextPage<GETProcessettiProps> = (props) => {
  return (
    <>
      <Head>
        <title>Grafici e tabelle</title>
      </Head>
      <ion-app class={theming.theme}>
        <ion-content class={styles.content}>
          <ProcessettiNavbar
            title="Progetto ANR Processetti"
            projectId={591}
          ></ProcessettiNavbar>
          <ProcessettiBanner></ProcessettiBanner>
          <ion-grid fixed>
            <h1>Grafici e tabelle</h1>
            <h2>Test</h2>
            <p className="lead">
              This page is used to test the embedding of graphs and diagrams.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              quis odio nostrum commodi ducimus earum consequatur enim laborum
              recusandae, molestiae minima eum ipsa sequi magnam vero tempore
              quidem praesentium voluptates.
            </p>
            <h3>Età all’arrivo a Venezia</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              quis odio nostrum commodi ducimus earum consequatur enim laborum
              recusandae, molestiae minima eum ipsa sequi magnam vero tempore
              quidem praesentium voluptates.
            </p>
            <ImageWrapper
              imageUrls={[
                '/processetti/diagrams/Richiedenti_-_eta_allarrivo_a_Venezia_e_eta_al_processetto_sm.svg',
                '/processetti/diagrams/Richiedenti_-_eta_allarrivo_a_Venezia_e_eta_al_processetto_xl.svg',
              ]}
              legend={
                'Rapporto tra l’età all’arrivo a Venezia e l’età al processetto'
              }
            >
              <ion-img
                class={`ion-hide-lg-up ${testStyles.border}`}
                src="/processetti/diagrams/Richiedenti_-_eta_allarrivo_a_Venezia_e_eta_al_processetto_sm.svg"
              ></ion-img>
              <ion-img
                class={`ion-hide-lg-down ${testStyles.border}`}
                src="/processetti/diagrams/Richiedenti_-_eta_allarrivo_a_Venezia_e_eta_al_processetto_xl.svg"
              ></ion-img>
            </ImageWrapper>

            <h3>Professioni dei richiedenti</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              quis odio nostrum commodi ducimus earum consequatur enim laborum
              recusandae, molestiae minima eum ipsa sequi magnam vero tempore
              quidem praesentium voluptates.
            </p>
            <ImageWrapper
              imageUrls={[
                '/processetti/diagrams/Professioni_e_eta_richiedenti_sm.svg',
                '/processetti/diagrams/Professioni_e_eta_richiedenti_xl.svg',
              ]}
              legend={
                'Professioni dei richiedenti. Età all’arrivo a Venezia e età al processetto secondo la professione (al momento del processetto)'
              }
            >
              <ion-img
                class={`ion-hide-lg-up`}
                src="/processetti/diagrams/Professioni_e_eta_richiedenti_sm.svg"
              ></ion-img>
              <ion-img
                class={`ion-hide-lg-down`}
                src="/processetti/diagrams/Professioni_e_eta_richiedenti_xl.svg"
              ></ion-img>
            </ImageWrapper>

            <h3>Età dei testimoni al processetto</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              quis odio nostrum commodi ducimus earum consequatur enim laborum
              recusandae, molestiae minima eum ipsa sequi magnam vero tempore
              quidem praesentium voluptates.
            </p>
            <ImageWrapper
              imageUrls={[
                '/processetti/diagrams/Eta_dei_richiedenti_al_processetto_sm.svg',
                '/processetti/diagrams/Eta_dei_richiedenti_al_processetto_xl.svg',
              ]}
              legend={'Età dei testimoni al processetto e all’arrivo a Venezia'}
            >
              <ion-img
                class="ion-hide-lg-up"
                src="/processetti/diagrams/Eta_dei_richiedenti_al_processetto_sm.svg"
              ></ion-img>
              <ion-img
                class="ion-hide-lg-down"
                src="/processetti/diagrams/Eta_dei_richiedenti_al_processetto_xl.svg"
              ></ion-img>
            </ImageWrapper>
          </ion-grid>
          <ProjectFooter showEeditiones={false}></ProjectFooter>
        </ion-content>
      </ion-app>
    </>
  );
};

export default GETProcessetti;
export const getStaticProps: GetStaticProps<GETProcessettiProps> = async () => {
  return { props: {} };
};
