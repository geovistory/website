/* eslint-disable react/no-unescaped-entities */
import type { GetStaticProps, NextPage } from 'next';
import { GraficiTabelleProps } from '../../../components/project-specific/GraficiTabelleProps';
import { ProcessettiGraficiLayout } from '../../../components/project-specific/ProcessettiGraficiLayout.component';
import { metodologiaLinks } from '../../../components/project-specific/ProcessettiNavbar.component';
import ImageWrapper from '../../../components/elements/ImageWrapper.component';

const P: NextPage<GraficiTabelleProps> = (props) => {
  return (
    <ProcessettiGraficiLayout head={props.head} links={metodologiaLinks}>
      <ion-grid fixed>
        <h1>Interazioni sociali</h1>

        <p>
          Si è dato corso alla registrazione del più ampio numero di relazioni
          esplicitamente dichiarate entro le deposizioni, con l’intento non
          tanto di ricostruire integralmente l’articolata matassa dei rapporti
          tra i soggetti menzionati, quanto piuttosto di provvedere alla
          mappatura di quei vincoli interpersonali tra testimoni e richiedenti
          proprio in nome della loro utilità nell’ambito della procedura stessa.
          Non si è quindi tentata la ricostruzione integrale della fitta e
          articolata rete relazionale così come descritta dalla fonte, ma ci si
          è limitati a registrare quelle ritenute capaci di conferire
          credibilità alle dichiarazioni rilasciate.
        </p>
        <p>
          Per quanto riguarda i forestieri, ad esempio, se lo scopo delle
          autorità era quello di accertare l’inesistenza di forme irregolari di
          convivenza, concubinaggio, unioni clandestine e bigamia, capaci di
          pregiudicare il futuro matrimonio degli esaminati, i testimoni erano
          chiamati a pronunciarsi sulla condizione contingente dei nubendi, sul
          loro passato (cioè sul periodo antecedente il loro arrivo a Venezia),
          ma anche su una loro eventuale assenza dal contesto cittadino. Gli
          elementi che potevano conferire maggior valore alla dichiarazione dei
          testimoni erano, ovviamente, la lunga durata dei legami con i
          richiedenti e la loro continuità nel tempo. Viceversa, nei casi di
          vedovanza ad attribuire maggior significatività alle singole
          deposizioni erano, non solo le relazioni di eventuale intrinsecità con
          l’inquisito e soprattutto con il coniuge scomparso, ma anche la
          possibile presenza del testimone nei momenti estremi della morte e
          della sepoltura del defunto.{' '}
        </p>
        <p>
          La grande varietà di forme assunte dalle interazioni sociali che
          emerge dalle carte d’archivio ha imposto una lenta e oculata
          definizione di un vocabolario controllato e aperto in grado di
          registrare il fenomeno nel modo più dettagliato e descrittivo
          possibile. La listazione delle tipologie relazionali consta di oltre
          34 voci, distinguibili in due macro categorie. Da un lato quella dei
          rapporti simmetrici, ovvero le interazioni che assumono la medesima
          forma ed egual valore indifferentemente dalla prospettiva da cui si
          osserva (come ad esempio la formazione scolastica comune, il rapporto
          galante o l’amicizia); dall’altro quello delle relazioni orientate,
          ovvero asimmetriche, in cui sussiste un posizionamento differente tra
          i soggetti coinvolti nella relazione (come in quello sussistente tra
          maestro e garzone durante il periodo di garzonato, o quello tra
          locatore e locatario nell’affittanza di un alloggiamento).
        </p>

        <p>
          <ImageWrapper
            legend={'Distribuzione per Social Relationship Type'}
            imageUrls={['/processetti/metodologia/text_annotation.png']}
            dialogChildren={
              <ion-img
              alt="Elencazione e distribuzione delle Social Relationship Type assunte nella descrizione delle interazioni sociali"
              src="/processetti/metodologia/interazioni-sociali.svg"
            ></ion-img>
            }
          >
            <ion-img
              alt="Elencazione e distribuzione delle Social Relationship Type assunte nella descrizione delle interazioni sociali"
              src="/processetti/metodologia/interazioni-sociali.svg"
            ></ion-img>
          </ImageWrapper>
        </p>

        <p>
          Poiché come si è detto ad assumere particolare significato nel
          contesto dei processetti erano soprattutto le relazioni di lunga
          corso, un aspetto tanto centrale quanto problematico concerne la
          descrizione della temporalità dell’evento relazionale. Si è tentato di
          registrare il più integralmente possibile la dimensione temporale
          delle interazioni sociali, tuttavia va ammesso che le coordinate utili
          a una loro puntualizzazione cronologica sono spesso scarse – sia per
          la laconicità della fonte, sia per la vaghezza nella descrizione della
          successione degli eventi.{' '}
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
        headOgDescription: 'Metodologia > Interazioni Sociali',
        headTitle: 'Metodologia > Interazioni Sociali',
        headOgImage: '/socialimage/processetti.jpg',
      },
    },
  };
};
