import { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Person } from '../../../components/elements/Person.component';
import { ProjectPageLayout } from '../../../components/layouts/ProjectPageLayout.component';
import { KleiolabLogo200 } from '../../../components/logos/KleiolabLogo200';
import { SnfLogo200 } from '../../../components/logos/SnfLogo200';
import { UniNe200 } from '../../../components/logos/UniNeLogo200';
import { ProjectPageProps } from '../../../pages/project/[geov_id]';
import bannerImg from '../../../public/enfants-du-placard.jpg';
import styles from './enfants-du-placard.module.css';

const EnfantsDuPlacard_component: NextPage<ProjectPageProps> = (props) => {
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
        </div>
        <ion-grid fixed class="ion-padding">
          <h1>{props.params.fullName}</h1>
          <p className="lead">
            Une socio-histoire des gens qui migrent (1946-2002)
          </p>
          <p>
            Dans l’après-guerre en Suisse, des enfants ont vécu dans la
            clandestinité. Le statut de saisonnier – qui exclut le regroupement
            familial – est alors au cœur du régime migratoire. Un contexte de
            précarité pour les familles dans lequel les enfants vivent séparés
            de leurs parents ou parfois « cachés ». Ce projet de recherche vise
            à éclairer la diversité de ces situations, en particulier le vécu et
            les parcours, encore très peu connus, desdits « enfants du placard
            ».
          </p>
          <p>
            La recherche se base sur des méthodes analytiques qualitatives et
            quantitatives et interroge des sources multiples et variées :
            documents d’archives étatiques, des récits et enquêtes
            psychologiques, sociologiques ou encore journalistiques effectuées
            depuis les années 1970, ainsi que sur les sources orales.
          </p>
          <p>
            Plus d&apos;informations sur{' '}
            <a
              href="https://www.unine.ch/histoire/home/recherche-1/une-socio-histoire-des-gens-qui.html"
              target="_blank"
              rel="noreferrer"
            >
              le site du projet
            </a>{' '}
            de l&apos;Université de Neuchâtel.{' '}
          </p>
          <p>
            Le projet travaille avec{' '}
            <a
              href="https://toolbox.geovistory.org"
              target="_blank"
              rel="noreferrer"
            >
              Geovistory Toolbox
            </a>{' '}
            pour créer, gérer et publier ses données de recherche. Plus
          </p>
        </ion-grid>
        <ion-grid class={styles.section}>
          <h3>Involved People</h3>
          <ion-row class="restricted-width">
            <ion-col size="6">
              <Person
                name="Prof.e Kristina Schulz"
                description="directrice du projet"
              />
            </ion-col>
            <ion-col size="6">
              <Person name="Magali Michelet" description="doctorante FNS" />
            </ion-col>
            <ion-col size="6">
              <Person
                name="Dr.e Sarah Kiani"
                description="collaboratrice scientifique du projet"
              />
            </ion-col>

            <ion-col size="6">
              <Person
                name="Dr. Simone Visconti"
                description="collaborateur scientifique du projet"
              />
            </ion-col>
            <ion-col size="6">
              <Person name="Marie Bouvier" description="assistante-étudiante" />
            </ion-col>
            <ion-col size="6">
              <Person
                name="Guillaume de Pury"
                description="assistante-étudiant"
              />
            </ion-col>
          </ion-row>
        </ion-grid>
        <ion-grid class={styles.sectionGray}>
          <h3>Funding agencies and partners</h3>
          <div className={styles.partners}>
            <ion-row>
              <ion-col
                size="4"
                style={{ display: 'flex' }}
                class="ion-justify-content-center"
              >
                <ion-card href="https://www.snf.ch/" target="_blank">
                  <div
                    style={{ display: 'flex', background: 'white' }}
                    className="ion-justify-content-center"
                  >
                    <SnfLogo200 />
                  </div>
                </ion-card>
              </ion-col>
              <ion-col
                size="4"
                style={{ display: 'flex' }}
                class="ion-justify-content-center"
              >
                <ion-card href="https://www.unine.ch" target="_blank">
                  <div
                    style={{ display: 'flex', background: 'white' }}
                    className="ion-justify-content-center"
                  >
                    <UniNe200 />
                  </div>
                </ion-card>
              </ion-col>
              <ion-col
                size="4"
                style={{ display: 'flex' }}
                class="ion-justify-content-center"
              >
                <ion-card href="https://www.kleiolab.ch" target="_blank">
                  <div
                    style={{ display: 'flex', background: 'white' }}
                    className="ion-justify-content-center"
                  >
                    <KleiolabLogo200 />
                  </div>
                </ion-card>
              </ion-col>
            </ion-row>
          </div>
        </ion-grid>
      </ProjectPageLayout>
    </div>
  );
};

export default EnfantsDuPlacard_component;
