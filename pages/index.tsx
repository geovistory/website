import type { GetStaticProps, NextPage } from 'next';
import { register } from 'swiper/element/bundle';
import {
  DefaultPage,
  DefaultPageProps,
} from '../components/layouts/DefaultPage.component';

import { ProjectParams, projectsParams } from '../lib/projectParams';
import { ProjectCard } from '../components/elements/ProjectCard.component';
import styles from './index.module.css';
import { Components } from '@geovistory/design-system-web/loader';
import { useRouter } from 'next/router';
import Head from 'next/head';
export interface HomeProps {
  defaultPage: DefaultPageProps;
  featuredProjects: ProjectParams[];
}
register();
const Home: NextPage<HomeProps> = (props) => {
  const router = useRouter();

  return (
    <DefaultPage
      {...props.defaultPage}
      noPaddingSlot={
        <div style={{ position: 'relative' }}>
          <ion-grid fixed={true} class={styles.mainGrid}>
            <div className={styles.container}>
              <ion-grid class={styles.bannerContainer}>
                <ion-row>
                  <ion-col>
                    <h1 className={styles.title}>Geovistory</h1>
                    <p className={styles.slogan}>
                      Virtual Research Environment for Humanities and Social
                      Sciences
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
                        el?.addEventListener(
                          'keypress',
                          (event: KeyboardEvent) => {
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
                          }
                        );
                      }}
                    ></ion-searchbar>
                    <h3 className={styles.subheading + ' ion-hide-md-down'}>
                      Featured Projects
                    </h3>
                  </ion-col>
                  <ion-col>
                    <geov-carousel
                      class={styles.carousel}
                      ref={(carousel?: Components.GeovCarousel) => {
                        if (carousel)
                          carousel.images = [
                            '/carousel/1200/carousel-1_maquette-lugdunum.jpg',
                            '/carousel/1200/carousel-2_tapisserie-bayeux.jpg',
                            '/carousel/1200/carousel-3_vitrail.jpg',
                            '/carousel/1200/carousel-4_astrolabe-arabe.jpg',
                            '/carousel/1200/carousel-5_quetzalcoatl.jpg',
                            '/carousel/1200/carousel-6_bronzes-benin.jpg',
                            '/carousel/1200/carousel-7_carte-amerique.jpg',
                            '/carousel/1200/carousel-8_assemble-vizille.jpg',
                            '/carousel/1200/carousel-9_acte-deces.jpg',
                            '/carousel/1200/carousel-10_guerre-russo-japonaise.jpg',
                            '/carousel/1200/carousel-11_congret-musique.jpg',
                            '/carousel/1200/carousel-12_toronto.jpg',
                          ];
                      }}
                    ></geov-carousel>
                  </ion-col>
                </ion-row>
              </ion-grid>
            </div>

            <div className={'ion-hide-md-up'}>
              <h3 className={styles.subheading}>Featured Projects</h3>

              <ion-grid class={styles.featuredProjectsGrid}>
                <ion-row>
                  {props.featuredProjects.map(
                    (proj: ProjectParams, i: number) => (
                      <div
                        key={'project-card-' + i}
                        className={styles.projectCardContainer}
                      >
                        <ProjectCard project={proj} />
                      </div>
                    )
                  )}
                </ion-row>
              </ion-grid>
            </div>
          </ion-grid>{' '}
          <div
            className={styles.featuredProjectsContainer + ' ion-hide-md-down'}
          >
            <swiper-container
              slides-per-view="auto"
              grab-cursor={true}
              space-between="0"
              navigation={true}
            >
              {props.featuredProjects.map((proj: ProjectParams, i: number) => (
                <swiper-slide
                  key={'project-card-' + i}
                  className={styles.projectCardContainer}
                  style={{ width: '295px' }}
                >
                  <ProjectCard project={proj} height={280} />
                </swiper-slide>
              ))}
            </swiper-container>
          </div>
        </div>
      }
    ></DefaultPage>
  );
};

export default Home;
export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const featuredProjects = projectsParams.filter((pp) => pp.featured);
  return {
    props: {
      featuredProjects,
      defaultPage: {
        headTitle: 'Geovistory',
        headOgDescription:
          'Virtual Research Environment for Humanities and Social Sciences',
        footer: {
          featuredProjects,
        },
      },
    },
    revalidate: 86400,
  };
};
