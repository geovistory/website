/* eslint-disable react/no-unescaped-entities */
import type { GetStaticProps, NextPage } from 'next';
import React from 'react';
import { ProcessettiGraficiLayout } from '../../../components/project-specific/ProcessettiGraficiLayout.component';
import { GraficiTabelleProps } from '../../../components/project-specific/GraficiTabelleProps';
import styles from './grafici.module.css';
import { ImageTitle } from '../../../components/project-specific/ImageTitle.component';
import { Subtitle } from '../../../components/project-specific/Subtitle.component';
import ImageWrapper from '../../../components/elements/ImageWrapper.component';

const P: NextPage<GraficiTabelleProps> = (props) => {
  return (
    <ProcessettiGraficiLayout head={props.head}>
      <ion-grid fixed>
        <h1>Relazioni</h1>
        <ImageTitle>
          Tipologia delle relazioni tra il richiedente e i suoi testimoni{' '}
        </ImageTitle>
        <Subtitle>(periodo 1592-1604)</Subtitle>
        <ImageWrapper
          legend={
            'Frequenza dei tipi di interazione sociale tra richiedenti e i loro testimoni'
          }
          imageUrls={[
            '/processetti/diagrams/17_tipoRelazioni_sl.svg.svg',
            '/processetti/diagrams/17_tipoRelazioni_xl.svg',
          ]}
        >
          <ion-img
            class={`ion-hide-lg-down ${styles.border}`}
            alt="Grafico con la frequenza dei tipi di interazione sociale tra richiedenti e i loro testimoni"
            src="/processetti/diagrams/17_tipoRelazioni_xl.svg"
          ></ion-img>
          <ion-img
            class={`ion-hide-lg-up ${styles.border}`}
            alt="Grafico con la frequenza dei tipi di interazione sociale tra richiedenti e i loro testimoni"
            src="/processetti/diagrams/17_tipoRelazioni_sl.svg.svg"
          ></ion-img>
        </ImageWrapper>

        <ImageTitle>
          Durata della relazione tra il richiedente e i suoi testimoni
        </ImageTitle>
        <Subtitle>(periodo 1592-1604)</Subtitle>

        <ImageWrapper
          legend={
            'Durata delle relazioni sociali intercorse tra i richiedenti e i loro testimoni'
          }
          imageUrls={[
            '/processetti/diagrams/18_durataRelazioni_sl.svg',
            '/processetti/diagrams/18_durataRelazioni_xl.svg',
          ]}
        >
          <ion-img
            class={`ion-hide-lg-down ${styles.border}`}
            alt="Grafico con la durata delle relazioni sociali intercorse tra i richiedenti e i loro testimoni"
            src="/processetti/diagrams/18_durataRelazioni_xl.svg"
          ></ion-img>
          <ion-img
            class={`ion-hide-lg-up ${styles.border}`}
            alt="Grafico con la durata delle relazioni sociali intercorse tra i richiedenti e i loro testimoni"
            src="/processetti/diagrams/18_durataRelazioni_sl.svg"
          ></ion-img>
        </ImageWrapper>

        <p>
          La verifica dello stato libero richiedeva la collaborazione attiva di
          più soggetti: il nubendo stesso, che poteva fornire ai parroci le
          attestazioni di fede ottenute da altre autorità (certificato di
          battesimo, certificato di morte, fedi di libertà rilasciati da
          un'altra diocesi) e i testimoni che egli sceglieva in base alle prove
          che dovevano fornire davanti alla curia patriarcale. L'autorità
          ecclesiastica non poteva fare a meno dell'aiuto della società, che
          esercitava, più o meno consapevolmente, una forma di sorveglianza
          necessaria per stabilire l'identità e lo status degli individui. La
          scelta dei testimoni rispondeva dunque alle aspettative delle
          autorità, che esigevano di ascoltare racconti attendibili sulla storia
          matrimoniale dei richiedenti. La loro posizione sociale aumentava la
          credibilità della loro deposizione, ma ci si aspettava soprattutto che
          avessero una conoscenza personale delle vicende biografiche dello
          sposo. Per questo motivo, quando venivano espressamente interrogati
          sulle circostanze della conoscenza col richiedente, la gran parte
          asserivano la comune provenienza da un medesimo luogo, la possibile
          parentela o il saldo legame amicale, la professione comune o il
          vicinato abitativo. Tanto più era lunga e continuativa la conoscenza
          tra i soggetti, tanto più credibile doveva apparire agli occhi della
          Curia la deposizione rilasciata.{' '}
        </p>
        <p>
          Lo status del testimone non può, e non deve essere assunto come
          riflesso dell'ambiente sociale o del grado di integrazione del
          richiedente a Venezia, poiché venivano tendenzialmente chiamati a
          testimoniare sulla sua vita passata, in particolare sui periodi in cui
          non avevano dimorato in città. Con l’accrescersi del tempo trascorso
          dall'arrivo a Venezia, il ricorso a compaesani e parenti cede il posto
          a compagni di lavoro e vicini di casa, in grado di fornire un
          resoconto più dettagliato degli avvenimenti successivi al loro
          stabilirsi in città.
        </p>
        <p>
          Ad eccezione di coloro che si conoscono da sempre per via dell'origine
          o della parentela, il rapporto tendeva a risalire ad un periodo tutto
          sommato breve (da 4 a 7 anni), fosse esso basato sulla vicinanza, sul
          viaggio in comune o sul lavoro. Tali relazioni risultano
          tendenzialmente comunque posteriori alla data d’arrivo a Venezia, che
          risale in media a dodici anni prima del matrimonio
        </p>
        <p>
          Nel caso dei processetti per vedovanza, i testimoni venivano scelti
          sia in base alla loro conoscenza delle condizioni della persona
          inquisita, sia in virtù della loro capacità di dar conto della morte e
          della sepoltura del precedente coniuge. Le donne, chiamate a
          testificare molto raramente, erano spesso prescelte perché,
          direttamente o indirettamente, a conoscenza della morte del defunto,
          ma soprattutto in funzione della loro prossimità alla vedova. Leggendo
          le dichiarazioni dei testimoni, si scopre peraltro che il decesso del
          primo coniuge sovente risaliva a uno o due anni prima dell’istruzione
          del processetto, indicando conseguentemente una propensione alla
          rapida ricerca di seconde nozze.
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
        headOgDescription: 'Grafici e tabelle > Relazioni',
        headTitle: 'Grafici e tabelle > Relazioni',
        headOgImage: '/socialimage/processetti.jpg',
      },
    },
  };
};
