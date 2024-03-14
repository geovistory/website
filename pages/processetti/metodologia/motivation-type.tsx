/* eslint-disable react/no-unescaped-entities */
import type { GetStaticProps, NextPage } from "next";
import { GraficiTabelleProps } from "../../../components/project-specific/GraficiTabelleProps";
import { ProcessettiGraficiLayout } from "../../../components/project-specific/ProcessettiGraficiLayout.component";
import { metodologiaLinks } from "../../../components/project-specific/ProcessettiNavbar.component";
import ImageWrapper from "../../../components/elements/ImageWrapper.component";
import Image from "next/image";
import img1 from "../../../public/processetti/metodologia/motivation-type.jpg";

const P: NextPage<GraficiTabelleProps> = (props) => {
  return (
    <ProcessettiGraficiLayout head={props.head} links={metodologiaLinks}>
      <ion-grid fixed>
        <h1>MotivationType</h1>
        <p>
          Nel merito delle ragioni con cui le autorità davano inizio alla
          procedura, si identificano generalmente tre categorie di individui
          chiamate a dimostrare lo stato libero: i migranti (forestieri e
          sudditi veneti) che decidevano di sposarsi in città, gli individui che
          trascorrevano lunghi o frequenti periodi di tempo fuori Venezia (ad
          es. marinai, soldati e mercanti) e i vedovi, chiamati a dimostrare
          l’avvenuta morte del coniuge. Queste tre categorie normalmente assunte
          in ambito storiografico, si riscontrano anche nella nota presente nel
          volume 45 degli <i>Examina matrimoniorum</i>. É per questo che in una
          prima fase ci si è mossi nel convincimento che i processetti fossero
          “motivated by a characteristic of the applicant, be this a foreigner,
          a widow, a citizen who was long years abroad, etc.” (
          <i>Internal encoding manual</i>).
        </p>

        <p>
          <ImageWrapper
            caption={
              "ASPVe, Curia patriarcale di Venezia, Sezione antica, Examinum Matrimoniorum, vol 45, c. n.n"
            }
            imageUrls={["/processetti/metodologia/motivation-type.jpg"]}
            dialogChildren={
              <Image
                src={img1}
                alt="Riproduzione della nota introduttiva al volume 45 degli Examinum Matrimoniorum"
              />
            }
          >
            <Image
              src={img1}
              placeholder="blur"
              width={608}
              height={280}
              objectFit={"scale-down"}
              alt="Riproduzione della nota introduttiva al volume 45 degli Examinum Matrimoniorum"
            />
          </ImageWrapper>
        </p>

        <p>
          Sulla base di questa categorizzazione preliminare, si sono definite le
          tre motivazioni principali (se non altro per ricorrenza). Tuttavia,
          quasi da subito, l'emergere di casi eccezionali per forma e contenuto
          ha reso necessaria l'introduzione del <i>type</i> “Processetto
          atipico”: utile strumento per raccogliere, aggregare e rendere
          facilmente recuperabile una <i>varietas</i> di casi apparentemente
          così &quot;rari&quot; da essere reputati quasi unici.
        </p>
        <p>
          A seguito della sistematica raccolta di un numero crescente di
          processetti e alla loro osservazione ravvicinata e analitica, si è
          giunti a concepire e ridefinire la <i>motivation type</i>, da una
          nuova prospettiva, come l’associazione dell’inchiesta a una o più
          ragioni che molto probabilmente hanno portato all’indagine in senso
          oggettivo, cioè come inteso dalle autorità ecclesiastiche di allora e
          non come classificazione da parte degli storici che analizzano la
          documentazione (esplicitazione questa assunta in seguito come
          definizione ontologica).
        </p>
        <p>
          Tale ridefinizione semantica della motivation type ha portato con sé
          la necessità di affinare le strategie esegetiche per la corretta
          identificazione di quella che possiamo definire l'intenzionalità
          oggettiva della procedura.
        </p>
        <p>
          Le ragioni del processetto sono state dunque individuate tanto su base
          esplicita (espressa mediante ricorso a formulari quali{" "}
          <i>
            &quot;ad constandum se non esse exoratum et annos decem et ultra
            habitasse in hac civitate Venetiis&quot;
          </i>
          , o ancora{" "}
          <i>
            &quot;ad constandum de obitu praedicti Valerii olim eius viri&quot;
          </i>
          ) quanto su aspetti impliciti e desumibili dal contenuto testuale
          delle deposizioni. È stata operata quindi una verifica andando di
          volta in volta a valutare la convergenza o la divergenza della ragione
          dichiarata nell'<i>incipit</i> latino, del <i>tenor</i> del testo
          volgare e delle dichiarazioni dei testimoni in riferimento ai soggetti
          su cui veniva puntata l’attenzione nell’inchiesta (non sempre sul
          richiedente; nei casi di vedovanza la focalizzazione è spostata sul
          coniuge defunto).{" "}
        </p>
        <p>
          Non va trascurata la possibile esistenza di motivazioni plurime,
          ovvero il sussistere di più ragioni motivanti l’inchiesta; tanto meno
          la possibile trasformazione dinamica della ragione di un’inchiesta -
          il susseguirsi delle audizioni dei testimoni poteva infatti indurre
          l’autorità a verificare circostanze originariamente non previste.
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
        headOgDescription: "Metodologia > Motivation Type",
        headTitle: "Metodologia > Motivation Type",
        headOgImage: "/socialimage/processetti.jpg",
      },
    },
  };
};
