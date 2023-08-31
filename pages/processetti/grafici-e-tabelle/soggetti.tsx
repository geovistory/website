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
        <h1>Soggetti</h1>

        <ImageTitle>Statuto dei soggetti e distribuzione per genere</ImageTitle>
        <Subtitle>(periodo 1592-1605)</Subtitle>
        <ImageWrapper
          legend={'Statuto dei soggetti e distribuzione di genere'}
          imageUrls={[
            '/processetti/diagrams/05_statudoPerson_sl.svg',
            '/processetti/diagrams/05_statudoPerson_xl.svg',
          ]}
        >
          <ion-img
            class={`ion-hide-lg-down ${styles.border}`}
            alt="Grafico con la distribuzione dei soggetti per ruolo e distribuzione di genere"
            src="/processetti/diagrams/05_statudoPerson_xl.svg"
          ></ion-img>
          <ion-img
            class={`ion-hide-lg-up ${styles.border}`}
            alt="Grafico con la distribuzione dei soggetti per ruolo e distribuzione di genere"
            src="/processetti/diagrams/05_statudoPerson_sl.svg"
          ></ion-img>
        </ImageWrapper>
        <p>
          Le persone attorno alle quali si articola un processetto si dividono
          in tre categorie: richiedenti, testimoni (il doppio dei richiedenti a
          causa delle norme procedurali che richiedono la presenza di almeno due
          testimoni) e persone decedute, per le quali il processetto mira a
          comprovarne la morte. La distribuzione di genere in ognuna di queste
          categorie assume dimensioni proporzionalmente diverse, ma le donne
          risultano ovunque numericamente minoritarie. Raramente venivano
          presentate come testimoni (4%), poiché la loro parola godeva di un
          peso minore presso il tribunale rispetto a quella degli uomini.
          Venivano quindi per lo più convocate in assenza di testimoni uomini
          credibili. Compaiono come richiedenti in un quarto dei processi,
          soprattutto per certificare lo stato vedovile (30% dei casi) e in
          misura proporzionalmente minore per accertare lo stato libero. La
          stragrande maggioranza degli immigrati che si univa in matrimonio a
          Venezia erano uomini, il che, se d’un lato si spiega tenendo conto che
          la maggioranza degli immigrati era di sesso maschile, dall’altro non
          si può ignorare il fatto che le ragazze che immigrano a Venezia più
          spesso tornavano in patria per sposarsi. Infine, il fatto che i due
          terzi dei defunti menzionati siano uomini è da imputare alla più breve
          aspettativa di vita dei mariti rispetto alle mogli, ma anche al fatto
          che alle mogli era più sovente richiesto di dimostrare la morte del
          primo marito, quando quella non era ritenuta di pubblica fama.
        </p>
        <p>
          La presenza femminile non risulta trascurabile nei processetti aventi
          motivazioni plurime o atipiche, ovvero in quei processetti in cui la
          dimensione migratoria costituisce una ragione secondaria o combinata
          con altre. La bassa percentuale di donne veneziane che compaiono
          davanti alla curia patriarcale a causa di una loro assenza prolungata
          da Venezia è la prova della quasi assenza di emigrazione femminile
          nella città, la quale risulta viceversa caratterizzata da un’alta
          immigrazione maschile. Le donne non solo avevano poche ragioni per
          andarsene (soprattutto di natura professionale), ma la loro
          cittadinanza veneziana doveva rappresentare una risorsa sul mercato
          matrimoniale, se non altro per i futuri sposi forestieri.
        </p>
        <ImageTitle>Età dei richiedenti al processetto</ImageTitle>
        <Subtitle>(Periodo 1592-1604)</Subtitle>
        <ImageWrapper
          legend={'Età dei richiedenti al momento del processetto'}
          imageUrls={[
            '/processetti/diagrams/07_etàProcessettoRichiedenti_sl.svg',
            '/processetti/diagrams/07_etàProcessettoRichiedenti_xl.svg',
          ]}
        >
          <ion-img
            class={`ion-hide-lg-down ${styles.border}`}
            alt="Grafico con l'età dei richiedenti al momento del processetto, distinti per genere"
            src="/processetti/diagrams/07_etàProcessettoRichiedenti_xl.svg"
          ></ion-img>
          <ion-img
            class={`ion-hide-lg-up ${styles.border}`}
            alt="Grafico con l'età dei richiedenti al momento del processetto, distinti per genere"
            src="/processetti/diagrams/07_etàProcessettoRichiedenti_sl.svg"
          ></ion-img>
        </ImageWrapper>
        <p>
          L'età dei richiedenti e dei testimoni è una delle informazioni tra le
          più interessanti contenute nei processetti. A volte, con sensibili
          discrepanze da un testimone all'altro, l’età è riferita spesso in modo
          approssimativo, mai fornendo l’esatto anno di nascita. Tale
          circostanza va tenuta in debito conto osservando i picchi raggiunti
          dalle età riferite a cifra tonda (20, 30, etc). In assenza di
          informazioni sull'età entro i registri matrimoniali e di studi
          sistematici di ricostruzione familiare, le informazioni sull'età al
          matrimonio (perlomeno per quanto attiene al contesto veneziano) a
          nostra disposizione risultano scarsissime. I processetti ci permettono
          di specificare l'età di due categorie: gli immigrati e i vedovi. L'età
          media è di 36 anni per i vedovi e 26 per gli immigrati,
          indipendentemente dal sesso. Non tenendo per lo più conto della
          popolazione autoctona il dato anagrafico non permette di calcolare
          l'età media al matrimonio a Venezia, ciò nonostante appare coerente
          con i dati esistenti per altre città. L’età apparentemente tardiva è
          comprensibile rammentando che essa è parallelamente legata alle
          condizioni di insediamento professionale. L'età al matrimonio
          leggermente più bassa dei veneziani di sesso maschile che per diverse
          ragioni si trovarono a compiere uno spostamento temporaneo fuori
          Venezia sembra suggerire che l'età al matrimonio dei nativi fosse
          leggermente più bassa di quella dei forestieri.
        </p>
        <ImageTitle>Età dei richiedenti all’arrivo a Venezia</ImageTitle>
        <Subtitle>(Periodo 1592-1604)</Subtitle>

        <ImageWrapper
          legend={'Età dei richiedenti al momento del loro arrivo a Venezia'}
          imageUrls={[
            '/processetti/diagrams/08_etàArrivoRichiedenti_sl.svg',
            '/processetti/diagrams/08_etàArrivoRichiedenti_xl.svg',
          ]}
        >
          <ion-img
            class={`ion-hide-lg-down ${styles.border}`}
            alt="Grafico con l'età dei richiedenti al momento del loro arrivo a Venezia, distinti per genere"
            src="/processetti/diagrams/08_etàArrivoRichiedenti_xl.svg"
          ></ion-img>
          <ion-img
            class={`ion-hide-lg-up ${styles.border}`}
            alt="Grafico con l'età dei richiedenti al momento del loro arrivo a Venezia, distinti per genere"
            src="/processetti/diagrams/08_etàArrivoRichiedenti_sl.svg"
          ></ion-img>
        </ImageWrapper>
        <ImageTitle>
          Rapporto tra l’età all’arrivo a Venezia e l’età al processetto
        </ImageTitle>
        <Subtitle>(Periodo 1592-1604)</Subtitle>
        <ImageWrapper
          legend={
            "Distribuzione dei richiedenti per età al momento del processetto e dell'arrivo a Venezia"
          }
          imageUrls={[
            '/processetti/diagrams/09_arrivoProcessettoRichiedenti_sl.svg',
            '/processetti/diagrams/09_arrivoProcessettoRichiedenti_xl.svg',
          ]}
        >
          <ion-img
            class={`ion-hide-lg-down ${styles.border}`}
            alt="Grafico con la distribuzione dei richiedenti per età al momento del processetto e dell'arrivo a Venezia"
            src="/processetti/diagrams/09_arrivoProcessettoRichiedenti_xl.svg"
          ></ion-img>
          <ion-img
            class={`ion-hide-lg-up ${styles.border}`}
            alt="Grafico con la distribuzione dei richiedenti per età al momento del processetto e dell'arrivo a Venezia"
            src="/processetti/diagrams/09_arrivoProcessettoRichiedenti_sl.svg"
          ></ion-img>
        </ImageWrapper>
        <p>
          Oltre all'età del matrimonio, i processetti forniscono informazioni
          sull'età dei soggetti al momento del loro arrivo a Venezia. I
          forestieri, qualsiasi il genere, arrivavano in città tendenzialmente
          attorno ai 14-15 anni, in coincidenza con l’inizio di un apprendistato
          presso un artigiano o, nel caso delle ragazze, nell’ambito del lavoro
          domestico. La fonte permette di comprendere meglio anche la mobilità
          verso Venezia in età più avanzata. Le vedove e i vedovi che si
          risposavano a Venezia, sebbene nati altrove, tendevano a giungere in
          città a un’età più avanzata, intorno ai 24-25 anni.
        </p>
        <p>
          Incrociando l'età di arrivo a Venezia con l'età del processetto è
          possibile notare una convergenza tra arrivo in età infantile e
          matrimonio in età precoce. Chi giungeva attorno ai 13 anni tendeva a
          sposarsi attorno ai 22 anni.
        </p>
        <ImageTitle>Permanenza dei richiedenti a Venezia</ImageTitle>
        <Subtitle>(Periodo 1592-1604)</Subtitle>
        <ImageWrapper
          legend={
            'Tempo di permanenza dei richiedenti a Venezia, prima del processetto'
          }
          imageUrls={[
            '/processetti/diagrams/10_permanenzaRichiedenti_sl.svg',
            '/processetti/diagrams/10_permanenzaRichiedenti_xl.svg',
          ]}
        >
          <ion-img
            class={`ion-hide-lg-down ${styles.border}`}
            alt="Grafico con il tempo di permanenza dei richiedenti a Venezia, prima del processetto, distinti per genere"
            src="/processetti/diagrams/10_permanenzaRichiedenti_xl.svg"
          ></ion-img>
          <ion-img
            class={`ion-hide-lg-up ${styles.border}`}
            alt="Grafico con il tempo di permanenza dei richiedenti a Venezia, prima del processetto, distinti per genere"
            src="/processetti/diagrams/10_permanenzaRichiedenti_sl.svg"
          ></ion-img>
        </ImageWrapper>
        <p>
          Dall'età di arrivo e di quella al momento del matrimonio, possiamo
          dedurre un terzo dato: il tempo trascorso tra il matrimonio e
          l'insediamento in città. I forestieri impiegavano in media 11-12 anni
          prima di convolare a nozze. Anche se gli arrivi precoci comportano
          matrimoni a un'età inferiore, la media è per lo più determinata dalla
          notevole frequenza di spostamenti verso Venezia in età adolescenziale
          e dalla parallela necessità di un certo grado di stabilità
          professionale prima del matrimonio. Ciò nonostante, arrivare in età
          più avanzata non significava sposarsi più rapidamente.
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
