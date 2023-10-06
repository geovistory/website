/* eslint-disable react/no-unescaped-entities */
import type { GetStaticProps, NextPage } from "next";
import { GraficiTabelleProps } from "../../../components/project-specific/GraficiTabelleProps";
import { ProcessettiGraficiLayout } from "../../../components/project-specific/ProcessettiGraficiLayout.component";
import { metodologiaLinks } from "../../../components/project-specific/ProcessettiNavbar.component";
import ImageWrapper from "../../../components/elements/ImageWrapper.component";
import Image from "next/image";
import img1 from "../../../public/processetti/metodologia/text_annotation.png";

const P: NextPage<GraficiTabelleProps> = (props) => {
  return (
    <ProcessettiGraficiLayout head={props.head} links={metodologiaLinks}>
      <ion-grid fixed>
        <h1>Tag per la sola annotazione del testo</h1>

        <p>
          Se l’annotazione semantica delle trascrizioni - il tagging del testo
          in XML, secondo le linee guida fornite dalla{" "}
          <i>Text Encoding Initiative</i>
          (TEI) - è intesa, sulla base delle esperienze e infrastrutture già
          elaborata nell’ambito del progetto symogih.org (<a href="index.tsx#2016">Beretta, 2016</a>), a
          ristabilire il nesso tra i dati strutturati e le porzioni di testo che
          li hanno motivati, esiste tuttavia un gruppo di marcatori svincolati
          dalla diretta referenziazione di dati semanticamente definiti e
          unicamente finalizzati alla annotazione del testo.
        </p>
        <p>
          <ImageWrapper
            legend={
              "Riproduzione e annotazione semantica della fonte in Geovistory"
            }
            imageUrls={["/processetti/metodologia/text_annotation.png"]}
            dialogChildren={
              <Image
                src={img1}
                alt="Esemplificazione dell'annotazione semantica del testo in Geovistory"
              />
            }
          >
            <Image
              src={img1}
              placeholder="blur"
              width={608}
              height={280}
              objectFit={"scale-down"}
              alt="Esemplificazione dell'annotazione semantica del testo in Geovistory"
            />
          </ImageWrapper>
        </p>
        <p>
          Per far fronte alle difficoltà di decifrazione dei testi antichi
          manoscritti sono state definite alcune specifiche strategie. Tra
          queste la più significativa è l'adozione di tag per la sola
          annotazione delle <i>digital reproduction</i>. Essi annoverano ad esempio
          “Nome o cognome incerto”, “Toponimo ambiguo” e “Professione incerta” e
          si sovrappongono nel testo alle annotazioni semantiche di entità
          definite. In tal modo ne è esplicitata la natura provvisoria e ne
          viene assicurato il facile reperimento nel tempo, così da agevolare la
          <i>data curation</i>, intesa come l’arricchimento e il miglioramento
          progressivo dei dati di ricerca al fine di garantirne la qualità,
          l’accessibilità e la conservazione (così come intesa nei principi
          FAIR).
        </p>
        <p>
          Altri marcatori quali, ad esempio, “Dal contagio”, “Presenza
          di/riferimento ad altra documentazione scritta (attestazioni,
          certificazioni e fedi)”, “Elementi indicativi dello stato vedovile” e
          “Elementi descrittivi dell’aspetto fisico e morale” sono stati
          espressamente concepiti per dare seguito a processi di <i>qualitative
          data analysis</i>.
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
        headOgDescription:
          "Metodologia > Tag per la sola annotazione del testo",
        headTitle: "Metodologia > Tags",
        headOgImage: "/socialimage/processetti.jpg",
      },
    },
  };
};
