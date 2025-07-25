import type { GetServerSideProps, NextPage } from 'next';
import {
  ProjectPageLayout,
  ProjectPageLayoutProps,
} from '../../../components/layouts/ProjectPageLayout.component';
import {
  ProjectParams,
  projectParamsToNavbarProps,
  projectsParams,
} from '../../../lib/projectParams';
import styles from './sparql.module.css';

export interface ProjectSearchProps {
  explorerTerm: string | null;
  params: ProjectParams;
  projectPageLayout: ProjectPageLayoutProps;
  uriRegex: string;
  uriReplace: string;
  sparqlEndpointURL: string;
}
const ProjectSearchPage: NextPage<ProjectSearchProps> = (props) => {

  let url = ""
  if (props.sparqlEndpointURL == "") url = `https://sparql.geovistory.org/api_v1_project_${props.params.geovID}`;
  else url = props.sparqlEndpointURL;
  
  return (
    <ProjectPageLayout {...props.projectPageLayout}>
      <div className={styles.container}>
        <div className="ion-margin-top">
          <geov-explorer
            init-search-string={props.explorerTerm ?? undefined}
            sparql-endpoint={url}
            ref={(e: HTMLGeovExplorerElement) => {
              if (e) e.preferredItems = props.params.preferredClasses;
            }}
            url-append={`?p=${props.params.geovID}`}
            uri-regex={props.uriRegex}
            uri-replace={`${props.uriReplace}?p=${props.params.geovID}`}
          ></geov-explorer>
        </div>
      </div>
    </ProjectPageLayout>
  );
};

export default ProjectSearchPage;

export const getServerSideProps: GetServerSideProps<
  ProjectSearchProps
> = async (context) => {
  const projectId = parseInt(context.params?.geov_id as string, 10);

  const params = projectsParams.find((pp) => pp.geovID === projectId);
  if (!params) return { notFound: true };

  const query = context.query;
  const explorerTerm = query?.term ? query?.term.toString() : null;

  const sparqlEndpointURL = query?.sparqlEndpointURL as string ?? ""

  const props: ProjectSearchProps = {
    explorerTerm,
    projectPageLayout: {
      head: {
        headOgDescription: params.description,
        headOgImage: params.headOgImage,
        headTitle: 'Search ' + params.shortName,
      },
      navbar: projectParamsToNavbarProps(params),
    },
    sparqlEndpointURL: sparqlEndpointURL,
    params,
    uriRegex: process.env.NEXT_PUBLIC_GEOV_URI_REGEX ?? '',
    uriReplace: process.env.NEXT_PUBLIC_GEOV_URI_REPLACE ?? '',
  };
  return {
    props,
  };
};
