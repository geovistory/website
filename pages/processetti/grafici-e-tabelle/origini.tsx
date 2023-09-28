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
        <h1>Origini</h1>
        <ImageTitle>
          Origine geografica dei testimoni e dei richiedenti
        </ImageTitle>
        <Subtitle>(periodo 1592-1604)</Subtitle>
        <ImageWrapper
          legend={'Origine geografiche dei richiedenti e dei testimoni'}
          imageUrls={[
            '/processetti/diagrams/19_origineGeografica_sl.svg',
            '/processetti/diagrams/19_origineGeografica_xl.svg',
          ]}
        >
          <ion-img
            class={`ion-hide-lg-down ${styles.border}`}
            alt="Visualizzazione su mappa dell'origine geografica dei richiedenti e dei testimoni"
            src="/processetti/diagrams/19_origineGeografica_xl.svg"
          ></ion-img>
          <ion-img
            class={`ion-hide-lg-up ${styles.border}`}
            alt="Visualizzazione su mappa dell'origine geografica dei richiedenti e dei testimoni"
            src="/processetti/diagrams/19_origineGeografica_sl.svg"
          ></ion-img>
        </ImageWrapper>
        <ImageWrapper
          legend={
            "Distribuzione percentuale dei richiedenti e dei testimoni per luogo d'origine"
          }
          imageUrls={[
            '/processetti/diagrams/20_origineGeograficaTab_sl.svg',
            '/processetti/diagrams/20_origineGeograficaTab_xl.svg',
          ]}
        >
          <ion-img
            class={`ion-hide-lg-down ${styles.border}`}
            alt="Grafico con la distribuzione percentuale dei richiedenti e dei testimoni per luogo d'origine"
            src="/processetti/diagrams/20_origineGeograficaTab_xl.svg"
          ></ion-img>
          <ion-img
            class={`ion-hide-lg-up ${styles.border}`}
            alt="Grafico con la distribuzione percentuale dei richiedenti e dei testimoni per luogo d'origine"
            src="/processetti/diagrams/20_origineGeograficaTab_sl.svg"
          ></ion-img>
        </ImageWrapper>
        <ImageTitle> Origine nel retroterra veneto</ImageTitle>
        <Subtitle>(periodo 1592-1604)</Subtitle>
        <ImageWrapper
          legend={'Origine dei richiedenti nel retroterra veneto'}
          imageUrls={[
            '/processetti/diagrams/27_originientroterraVeneto_sl.svg',
            '/processetti/diagrams/27_originientroterraVeneto_xl.svg',
          ]}
        >
          <ion-img
            class={`ion-hide-lg-down ${styles.border}`}
            alt="Mappa con le origini dei richiedenti"
            src="/processetti/diagrams/27_originientroterraVeneto_xl.svg"
          ></ion-img>
          <ion-img
            class={`ion-hide-lg-up ${styles.border}`}
            alt="Mappa con le origini dei richiedenti"
            src="/processetti/diagrams/27_originientroterraVeneto_sl.svg"
          ></ion-img>
        </ImageWrapper>
        <p>
          Pur non essendo certo che la mappa delle origini sarebbe esattamente
          la stessa se si conoscessero quelle di tutti gli immigrati che
          transitarono o si stabilirono a Venezia, l'origine geografica dei
          richiedenti (nota per il 90% dei casi) fornisce, tuttavia, un quadro
          abbastanza preciso dei bacini migratori di Venezia alla fine del XVI
          secolo.
        </p>
        <p>
          Colpisce il fatto che la mappa migratoria sia sovrapposta a quella
          politica: i tre quarti dei richiedenti provenivano, infatti, dai
          possedimenti veneziani: il Dogado (7,9%), lo Stato da Mar (0,8%) e
          soprattutto lo Stato da Terra (69,1%). E all'interno della Terra Ferma
          veneziana, il Friuli è il principale bacino migratorio (21,3%),
          seguito dal Territorio di Bergamo (12,9%).{' '}
        </p>
        <p>
          Venezia aveva quindi una particolare capacità di attrarre persone
          provenienti dall'interno dei suoi confini politici, e in particolare
          nel suo hinterland continentale, dove le regioni montane
          rappresentavano i maggiori fornitori di manodopera.{' '}
        </p>
        <p>
          Si tratta di una geografia di lungo corso, sostenuta dalle condizioni
          economiche delle aree montane di provenienza, dall'esistenza di canali
          migratori consolidati e dell'attrattività della città dominante,
          soprattutto per contesti geograficamente prossimi alla Repubblica,
          come il Ducato di Milano (3,25%), i Grigioni (3,3%), il Trentino e
          l’Emilia Romagna.{' '}
        </p>
        <p>
          È inoltre significativo notare che, sebbene l'Italia (14%) costituisca
          la principale area di provenienza, l'attrattività di Venezia rimaneva
          considerevole anche su scala europea, sebbene queste migrazioni di più
          ampio raggio e impegno riguardavano solo una minoranza di individui,
          provenienti per lo più da specifiche aree. Le città della Germania
          meridionale con legami commerciali di lunga data con Venezia hanno
          continuato, nel corso del XVII secolo, a inviare mercanti, fornai e
          operai metallurgici. Non di meno alcuni francesi, fiamminghi e
          spagnoli si stabilirono a Venezia, prendendo successivamente moglie.
        </p>
        <p>
          Poiché la condivisione della stessa origine era sovente uno dei
          criteri per la loro scelta, non sorprende che le origini dei testimoni
          ricalchino più o meno esattamente la medesima geografia. Ciò dimostra
          che gli immigrati che si sposavano a Venezia costituivano la parte più
          visibile di gruppi più estesi e articolati.
        </p>
        <ImageTitle>
          {' '}
          Età media all’arrivo a Venezia e al processetto secondo l’origine /
          Origine geografica dei richiedenti secondo il genere{' '}
        </ImageTitle>
        <Subtitle>(periodo 1592-1604)</Subtitle>
        <ImageWrapper
          legend={
            'Età media dei richiedenti all’arrivo a Venezia e al processetto secondo l’origine e prime trenta origine geografica dei richiedenti secondo il genere'
          }
          imageUrls={[
            '/processetti/diagrams/21_etaMediaOrigineRichiedentigenere_sl.svg',
            '/processetti/diagrams/21_etaMediaOrigineRichiedentigenere_xl.svg',
          ]}
        >
          <ion-img
            class={`ion-hide-lg-down ${styles.border}`}
            alt="Grafico con l'età media dei richiedenti all’arrivo a Venezia e al processetto secondo l’origine e prime trenta origine geografica dei richiedenti secondo il genere"
            src="/processetti/diagrams/21_etaMediaOrigineRichiedentigenere_xl.svg"
          ></ion-img>
          <ion-img
            class={`ion-hide-lg-up ${styles.border}`}
            alt="Grafico con l'età media dei richiedenti all’arrivo a Venezia e al processetto secondo l’origine e prime trenta origine geografica dei richiedenti secondo il genere"
            src="/processetti/diagrams/21_etaMediaOrigineRichiedentigenere_sl.svg"
          ></ion-img>
        </ImageWrapper>
        <p>
          Il Friuli, che costituiva il principale bacino migratorio di Venezia,
          era anche l'area che forniva il maggior numero di donne immigrate che
          si sposarono a Venezia. Seguono le aree più vicine a Venezia (Treviso,
          Padova), confermando l'idea che la migrazione femminile per il lavoro
          domestico assumesse principalmente le forme di una migrazione locale.
        </p>
        <p>
          Il dati relativi all'età dei richiedenti, tanto quella posseduta
          all’arrivo a Venezia quanto quella al momento del processetto,
          evidenziano una certa dipendenza con il luogo di origine del futuro
          sposo. Più lontano era il luogo d'origine, più matura era l'età di
          arrivo a Venezia. Il fenomeno è comprensibile, d’un lato, considerando
          che l’apprendistato (tra i principali motori dei flussi migratori)
          avveniva per lo più si brevi e medie distanze, seguendo i principali
          canali migratori e, dall’altra, tenendo conto che l'immigrazione da
          luoghi più lontani era spesso più qualificata e coinvolge individui di
          età più avanzata.Ad esempio, i promessi sposi provenienti dalla
          Germania e dal Regno di Napoli tendevano ad arrivare a Venezia intorno
          ai 19 anni, mentre i promessi sposi francesi erano soliti giungere
          attorno ai 22 anni, mentre l'età media di arrivo era di circa 13-14
          anni.
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
        headOgDescription: 'Grafici e tabelle > Origini',
        headTitle: 'Grafici e tabelle > Origini',
        headOgImage: '/socialimage/processetti.jpg',
      },
    },
  };
};
