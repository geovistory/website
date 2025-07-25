import type { GetServerSideProps, NextPage } from 'next';
import { Layout } from '../../../../components/project-specific/urban-biographies/data-portal/layout';
import { dataPortalLinks } from '../../../../components/project-specific/urban-biographies/navbar';
import { HeadProps } from '../../../../components/layouts/DefaultHead';
import styles from './index.module.css'
import { ProjectSearchProps } from '../../../project/[geov_id]/search';
import { projectParamsToNavbarProps, projectsParams} from '../../../../lib/projectParams';

export interface Props { head: HeadProps }

const UrbanBioSearch: NextPage<ProjectSearchProps> = (props) => {
  return (
    <Layout head={props.projectPageLayout.head} links={dataPortalLinks}>
      <ion-grid>
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
    </Layout>
  );
};


export default UrbanBioSearch;
export const getServerSideProps: GetServerSideProps<
  ProjectSearchProps
> = async (context) => {
  const projectId = 6619613;

  const params = projectsParams.find((pp) => pp.geovID === projectId);
  if (!params) return { notFound: true };

  const query = context.query;
  const explorerTerm = query?.term ? query?.term.toString() : null;

  const props: ProjectSearchProps = {
    explorerTerm,
    projectPageLayout: {
      head: {
        headTitle: 'Search ' + params.shortName,
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
