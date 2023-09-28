/* eslint-disable react/no-unescaped-entities */
import type { GetStaticProps, NextPage } from 'next';
import ImageWrapper from '../../../components/elements/ImageWrapper.component';
import { GraficiTabelleProps } from '../../../components/project-specific/GraficiTabelleProps';
import { ImageTitle } from '../../../components/project-specific/ImageTitle.component';
import { ProcessettiGraficiLayout } from '../../../components/project-specific/ProcessettiGraficiLayout.component';
import { graficiTabelleLinks } from '../../../components/project-specific/ProcessettiNavbar.component';
import { Subtitle } from '../../../components/project-specific/Subtitle.component';
import styles from './grafici.module.css';

const P: NextPage<GraficiTabelleProps> = (props) => {
  return (
    <ProcessettiGraficiLayout head={props.head} links={graficiTabelleLinks}>
      <ion-grid fixed>
        <h1>Mobilità</h1>

        <ImageTitle>
          Spostamento temporaneo fuori Venezi/Tappa intermedia tra il paese di
          origine e l’arrivo a Venezia{' '}
        </ImageTitle>
        <Subtitle>(periodo 1592-1604)</Subtitle>

        <ImageWrapper
          legend={
            "Frequenza d'uso dei concetti per la descrizione degli spostamenti extraurbani"
          }
          imageUrls={[
            '/processetti/diagrams/24_concettiAccount_sl.svg',
            '/processetti/diagrams/24_concettiAccount_xl.svg',
          ]}
        >
          <ion-img
            class={`ion-hide-lg-down ${styles.border}`}
            alt="Grafico con la frequenza d'uso dei concetti per la descrizione degli spostamenti extra-urbani"
            src="/processetti/diagrams/24_concettiAccount_xl.svg"
          ></ion-img>
          <ion-img
            class={`ion-hide-lg-up ${styles.border}`}
            alt="Grafico con la frequenza d'uso dei concetti per la descrizione degli spostamenti extra-urbani"
            src="/processetti/diagrams/24_concettiAccount_sl.svg"
          ></ion-img>
        </ImageWrapper>

        <p>
          Le autorità ecclesiastiche sospetavano che la mobilità fosse un
          fattore in grado di favorire la poligamia, per tale ragione si
          premurarono di ottenere il maggior numero di informazioni sul futuro
          sposo, sia del periodo speso in patria, sulle modalità e i tempi dello
          spostamento a Venezia, nonché sul suo percorso migratorio prima
          dell'arrivo e sugli eventuali spostamenti avvenuti dopo
          l'insediamento, in particolare su eventuali ritorni in patria che
          avrebbero potuto favorire il perfezionamento di un altra pratica
          matrimoniale.{' '}
        </p>
        <p>
          Per una minoranza di richiedenti (meno di un decimo), la rotta
          migratoria tra il Paese d'origine e Venezia non è stata diretta, ma ha
          finito col toccare diverse tappe per motivi professionali o di
          formazione. Alcuni avevano avuto l’occasione o la necessità di
          trasferirsi in altre città prima di rientrare a Venezia. Molti altri
          si spostarono temporaneamente fuori città per i motivi più disparati:
          a partire da quelle professionali (marinai, soldati, mercanti,
          artisti), fino al pellegrinaggio, passando per il bando, il sollazzo,
          la malattia, la visita ai parenti e altre ancora. Va detto che la
          durata del viaggio è raramente specificata e, quando lo è, risulta per
          lo più approssimativa.
        </p>

        <ImageTitle>
          Ritorno temporaneo al paese di origine dopo l’arrivo a Venezia <br />
          Frequenza del ritorno temporaneo al paese d’origine dopo l’arrivo a
          Venezia
        </ImageTitle>
        <Subtitle>(periodo 1592-1604)</Subtitle>

        <ImageWrapper
          legend={
            'Rapporto tra la frequenza degli spostamenti extraurbani e il tempo di stabile permanenza a Venezia'
          }
          imageUrls={[
            '/processetti/diagrams/25_frequenzaMobilitàPermanenza_sl.svg',
            '/processetti/diagrams/25_frequenzaMobilitàPermanenza_xl.svg',
          ]}
        >
          <ion-img
            class={`ion-hide-lg-down ${styles.border}`}
            alt="Tabella che pone in rapporto tra la frequenza degli spostamenti extraurbani e il tempo di stabile permanenza a Venezia"
            src="/processetti/diagrams/25_frequenzaMobilitàPermanenza_xl.svg"
          ></ion-img>
          <ion-img
            class={`ion-hide-lg-up ${styles.border}`}
            alt="Tabella che pone in rapporto tra la frequenza degli spostamenti extraurbani e il tempo di stabile permanenza a Venezia"
            src="/processetti/diagrams/25_frequenzaMobilitàPermanenza_sl.svg"
          ></ion-img>
        </ImageWrapper>

        <ImageTitle>
          Origini dei richiedenti che tornano temporaneamente al paese
        </ImageTitle>
        <Subtitle>(periodo 1592-1604)</Subtitle>
        <ImageWrapper
          legend={
            "Origini dei richiedenti con almeno un ritorno temporaneo al paese d'origine"
          }
          imageUrls={[
            '/processetti/diagrams/26_originiRitorno_sl.svg',
            '/processetti/diagrams/26_originiRitorno_xl.svg',
          ]}
        >
          <ion-img
            class={`ion-hide-lg-down ${styles.border}`}
            alt="Mappa con le origini dei richiedenti aventi almeno un ritorno temporaneo al paese d'origine"
            src="/processetti/diagrams/26_originiRitorno_xl.svg"
          ></ion-img>
          <ion-img
            class={`ion-hide-lg-up ${styles.border}`}
            alt="Mappa con le origini dei richiedenti aventi almeno un ritorno temporaneo al paese d'origine"
            src="/processetti/diagrams/26_originiRitorno_sl.svg"
          ></ion-img>
        </ImageWrapper>

        <p>
          Il ritorno al paese d'origine, che avrebbe potuto favorire al
          richiedente l’occasione di contrarre un altro vincolo matrimoniale, fu
          oggetto di una domanda specifica rivolta ai testimoni durante
          l’interrogatorio del processetto. Questi rientri in patria erano
          giustificati dalla necessità di far visita ai parenti, accompagnare i
          propri cari, per motivi di salute, per festeggiamenti o per gestire il
          patrimonio familiare, e molto meno per ragioni professionali. La
          durata, come anche la frequenza, sono indicate in modo approssimativo.
          La prima, ad esempio, può andare da pochi giorni fino a qualche mese.
          Delle 1.120 menzioni di un ritorno in patria, circa la metà si è
          verificata una sola volta dal momento dell’arrivo a Venezia. Coloro
          che sono tornati "molte volte" o "diverse volte" (senza poter
          quantificare la ricorrenza), al contrario sono estremamente rari.
          Quelli tornati 3 o 4 volte sono poco più di uno su dieci. Poiché i
          richiedenti si trasferivano a Venezia mediamente una dozzina di anni
          prima, i ritorni risultano tra loro distanziati di almeno due anni.
          Tutti questi elementi indicano un ritorno limitato per la maggior
          parte dei migranti, anche per quelli provenienti da aree vicine a
          Venezia.{' '}
        </p>
        <p>
          La lontananza non era un fattore favorevole al rientro temporaneo in
          patria, come dimostra il numero esiguo di Fiamminghi, Francesi,
          Iberici e Italiani meridionali per i quali è documentato il viaggio di
          ritorno temporaneo al paese d’origine, suggerendo una migrazione
          definitiva. Le persone provenienti dalla Svizzera, dalla Germania
          meridionale o dagli Stati della pianura padana sembra fossero propensi
          a mantenere più legami con i luoghi natali che si traducevano in un
          maggior numero di viaggi di ritorno al paese d’origine, anche se
          distanziati di anni l’uno dall’altro.
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
        headOgDescription: 'Grafici e tabelle > Mobilità',
        headTitle: 'Grafici e tabelle > Mobilità',
        headOgImage: '/socialimage/processetti.jpg',
      },
    },
  };
};
