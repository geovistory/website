import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { ProjectFooter } from '../../components/layouts/ProjectFooter.component';
import { ProcessettiBanner } from '../../components/project-specific/ProcessettiBanner.component';
import { ProcessettiNavbar } from '../../components/project-specific/ProcessettiNavbar.component';
import styles from './index.module.css';

export interface MetodologiaProps {}
const Metodologia: NextPage<MetodologiaProps> = (props) => {
  return (
    <>
      <Head>
        <title>Metodologia – Processetti</title>
      </Head>
      <ion-app class={styles.theme}>
        <ion-content>
          <ProcessettiNavbar
            title="Progetto ANR Processetti"
            projectId={591}
          ></ProcessettiNavbar>
          <ProcessettiBanner></ProcessettiBanner>
          <ion-grid class={styles.section}>
            <h1>Metodologia</h1>
          </ion-grid>
          <ion-grid class={styles.sectionGray}>
            <h2>Introduzione</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime debitis quisquam nulla a. Facere quibusdam, necessitatibus ducimus eos nesciunt reiciendis, explicabo itaque maxime expedita nobis beatae tempore autem veniam totam.</p>
          </ion-grid>
          <ion-grid class={styles.section}>
            <h2>Processo di Modellizzazione</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime debitis quisquam nulla a. Facere quibusdam, necessitatibus ducimus eos nesciunt reiciendis, explicabo itaque maxime expedita nobis beatae tempore autem veniam totam.</p>
          </ion-grid>
          <ion-grid class={styles.sectionGray}>
            <h2>Temporalità</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime debitis quisquam nulla a. Facere quibusdam, necessitatibus ducimus eos nesciunt reiciendis, explicabo itaque maxime expedita nobis beatae tempore autem veniam totam.</p>
          </ion-grid>
          <ProjectFooter showEeditiones={false}></ProjectFooter>

        </ion-content>
      </ion-app>
    </>
  );
};

export default Metodologia;
export const getStaticProps: GetStaticProps<MetodologiaProps> = async () => {
  return { props: {} };
};
