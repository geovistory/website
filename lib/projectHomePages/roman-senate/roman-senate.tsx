import { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { Person } from '../../../components/elements/Person.component';
import { ProjectPageLayout } from '../../../components/layouts/ProjectPageLayout.component';
import { KleiolabLogo200 } from '../../../components/logos/KleiolabLogo200';
import { SnfLogo200 } from '../../../components/logos/SnfLogo200';
import { UniZhLogo200 } from '../../../components/logos/UniZhLogo200';
import { ProjectPageProps } from '../../../pages/project/[geov_id]';
import bannerImg from '../../../public/roman-senate.jpg';
import styles from './roman-senate.module.css';

const RomanSenate_component: NextPage<ProjectPageProps> = (props) => {
  const router = useRouter();

  return (
    <div className={styles.theme}>
      <ProjectPageLayout {...props.projectPageLayout}>
        <div className={styles.bannerContainer}>
          <Image
            className={styles.bannerImage}
            src={bannerImg}
            placeholder="blur"
            alt="Roman Forum"
            layout="fill"
            objectFit={'cover'}
          />
          <ion-searchbar
            class="restricted-width"
            color="light"
            enterkeyhint="enter"
            placeholder="Search and hit enter…"
            ref={(el: any) => {
              setTimeout(() => {
                el?.getInputElement().then(() => {
                  console.log('focus on ', el);
                  el?.setFocus();
                });
              }, 300);
              el?.addEventListener('keypress', (event: KeyboardEvent) => {
                if (event.key === 'Enter') {
                  el?.getInputElement().then((inputEl: HTMLInputElement) => {
                    console.log(inputEl?.value);
                    router.push({
                      pathname: `${props.params.geovID}/search`,
                      query: { term: inputEl?.value },
                    });
                  });
                }
              });
            }}
          ></ion-searchbar>
          <h1 className={styles.title}>
            <div className={styles.titleLine1}>
              The Roman senate under the tetrarchs
            </div>
          </h1>
        </div>
        <ion-grid fixed class="ion-padding">
          <p className="lead">
            A prosopographical collection of members of the senatorial order
            from 284-306 CE.
          </p>
          <p>
            The reign of the tetrarchs marks the end of the so-called Crisis of
            the third century CE by estab-lishing new political and military
            orders. In this context, the composition, functions and political
            significance of the Roman senatorial rank also changed.{' '}
          </p>
          <p>
            The present database aims to provide insights into the activities as
            well as the political position of members of the Senate between
            284-305/306. Geovistory offers the opportunity to study the careers
            (<i>cursus honorum</i>) as well as the social and geographical
            origins of <i>viri clarissimi</i> as well as the collective
            activities of distinguished senatorial office-holders.{' '}
          </p>
          <p className="ion-text-center">
            <ion-button color="primary" href={`${props.params.geovID}/search`}>
              Access data
            </ion-button>
          </p>
          <p>
            Anotated source texts as well as results of current research were
            taken into account while creat-ing the platform. Network analytical
            visualizations are in planning.{' '}
          </p>
          <h4>Involved People</h4>
          <ion-row class="restricted-width">
            <ion-col size="6">
              <Person name="Dr. Nikolas Hächler" description="" />
            </ion-col>
            <ion-col size="6">
              <Person name="Jonas Schneider M.A." description="" />
            </ion-col>
          </ion-row>
          <ion-row class="restricted-width">
            <ion-col size="6">
              <Person name="David Knecht M.A." description="" />
            </ion-col>
          </ion-row>
          <h4>Institutional Partners</h4>
          <p>
            <ion-row>
              <ion-col
                size="4"
                style={{ display: 'flex' }}
                class="ion-justify-content-center"
              >
                <ion-card
                  href="https://www.hist.uzh.ch/de/fachbereiche/altegeschichte.html"
                  target="_blank"
                >
                  <div
                    style={{ display: 'flex', background: 'white' }}
                    className="ion-justify-content-center"
                  >
                    <UniZhLogo200 />
                  </div>
                </ion-card>
              </ion-col>
              <ion-col
                size="4"
                style={{ display: 'flex' }}
                class="ion-justify-content-center"
              >
                <ion-card href="https://kleiolab.ch" target="_blank">
                  <div
                    style={{ display: 'flex', background: 'white' }}
                    className="ion-justify-content-center"
                  >
                    <KleiolabLogo200 />
                  </div>
                </ion-card>
              </ion-col>
              <ion-col
                size="4"
                style={{ display: 'flex' }}
                class="ion-justify-content-center"
              >
                <ion-card href="https://www.snf.ch/" target="_blank">
                  <div
                    style={{
                      display: 'flex',
                      background: 'white',
                      paddingLeft: '.5rem',
                    }}
                    className="ion-justify-content-center"
                  >
                    <SnfLogo200 />
                  </div>
                </ion-card>
              </ion-col>
            </ion-row>
          </p>
          <p>
            <ion-label>
              <small>
                Photo credit: <br />{' '}
                <a
                  href="https://de.wikipedia.org/wiki/Forum_Romanum#/media/Datei:Forum_romanum_6k_(5760x2097).jpg"
                  target="_blank"
                  rel="noreferrer"
                >
                  Blick auf das Forum Romanum von den Kapitolinischen Museen aus
                  (aufgenommen 2012)
                </a>
                , CC BY-SA 3.0
              </small>
            </ion-label>
          </p>
        </ion-grid>
      </ProjectPageLayout>
    </div>
  );
};

export default RomanSenate_component;
