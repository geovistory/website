/* eslint-disable react/no-unescaped-entities */
import type { GetStaticProps, NextPage } from "next";
import { GraficiTabelleProps } from "../../../components/project-specific/GraficiTabelleProps";
import { ProcessettiGraficiLayout } from "../../../components/project-specific/ProcessettiGraficiLayout.component";
import { metodologiaLinks } from "../../../components/project-specific/ProcessettiNavbar.component";
import ImageWrapper from "../../../components/elements/ImageWrapper.component";
import Image from "next/image";
import img1 from "../../../public/processetti/metodologia/luoghi_rineia.png";
import img2 from "../../../public/processetti/metodologia/luoghi_fermenia.png";
import img3 from "../../../public/processetti/metodologia/luoghi.png";

const P: NextPage<GraficiTabelleProps> = (props) => {
  return (
    <ProcessettiGraficiLayout head={props.head} links={metodologiaLinks}>
      <ion-grid fixed>
        <h1>Luoghi</h1>
        <p>
          I luoghi, o meglio le entità geografiche, sono trattate come istanze
          della classe <i>Geographical Place</i>. Essa è stata concepita nell’ambito
          del progetto symogih.orgv per colmare, nella modellizzazione dei
          luoghi, la distanza concettuale, ravvisabile nello standard CIDOC CRM,
          tra la definizione puramente astratta della classe <i>Place</i> e quella più
          pragmatica dei <i>Physical Feature</i>, definendo quest’ultima anche la
          posizione geografica di entità fisiche, nella sua dimensione più
          &quot;reale&quot; (<a href="index.tsx#2013">Beretta, 2013</a>). In tal senso i <i>Geographical Place</i> vengono a
          riferirsi a porzioni della superficie terrestre intese come
          costellazioni di materia che possono essere graficamente rappresentate
          (<a href="https://ontome.net/class/363/namespace/3">OntoMe, sdh:C13 Geographical Place</a>).{" "}
        </p>
        <p>
          Le istanze di questa classe sono caratterizzate dal ricorso alle
          proprietà necessarie a identificare un luogo attraverso il suo nome (o
          nomi), il tipo (ovvero un sostantivo in grado di cogliere un aspetto
          significativo e caratterizzante del luogo, incluso il suo ruolo, la
          funzione, l’anatomia politica o le caratteristiche fisiche) e infine
          la sua posizione geografica sotto forma di punto nello spazio (le
          coordinate del centroide).
        </p>
        <p>
          La proprietà relativa al nome non solo permette di registrare i toponimi ma anche di gestire le relazioni di
          equivalenza univoca (o sinonimia) sussistenti tra i diversi nomi di
          uno stesso luogo. Per garantire un’omogenea registrazione dei dati si
          sono prefissati alcuni criteri per la loro compilazione, come ad
          esempio l’individuazione della forma preferenziale nell’italiano
          standard e la simultanea registrazione del nome vernacolare per le
          realtà <i>extra</i> peninsulari (così da agevolare la reperibilità delle
          entità geografiche anche in contesti linguistici diversi). Queste
          ‘buone pratiche’ sono state integrate dalla messa a punto di strategie
          specifiche per il trattamento di formulazioni intrinsecamente ambigue,
          come i toponimi aggettivali (ad esempio bergamasco o teutonico), i
          casi di omonimia/omografia e i toponimi incerti per l’impossibilità di
          riconoscimento - tutte circostanze peraltro potenzialmente aggravate
          dal fatto che nella fonte i luoghi di origine, residenza o
          destinazione sono riferiti in lingua latina (se introdotte
          nell'<i>incipit</i>) o in veneziano antico (se parte delle testimonianze). Va
          detto che la ricca collezione di varianti morfo-lessicali di uno
          stesso toponimo (che costituiscono un patrimonio dal punto di vista
          storico e linguistico) non è quasi mai registrata come possibile <i>appellation</i> dell’entità, ma rimane comunque facilmente recuperabile
          grazie all’annotazione semantica dei processetti, che associa a ogni
          entità la porzione di testo che la riferisce.
        </p>
        <p>
          <ImageWrapper
            caption={"Rineia nel database ANR Processettiy"}
            imageUrls={["/processetti/metodologia/luoghi_rineia.png"]}
            dialogChildren={
              <Image
                src={img1}
                alt="Geographical Place entity (Rineia) in Geovistory"
              />
            }
          >
            <Image
              src={img1}
              placeholder="blur"
              width={608}
              height={280}
              objectFit={"scale-down"}
              alt="Geographical Place entity (Rineia) in Geovistory"
            />
          </ImageWrapper>
        </p>
        <p>
          <ImageWrapper
            caption={
              "M. Boschini, L’Arcipelago con tutte le isole, scogli, secche e bassi fondi, In Venetia, Per Francesco Nicolini, 1658"
            }
            imageUrls={["/processetti/metodologia/luoghi_fermenia.png"]}
            dialogChildren={
              <Image
                src={img2}
                alt=" Frontespizio e tavola tratti da: M. Boschini, L’Arcipelago con tutte le isole, scogli, secche e bassi fondi, In Venetia, Per Francesco Nicolini, 1658"
              />
            }
          >
            <Image
              src={img2}
              placeholder="blur"
              width={608}
              height={280}
              objectFit={"scale-down"}
              alt=" Frontespizio e tavola tratti da: M. Boschini, L’Arcipelago con tutte le isole, scogli, secche e bassi fondi, In Venetia, Per Francesco Nicolini, 1658"
            />
          </ImageWrapper>
        </p>
        <p>
          Poiché i luoghi geografici ricorrono tanto nella definizione di
          origine, luogo di nascita, luogo di abitazione e/o lavoro, come pure
          nell’enumerazione delle mete di uno spostamento o soggiorno fuori
          Venezia, non sempre la fonte riporta indicazioni direttamente
          associabili a un centro abitato; al contrario, possono essere riferite
          ampie aree (territori circondariali, valli, isole, antichi stati ecc.)
          o, addirittura, l’appartenenza a specifici contesti culturali
          (mediante il ricorso a etnonimici o demonimici).{" "}
        </p>
        <p>
          Alla luce di tale circostanza, per comodo, si è scelto di adottare in
          via provvisoria un numero limitato di type, in grado di fornire
          raggruppamenti preliminari in vista di una più ravvicinata valutazione
          dei casi, e di velocizzare il riconoscimento/disambiguazione delle
          entità già esistenti.
        </p>
        <p>
          Il gran numero e l’eterogeneità tipologica delle entità geografiche
          già raccolte nella base di dati ha indotto ad approntare all’esterno
          del <i>virtual research environment</i> un ordinamento delle entità
          geografiche rispondente alle loro molteplici interrelazioni, per lo
          più intese come inclusione fisica di un’entità geografica entro
          un’altra. Per far fronte alla mole di dati geografici da sottoporre al
          trattamento, è stata sviluppata una metodica che mettendo a frutto la
          georeferenziazione delle entità, nonché la classificazioni per tipi,
          ha garantito un efficientamento dei tempi di lavoro, mediante il
          ricorso a strumenti di geoprocessing.
        </p>
        <p>
          <ImageWrapper
            caption={
              "Proiezione su mappa delle entità Geographical Place del database ANR Processetti"
            }
            imageUrls={["/processetti/metodologia/luoghi.png"]}
            noDialogPadding={true}
            dialogChildren={
              <iframe
                frameBorder="0"
                style={{ width: "100%", height: "100%" }}
                src="/processetti/metodologia/luoghi.html"
              />
            }
          >
            <Image
              src={img3}
              placeholder="blur"
              width={608}
              height={320}
              objectFit={"scale-down"}
              alt="Proiezione su mappa delle entità Geographical Place del database ANR Processetti"
            />
          </ImageWrapper>
        </p>
        <p>
          Sebbene il modello semantico assunto dal progetto prevedesse la
          possibilità di formalizzare mediante il ricorso alla <i>Epistemic
          Location of a Physical Thing</i> i molteplici rapporti nella loro
          dimensione temporale (aspetto non poco rilevante, questo, data la nota
          mobilità dei confini e l’effimera natura di alcune entità
          amministrative in epoca moderna), per ragioni di tempo non è stato
          possibile implementarlo entro la base di dati. La sistematizzazione
          rimane fruibile e utilizzabile come risorsa esterna.{" "}
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
        headOgDescription: "Metodologia > Luoghi",
        headTitle: "Metodologia > Luoghi",
        headOgImage: "/socialimage/processetti.jpg",
      },
    },
  };
};
