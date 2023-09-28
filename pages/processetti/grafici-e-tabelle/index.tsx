/* eslint-disable react/no-unescaped-entities */
import type { GetStaticProps, NextPage } from 'next';
import { GraficiTabelleProps } from '../../../components/project-specific/GraficiTabelleProps';
import { ProcessettiGraficiLayout } from '../../../components/project-specific/ProcessettiGraficiLayout.component';
import { graficiTabelleLinks } from '../../../components/project-specific/ProcessettiNavbar.component';

const P: NextPage<GraficiTabelleProps> = (props) => {
  return (
    <ProcessettiGraficiLayout head={props.head} links={graficiTabelleLinks}>
      <ion-grid fixed>
        <h1>Presentazione</h1>

        <p>
          I brevi commenti storici hanno lo scopo di interpretare le tabelle e i
          grafici prodotti in seguito all'analisi quantitativa dei dati
          raccolti. I risultati sono interpretati alla luce del contesto
          storico, ma non sono illustrati da esempi e ricostruzioni biografiche
          individuali.{' '}
        </p>
        <p>
          Le tabelle e i grafici presentati sono solo una parte delle analisi
          che possono essere effettuate a partire dai dati acquisiti. Nel
          prossimo futuro, si prevede di trasformare queste immagini statiche in
          grafici interattivi in grado di fornire risposta a un più ampio
          spettro di interrogativi.
        </p>
        <p>La visualizzazione riguarda dati demografici, sociali e spaziali.</p>
        <p>
          Dopo una presentazione complessiva dei processetti sfruttati,
          l’analisi si concentra sul periodo 1592-1604.
        </p>
        <p></p>
        <p>
          L’estrazione, l’analisi e la visualizzazione dei dati sono state
          realizzate da Jacopo Cossu.
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
        headOgDescription: 'Grafici e tabelle > Soggetti',
        headTitle: 'Grafici e tabelle > Soggetti',
        headOgImage: '/socialimage/processetti.jpg',
      },
    },
  };
};
