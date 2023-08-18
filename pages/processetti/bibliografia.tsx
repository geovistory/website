import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { ProjectFooter } from '../../components/layouts/ProjectFooter.component';
import { ProcessettiBanner } from '../../components/project-specific/ProcessettiBanner.component';
import { ProcessettiNavbar } from '../../components/project-specific/ProcessettiNavbar.component';
import theming from './index.module.css';
import styles from './bibliografia.module.css';

export interface BibliografiaProps {}
const Bibliografia: NextPage<BibliografiaProps> = (props) => {
  return (
    <>
      <Head>
        <title>Bibliografia –Processetti</title>
      </Head>
      <ion-app class={theming.theme}>
        <ion-content class={styles.content}>
          <ProcessettiNavbar
            title="Progetto ANR Processetti"
            projectId={591}
          ></ProcessettiNavbar>
          <ProcessettiBanner></ProcessettiBanner>
          <ion-grid>
            <h1>Bibliografia</h1>
            <p>
              Albani Benedetta (2003-2004), Matrimoni e società a Roma nel primo
              Seicento attraverso i processetti matrimoniali, tesi di laurea,
              dir. M. A. Visceglia, La Sapienza Università di Roma.
            </p>
            <p>
              Avorio Tiziana, Chianese Stefano, Guarino Nicola (2003), ‘Una
              città senza immigranti? Caratteri della mobilità a Napoli tra
              Settecento e Ottocento’, in A. Arru e F. Ramella (a cura di),
              L’Italia delle migrazioni interne. Donne, uomini, mobilità in età
              moderna e contemporanea Roma, pp. 111-30.
            </p>
            <p>
              Belfanti Carlo Marco (1990), ‘Immigrazione e mestieri: i trentini
              a Mantova (secoli XVII e XVIII)’, Bollettino di demografia
              storica, 12, pp. 102-15.{' '}
            </p>

            <p>
              Belfanti Carlo Marco (1994), Mestieri e forestieri. Immigrazione
              ed economia urbana a Mantova fra Sei e Settecento, Milano.
            </p>

            <p>
              Canepari Eleonora (2003), ‘Mestiere e spazio urbano nella
              costruzione dei legami sociali degli immigrati a Roma in età
              moderna’, in A. Arru e F. Ramella (a cura di), L’Italia delle
              migrazioni interne. Donne, uomini, mobilità in età moderna e
              contemporanea, Roma, pp. 33-76.
            </p>

            <p>
              Canepari Eleonora (2008), ‘Mobilità, sociabilità e appartenenze
              nella Roma moderna’, in A. Arru, D.L. Cagliati e F. Ramella (a
              cura di), Donne e uomini migranti. Storie e geografie tra breve e
              lunga distanza, Roma, pp. 301-22.
            </p>

            <p>
              Chauvard Jean-François (2018), ‘Le mariage entre Grecs et Latins
              dans le monde vénitien. Gouvernement des minorités, discordes
              confessionnelles et convergences procédurales (Fin XVIe – fin
              XVIIIe siècle)’, Annales de démographie historique, 2018/2, p.
              179-211.
            </p>

            <p>
              Corazzol Gigi (2000), ‘A “scola da piccolo”. Testimonianze di
              lavoratori immigrati a Venezia (1592-1613)’, in L. Antonielli, C.
              Capra, M. Infelise (a cura di), Per Marino Berengo: studi degli
              allievi, Milano.
            </p>

            <p>
              Delille Gérard (1976), ‘Classi sociali e scambi matrimoniali nel
              Salernitano’, Quaderni Storici, 33, p. 997.
            </p>

            <p>
              Menzione, Andrea (1990), ‘Immigrazioni a Livorno nel secolo XVII
              attraverso i processi matrimoniali. Alcune note’, Bollettino di
              demografia storica, 12, pp. 97-102.
            </p>

            <p>
              Petraccone Claudia (1972), ‘Registri di nascite e matrimoni a
              Napoli’, in C.I.S.P., Le fonti della demografia storica in Italia,
              vol. I, parte II, Roma, pp. 647-99.
            </p>

            <p>
              Zannini Andrea (1998), ‘L’altra Bergamo in laguna: la comunità
              bergamasca a Venezia’, in Storia economica e sociale di Bergamo.
              Il tempo della Serenissima. Il lungo Cinquecento, Bergamo,
              Fondazione per la storia economica e sociale di Bergamo, pp.
              175-93.
            </p>
          </ion-grid>
          <ProjectFooter showEeditiones={false}></ProjectFooter>
        </ion-content>
      </ion-app>
    </>
  );
};

export default Bibliografia;
export const getStaticProps: GetStaticProps<BibliografiaProps> = async () => {
  return { props: {} };
};
