import {
  IonButton,
  IonCol,
  IonGrid,
  IonLabel,
  IonRow,
} from '@geovistory/design-system-react';
import { NextPage } from 'next';
import Image from 'next/image';
import { Person } from '../../components/elements/Person.component';
import { ProjectPageLayout } from '../../components/layouts/ProjectPageLayout.component';
import { ProjectPageProps } from '../../pages/project/[geov_id]';
import styles from './ampi.module.css';
const AMPI_component: NextPage<ProjectPageProps> = (props) => {
  // const params = projectsParams.find(pp => pp.geovName == 'AMPI')

  return (
    <div className={styles.theme}>
      <ProjectPageLayout {...props.projectPageLayout}>
        <div className={styles.bannerContainer}>
          <Image
            src="/image_ampi.jpg"
            alt="AMPI top image"
            layout="fill"
            objectFit={'cover'}
          />
          <h1 className={styles.title}>
            <div className={styles.titleLine1}>Tagebücher</div>
            <div className={styles.titleLine2}>Anna Maria</div>
            <div className={styles.titleLine3}>Preiswerk-Iselin</div>
          </h1>
        </div>
        <IonGrid fixed class="ion-padding">
          <p className="lead">
            Digitale Edition der Tagebücher der Anna Maria Preiswerk-Iselin,
            verfasst zwischen 1795 und 1839 (etwa 1200 Seiten).
          </p>

          <p>
            <IonButton expand='block' href={props.params.geovID + '/publication'}>
              Hier geht&apos;s zur Edition
            </IonButton>
          </p>
          <h2>Manuskript</h2>
          <p>
            Anna Maria Preiswerk-Iselin ( * 1758 Basel, ✝ 1840 Basel) war die
            Tochter von Helena Forcart und Isaak Iselin, Schweizer Philosoph,
            Aufklärer und Publizist. Zwischen 1795 und 1839 führte sie Tagebuch.
            Das insgesamt etwa 1200 Seiten umfassende Manuskript befindet sich
            heute im Staatsarchiv Basel-Stadt.
          </p>

          <h2>Transkription</h2>
          <p>
            <IonRow>
              <IonCol>
                <Person
                  name="Dr. Esther Baur"
                  description="Staatsarchivarin Basel-Stadt"
                />
              </IonCol>
              <IonCol>
                <Person
                  name="Dr. des. Andreas Berger"
                  description="Departement Sprach- und Literaturwissenschaften, Universität Basel"
                />
              </IonCol>
            </IonRow>
          </p>
          <h2>Edition und Publikation</h2>
          <h6>Projektleitung</h6>
          <p>
            <IonRow>
              <IonCol>
                <Person
                  name="Prof. Dr. Claudia Opitz-Belakhal"
                  description="Professorin für Geschichte der Frühen Neuzeit, Universität Basel"
                />
              </IonCol>
            </IonRow>
          </p>
          <h6>
            Formatierung, Datenerfassung und semantische Annotation in
            Geovistory
          </h6>
          <p>
            <IonRow>
              <IonCol>
                <Person
                  name="Anna Cristina Münch"
                  description="Projektmitarbeiterin, Universität Basel"
                />
              </IonCol>
              <IonCol>
                <Person
                  name="Selina Bentsch "
                  description="Wissenschaftliche Mitarbeiterin, Doktorandin, Universität Basel"
                />
              </IonCol>
            </IonRow>
          </p>
          <h6>
            Aufbereitung TEI/XML und Entwicklung mit{' '}
            <a
              href="https://teipublisher.com/index.html"
              target="_blank"
              rel="noreferrer"
            >
              TEI-Publisher
            </a>
          </h6>
          <p>
            <IonRow>
              <IonCol>
                <Person
                  name="Dr. habil. Francesco Beretta"
                  description="Chargé de recherche, CNRS, LARHRA"
                />
              </IonCol>
              <IonCol>
                <Person
                  name="Morgane Pica "
                  description="Ingénieure d'études, ENS de Lyon, LARHRA"
                />
              </IonCol>
            </IonRow>
          </p>
          <h6>Technische Umsetzung</h6>
          <p>
            <IonRow>
              <IonCol>
                <Person
                  name="Jonas Schneider"
                  description="CTO, KleioLab GmbH"
                />
              </IonCol>
              <IonCol>
                <Person
                  name="Gaétan Muck"
                  description="Developer, KleioLab GmbH"
                />
              </IonCol>
            </IonRow>
          </p>
          <h2>Beteiligte Organisationen</h2>
          <p>
            <IonRow>
              <IonCol>
                <Image
                  src="/universitat-basel-logo.svg"
                  width={150}
                  height={150}
                  objectFit={'scale-down'}
                  alt="Universität Basel logo"
                />
              </IonCol>
              <IonCol>
                <Image
                  src="/kleiolab-logo.png"
                  width={150}
                  height={150}
                  objectFit={'scale-down'}
                  alt="KleioLab logo"
                />
              </IonCol>
              <IonCol>
                <Image
                  src="/larhra-logo.jpg"
                  width={150}
                  height={150}
                  objectFit={'scale-down'}
                  alt="LARHRA logo"
                />
              </IonCol>
            </IonRow>
          </p>
          <h2>Realisiert mit der Unterstützung von</h2>
          <p>
            <IonRow>
              <IonCol>
                <Image
                  src="/SNF_logo_standard_web_sw_pos_d.png"
                  width={150}
                  height={150}
                  objectFit={'scale-down'}
                  alt="Schweizerischer Nationalfonds logo"
                />
              </IonCol>
              <IonCol>
                <Image
                  src="/FAG_logo_black.png"
                  width={150}
                  height={150}
                  objectFit={'scale-down'}
                  alt="Freiwillige Akademische Gesellschaft Basel"
                />
              </IonCol>
              <IonCol>
                <Image
                  src="/universitat-basel-logo.svg"
                  width={150}
                  height={150}
                  objectFit={'scale-down'}
                  alt="Universität Basel logo"
                />
              </IonCol>
            </IonRow>
          </p>
          <div className="restricted-width">
            <IonLabel>
              <small>
                Bildnachweis: Porträt der Tochter (Anna Maria Preiswerk,
                1778-1797), ⓒ Historisches Museum Basel, Natascha Jansen
              </small>
            </IonLabel>
          </div>
        </IonGrid>
      </ProjectPageLayout>
    </div>
  );
};

export default AMPI_component;
