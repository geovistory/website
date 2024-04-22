/* eslint-disable react/no-unescaped-entities */
import type { GetStaticProps, NextPage } from "next";
import React from "react";
import { ProcessettiGraficiLayout } from "../../../components/project-specific/ProcessettiGraficiLayout.component";
import { GraficiTabelleProps } from "../../../components/project-specific/GraficiTabelleProps";
import styles from "./grafici.module.css";
import { ImageTitle } from "../../../components/project-specific/ImageTitle.component";
import { Subtitle } from "../../../components/project-specific/Subtitle.component";
import ImageWrapper from "../../../components/elements/ImageWrapper.component";
import { graficiTabelleLinks } from "../../../components/project-specific/ProcessettiNavbar.component";

const P: NextPage<GraficiTabelleProps> = (props) => {
  return (
    <ProcessettiGraficiLayout head={props.head} links={graficiTabelleLinks}>
      <ion-grid fixed>
        <h1>In città</h1>

        <ImageTitle>
          Parrocchia di abitazione e luogo di lavoro dei richiedenti (1592-1604)
        </ImageTitle>
        <br />

        <p>
        <ImageWrapper
          caption={
            "Distribuzione per parrocchia dei luoghi di abitazione e lavoro dei richiedenti"
          }
          imageUrls={[
            "/processetti/diagrams/22_abitazioneLavoroRichiedenti_sl.svg",
            "/processetti/diagrams/22_abitazioneLavoroRichiedenti_xl.svg",
          ]}
        >
          <ion-img
            class={`ion-hide-lg-down ${styles.border}`}
            alt="Mappa rappresentante la distribuzione per parrocchia dei luoghi di abitazione e lavoro dei richiedenti"
            src="/processetti/diagrams/22_abitazioneLavoroRichiedenti_xl.svg"
          ></ion-img>
          <ion-img
            class={`ion-hide-lg-up ${styles.border}`}
            alt="Mappa rappresentante la distribuzione per parrocchia dei luoghi di abitazione e lavoro dei richiedenti"
            src="/processetti/diagrams/22_abitazioneLavoroRichiedenti_sl.svg"
          ></ion-img>
        </ImageWrapper>
        </p>

       
        <p>
          I nubendi che si rivolgevano alla curia patriarcale per ottenere la
          fede di libertà provenivano da tutte le 71 parrocchie veneziane,
          proporzionalmente alla loro popolazione. Tra di esse si distinguono la
          parrocchia di San Geremia, posta sul versante nord occidentale della
          città, e quella di San Pietro di Castello, ubicata sul versante più
          orientale. Queste sono le due parrocchie più densamente popolate della
          città, ma anche quelle con la più alta concentrazione di richiedenti,
          dovuta alla diversificazione sociale della loro popolazione. San
          Geremia era un'area caratterizzata da una forte immigrazione dalla
          Terraferma, mentre San Pietro si connotava per la forte immigrazione
          dallo Stato da Mar. La prima era un’area periferica con un’industria
          tessile dinamica, mentre la seconda ospitava una notevole attività
          portuale e marittima. Le professioni afferenti a questi due settori
          erano le più praticate dai lavoratori forestieri che si erano sposati
          a Venezia. L'altra parrocchia in cui vivevano molti dei richiedenti
          era San Moisè, nel cuore della città, nel sestiere di San Marco.
          Rimane ad oggi difficile stabilire la logica di questa concentrazione.
        </p>
        <p>
          Spostando l’attenzione sui luoghi di lavoro dei richiedenti, emerge
          una geografia diversa da quella dei luoghi d’abitazione. Ad esempio,
          la parrocchia di San Pietro di Castello era il luogo di residenza
          degli operai che dichiaravano di lavorare all'Arsenale. Rialto e le
          Mercerie, l'asse commerciale nel cuore della città, attraevano
          negozianti e artigiani che vivevano in altre zone a causa dell'elevato
          costo degli alloggi del centro.
        </p>
        <ImageTitle>
          Parrocchia di abitazione dei richiedenti e dei testimoni
        </ImageTitle>
        <Subtitle>(periodo 1592-1604)</Subtitle>
        <p>
        <ImageWrapper
          caption={
            "Confronto tra le parrocchie d'abitazione dei richiedenti e dei testimoni"
          }
          imageUrls={[
            "/processetti/diagrams/23_abitazioneRichiedentiTestimoni_sl.svg",
            "/processetti/diagrams/23_abitazioneRichiedentiTestimoni_xl.svg",
          ]}
        >
          <ion-img
            class={`ion-hide-lg-down ${styles.border}`}
            alt="Mappe con il confronto tra le parrocchie d'abitazione dei richiedenti e dei testimoni"
            src="/processetti/diagrams/23_abitazioneRichiedentiTestimoni_xl.svg"
          ></ion-img>
          <ion-img
            class={`ion-hide-lg-up ${styles.border}`}
            alt="Mappe con il confronto tra le parrocchie d'abitazione dei richiedenti e dei testimoni"
            src="/processetti/diagrams/23_abitazioneRichiedentiTestimoni_sl.svg"
          ></ion-img>
        </ImageWrapper>
        </p>
        <p>
          Come i richiedenti, i testimoni abitavano in tutta la città in
          proporzione alle dimensioni di ciascuna parrocchia. Ciò è motivato dal
          fatto che i testimoni venivano scelti per la loro prossimità allo
          sposo, in termini sociali e geografici. Alcuni, ad esempio, erano
          vicini di casa e, come tali, avevano contatti quotidiani e un’ottima
          conoscenza della situazione matrimoniale dell’inquisito.
        </p>
        <p>
          Il fatto che i testimoni tendenzialmente avessero uno status sociale
          più elevato rispetto ai richiedenti si riflette sul dato della
          distribuzione urbana: questi assumono un peso maggiore rispetto agli
          sposi nelle parrocchie centrali della città, di fatto più variegate
          dal punto di vista professionale e sociale. Al contrario, la
          parrocchia di San Geremia, che registra un’ampia concentrazione di
          richiedenti, aveva proporzionalmente meno testimoni rispetto alle
          altre parrocchie.
        </p>
      </ion-grid>
    </ProcessettiGraficiLayout>
  );
};

export default P;
export const getStaticProps: GetStaticProps<GraficiTabelleProps> = async () => {
  return {
    props: {
      head: {
        headOgDescription: "Grafici e tabelle > In città",
        headTitle: "Grafici e tabelle > In città",
        headOgImage: "/socialimage/processetti.jpg",
      },
    },
  };
};
