import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { ProjectFooter } from '../../components/layouts/ProjectFooter.component';
import { ProcessettiBanner } from '../../components/project-specific/ProcessettiBanner.component';
import { ProcessettiNavbar } from '../../components/project-specific/ProcessettiNavbar.component';
import {
  projectParamsToNavbarProps,
  projectsParams,
} from '../../lib/projectParams';
import { ProjectSearchProps } from '../project/[geov_id]/search';
import styles from './index.module.css';

const ProcessettiSearch: NextPage<ProjectSearchProps> = (props) => {
  return (
    <>
      <Head>
        <title>Processetti</title>
      </Head>
      <ion-app class={styles.theme}>
        <ion-content >
          <ProcessettiNavbar
            title="Progetto ANR Processetti"
            projectId={591}
          ></ProcessettiNavbar>
          {/* <ProcessettiBanner></ProcessettiBanner> */}
          <ion-grid class="ion-margin-top">
            <geov-explorer
              init-search-string={props.explorerTerm ?? undefined}
              sparql-endpoint={`https://sparql.geovistory.org/api_v1_project_${props.params.geovID}`}
              ref={(e: HTMLGeovExplorerElement) => {
                if (e) e.preferredItems = props.params.preferredClasses;
              }}
              url-append={`?p=${props.params.geovID}`}
              uri-regex={props.uriRegex}
              uri-replace={`${props.uriReplace}?p=${props.params.geovID}`}
            ></geov-explorer>
          </ion-grid>
          <ProjectFooter showEeditiones={false}></ProjectFooter>
        </ion-content>
      </ion-app>
    </>
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
      headTitle: 'Search ' + params.shortName,
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
