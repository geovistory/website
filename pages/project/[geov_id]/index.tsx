import { GetStaticProps, NextPage } from 'next';
import { ProjectPageLayoutProps } from '../../../components/layouts/ProjectPageLayout.component';
import { ProjectParams, projectsParams } from '../../../lib/projectParams';
import { projectHomePageMap } from '../../../lib/projectHomePages/projectHomePageMap';

export interface ProjectPageProps {
  params: ProjectParams;
  projectPageLayout: ProjectPageLayoutProps;
}
const ProjectPage: NextPage<ProjectPageProps> = (props) => {
  const ProjectComponent = getProjectComponent(props.params.geovID);

  return <ProjectComponent {...props} />;
};

export default ProjectPage;

export const getStaticProps: GetStaticProps<ProjectPageProps> = async (
  context
) => {
  const projectId = parseInt(context?.params?.geov_id as string, 10);
  const params = projectsParams.find((pp) => pp.geovID == projectId);
  if (!params) return { notFound: true };
  const props: ProjectPageProps = {
    projectPageLayout: {
      headTitle: params.shortName,
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
    revalidate: 86400,
  };
};

function getProjectComponent(projectId: number) {
  return projectHomePageMap[projectId] ?? (() => <>Project not found</>);
}

export async function getStaticPaths() {
  return {
    paths: projectsParams
      .filter((pp) => pp.geovID != 0) // except the default project
      .map((pp) => ({ params: { geov_id: pp.geovID + '' } })),
    fallback: false,
  };
}
