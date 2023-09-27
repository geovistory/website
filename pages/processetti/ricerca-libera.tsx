import type { GetServerSideProps, NextPage } from 'next';
import { ProcessettiLayout } from '../../components/project-specific/ProcessettiLayout.component';
import {
  projectParamsToNavbarProps,
  projectsParams,
} from '../../lib/projectParams';
import { ProjectSearchProps } from '../project/[geov_id]/search';

const ProcessettiSearch: NextPage<ProjectSearchProps> = (props) => {
  return (
    <ProcessettiLayout head={props.projectPageLayout.head} hideBanner={false}>
      <ion-grid class="ion-margin-top">
        <h1>Ricerca libera</h1>
        <p>
          Da questo sito è possibile effettuare semplici ricerche nel database
          Processetti sviluppato sulla piattaforma Geovistory. Queste ricerche
          riguardano alcune informazioni raccolte sulle persone interrogate
          durante l&apos;indagine condotta dalla Curia patriarcale: i richiedenti e i
          loro testimoni.
        </p>
        <p>
          Si possono effettuare ricerche sulla persona (nome, cognome), sulla
          sua origine, sulla sua occupazione e sulla sua parrocchia di residenza
          a Venezia. Queste informazioni sono sempre collegate al processetto da
          cui sono tratte. Tuttavia, in questa fase non è possibile accedere
          alla trascrizione del processetto.
        </p>

        <p>
          <ion-button href="/processetti/search" color="primary">Ricerca</ion-button>
        </p>

        <p>Esempi</p>
        <ul className="restricted-width">
          <li>
            Il primo passo della ricerca libera è la scelta del Class Filter
            (Person, Geografical place, Occupation). Selezionando “Person”, si
            ottiene un elenco delle 13185 entità (persone) presenti nel
            database. Nella finestra di ricerca è possibile cercare persone
            legate a un luogo (“Bergamo”) o ad una professione (“ligador”).
          </li>
          <li>
            La presentazione delle persone è stata standardizzata: nome +
            cognome + nome del padre + cognome ( da luogo di origine,
            professione).
          </li>
          <li>
            Se si clicca sul primo nome dell&apos;elenco - Bartolomeo di Andrea
            Giovanetti (da Bergamo, ligador) - si accede alla sua scheda. Si
            apprende che vive nella parrocchia di S. Silvestro e che è testimone
            di Bono di Alvise De Sais, attraverso il quale si può ottenere il
            riferimento del processetto.
          </li>
          <li>
            Se si cercano tutte le occorrenze di “ligador“, appariranno 8
            persone. Se si clicca su Filippo di Giacomo Borella (da Bergamo,
            ligador), si apprende che è anche il testimone di Bono di Alvise di
            Sais.
          </li>
        </ul>
      </ion-grid>
    </ProcessettiLayout>
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
  };
  return {
    props,
  };
};
