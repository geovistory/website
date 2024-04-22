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
        <h1>Relazioni</h1>
        <ImageTitle>
          Tipologia e perduranza delle relazioni tra il richiedente e i suoi testimoni (1592-1604){" "}
        </ImageTitle>
        <br />
        <p>
          <ImageWrapper
            caption={
              "Frequenza dei tipi di interazione sociale tra richiedenti e i loro testimoni"
            }
            imageUrls={[
              "/processetti/diagrams/17_tipoRelazioni_sl.svg",
              "/processetti/diagrams/17_tipoRelazioni_xl.svg",
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
              src="/processetti/diagrams/17_tipoRelazioni_sl.svg"
            ></ion-img>
          </ImageWrapper>
        </p>
        <p>
          <ImageWrapper
            caption={
              "Durata delle relazioni sociali intercorse tra i richiedenti e i loro testimoni"
            }
            imageUrls={[
              "/processetti/diagrams/18_durataRelazioni_sl.svg",
              "/processetti/diagrams/18_durataRelazioni_xl.svg",
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
        </p>

        <p>
          La verifica dello stato libero richiedeva la collaborazione attiva di
          più soggetti: il nubendo stesso, che forniva ai parroci le
          attestazioni ottenute da altre autorità (il certificato di battesimo,
          il certificato di morte, o le fedi di libertà rilasciate da un'altra
          diocesi), e i testimoni, scelti in base alle evidenze da
          presentare alla curia patriarcale. L'autorità ecclesiastica, inoltre,
          non poteva fare a meno dell'aiuto della società tutta, che esercitava,
          più o meno consapevolmente, una forma di vigilanza necessaria a
          stabilire l'identità e lo <i>status</i> degli individui.
        </p>
        <p>
          La scelta dei testimoni rispondeva dunque alle aspettative delle
          autorità, che esigevano di ascoltare racconti attendibili sulla storia
          matrimoniale dei richiedenti. La posizione sociale dei testi poteva
          accrescere la credibilità della loro deposizione, ma ci si aspettava
          in primo luogo che avessero una conoscenza personale delle vicende
          biografiche dello sposo o della sposa. Per questo motivo, quando
          venivano espressamente interrogati sulle circostanze della conoscenza
          con il richiedente, la gran parte di loro asseriva la comune
          provenienza da un medesimo luogo, la possibile parentela, il saldo
          legame amicale, la professione comune, o il vicinato abitativo. Tanto
          più era lunga e continuativa la conoscenza tra i soggetti, tanto più
          credibile doveva apparire agli occhi della Curia la deposizione
          rilasciata.
        </p>
        <p>
          Lo <i>status</i> del testimone non può essere acriticamente assunto come
          riflesso dell'ambiente sociale o del grado di integrazione del
          richiedente a Venezia, poiché il contenuto delle testimonianze
          riguardava principalmente la sua vita passata, e in particolare i
          periodi in cui non aveva dimorato in città. Con il trascorrere del
          tempo dall'arrivo a Venezia, invero, il ricorso a compaesani e parenti cedeva
          il posto al coinvolgimento di compagni di lavoro e vicini di casa, in
          grado di fornire un resoconto più dettagliato degli avvenimenti
          successivi allo stabilirsi in città.
        </p>
        <p>
          A eccezione di coloro che si conoscevano da sempre per via
          dell'origine o della parentela, il rapporto tendeva a risalire a un
          periodo tutto sommato breve (da 4 a 7 anni), fosse esso basato sulla
          vicinanza, sul viaggio in comune, o sul lavoro. In genere tali
          relazioni risultano comunque posteriori alla data di arrivo a Venezia,
          che risaliva in media a dodici anni prima del matrimonio.
        </p>
        <p>
          Nel caso dei processetti per vedovanza, i testimoni venivano scelti
          sia in base alla conoscenza che avevano della persona inquisita, sia
          in virtù della loro capacità di dar conto della morte e della
          sepoltura del precedente coniuge. Le donne, che in genere non venivano
          chiamate a testificare, in questi casi erano prescelte perché ritenute
          maggiormente informate (più o meno direttamente) sui decessi, ma
          soprattutto per la loro prossimità alla vedova. Leggendo le
          dichiarazioni dei testimoni, si scopre peraltro che la morte del primo
          coniuge spesso risaliva a uno o due anni prima dell’istruzione del
          processetto, indicando conseguentemente una propensione alla rapida
          ricerca di seconde nozze.
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
        headOgDescription: "Grafici e tabelle > Relazioni",
        headTitle: "Grafici e tabelle > Relazioni",
        headOgImage: "/socialimage/processetti.jpg",
      },
    },
  };
};
