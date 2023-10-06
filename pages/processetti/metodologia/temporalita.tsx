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
        <h1>Temporalità</h1>

        <p>
          La descrizione della temporalità degli accadimenti ha costituito una
          sfida importante all’atto di registrare le informazioni. Come
          immaginabile, infatti, i testimoni non sempre fornivano notizie
          omogenee e complete sul conto del richiedente o sulla tempistica degli
          eventi e, ancora, non sempre le testimonianze risultano tra loro
          concordanti.{" "}
        </p>
        <p>
          A mero titolo esemplificativo si può ricordare che l’età, in
          particolare dei nubendi, è sovente indicata in maniera approssimativa
          e gli anni attribuiti possono variare da una testimonianza all’altra.
          L’arrivo a Venezia, come la morte di un individuo, l’inizio di una
          conoscenza, uno spostamento extraurbano, possono essere inoltre
          collocati nel <i>continuum temporale</i> mediante il solo riferimento
          a eventi significativi per la società dell’epoca (l’incendio
          dell’Arsenale, le pestilenze, le carestie, e gli eventi bellici).
          Quanto agli spostamenti abitativi o ai cambiamenti di professione,
          essi possono essere descritti anche solo nel loro mero susseguirsi
          diacronico senza precisi ancoraggi cronologici.{" "}
        </p>
        <p>
          Per evitare un approccio sovra-interpretativo, nello sforzo di
          rispettare tanto il dichiarato della fonte quanto la necessità di
          produrre <i>factual information</i>, la temporalità degli eventi è stata
          descritta non solo per mezzo di indicazioni puntuali, ma anche
          attraverso intervalli cronologici in grado di definire l’estensione
          temporale degli eventi stessi secondo diverse scale di precisione e
          attendibilità, o ancora attraverso la concatenazione di <i>temporal
          entity</i> (mediante proprietà specifiche quali &quot;occurs before&quot;, &quot;meets in
          time with&quot;, &quot;occurs after&quot; ecc.).
        </p>

        <p>
          <ImageWrapper
            legend={"Time span (KleioLab, 2020)"}
            imageUrls={["/processetti/metodologia/text_annotation.png"]}
            dialogChildren={
              <ion-img
                alt="Time span in Geovistory (and CIDOC-CRM)"
                src="/processetti/metodologia/temporalita.png"
              ></ion-img>
            }
          >
            <ion-img
              alt="Time span in Geovistory (and CIDOC-CRM)"
              src="/processetti/metodologia/temporalita.png"
            ></ion-img>
          </ImageWrapper>
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
        headOgDescription: "Metodologia > Temporalità",
        headTitle: "Metodologia > Temporalità",
        headOgImage: "/socialimage/processetti.jpg",
      },
    },
  };
};
