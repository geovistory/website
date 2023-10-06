/* eslint-disable react/no-unescaped-entities */
import type { GetStaticProps, NextPage } from "next";
import ImageWrapper from "../../../components/elements/ImageWrapper.component";
import { GraficiTabelleProps } from "../../../components/project-specific/GraficiTabelleProps";
import { ImageTitle } from "../../../components/project-specific/ImageTitle.component";
import { ProcessettiGraficiLayout } from "../../../components/project-specific/ProcessettiGraficiLayout.component";
import { graficiTabelleLinks } from "../../../components/project-specific/ProcessettiNavbar.component";
import { Subtitle } from "../../../components/project-specific/Subtitle.component";
import styles from "./grafici.module.css";

const P: NextPage<GraficiTabelleProps> = (props) => {
  return (
    <ProcessettiGraficiLayout head={props.head} links={graficiTabelleLinks}>
      <ion-grid fixed>
        <h1>Soggetti</h1>

        <ImageTitle>Statuto dei soggetti e distribuzione per genere</ImageTitle>
        <Subtitle>(periodo 1592-1605)</Subtitle>
        <p>
          <ImageWrapper
            legend={"Statuto dei soggetti e distribuzione di genere"}
            imageUrls={[
              "/processetti/diagrams/05_statudoPerson_sl.svg",
              "/processetti/diagrams/05_statudoPerson_xl.svg",
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
        </p>
        <p>
          Gli attori intorno ai quali si articola un processetto si dividono in
          tre categorie: richiedenti, testimoni e persone decedute, delle quali
          il processetto mira a comprovare la morte. I testimoni risultano il
          doppio dei richiedenti poiché le norme procedurali prevedevano la
          presenza di almeno due persone chiamate a deporre.
        </p>
        <p>
          La distribuzione di genere rispetto a ognuna di queste categorie
          assume dimensioni proporzionalmente diverse, ma il numero delle donne
          risulta in tutti i casi inferiore a quello degli uomini. Le donne
          venivano chiamate di rado come testimoni (4%) poiché la loro parola
          godeva di un peso minore presso il tribunale rispetto a quella
          maschile. Si presuppone quindi che venissero convocate per lo più in
          assenza di testimoni uomini ritenuti più credibili. Le donne compaiono
          come richiedenti in poco più di un quarto dei processi, soprattutto
          per certificare lo stato vedovile (71% dei casi) e in misura
          proporzionalmente minore per accertare lo stato libero. Di fatto la
          stragrande maggioranza dei forestieri che si univa in matrimonio a
          Venezia, e di cui si ha il processetto, era rappresentata da uomini.
          Se da un lato questo aspetto si potrebbe spiegare tenendo conto che la
          maggior parte dei forestieri era di sesso maschile, dall’altro non si
          può ignorare che le giovani donne immigrate a Venezia spesso tornavano
          in patria per sposarsi. Infine, il fatto che i due terzi dei defunti
          menzionati siano uomini potrebbe essere imputabile alla più breve
          aspettativa di vita dei mariti rispetto a quella delle mogli, ma anche
          alla maggior frequenza con cui alle donne veniva richiesto di
          dimostrare la morte del primo marito, soprattutto se avvenuta altrove.
        </p>
        <p>
          La presenza femminile sembra essere più incisiva nei processetti
          aventi motivazioni plurime o atipiche, ovvero in quei casi in cui la
          dimensione migratoria costituisce una ragione secondaria o combinata
          alle altre. La bassa percentuale di donne veneziane che compaiono
          davanti alla curia patriarcale a causa di una loro assenza prolungata
          da Venezia potrebbe rappresentare un indizio della scarsa emigrazione
          femminile dalla città, oppure semplicemente significare che questo
          tipo di mobilità sfugge alla fonte. Tali aspetti, infatti, andranno
          ulteriormente approfonditi intersecando i processetti con altre
          tipologie di documentazione e valutando alcuni casi di studio.
        </p>
        <ImageTitle>Età dei richiedenti al processetto</ImageTitle>
        <Subtitle>(Periodo 1592-1604)</Subtitle>
        <p>
          <ImageWrapper
            legend={"Età dei richiedenti al momento del processetto"}
            imageUrls={[
              "/processetti/diagrams/07_etàProcessettoRichiedenti_sl.svg",
              "/processetti/diagrams/07_etàProcessettoRichiedenti_xl.svg",
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
        </p>
        <p>
          L'età dei richiedenti e dei testimoni è una delle informazioni più
          interessanti contenute nei processetti. Con sensibili discrepanze da
          un testimone all'altro, l’età è spesso riferita in modo
          approssimativo, senza che venga fornito l’anno esatto della nascita.
          Tale circostanza va tenuta in considerazione osservando i picchi
          raggiunti dalle età riferite a cifra tonda (20, 30, etc).
        </p>
        <p>
          In assenza di indicazioni sull'età degli sposi all’interno dei
          registri matrimoniali, e di studi sistematici di ricostruzione
          familiare, le informazioni a nostra disposizione su questo aspetto
          (perlomeno per quanto attiene al contesto veneziano) risultano
          scarsissime. I processetti ci permettono di rintracciare gli anni di
          due categorie di persone: i forestieri e i vedovi. L'età media è di 36
          anni per i vedovi e 26 per i forestieri, indipendentemente dal sesso.
          Non tenendo conto della popolazione autoctona, il dato anagrafico non
          permette di calcolare l'età media al matrimonio a Venezia; ciò
          nonostante appare coerente con i dati esistenti per altre città. L’età
          apparentemente tardiva è comprensibile rammentando che essa è legata
          anche alle condizioni di insediamento professionale. L'età al
          matrimonio, leggermente più bassa nei veneziani di sesso maschile che
          per diverse ragioni si trovarono a compiere uno spostamento temporaneo
          fuori Venezia, sembra suggerire che l'età al matrimonio dei nativi
          fosse un po’ più bassa di quella dei forestieri.
        </p>
        <ImageTitle>Età dei richiedenti all’arrivo a Venezia</ImageTitle>
        <Subtitle>(Periodo 1592-1604)</Subtitle>
        <p>
          <ImageWrapper
            legend={"Età dei richiedenti al momento del loro arrivo a Venezia"}
            imageUrls={[
              "/processetti/diagrams/08_etàArrivoRichiedenti_sl.svg",
              "/processetti/diagrams/08_etàArrivoRichiedenti_xl.svg",
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
        </p>
        <ImageTitle>
          Rapporto tra l’età all’arrivo a Venezia e l’età al processetto
        </ImageTitle>
        <Subtitle>(Periodo 1592-1604)</Subtitle>
        <p>
          <ImageWrapper
            legend={
              "Distribuzione dei richiedenti per età al momento del processetto e dell'arrivo a Venezia"
            }
            imageUrls={[
              "/processetti/diagrams/09_arrivoProcessettoRichiedenti_sl.svg",
              "/processetti/diagrams/09_arrivoProcessettoRichiedenti_xl.svg",
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
        </p>
        <p>
          I processetti forniscono informazioni anche sull'età dei soggetti al
          momento del loro arrivo a Venezia. I forestieri, qualsiasi fosse il
          genere, arrivavano in città tendenzialmente attorno ai 14-15 anni, in
          coincidenza con l’inizio di un periodo di apprendistato presso un
          artigiano, oppure, nel caso delle giovani donne, del lavoro domestico.
          La fonte permette di comprendere meglio anche la mobilità verso
          Venezia in età più avanzata. Le vedove e i vedovi che si risposavano a
          Venezia, sebbene nati altrove, tendevano a giungere in città a un’età
          più avanzata, intorno ai 24-25 anni.
        </p>
        <p>
          Incrociando l'età di arrivo a Venezia con l'età del processetto è
          possibile notare una convergenza tra arrivo in età infantile e
          matrimonio in età “precoce”. Chi giungeva in città intorno ai 13 anni,
          ad esempio, tendeva a sposarsi verso i 22.
        </p>
        <ImageTitle>Permanenza dei richiedenti a Venezia</ImageTitle>
        <Subtitle>(Periodo 1592-1604)</Subtitle>
        <p>
          <ImageWrapper
            legend={
              "Tempo di permanenza dei richiedenti a Venezia, prima del processetto"
            }
            imageUrls={[
              "/processetti/diagrams/10_permanenzaRichiedenti_sl.svg",
              "/processetti/diagrams/10_permanenzaRichiedenti_xl.svg",
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
        </p>
        <p>
          Dall'età di arrivo in città e da quella del matrimonio possiamo
          dedurre un terzo dato: ovvero il tempo trascorso tra l’unione
          matrimoniale e l'insediamento a Venezia. I forestieri impiegavano in
          media 11-12 anni prima di convolare a nozze. Anche se gli arrivi
          precoci comportano matrimoni a un'età inferiore, la media è per lo più
          determinata dalla notevole frequenza di spostamenti verso Venezia in
          età adolescenziale e dalla parallela necessità di un certo grado di
          stabilità professionale prima del matrimonio. Ciò nonostante, arrivare
          in età più avanzata non significava sposarsi più rapidamente.
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
