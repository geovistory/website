/* eslint-disable react/no-unescaped-entities */
import type { GetStaticProps, NextPage } from "next";
import { GraficiTabelleProps } from "../../../components/project-specific/GraficiTabelleProps";
import { ProcessettiGraficiLayout } from "../../../components/project-specific/ProcessettiGraficiLayout.component";
import { graficiTabelleLinks } from "../../../components/project-specific/ProcessettiNavbar.component";

const P: NextPage<GraficiTabelleProps> = (props) => {
  return (
    <ProcessettiGraficiLayout head={props.head} links={graficiTabelleLinks}>
      <ion-grid fixed>
        <h1>Presentazione</h1>

        <p>
          I brevi commenti hanno lo scopo di guidare
          nell’interpretazione e nella ricontestualizzazione storica di quanto evidenziato dai dati tabellari e dai diagrammi prodotti in base
          all'analisi quantitativa dei dati raccolti. 
        </p>
        <p>Le tabelle e le visualizzazioni riguardano dati demografici, sociali e spaziali che, dopo una prima presentazione complessiva, si concentrano sul periodo 1592-1604</p>
        <p>
          Le restituzioni tabellari e i grafici realizzati sono solo una parte delle analisi
          che potrebbero essere effettuate a partire dai dati acquisiti. In un
          futuro prossimo, si prevede di trasformare queste immagini statiche in
          grafici e dashboard interattivi in grado di fornire risposta a un più ampio
          spettro di interrogativi.
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
        headOgDescription: "Grafici e tabelle > Soggetti",
        headTitle: "Grafici e tabelle > Soggetti",
        headOgImage: "/socialimage/processetti.jpg",
      },
    },
  };
};
