import { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { Person } from '../../../components/elements/Person.component';
import { ProjectPageLayout } from '../../../components/layouts/ProjectPageLayout.component';
import { KleiolabLogo } from '../../../components/logos/KleiolabLogo';
import { PlatGeoEhessLogo } from '../../../components/logos/PlatGeoEhessLogo';
import { ProjectPageProps } from '../../../pages/project/[geov_id]';
import bannerImg from '../../../public/romas-deportation.jpg';
import { IrisLogo } from '../../../components/logos/IrisLogo';
import styles from './romas-deportation.module.css';
import { FondationSouhaLogo } from '../../../components/logos/FondationSouhaLogo';
import { UshmmLogo } from '../../../components/logos/UshmmLogo';

const RomasDeportation_component: NextPage<ProjectPageProps> = (props) => {
  const router = useRouter();

  return (
    <div className={styles.theme}>
      <ProjectPageLayout {...props.projectPageLayout}>
        <div className={styles.bannerContainer}>
          <Image
            className={styles.bannerImage}
            src={bannerImg}
            placeholder="blur"
            alt="Roma's deportation"
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
              Roma&apos;s deportation to Transnistria, 1942-1944
            </div>
          </h1>
        </div>
        <ion-grid fixed class="ion-padding">
          <p className="lead">Individual trajectories, and collective fates.</p>{' '}
          <p>
            In order to capture the dislocated world of Romanian Roma during the
            Second World War, we are reconstructing the spatial and social
            trajectories of the 25,500 Romanian Roma deported by the Romanian
            government to the governorate of Transnistria between 1942 and 1944.
            <br />
            The project is funded by the{' '}
            <i>Fondation pour la mémoire de la Shoah.</i>
          </p>
          <h4>Mention RGPD</h4>
          <p>
            The exercise of the rights of access and rectification of personal
            data contained in the database can be done by simple request by
            email to Grégoire Cousin: gregoire.cousin[at]ehess.fr
          </p>
          <h4>Involved People</h4>
          <p>
            <ion-row>
              <ion-col size="6">
                <Person
                  name="Dr Grégoire Cousin"
                  description="Main researcher"
                />
              </ion-col>
              <ion-col size="6">
                <Person
                  name="Dr Jean-Victor Boby"
                  description="Digital humanities fellow"
                />
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col size="6">
                <Person
                  name="Dr Ilsen About"
                  description="Project's supervisor"
                />
              </ion-col>
              <ion-col size="6">
                <Person
                  name="Dr Carmen Brando"
                  description="Data managing advisor"
                />
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col size="6">
                <Person
                  name="Dr. Habil. Francesco Beretta"
                  description="Chargé de recherche, CNRS, LARHRA"
                />
              </ion-col>
              <ion-col size="6">
                <Person
                  name="Gaétan Muck"
                  description="Data Analyst KleioLab"
                />
              </ion-col>
            </ion-row>
          </p>
          <h4>Institutional Partners</h4>
          <p>
            <ion-row>
              <ion-col size="4">
                <FondationSouhaLogo />
              </ion-col>
              <ion-col size="4">
                <IrisLogo />
              </ion-col>
              <ion-col size="4">
                <PlatGeoEhessLogo />
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col size="4">
                <UshmmLogo />
              </ion-col>
              <ion-col size="4">
                <KleiolabLogo />
              </ion-col>
            </ion-row>
          </p>
        </ion-grid>
      </ProjectPageLayout>
    </div>
  );
};

export default RomasDeportation_component;
