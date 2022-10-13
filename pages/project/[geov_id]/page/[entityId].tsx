import { GetStaticProps, NextPage } from 'next';
import { entityPageMap } from '../../../../lib/projectEntityPages/entityPageMap';
import { getStaticPropsMap } from '../../../../lib/projectEntityPages/getStaticPropsMap';
import { defaultGetStaticProps } from '../../../../lib/projectEntityPages/_default/defaultGetStaticProps';
import { DefaultEntityPage } from '../../../../lib/projectEntityPages/_default/DefaultEntityPage';

export interface ProjectEntityPageProps {
  projectId: number;
}

/**
 * Returns the entity page component of project or,
 * if not available, the default one.
 *
 * @param projectId
 * @returns
 */
function getComponent(projectId: number) {
  const CustomEntityPage = entityPageMap[projectId];

  if (CustomEntityPage) return CustomEntityPage;

  return DefaultEntityPage;
}

/**
 * If available, returns the getStaticProps of project or,
 * if not available, the default one.
 *
 * @param projectId
 */
function getGetStaticProps(projectId: number) {
  const customGetStaticProps = getStaticPropsMap[projectId];

  if (customGetStaticProps) return customGetStaticProps;
  return defaultGetStaticProps;
}

const ProjectEntityPage: NextPage<any> = (props) => {
  const Component = getComponent(props.projectId);
  return <Component {...props} />;
};
export default ProjectEntityPage;

export const getStaticProps: GetStaticProps<ProjectEntityPageProps> = async (
  context
) => {
  const projectId = parseInt(context?.params?.geov_id as string, 10);
  const projectGetStaticProps = getGetStaticProps(projectId);
  return projectGetStaticProps(context);
};

export async function getStaticPaths() {
  return {
    paths: ['/project/924033/page/i836507'],
    fallback: 'blocking', // can also be false or 'blocking'
  };
}
