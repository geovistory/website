/* eslint-disable react/no-unescaped-entities */
import type { GetStaticProps, NextPage } from 'next';
import React from 'react';
import { ProcessettiGraficiLayout } from '../../../components/project-specific/ProcessettiGraficiLayout.component';
import { GraficiTabelleProps } from '../../../components/project-specific/GraficiTabelleProps';
import styles from './grafici.module.css';
import ImageWrapper from '../../../components/elements/ImageWrapper.component';
import { ImageTitle } from '../../../components/project-specific/ImageTitle.component';
import { Subtitle } from '../../../components/project-specific/Subtitle.component';
const P: NextPage<GraficiTabelleProps> = (props) => {
  return (
    <ProcessettiGraficiLayout head={props.head}>
      <ion-grid fixed>
        <h1>Processetti</h1>
        <ImageTitle>
          Numero di processetti matrimoniali annotati in Geovistory
        </ImageTitle>
        <ImageWrapper
          legend={'Distribuzione dei processetti trattati'}
          imageUrls={[
            '/processetti/diagrams/01_numeroProcessetti_sl.svg',
            '/processetti/diagrams/01_numeroProcessetti_xl.svg',
          ]}
        >
          <ion-img
            class={`ion-hide-lg-down ${styles.border}`}
            alt="Grafico con il numero di processetti matrimoniali annotati in Geovistory"
            src="/processetti/diagrams/01_numeroProcessetti_xl.svg"
          ></ion-img>
          <ion-img
            class={`ion-hide-lg-up ${styles.border}`}
            alt="Grafico con il numero di processetti matrimoniali annotati in Geovistory"
            src="/processetti/diagrams/01_numeroProcessetti_sl.svg"
          ></ion-img>
        </ImageWrapper>
        <p>
          Sono stati trattati 4640 processetti, iscritti in un arco temporale
          che dal 1592 si protrae fino al 1650, assumendo due distinte prassi.
        </p>
        <p>
          Per oltre un decennio, dal 1592 al 1604, i processetti sono stati
          integralmente trascritti e annotati. Sebbene sia possibile rinvenire
          processetti cronologicamente antecedenti, questo primo gruppo coincide{' '}
          <i>de facto</i> con l'inizio della serie archivistica (
          <i>Examinum matrimoniorum</i>, b. 1-8). Per colmare l’assenza entro la
          serie di processetti datati 1593, si sono sottoposti al trattamento
          anche i processetti sparsamente conservati entro la serie{' '}
          <i>Filciae causarum</i>.
        </p>
        <p>
          Per il periodo successivo, che si estende fino alla metà del XVII
          secolo, sono stati elaborati solo parte dei processetti, rispettando
          tagli decennali (1610, 1620, 1639, 1650) e dedicando una maggior
          attenzione al periodo attorno alla peste del 1630. Per gli anni 1630,
          1631, 1632, 1633 è stata infatti effettuata una ricognizione, che ha
          portato al trattamento di tutti i processetti (compresi alcuni
          rinvenuti nella serie <i>Diversorum</i>) riferibili ai mesi di
          febbraio, maggio, agosto, novembre. Inoltre, questo secondo gruppo è
          stato sottoposto a un trattamento snello, privo di trascrizione e con
          la registrazione di un set selezionato di informazioni.
        </p>
        <p>
          La scelta di operare un’annotazione parziale e semplificata è stata
          determinata dal lungo tempo richiesto dalla trascrizione, la
          produzione dei dati semantici e dell’annotazione di ogni singolo
          processetto.
        </p>
        <p>
          Tuttavia, essa consente di confrontare le strutture migratorie tra la
          fine del XVI secolo e la metà del XVII secolo.
        </p>
        <ImageTitle>Una visione d’insieme dei dati registrati</ImageTitle>
        <ImageWrapper
          legend={'Quantificazione per classe delle istanze prodotte'}
          imageUrls={[
            '/processetti/diagrams/03_classDistribution_sl.svg',
            '/processetti/diagrams/03_classDistribution_xl.svg',
          ]}
        >
          <ion-img
            class={`ion-hide-lg-down ${styles.border}`}
            alt="Grafico con la quantificazione per classe delle istanze prodotte in Geovistory"
            src="/processetti/diagrams/03_classDistribution_xl.svg"
          ></ion-img>
          <ion-img
            class={`ion-hide-lg-up ${styles.border}`}
            alt="Grafico con la quantificazione per classe delle istanze prodotte in Geovistory"
            src="/processetti/diagrams/03_classDistribution_sl.svg"
          ></ion-img>
        </ImageWrapper>
        <p>
          Queste poche cifre restituiscono la misura della massa di dati
          registrati: 13185 persone diverse (richiedenti, testimoni, altri),
          17992 localizzazioni degli eventi concernenti gli individui (più di
          una riferibile alla stessa persona, potendo infatti indicando tanto
          parrocchia di residenza, i luogo di lavoro, il soggiorno in un luogo o
          l’arrivo a Venezia), 11332 nascite (riportanti tanto il dato cronico
          quanto quello topico), 9380 relazioni sociali qualificate, intercorse
          tra richiedenti e testimoni, 10114 indicazioni di svolgimento di una
          professione, 2047 resoconti di viaggio o spostamento, 1597 distinte
          entità geografiche ecc.
        </p>
        <ImageTitle>Tipologia dei processetti</ImageTitle>
        <ImageWrapper
          legend={'Distribuzione dei processetti secondo il tipo'}
          imageUrls={[
            '/processetti/diagrams/02_distribuzioneTipooProcessetti_sl.svg',
            '/processetti/diagrams/02_distribuzioneTipooProcessetti_xl.svg',
          ]}
        >
          <ion-img
            class={`ion-hide-lg-down ${styles.border}`}
            alt="Grafico con il numero di processetti matrimoniali annotati in Geovistory distinti per tipo"
            src="/processetti/diagrams/02_distribuzioneTipooProcessetti_xl.svg"
          ></ion-img>
          <ion-img
            class={`ion-hide-lg-up ${styles.border}`}
            alt="Grafico con il numero di processetti matrimoniali annotati in Geovistory distinti per tipo"
            src="/processetti/diagrams/02_distribuzioneTipooProcessetti_sl.svg"
          ></ion-img>
        </ImageWrapper>
        <p>
          Si identificano generalmente tre categorie di individui chiamate a
          dimostrare lo stato libero: i migranti (forestieri e sudditi veneti)
          che decidevano di sposarsi in città, gli individui che trascorrevano
          lunghi o frequenti periodi di tempo fuori Venezia (ad esempio,
          marinai, soldati e mercanti) e i <strong>vedovi</strong>, chiamati a
          dimostrare l’avvenuta morte del coniuge. Tuttavia, quasi da subito,
          l'emergere di casi eccezionali per forma e contenuto ha reso
          necessaria l'introduzione del type `Processetto atipico`. In questo
          tipologia entrano casi storicamente determinati come bigamia,
          concubinato, ricercar di identità del nobendo o del defunto, stato
          della prole, abbandono del nucleo domestic, indigenza, verifica dei
          natali cattolici per ordinamento, stato libero di Veneziani Secondo
          gli studi storici finora condotti sugli <i>Examina</i>, la procedura
          di accertamento dello stato libero generalizzata a tutta la
          popolazione originaria di Venezia, si sarebbe istituzionalizzata solo
          a partire dall’inizio del Settecento.
        </p>
        <ImageTitle>Durata del processetto</ImageTitle>
        <Subtitle>(periodo 1592-1604)</Subtitle>
        <ImageWrapper
          legend={'Durata dei processetti'}
          imageUrls={[
            '/processetti/diagrams/04_durataProcessetto_sl.svg',
            '/processetti/diagrams/04_durataProcessetto_xl.svg',
          ]}
        >
          <ion-img
            class={`ion-hide-lg-down ${styles.border}`}
            alt="Grafico con la durata dei processetto distinti per tipo"
            src="/processetti/diagrams/04_durataProcessetto_xl.svg"
          ></ion-img>
          <ion-img
            class={`ion-hide-lg-up ${styles.border}`}
            alt="Grafico con la durata dei processetto distinti per tipo"
            src="/processetti/diagrams/04_durataProcessetto_sl.svg"
          ></ion-img>
        </ImageWrapper>
        <p>
          La raccolta delle deposizioni volte a certificare lo stato libero, 9
          volte su 10, trovavano intero svolgimento nell'arco di una sola
          giornata. L'istruzione del processetto, l'esame dei testimoni, la
          registrazione e il rilascio dell'attestazione (fede) avvenivano
          tendenzialmente in stretta successione. In alcuni casi, la raccolta
          delle deposizioni avveniva in più tempi anche se spesso trovavano
          conclusione il giorno successivo all’audizione del primo testimone. I
          processi in cui le testimonianze risultano temporalmente tra loro
          distanti (eccezionalmente più di due settimane) si spiegano con la
          necessità di ascoltare deponenti in un primo momento non disponibili
          (perchè abitanti in località extra-lagunari o assenti dal contesto
          cittadino per ragioni professionali ) o quella di appurare meglio i
          casi (soprattutto a seguito di testimonianze laconiche o ambigue)
          attraverso l’audizione di nuovi e imprevisti testimoni.
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
        headOgDescription: 'Grafici e tabelle > Processetti',
        headTitle: 'Grafici e tabelle > Processetti',
        headOgImage: '/socialimage/processetti.jpg',
      },
    },
  };
};
