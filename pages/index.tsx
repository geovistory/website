import type { GetStaticProps, NextPage } from 'next';
import {
  DefaultPage,
  DefaultPageProps,
} from '../components/layouts/DefaultPage.component';
import {
  GeovCarousel,
  IonCol,
  IonGrid,
  IonRow,
} from '@geovistory/design-system-react';
import { projectsParams } from '../projects/config';
import { ProjectParams } from '../model/project-param';
import { ProjectCard } from '../components/elements/ProjectCard.component';
import styles from './index.module.css';
export interface HomeProps {
  defaultPage: DefaultPageProps;
  featuredProjects: ProjectParams[];
}
const Home: NextPage<HomeProps> = (props) => {
  return (
    <DefaultPage {...props.defaultPage}>
      <div className={styles.container}>
        <IonGrid className={styles.bannerContainer}>
          <IonRow>
            <IonCol>
              <h1 className={styles.title}>Geovistory</h1>
              <p className={styles.slogan}>
                Virtual Research Environment for Humanities and Social Sciences
              </p>
            </IonCol>
            <IonCol>
              <GeovCarousel
                className={styles.carousel}
                images={[
                  '/carousel-1_maquette-lugdunum.jpg',
                  '/carousel-2_tapisserie-bayeux.jpg',
                  '/carousel-3_vitrail.jpg',
                  '/carousel-4_astrolabe-arabe.jpg',
                  '/carousel-5_quetzalcoatl.jpg',
                  '/carousel-6_bronzes-benin.jpg',
                  '/carousel-7_carte-amerique.jpg',
                  '/carousel-8_assemble-vizille.jpg',
                  '/carousel-9_acte-deces.jpg',
                  '/carousel-10_guerre-russo-japonaise.jpg',
                  '/carousel-11_congret-musique.jpg',
                  '/carousel-12_toronto.jpg',
                ]}
              ></GeovCarousel>
            </IonCol>
          </IonRow>
        </IonGrid>
        <div className={styles.featuredProjectsContainer}>
          <h2 className={styles.subheading}>Featured Projects</h2>

          <IonGrid className={styles.featuredProjectsGrid}>
            <IonRow>
              {props.featuredProjects.map((proj: ProjectParams, i: number) => (
                <IonCol
                  key={'project-card-' + i}
                  className={styles.projectCardContainer}
                >
                  <ProjectCard project={proj} />
                </IonCol>
              ))}
            </IonRow>
          </IonGrid>
        </div>
      </div>
    </DefaultPage>
  );
};

export default Home;
export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const featuredProjects = projectsParams.filter((pp) => pp.featured);
  return {
    props: {
      featuredProjects,
      defaultPage: {
        footer: {
          featuredProjects,
        },
      },
    },
    revalidate: 86400,
  };
};
