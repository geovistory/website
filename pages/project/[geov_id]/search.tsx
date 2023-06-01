import type { GetServerSideProps, NextPage } from 'next';
import {
  ProjectPageLayout,
  ProjectPageLayoutProps,
} from '../../../components/layouts/ProjectPageLayout.component';
import { ProjectParams, projectsParams } from '../../../lib/projectParams';
import styles from './sparql.module.css';

export interface ProjectSearchProps {
  explorerTerm: string | null;
  params: ProjectParams;
  projectPageLayout: ProjectPageLayoutProps;
}
const ProjectSearchPage: NextPage<ProjectSearchProps> = (props) => {
  return (
    <ProjectPageLayout {...props.projectPageLayout}>
      <div className={styles.container}>
        <div className="ion-margin-top">
          <geov-explorer
            init-search-string={props.explorerTerm ?? undefined}
            sparql-endpoint={`https://sparql.geovistory.org/api_v1_project_${props.params.geovID}`}
            ref={(e: HTMLGeovExplorerElement) => {
              if (e) e.preferredItems = props.params.preferredClasses;
            }}
            url-append={`?p=${props.params.geovID}`}
            uri-regex={process.env.NEXT_PUBLIC_GEOV_URI_REGEX}
            uri-replace={`${process.env.NEXT_PUBLIC_GEOV_URI_REPLACE}?p=${props.params.geovID}`}
          ></geov-explorer>
        </div>
      </div>
    </ProjectPageLayout>
  );
};

export default ProjectSearchPage;

export const getServerSideProps: GetServerSideProps<ProjectSearchProps> =
  async (context) => {
    const projectId = parseInt(context.params?.geov_id as string, 10);

    const params = projectsParams.find((pp) => pp.geovID === projectId);
    if (!params) return { notFound: true };

    const query = context.query;
    const explorerTerm = query?.term ? query?.term.toString() : null;

    const props: ProjectSearchProps = {
      explorerTerm,
      projectPageLayout: {
        navbar: {
          projectId,
          title: params.shortName,
          teiLinkEnabled: params.hasTEI,
          sparqlLinkEnabled: params.hasSPARQL,
        },
      },
      params,
    };
    return {
      props,
    };
  };
