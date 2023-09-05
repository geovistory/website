import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { HeadProps } from '../../components/layouts/DefaultHead';
import { ProjectFooter } from '../../components/layouts/ProjectFooter.component';
import { ProcessettiBanner } from '../../components/project-specific/ProcessettiBanner.component';
import { ProcessettiLayout } from '../../components/project-specific/ProcessettiLayout.component';
import { ProcessettiNavbar } from '../../components/project-specific/ProcessettiNavbar.component';
import styles from './index.module.css';

export interface MetodologiaProps {
  head: HeadProps;
}
const Metodologia: NextPage<MetodologiaProps> = (props) => {
  return (
    <ProcessettiLayout head={props.head}>
      <ion-grid class={styles.section}>
        <h1>Metodologia</h1>
      </ion-grid>
      <ion-grid class={styles.sectionGray}>
        <h2>Introduzione</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          debitis quisquam nulla a. Facere quibusdam, necessitatibus ducimus eos
          nesciunt reiciendis, explicabo itaque maxime expedita nobis beatae
          tempore autem veniam totam.
        </p>
      </ion-grid>
      <ion-grid class={styles.section}>
        <h2>Processo di Modellizzazione</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          debitis quisquam nulla a. Facere quibusdam, necessitatibus ducimus eos
          nesciunt reiciendis, explicabo itaque maxime expedita nobis beatae
          tempore autem veniam totam.
        </p>
      </ion-grid>
      <ion-grid class={styles.sectionGray}>
        <h2>Temporalità</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          debitis quisquam nulla a. Facere quibusdam, necessitatibus ducimus eos
          nesciunt reiciendis, explicabo itaque maxime expedita nobis beatae
          tempore autem veniam totam.
        </p>
      </ion-grid>
    </ProcessettiLayout>
  );
};

export default Metodologia;
export const getStaticProps: GetStaticProps<MetodologiaProps> = async () => {
  return {
    props: {
      head: {
        headOgDescription: 'Progetto ANR Processetti',
        headTitle: 'Metodologia – Processetti',
        headOgImage: '/socialimage/processetti.jpg',
      },
    },
  };
};
