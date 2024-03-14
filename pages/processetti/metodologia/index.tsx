/* eslint-disable react/no-unescaped-entities */
import type { GetStaticProps, NextPage } from 'next';
import { GraficiTabelleProps } from '../../../components/project-specific/GraficiTabelleProps';
import { ProcessettiGraficiLayout } from '../../../components/project-specific/ProcessettiGraficiLayout.component';
import { metodologiaLinks } from '../../../components/project-specific/ProcessettiNavbar.component';
import ImageWrapper from '../../../components/elements/ImageWrapper.component';
import Image from 'next/image';
import img1 from '../../../public/processetti/metodologia/intro-dik-pyramid.png';
import img2 from '../../../public/processetti/metodologia/intro-data-model.jpg';
import mainStyles from '../index.module.css';

const P: NextPage<GraficiTabelleProps> = (props) => {
  return (
    <ProcessettiGraficiLayout head={props.head} links={metodologiaLinks}>
      <ion-grid fixed>
        <h1>Introduzione metodologica</h1>

        <p>
          Per realizzare il database ANR Processetti, produrre e curare i
          <i>semantic data</i>, gestire le <i>digital reproduction</i> e attuare
          l’annotazione semantica dei testi, il progetto si è avvalso di
          Geovistory, un
          <i>virtual research environment</i> esplicitamente progettato per le{' '}
          <i>digital humanities</i> e ideato allo scopo di supportare tutte le
          fasi del <i>cycle of historical knowledge production</i>, secondo una
          prospettiva collaborativa.
        </p>
        <p>
          Le informazioni prodotte in Geovistory Toolbox sono nativamente
          interoperabili e riutilizzabili. Ogni dato è semanticamente definito
          (secondo l’ontologia formale CIDOC-CRM e l’estensione SDHSS),
          pubblicato sotto licenza Creative Commons e collegato a risorse
          esterne secondo la visione dei <i>linked open data for research</i>{' '}
          (LOD-R) e i principi FAIR (<a href="#2023">Beretta, 2023</a>).
        </p>
        <p>
          Al fine di garantire l’effettiva interoperabilità sul piano semantico
          dei dati prodotti, e quindi la loro sfruttabilità da parte di tutta la
          comunità di riferimento, le informazioni raccolte nell’ambito del
          progetto sono state modellate nella forma più obiettiva possibile e
          corredate, lì dove necessario, di esplicite descrizioni.
        </p>
        <p>
          La tensione tra la complessa natura del contenuto documentario, la
          ricchezza contenutistica e la necessità di un trattamento qualitativo
          e quantitativo delle informazioni, ha imposto un lento e oculato
          processo di mappatura delle informazioni veicolate dalla fonte e, con
          il supporto di KleioLab, di una progressiva puntualizzazione del
          modello semantico di rappresentazione,che estende il modello generico
          SDHSS al fine di disporre delle classi e proprietà necessaire per
          raccogliere l'informazione relativa alla ricerca del progetto
          Processetti. Si è dato così corso a una schematizzazione concettuale,
          volta a cogliere i tratti essenziali di quella porzione di realtà
          storica tramandata dai processetti, selezionando quegli aspetti meglio
          rispondenti agli assi di ricerca del progetto.
        </p>
        <p>
          Questo processo si è svolto tenendo fermi due aspetti non
          trascurabili: d’un lato la necessità di una forte atomizzazione dei
          dati, ovvero la loro scomposizione in elementi che corrispondono a
          &quot;unità minime di conoscenza&quot;, e dall’altro un approccio alle
          fonti volto all’estrinsecazione dei fatti (<i>factual information</i>
          ), piuttosto che la mera registrazione dei fattoidi (<i>factoid</i>) -
          vale a dire la produzione di informazioni sulla realtà basata
          sull’interpretazione critica della fonte attraverso congettura,
          inferenza, contestualizzazione ecc. (<a href="#2021">Beretta, 2021</a>
          ).
        </p>
        <p>
          <ImageWrapper
            caption={'Knowledge Pyramid e Research Flow (F. Beretta, 2020)'}
            imageUrls={['/processetti/metodologia/intro-dik-pyramid.png']}
            dialogChildren={
              <Image
                src={img1}
                alt="Diagramma rappresentante la Knowledge Pyramid e il Research Flow, tratta da F. Beretta, ‘A Challenge for Historical Research: Making Data FAIR Using a Collaborative Ontology Management Environment (OntoME)’, Semantic Web, 12.2 (2021), 279–94 "
              />
            }
          >
            <Image
              src={img1}
              placeholder="blur"
              width={608}
              height={280}
              objectFit={'scale-down'}
              alt="Diagramma rappresentante la Knowledge Pyramid e il Research Flow, tratta da F. Beretta, ‘A Challenge for Historical Research: Making Data FAIR Using a Collaborative Ontology Management Environment (OntoME)’, Semantic Web, 12.2 (2021), 279–94 "
            />
          </ImageWrapper>
        </p>
        <p>
          Per assicurare e agevolare l’efficace assunzione di tali principi,
          all’interno di Geovistory Toolbox, i dati prodotti sono strutturati
          secondo una prospettiva orientata agli eventi (
          <i>event centered data model</i>). Questo specifico modello di dati si
          fonda sulla distinzione tra <i>persistent item</i>, ovvero entità
          persistenti (come ad esempio le persone o i luoghi geografici, ma
          anche classi più astratte, come le professioni), e le{' '}
          <i>temporal entities</i> (o <i>events</i>), che includono fenomeni
          situati nel tempo in grado di caratterizzare le istanze delle classi
          persistenti (per esempio la nascita di un individuo, la sua
          occupazione o la sua localizzazione in un dato momento).
          Contrariamente ai dati strutturati in un modello orientato agli
          oggetti (<i>object-oriented structured data model</i>), quello
          event-centered, oltre ad assicurare una ricca discretizzazione,
          garantisce una maggiore flessibilità nel trattare le incertezze e i
          cambiamenti nel tempo degli &quot;attributi&quot; delle entità
          persistenti (<a href="#2022">Beretta, 2022</a>).
        </p>
        <p>
          <ImageWrapper
            caption={'Event centered data model'}
            imageUrls={['/processetti/metodologia/intro-data-model.jpg']}
            dialogChildren={
              <Image
                src={img2}
                alt="Schematizzazione del Event centered data model tratta dalla documentazione di KleioLab"
              />
            }
          >
            <Image
              src={img2}
              placeholder="blur"
              width={608}
              height={460}
              objectFit={'scale-down'}
              alt="Schematizzazione del Event centered data model tratta dalla documentazione di KleioLab"
            />
          </ImageWrapper>
        </p>
        <p>
          A seguito di diversi cicli di <i>information production</i> -
          comprensivi della trascrizione dei processetti, della creazione di
          dati strutturati e dell’annotazione semantica delle trascrizioni, si è
          dato corso alla progressiva puntualizzazione del modello, nell’ottica
          di renderlo il più possibile rispondente ai quesiti di ricerca. Ciò ha
          portato, all’individuazione e conseguente attivazione di numerose
          categorie concettuali (classi e proprietà) per la descrizione delle
          entità persistenti e degli <i>event</i>, nonché alla definizione di
          numerosi vocabolari controllati, capaci di dare forma a un ampio
          spettro di informazioni relative agli attori coinvolti, al ruolo di
          ciascuno nell’ambito dell’inchiesta, alle loro relazioni sociali e
          alla mobilità <i>intra</i> ed <i>extra</i> urbana, non meno che alla
          natura dei singoli processetti.
        </p>
        <br />
        <br />
        <br />

        <p>
          Per una più analitica descrizione della metodologia e della semantica
          sottesa alla definizione infrastrutturale di Geovistory si vedano:
        </p>
        <p></p>
        <p id="2013" className={mainStyles.indent1}>
          Beretta Francesco, Butez Charlotte (2013), “Un SIG Collaboratif Pour
          La Recherche Historique”, in “Géomatique Expert”, 91, pp. 30-35 / 92,
          pp. 48-54
        </p>

        <p id="2016" className={mainStyles.indent1}>
          Beretta Francesco (2016), “Pour une annotation sémantique des textes:
          le projet symogih.org et la Text encoding initiative”, in “Bruniana e
          Campanelliana, Ricerche filosofiche e materiali storico - testuali”,
          XXII.2 , pp. 453-65 [https://doi.org/10.19272/201604102005]
        </p>

        <p id="2021" className={mainStyles.indent1}>
          Beretta Francesco (2021), “A Challenge for Historical Research: Making
          Data FAIR Using a Collaborative Ontology Management Environment
          (OntoME)”, in “Semantic Web”, 12.2, pp. 279-94
          [https://doi.org/10.3233/SW-200416]
        </p>

        <p id="2022" className={mainStyles.indent1}>
          Beretta Francesco (2022), “Interopérabilité Des Données de La
          Recherche et Ontologies Fondationnelles: Un Écosystème d”extensions Du
          CIDOC CRM Pour Les Sciences Humaines et Sociales”, in N. Lasolle, O.
          Bruneau, J. Lieber (a cura di),{' '}
          <i>Actes Des Journées Humanités Numériques et Web Sémantique</i>,
          Nancy, pp. 2-22 [https://doi.org/10.5281/zenodo.7014341]
        </p>

        <p id="2023" className={mainStyles.indent1}>
          Beretta Francesco (2023), “Données ouvertes liées et recherche
          historique: un changement de paradigme”, in “Humanités numériques”, 7
          [https://doi.org/10.4000/revuehn.3349]
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
        headOgDescription: 'Metodologia > Introduzione',
        headTitle: 'Metodologia > Introduzione',
        headOgImage: '/socialimage/processetti.jpg',
      },
    },
  };
};
