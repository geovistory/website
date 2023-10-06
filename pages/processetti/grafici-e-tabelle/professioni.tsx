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
        <h1>Professioni</h1>
        <ImageTitle>
          Professioni dei richiedenti
          <br />
          Età all’arrivo a Venezia e età al processetto secondo la professione
          (al momento del processetto)
        </ImageTitle>
        <Subtitle>(Periodo 1592-1604)</Subtitle>
        <p>
          <ImageWrapper
            legend={
              "Età media dei richiedenti al processetto e all'arrivo a Venezia, per le prime trenta professioni rappresentate"
            }
            imageUrls={[
              "/processetti/diagrams/11_etaProf_sl.svg",
              "/processetti/diagrams/11_etaProf_xl.svg",
            ]}
          >
            <ion-img
              class={`ion-hide-lg-down ${styles.border}`}
              alt="Grafico con l'età media dei richiedenti al processetto e all'arrivo a Venezia, per le prime trenta professioni rappresentate"
              src="/processetti/diagrams/11_etaProf_xl.svg"
            ></ion-img>
            <ion-img
              class={`ion-hide-lg-up ${styles.border}`}
              alt="Grafico con l'età media dei richiedenti al processetto e all'arrivo a Venezia, per le prime trenta professioni rappresentate"
              src="/processetti/diagrams/11_etaProf_sl.svg"
            ></ion-img>
          </ImageWrapper>
        </p>
        <p>
          L'intero spettro delle professioni esercitate nel contesto urbano
          trova rappresentazione tra le occupazioni dei richiedenti, a
          dimostrazione di quanto Venezia fosse una città le cui attività
          lavorative erano aperte ai forestieri, in particolar modo sullo
          scorcio del XVI secolo, quando l'industria veneziana toccava il
          culmine della sua prosperità. Alcuni mestieri erano predominanti, data
          la vocazione portuale e marittima della città (<i>mariner</i>,{" "}
          <i>fachin</i>), la sua struttura sociale (<i>masser</i>) e il
          dinamismo di alcuni settori, primo fra tutti quello tessile (
          <i>tesser</i>, <i>samiter</i>, <i>tentor</i>, <i>verghezin</i>,{" "}
          <i>laner</i>). La produzione di lana e seta raggiunse l'apice alla
          fine del XVI secolo, richiedendo una grande forza lavoro alimentata
          dai flussi migratori, il che spiega la rapida ripresa della
          popolazione dopo la mortifera peste del 1576.
        </p>
        <p>
          Il dato della professione svolta dai richiedenti al momento del
          processetto rivela due fenomeni correlati. In primo luogo, l'età di
          arrivo a Venezia risulta più avanzata per coloro che svolgevano
          professioni qualificate, liberali e pubbliche, e la mercatura. Il
          secondo fenomeno concerne la più avanzata età al matrimonio di coloro
          che risultano giunti a Venezia in età più tarda, proprio a causa della
          loro professione. I commercianti si sposavano in media attorno ai 31
          anni, i droghieri a 29, i fanti a 28.
        </p>
        <p>
          A eccezione dei pescatori, il cui arrivo (8 anni) e matrimonio (21
          anni) risultano precoci, tra l’approdo in città e il matrimonio
          passavano una dozzina di anni, indipendentemente dalla professione
          svolta dal richiedente.
        </p>
        <ImageTitle>
          Età dei testimoni al processetto e all’arrivo a Venezia
        </ImageTitle>
        <Subtitle>(Periodo 1592-1604)</Subtitle>
        <p>
          <ImageWrapper
            legend={"Età dei testimoni al momento del processetto"}
            imageUrls={[
              "/processetti/diagrams/12_testimoniEtaProcessetto_sl.svg",
              "/processetti/diagrams/12_testimoniEtaProcessetto_xl.svg",
            ]}
          >
            <ion-img
              class={`ion-hide-lg-down ${styles.border}`}
              alt="Grafico con l'età dei testimoni al momento del processetto, distinti per genere"
              src="/processetti/diagrams/12_testimoniEtaProcessetto_xl.svg"
            ></ion-img>
            <ion-img
              class={`ion-hide-lg-up ${styles.border}`}
              alt="Grafico con l'età dei testimoni al momento del processetto, distinti per genere"
              src="/processetti/diagrams/12_testimoniEtaProcessetto_sl.svg"
            ></ion-img>
          </ImageWrapper>
        </p>
        <p>
          <ImageWrapper
            legend={"Età dei testimoni al momento del loro arrivo a Venezia"}
            imageUrls={[
              "/processetti/diagrams/13_testimoniArrivoVenezia_sl.svg",
              "/processetti/diagrams/13_testimoniArrivoVenezia_xl.svg",
            ]}
          >
            <ion-img
              class={`ion-hide-lg-down ${styles.border}`}
              alt="Grafico con l'età dei testimoni al momento del loro arrivo a Venezia, distinti per genere"
              src="/processetti/diagrams/13_testimoniArrivoVenezia_xl.svg"
            ></ion-img>
            <ion-img
              class={`ion-hide-lg-up ${styles.border}`}
              alt="Grafico con l'età dei testimoni al momento del loro arrivo a Venezia, distinti per genere"
              src="/processetti/diagrams/13_testimoniArrivoVenezia_sl.svg"
            ></ion-img>
          </ImageWrapper>
        </p>
        <ImageTitle>Permanenza dei testimoni a Venezia</ImageTitle>{" "}
        <Subtitle>(Periodo 1592-1604)</Subtitle>
        <p>
          <ImageWrapper
            legend={
              "Tempo di permanenza dei testimoni a Venezia, prima del processetto"
            }
            imageUrls={[
              "/processetti/diagrams/14_testimoniPermanenza_sl.svg",
              "/processetti/diagrams/14_testimoniPermanenza_xl.svg",
            ]}
          >
            <ion-img
              class={`ion-hide-lg-down ${styles.border}`}
              alt="Grafico con il tempo di permanenza dei testimoni a Venezia, prima del processetto, distinti per genere"
              src="/processetti/diagrams/14_testimoniPermanenza_xl.svg"
            ></ion-img>
            <ion-img
              class={`ion-hide-lg-up ${styles.border}`}
              alt="Grafico con il tempo di permanenza dei testimoni a Venezia, prima del processetto, distinti per genere"
              src="/processetti/diagrams/14_testimoniPermanenza_sl.svg"
            ></ion-img>
          </ImageWrapper>
        </p>
        <p>
          I testimoni che prendevano parte a un processetto avevano mediamente
          una decina di anni in più rispetto allo sposo, circa 38. Tale
          differenza anagrafica trova ragione nella natura dei rapporti
          intercorsi tra il richiedente e i suoi testimoni, chiamati a fornire
          informazioni non solo sulla sua condizione contingente, ma anche sul
          suo passato. Far testimoniare persone dello stesso paese, o accomunate
          per professione, spesso significava scegliere testimoni della stessa
          generazione o addirittura della stessa fascia d'età. Tuttavia, se la
          differenza di età risulta in media così marcata, è evidente che il
          singolo testimone veniva scelto soprattutto in virtù della credibilità
          attribuibile alla sua parola, che era sì proporzionale al grado di
          conoscenza, ma anche determinata dallo <i>status sociale</i>. Ad
          esempio, la parola del maestro contava di più di quella di un compagno
          di apprendistato. In questo senso, anche l'età avrebbe costituito un
          elemento in grado di conferire maggiore o minore autorevolezza alle
          dichiarazioni.
        </p>
        <p>
          L'età in cui i testimoni forestieri giungevano in città risulta
          tendenzialmente più alta di quella dei richiedenti: una media di 19
          anni rispetto a quella di 14. Questa discrepanza va messa in relazione
          all'età più avanzata in cui alcuni professionisti qualificati si
          trasferivano a Venezia, e tra i quali i testimoni potevano essere
          selezionati in modo preferenziale, sempre che soddisfacessero i
          criteri richiesti. Va detto che l’arrivo più tardivo non sembra aver
          influito sulla durata della loro permanenza a Venezia, che in media si
          attestava attorno ai 17 anni. Il tempo trascorso in città costituiva
          con ogni evidenza un consolidamento del riconoscimento sociale del
          testimone, conferendo così ulteriore credibilità alla deposizione.
        </p>
        <ImageTitle>
          Confronto delle professioni dei richiedenti e dei testimoni
        </ImageTitle>
        <Subtitle>(Periodo 1592-1604)</Subtitle>
        <p>
          <ImageWrapper
            legend={
              "Distribuzione dei richiedenti e dei testimoni entro le prime trenta professioni più rappresentate"
            }
            imageUrls={[
              "/processetti/diagrams/15_occupation_sl.svg",
              "/processetti/diagrams/15_occupation_xl.svg",
            ]}
          >
            <ion-img
              class={`ion-hide-lg-down ${styles.border}`}
              alt="Grafico con la distribuzione dei richiedenti e dei testimoni entro le prime trenta professioni più rappresentate"
              src="/processetti/diagrams/15_occupation_xl.svg"
            ></ion-img>
            <ion-img
              class={`ion-hide-lg-up ${styles.border}`}
              alt="Grafico con la distribuzione dei richiedenti e dei testimoni entro le prime trenta professioni più rappresentate"
              src="/processetti/diagrams/15_occupation_sl.svg"
            ></ion-img>
          </ImageWrapper>
        </p>
        <ImageTitle> Professioni dei testimoni secondo il genere</ImageTitle>
        <Subtitle>(Periodo 1592-1604)</Subtitle>
        <p>
          <ImageWrapper
            legend={
              "Distribuzione professionale tra i testimoni, distinto per genere"
            }
            imageUrls={[
              "/processetti/diagrams/16_professioneGenere_sl.svg",
              "/processetti/diagrams/16_professioneGenere_xl.svg",
            ]}
          >
            <ion-img
              class={`ion-hide-lg-down ${styles.border}`}
              alt="Grafico con la distribuzione professionale tra i testimoni, distinto per genere"
              src="/processetti/diagrams/16_professioneGenere_xl.svg"
            ></ion-img>
            <ion-img
              class={`ion-hide-lg-up ${styles.border}`}
              alt="Grafico con la distribuzione professionale tra i testimoni, distinto per genere"
              src="/processetti/diagrams/16_professioneGenere_sl.svg"
            ></ion-img>
          </ImageWrapper>
        </p>
        <p>
          Un confronto tra i profili professionali dei richiedenti e dei
          testimoni rivela differenze significative, che sembrano riconducibili
          ai criteri di selezione di questi ultimi. Il servizio domestico, ad
          esempio, era una delle occupazioni più comuni tra i nubendi, mentre
          risulta praticato da un numero limitatissimo di testimoni,
          probabilmente a causa della loro intrinseca dipendenza dal datore di
          lavoro, che avrebbe indebolito la credibilità delle loro
          dichiarazioni. I marinai, invece, risultano numerosi tra i
          richiedenti, ma ancora di più tra i testimoni; non solo perché erano,
          insieme ai facchini, i professionisti più richiesti, ma anche perché
          sarebbero stati in grado di fornire notizie su avvenimenti occorsi in
          luoghi remoti, o comunque extra-urbani. I marinai, ad esempio, non
          erano chiamati a testimoniare solo nei processetti volti a provare lo
          stato libero, ma anche in quelli per l’accertamento dello stato
          vedovile, attestando la scomparsa del coniuge durante la navigazione o
          il soggiorno in altro luogo.
        </p>
        <p>
          Quanto ai facchini e ai barcaioli, questi erano certamente di
          condizione sociale modesta, il che discorda con l'idea che il
          testimone dovesse godere di un certo grado di riconoscimento sociale;
          ciò nonostante, avevano il vantaggio di poter contare su ampie e
          ramificate reti di relazioni derivate dai loro continui spostamenti
          entro il tessuto urbano. Dovevano quindi essere molto apprezzati in
          qualità di testimoni grazie alla conoscenza (diretta o indiretta) che
          potevano avere dei richiedenti.
        </p>
        <p>
          La forte presenza di testimoni attivi e operanti nel settore tessile è
          spiegabile sulla base di due distinte circostanze tra loro
          interdipendenti. Da un lato, i testimoni venivano non di rado
          individuati tra sodali che condividevano lo stesso ambito
          professionale, e spesso anche l’origine; dall’altro, sussisteva di
          frequente un vincolo di subalternità tra richiedente e teste, come nel
          caso dei maestri che impiegavano apprendisti e lavoranti.
        </p>
        <p>
          Viceversa, la sovrarappresentazione di mercanti e fanti tra i
          testimoni potrebbe derivare, come si è detto, dal riconoscimento del
          loro status sociale presso la curia patriarcale.
        </p>
        <p>
          Le pochissime donne chiamate a testimoniare, nella maggior parte dei
          casi per conto di altre donne, erano principalmente occupate come
          domestiche.
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
        headOgDescription: "Grafici e tabelle > Professioni",
        headTitle: "Grafici e tabelle > Professioni",
        headOgImage: "/socialimage/processetti.jpg",
      },
    },
  };
};
