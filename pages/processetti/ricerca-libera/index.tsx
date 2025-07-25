import type { GetServerSideProps, NextPage } from 'next';
import { ProcessettiGraficiLayout } from '../../../components/project-specific/ProcessettiGraficiLayout.component';
import { ricercaLinks } from '../../../components/project-specific/ProcessettiNavbar.component';
import {
  projectParamsToNavbarProps,
  projectsParams,
} from '../../../lib/projectParams';
import { ProjectSearchProps } from '../../project/[geov_id]/search';
import { downloadOutline } from 'ionicons/icons';

const ProcessettiSearch: NextPage<ProjectSearchProps> = (props) => {
  return (
    <ProcessettiGraficiLayout
      head={props.projectPageLayout.head}
      hideBanner={false}
      links={ricercaLinks}
    >
      <ion-grid class="ion-margin-top" fixed>
        <h1>Ricerca libera</h1>

        <p>
          La pagina garantisce la possibilità di esplorare ed effettuare
          semplici ricerche sui dati presenti nel database ANR Processetti,
          ospitato in Geovistory.
        </p>
        <p>
          <ion-button
            href="/processetti/ricerca-libera/ricerca"
            color="primary"
          >
            Ricerca
          </ion-button>
        </p>
        <p>
          Questo consente di condurre ricerche, tra le altre, sulle persone, sui
          luoghi geografici (siano essi luoghi d&apos;origine, tappe di uno
          spostamento o luoghi di abitazione o lavoro, entro o fuori Venezia) o,
          ancora, sulle professioni svolte dai soggetti.
        </p>

        <p>
          Per iniziare un&apos;esplorazione dei dati attraverso la{' '}
          <i>ricerca libera</i>, il primo passo è la scelta del{' '}
          <i>Class Filter</i>. Sebbene una lista a scomparsa garantisca la
          selezione di una qualsiasi delle classi attivate nell&apos;ambito del
          progetto, tre di queste sono poste in evidenza: si tratta di{' '}
          <i>Person</i>, <i>Geographical place</i> e <i>Occupation</i>.{' '}
        </p>
        <p>
          Per orientarsi nell&apos;individuazione delle varie entità riferibili
          a luoghi geografici o professioni presenti nel{' '}
          <i>database - ANR Processetti</i>, è possibile consultare gli indici
          qui sotto riportati:
        </p>
        <p>
          <ion-button
            fill="outline"
            href="/processetti/documents/occupation.xlsx"
            color="primary"
            download="professioni.xlsx"
          >
            <ion-icon slot="start" icon={downloadOutline}></ion-icon>
            Professioni (.xlsx)
          </ion-button>
          <ion-button
            fill="outline"
            href="/processetti/documents/place.xlsx"
            color="primary"
            download="luoghi.xlsx"
          >
            <ion-icon slot="start" icon={downloadOutline}></ion-icon>
            Luoghi geografici (.xlsx)
          </ion-button>
        </p>
        <p>
          Una volta selezionata la classe radice, nella finestra principale
          vengono visualizzate tutte le istanze afferenti alla classe prescelta,
          rese a loro volta filtrabili per mezzo di un campo di ricerca a
          compilazione libera. A questo livello il filtraggio è svolta tenendo
          in considerazione il nome preferenziale attribuito all&apos;entità. Se
          per i luoghi l&apos;appellativo principale corrisponde alla forma
          italianizzata del toponimo e per le professioni coincide alla forma
          canonizzata all&apos;uso antico, i nomi di persona sono stati
          uniformati ponendo in sequenza l&apos;italianizzazione del nome, del
          patronimico e del cognome, a cui sono state aggiunte, tra parentesi
          tonde, informazioni relative al luogo di origine e alla professione
          del soggetto interessato, così da garantire un efficace processo di
          disambiguazione delle entità.
        </p>
        <p>
          Selezionando dall&apos;elenco una delle voci visualizzate, si accede a
          una scheda riportante tutte le proprietà rilevanti dell&apos;entità
          prescelta; a loro volta istanze di classi e quindi punto di accesso
          per ulteriori esplorazioni.
        </p>

        <p>
          Ad esempio, partendo dalla classe Person, si ottiene l&apos;elenco
          delle 13185 entità presenti nel database. Selezionando
          dall&apos;elenco{' '}
          <b>Bartolomeo di Andrea Giovanetti (da Bergamo, ligador)</b>, si
          accede alla scheda di sintesi, dove è possibile apprendere che, oltre
          ad essere originario di Bergamo ed esercitare la professione di
          ligador, egli risiedeva nella parrocchia di S. Silvestro e che venne
          convocato in veste di testimone in occasione del processetto di{' '}
          <b>Bono di Alvise De Sais</b>, tenutosi il 25 giugno del 1639 e
          documentato nel 40° volume della serie <i>Examinum Matrimoniorum</i>.
        </p>

        <p>
          Ogni <i>property cards</i> permette di spostarsi nella scheda della
          specifica informazione verso cui si è orientata l&apos;attenzione,
          così da approfondire la comprensione del suo contenuto specifico.
          Tutte le informazioni sono sempre riconducibili su base logica al
          processetto (o ai processetti) da cui sono criticamente tratte e,
          almeno per il gruppo di processetti che dal 1592 giunge fino al 1604,
          è espressamente riportato il passaggio testuale (o i passaggi
          testuali) della fonte che ne motivano il contenuto.
        </p>
      </ion-grid>
    </ProcessettiGraficiLayout>
  );
};

export default ProcessettiSearch;
export const getServerSideProps: GetServerSideProps<
  ProjectSearchProps
> = async (context) => {
  const projectId = 591;

  const params = projectsParams.find((pp) => pp.geovID === projectId);
  if (!params) return { notFound: true };

  const query = context.query;
  const explorerTerm = query?.term ? query?.term.toString() : null;

  const props: ProjectSearchProps = {
    explorerTerm,
    projectPageLayout: {
      head: {
        headTitle: 'Ricerca libera ' + params.shortName,
        headOgDescription: params.description,
        headOgImage: params.headOgImage,
      },
      navbar: projectParamsToNavbarProps(params),
    },
    params,
    uriRegex: process.env.NEXT_PUBLIC_GEOV_URI_REGEX ?? '',
    uriReplace: process.env.NEXT_PUBLIC_GEOV_URI_REPLACE ?? '',
    sparqlEndpointURL: ""
  };
  return {
    props,
  };
};
