import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { ProjectFooter } from '../../../components/layouts/ProjectFooter.component';
import { ProcessettiBanner } from '../../../components/project-specific/ProcessettiBanner.component';
import { ProcessettiNavbar } from '../../../components/project-specific/ProcessettiNavbar.component';
import theming from '../index.module.css';
import styles from './processetti.module.css';

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
          <ion-grid>
            <h1>Grafici e tabelle</h1>
            <h2>Processetti</h2>
            <p>
              I brevi commenti storici hanno lo scopo di interpretare le tabelle
              e i grafici prodotti in seguito all&apos;analisi quantitativa dei
              dati raccolti. I risultati sono interpretati alla luce del
              contesto storico, ma non sono illustrati da esempi e ricostruzioni
              biografiche individuali. Le tabelle e i grafici presentati sono
              solo una parte delle analisi che possono essere effettuate a
              partire dai dati acquisiti. Nel prossimo futuro, si prevede di
              trasformare queste immagini statiche in grafici interattivi in
              grado di fornire risposta a un più ampio spettro di interrogativi.
              La visualizzazione riguarda dati demografici, sociali e spaziali.
            </p>
            <ion-img src="/processetti/generaliSito.png" alt="generali-sito" />
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
