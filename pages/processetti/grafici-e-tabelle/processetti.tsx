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
        <h1>Processetti</h1>
        <ImageTitle>
          Numero di processetti matrimoniali annotati in Geovistory
        </ImageTitle>
        <p>
          <ImageWrapper
            legend={"Distribuzione dei processetti trattati"}
            imageUrls={[
              "/processetti/diagrams/01_numeroProcessetti_sl.svg",
              "/processetti/diagrams/01_numeroProcessetti_xl.svg",
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
        </p>
        <p>
          Sono stati trattati 4640 processetti, iscritti in un arco temporale
          che si protrae dal 1592 al 1650, assumendo due prassi distinte.
        </p>
        <p>
          Per quanto riguarda il decennio che va dal 1592 al 1604, i processetti
          sono stati trascritti e annotati integralmente. Sebbene sia possibile
          rintracciare processetti antecedenti al 1592, questo primo gruppo
          coincide <i>de facto</i> con l'inizio della serie archivistica (
          <i>Examinum matrimoniorum</i>, b. 1-8). Per colmare l’assenza dei
          documenti risalenti al 1593, sono stati presi in considerazione anche
          i processetti conservati in maniera sparsa nella serie{" "}
          <i>Filciae causarum</i>.
        </p>
        <p>
          Per il periodo successivo, che si estende fino alla metà del XVII
          secolo, è stata analizzata solo una parte dei processetti, rispettando
          tagli decennali (1610, 1620, 1639, 1650) e dedicando una maggiore
          attenzione al periodo a cavallo della peste del 1630. Per gli anni
          1630, 1631, 1632, 1633 è stata infatti effettuata una ricognizione che
          ha portato al trattamento di tutti i processetti (alcuni rinvenuti
          nella serie <i>Diversorum</i>) risalenti ai mesi di febbraio, maggio,
          agosto, novembre. Questo secondo gruppo è stato sottoposto a un
          trattamento più agevole, privo di trascrizione e con la registrazione
          di un set selezionato di informazioni.
        </p>
        <p>
          La scelta di operare un’annotazione parziale e semplificata è stata
          determinata dal fatto che il processo di trascrizione, produzione dei
          dati semantici e annotazione dei singoli processetti richiedesse dei
          tempi molto lunghi. È stato comunque possibile analizzare e
          confrontare i diversi modelli migratori in essere tra la fine del XVI
          secolo e la metà del XVII secolo.
        </p>

        <ImageTitle>Una visione d’insieme dei dati registrati</ImageTitle>
        <p>
          <ImageWrapper
            legend={"Quantificazione per classe delle istanze prodotte"}
            imageUrls={[
              "/processetti/diagrams/03_classDistribution_sl.svg",
              "/processetti/diagrams/03_classDistribution_xl.svg",
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
        </p>
        <p>
          Le cifre che seguono restituiscono la misura dell’entità dei dati
          registrati: 13185 persone (richiedenti, testimoni, altri); 17992
          localizzazioni degli eventi concernenti gli individui (più di una
          riferibile alla stessa persona nei casi in cui si hanno informazioni
          tanto sulla parrocchia di residenza, quanto sul luogo di lavoro, sul
          soggiorno in un luogo, e sull’arrivo a Venezia); 11332 nascite
          (riportanti il dato cronico e quello topico); 9380 relazioni sociali
          qualificate, intercorse tra richiedenti e testimoni; 10114 indicazioni
          di svolgimento di una professione; 2047 resoconti di viaggio o
          spostamento; 1597 entità geografiche ecc.
        </p>
        <ImageTitle>Tipologia dei processetti</ImageTitle>
        <p>
          <ImageWrapper
            legend={"Distribuzione dei processetti secondo il tipo"}
            imageUrls={[
              "/processetti/diagrams/02_distribuzioneTipooProcessetti_sl.svg",
              "/processetti/diagrams/02_distribuzioneTipooProcessetti_xl.svg",
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
        </p>
        <p>
          Si identificano generalmente tre categorie di individui chiamate a
          dimostrare lo stato libero: le persone migranti (forestieri e sudditi
          veneti) che decidevano di sposarsi in città; gli individui che
          trascorrevano lunghi o frequenti periodi di tempo fuori Venezia (ad
          es., marinai, soldati e mercanti); e i vedovi, chiamati a dimostrare
          l’avvenuta morte del coniuge.
        </p>
        <p>
          Tuttavia, l'emergere di casi eccezionali per forma e contenuto ha reso
          necessaria l'introduzione del <i>type</i>
          “Processetto atipico”. In questa categoria sono stati inclusi casi di
          bigamia, concubinato, verifica dell’identità del nubendo o del
          defunto, abbandono del nucleo domestico, indigenza, verifica dei
          natali cattolici, stato libero di veneziani.
        </p>
        <p>
          È stata operata una verifica andando di volta in volta a valutare la
          convergenza o la divergenza della motivazione dichiarata nell'
          <i>incipit</i> latino con quella descritta nelle dichiarazioni dei
          testimoni. Secondo gli studi storici finora condotti sugli{" "}
          <i>Examina</i>, la procedura di accertamento dello stato libero,
          generalizzata a tutta la popolazione originaria di Venezia, si sarebbe
          istituzionalizzata solo a partire dall’inizio del Settecento.
        </p>
        <ImageTitle>Durata del processetto</ImageTitle>
        <Subtitle>(periodo 1592-1604)</Subtitle>
        <p>
          <ImageWrapper
            legend={"Durata dei processetti"}
            imageUrls={[
              "/processetti/diagrams/04_durataProcessetto_sl.svg",
              "/processetti/diagrams/04_durataProcessetto_xl.svg",
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
        </p>
        <p>
          La raccolta delle deposizioni volte a certificare lo stato libero si
          svolgeva in genere nell'arco di una giornata (9 volte su 10).
          L'istruzione del processetto, l'esame dei testimoni, la registrazione
          e il rilascio dell'attestazione (<i>fede</i>) avvenivano
          tendenzialmente in stretta successione. Solo in alcuni casi, la
          raccolta delle deposizioni richiedeva più tempo; anche se spesso
          finiva per concludersi non oltre il giorno successivo all’audizione
          del primo testimone. I processi in cui le testimonianze risultano
          temporalmente distanti tra loro (ad es. con uno scarto di più di due
          settimane) si spiegano con la necessità di ascoltare deponenti che non
          si erano subito resi disponibili (o perchè abitanti in località
          extra-lagunari, o perché assenti dalla città per ragioni
          professionali); altrimenti, con l’esigenza delle autorità di
          approfondire alcuni casi attraverso l’audizione di nuovi testimoni
          (soprattutto a seguito di testimonianze laconiche o ambigue).
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
        headOgDescription: "Grafici e tabelle > Processetti",
        headTitle: "Grafici e tabelle > Processetti",
        headOgImage: "/socialimage/processetti.jpg",
      },
    },
  };
};
