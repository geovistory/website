import type { GetStaticProps, NextPage } from 'next';
import { Yasgui } from '../../../components/elements/Yasgui.component';
import { CCLicense } from '../../../components/elements/CCLicense.component';
import {
  ProjectPageLayout,
  ProjectPageLayoutProps,
} from '../../../components/layouts/ProjectPageLayout.component';
import { ProjectParams } from '../../../model/project-param';
import { projectsParams } from '../../../projects/projectParams';
import styles from './sparql.module.css';

export interface ProjectSparqlProps {
  params: ProjectParams;
  projectPageLayout: ProjectPageLayoutProps;
}
const ProjectSparqlPage: NextPage<ProjectSparqlProps> = (props) => {
  return (
    <ProjectPageLayout {...props.projectPageLayout}>
      <div className={styles.container}>
        <h1>Access {props.params.shortName} Data via SPARQL</h1>
        <Yasgui
          endpoint={`https://sparql.geovistory.org/api_v1_project_${props.params.geovID}`}
        />
        <CCLicense />
      </div>
    </ProjectPageLayout>
  );
};


export default ProjectSparqlPage;

export const getServerSideProps: GetStaticProps<ProjectSparqlProps> =
  async (context) => {
    const projectId = parseInt(context.params?.geov_id as string, 10);

    const params = projectsParams.find((pp) => pp.geovID === projectId);
    if (!params) return { notFound: true };
    const props: ProjectSparqlProps = {
      projectPageLayout: {
        navbar: {
          projectId,
          title: params.shortName,
          teiLinkEnabled: params.hasTEI,
          sparqlLinkEnabled: params.hasSPARQL
        },
      },
      params,
    };
    return {
      props
    };
  };