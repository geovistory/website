import type { GetStaticProps, NextPage } from 'next';
import {
  DefaultPage,
  DefaultPageProps,
} from '../components/layouts/DefaultPage.component';

import { ProjectParams, projectsParams } from '../lib/projectParams';
import { ProjectCard } from '../components/elements/ProjectCard.component';
import styles from './index.module.css';
import { Components } from '@geovistory/design-system-web/loader';
import { useRouter } from 'next/router';
export interface HomeProps {
  defaultPage: DefaultPageProps;
  featuredProjects: ProjectParams[];
}
const Home: NextPage<HomeProps> = (props) => {
  const router = useRouter();

  return (
    <DefaultPage {...props.defaultPage}>
      <div className={styles.container}>
        <ion-grid class={styles.bannerContainer}>
          <ion-row>
            <ion-col>
              <h1 className={styles.title}>Geovistory</h1>
              <p className={styles.slogan}>
                Virtual Research Environment for Humanities and Social Sciences
              </p>
              <ion-searchbar
                class={styles.searchbar}
                // color="secondary"
                enterkeyhint="enter"
                placeholder="Search and hit enter…"
                ref={(el: any) => {
                  el?.getInputElement().then(() => {
                    setTimeout(() => {
                      console.log('focus on ', el);
                      el?.setFocus();
                    }, 300);
                  });
                  el?.addEventListener('keypress', (event: KeyboardEvent) => {
                    if (event.key === 'Enter') {
                      el?.getInputElement().then(
                        (inputEl: HTMLInputElement) => {
                          console.log(inputEl?.value);
                          router.push({
                            pathname: '/search',
                            query: { term: inputEl?.value },
                          });
                        }
                      );
                    }
                  });
                }}
              ></ion-searchbar>
            </ion-col>
            <ion-col>
              <geov-carousel
                class={styles.carousel}
                ref={(carousel?: Components.GeovCarousel) => {
                  if (carousel)
                    carousel.images = [
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
                    ];
                }}
              ></geov-carousel>
            </ion-col>
          </ion-row>
        </ion-grid>
        <div className={styles.featuredProjectsContainer}>
          <h3 className={styles.subheading}>Featured Projects</h3>

          <ion-grid class={styles.featuredProjectsGrid}>
            {props.featuredProjects.map((proj: ProjectParams, i: number) => (
              <div
                key={'project-card-' + i}
                className={styles.projectCardContainer}
              >
                <ProjectCard project={proj} />
              </div>
            ))}
          </ion-grid>
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
