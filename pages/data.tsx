import type { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import {
  DefaultPage,
  DefaultPageProps,
} from '../components/layouts/DefaultPage.component';
import { projectsParams } from '../projects/projectParams';
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
          <div className={styles.banner}>
            <h1 className={styles.title1}>Data</h1>
            <h2 className={styles.title2}>Open and FAIR</h2>
            <h3>Created by the Geovistory community. </h3>
          </div>
          <div className={styles.banner2}>
            <ion-buttons class={`restricted-width ${styles.searchbar}`}>
              <ion-searchbar
                color="light"
                enterkeyhint="enter"
                placeholder="Search and hit Enter…"
                ref={(el: any) => {
                    el?.getInputElement().then(()=>{
                        setTimeout(() => {
                          console.log('focus on ',el)
                          el?.setFocus();
                        },300);
                    })
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
          </div>
          <div className={styles.banner}>
            <h2>Tools</h2>
            <ion-grid>
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
        footer: {
          featuredProjects: projectsParams.filter((pp) => pp.featured),
        },
      },
    },
    revalidate: 86400,
  };
};
