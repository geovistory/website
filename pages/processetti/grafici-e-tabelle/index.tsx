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
          I brevi commenti storici hanno lo scopo di guidare
          nell’interpretazione delle tabelle e dei grafici prodotti in base
          all'analisi quantitativa dei dati raccolti. I risultati sono stati
          letti alla luce del contesto storico, ma non sono stati illustrati con
          esempi o ricostruzioni biografiche individuali.{" "}
        </p>
        <p>La visualizzazione riguarda dati demografici, sociali e spaziali.</p>
        <p>
          Le tabelle e i grafici realizzati sono solo una parte delle analisi
          che potrebbero essere effettuate a partire dai dati acquisiti. In un
          futuro prossimo, si prevede di trasformare queste immagini statiche in
          grafici interattivi in grado di fornire risposta a un più ampio
          spettro di interrogativi.
        </p>
        <p>
          Dopo una presentazione complessiva dei processetti sfruttati,
          l’analisi si concentra sul periodo 1592-1604.
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
