import { openOutline, rocketOutline } from 'ionicons/icons';
import type { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import {
  DefaultPage,
  DefaultPageProps,
} from '../components/layouts/DefaultPage.component';
import { projectsParams } from '../lib/projectParams';
import styles from './data.module.css';
export interface ResourcesProps {
  defaultPage: DefaultPageProps;
}
const Resources: NextPage<ResourcesProps> = (props) => {
  const router = useRouter();

  return (
    <DefaultPage
      {...props.defaultPage}
      noPaddingSlot={
        <div className={styles.container}>
          <ion-grid class={`ion-padding ${styles.banner}`}>
            <h1 className={styles.title1}>
              Data. Open and FAIR
              {/* <ion-button href="" fill="none">
                <ion-icon icon={rocketOutline}></ion-icon>
              </ion-button> */}
            </h1>
            <p className={styles.title2 + ' lead'}>
              Created by the Geovistory Community{' '}
            </p>
          </ion-grid>
          <ion-grid class={`ion-padding ${styles.banner2}`}>
            <ion-buttons class={`restricted-width ${styles.searchbar}`}>
              <ion-searchbar
                color="light"
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
            </ion-buttons>
          </ion-grid>
          <ion-grid class={`ion-padding ${styles.banner}`}>
            <h3>Tools</h3>
            <ion-row class="restricted-width">
              <ion-col size="12" size-md="6">
                <ion-card href="/sparql">
                  <ion-card-header>
                    <ion-card-title>SPARQL client</ion-card-title>
                  </ion-card-header>
                  <div className={styles.imgContainer}>
                    <Image
                      className={styles.img}
                      src="/sparql-code.jpg"
                      alt="Sparl code image"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <ion-card-content>
                    <div slot="start"></div>
                    Query and analyze the data with SPARQL, the RDF query
                    language.
                  </ion-card-content>
                </ion-card>
              </ion-col>
              <ion-col size="12" size-md="6">
                <ion-card
                  target="_blank"
                  href="https://sparklis.geovistory.org/?title=Geovistory%20Communtiy%20Data&endpoint=https%3A//sparql.geovistory.org/api_v1_community_data&entity_lexicon_select=http%3A//www.w3.org/2000/01/rdf-schema%23label&concept_lexicons_select=http%3A//www.w3.org/2000/01/rdf-schema%23label"
                >
                  <ion-card-header>
                    <ion-card-title>
                      Sparklis
                      <ion-icon
                        style={{ position: 'absolute', right: 0 }}
                        icon={openOutline}
                      />
                    </ion-card-title>
                  </ion-card-header>
                  <div className={styles.imgContainer}>
                    <Image
                      className={styles.imgSparklis}
                      src="/sparklis.png"
                      alt="Sparklis image"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <ion-card-content>
                    Build queries in natural language with Sparklis.
                  </ion-card-content>
                </ion-card>
              </ion-col>
            </ion-row>
            <ion-row class="restricted-width">
              <ion-col size="12" size-md="6">
                <ion-card disabled>
                  <ion-card-header>
                    <ion-card-title>More tools</ion-card-title>
                  </ion-card-header>
                  <div className={styles.imgContainer}>
                    <Image
                      className={styles.img}
                      src="/sparql-code.jpg"
                      alt="Sparl code image"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <ion-card-content>
                    We work on the integration of more tools...
                  </ion-card-content>
                </ion-card>
              </ion-col>
            </ion-row>
          </ion-grid>
        </div>
      }
    ></DefaultPage>
  );
};

export default Resources;
export const getStaticProps: GetStaticProps<ResourcesProps> = async () => {
  return {
    props: {
      defaultPage: {
        headTitle:"Community Data",
        footer: {
          featuredProjects: projectsParams.filter((pp) => pp.featured),
        },
      },
    },
    revalidate: 86400,
  };
};
