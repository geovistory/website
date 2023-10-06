import type { GetServerSideProps, NextPage } from 'next';
import { ProcessettiGraficiLayout } from '../../../components/project-specific/ProcessettiGraficiLayout.component';
import {
  projectParamsToNavbarProps,
  projectsParams,
} from '../../../lib/projectParams';
import { ProjectSearchProps } from '../../project/[geov_id]/search';
import { ricercaLinks } from '../../../components/project-specific/ProcessettiNavbar.component';

const ProcessettiSearch: NextPage<ProjectSearchProps> = (props) => {
  return (
    <ProcessettiGraficiLayout
      head={props.projectPageLayout.head}
      hideBanner={false}
      links={ricercaLinks}
    >
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
        headTitle: 'Search ' + params.shortName,
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
