import { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Person } from '../../../components/elements/Person.component';
import { ProjectPageLayout } from '../../../components/layouts/ProjectPageLayout.component';
import { KleiolabLogo } from '../../../components/logos/KleiolabLogo';
import { LarhraLogo } from '../../../components/logos/LarhraLogo';
import { SnfLogo } from '../../../components/logos/SnfLogo';
import { UnibasLogo } from '../../../components/logos/UnibasLogo';
import { ProjectPageProps } from '../../../pages/project/[geov_id]';
import ampiImg from '../../../public/image_ampi.jpg';
import styles from './ampi.module.css';
import { FagLogo } from '../../../components/logos/FagLogo';
const AMPI_component: NextPage<ProjectPageProps> = (props) => {
  const router = useRouter();

  return (
    <div className={styles.theme}>
      <ProjectPageLayout {...props.projectPageLayout}>
        <div className={styles.bannerContainer}>
          <Image
            src={ampiImg}
            placeholder="blur"
            alt="AMPI top image"
            layout="fill"
            objectFit={'cover'}
          />
          <ion-searchbar
            class={`restricted-width ${styles.searchbar}`}
            color="light"
            enterkeyhint="enter"
            placeholder="Suchen und enter drücken…"
            ref={(el: any) => {
              el?.getInputElement().then(() => {
                setTimeout(() => {
                  console.log('focus on ', el);
                  el?.setFocus();
                }, 300);
              });
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
            <div className={styles.titleLine1}>Tagebücher</div>
            <div className={styles.titleLine2}>Anna Maria</div>
            <div className={styles.titleLine3}>Preiswerk-Iselin</div>
          </h1>
        </div>
        <ion-grid fixed class="ion-padding">
          <p className="lead">
            Digitale Edition der Tagebücher der Anna Maria Preiswerk-Iselin,
            verfasst zwischen 1795 und 1839 (etwa 1200 Seiten).
          </p>
          <p>
            Die Edition umfasst Texte sowie strukturierte Daten zu Personen,
            Orten, bibliographischen Angaben und Schlagworten, die in den Texten
            annotiert sind.
          </p>
          <p>
            <ion-button href={props.params.geovID + '/publication'}>
              Hier geht&apos;s zur Edition
            </ion-button>
            <ion-button href={props.params.geovID + '/search'}>
              Hier geht&apos;s zur Suche in den Daten
            </ion-button>
          </p>
          <p>
            Tipp: Die Suchresultate lassen sich nach Klasse filtern, wie zum
            Beispiel:
            <ul>
              <li>
                <code>Person</code> für Personen
              </li>
              <li>
                <code>Geographical Place</code> für Orte
              </li>
              <li>
                <code>Manifestation Product Type</code> für bibliographische
                Angaben
              </li>
              <li>
                <code>Tag</code> für Schlagworte
              </li>
            </ul>
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
            <ion-row>
              <ion-col>
                <Person
                  name="Dr. Esther Baur"
                  description="Staatsarchivarin Basel-Stadt"
                />
              </ion-col>
              <ion-col>
                <Person
                  name="Dr. des. Andreas Berger"
                  description="Departement Sprach- und Literaturwissenschaften, Universität Basel"
                />
              </ion-col>
            </ion-row>
          </p>
          <h2>Edition und Publikation</h2>
          <h6>Projektleitung</h6>
          <p>
            <ion-row>
              <ion-col>
                <Person
                  name="Prof. Dr. Claudia Opitz-Belakhal"
                  description="Professorin für Geschichte der Frühen Neuzeit, Universität Basel"
                />
              </ion-col>
            </ion-row>
          </p>
          <h6>
            Formatierung, Datenerfassung und semantische Annotation in
            Geovistory
          </h6>
          <p>
            <ion-row>
              <ion-col>
                <Person
                  name="Anna Cristina Münch"
                  description="Projektmitarbeiterin, Universität Basel"
                />
              </ion-col>
              <ion-col>
                <Person
                  name="Selina Bentsch "
                  description="Wissenschaftliche Mitarbeiterin, Doktorandin, Universität Basel"
                />
              </ion-col>
            </ion-row>
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
            <ion-row>
              <ion-col>
                <Person
                  name="Dr. habil. Francesco Beretta"
                  description="Chargé de recherche, CNRS, LARHRA"
                />
              </ion-col>
              <ion-col>
                <Person
                  name="Morgane Pica "
                  description="Ingénieure d'études, ENS de Lyon, LARHRA"
                />
              </ion-col>
            </ion-row>
          </p>
          <h6>Technische Umsetzung</h6>
          <p>
            <ion-row>
              <ion-col>
                <Person
                  name="Jonas Schneider"
                  description="CTO, KleioLab GmbH"
                />
              </ion-col>
              <ion-col>
                <Person
                  name="Gaétan Muck"
                  description="Developer, KleioLab GmbH"
                />
              </ion-col>
            </ion-row>
          </p>
          <h2>Beteiligte Organisationen</h2>
          <p>
            <ion-row>
              <ion-col>
                <UnibasLogo />
              </ion-col>
              <ion-col>
                <KleiolabLogo />
              </ion-col>
              <ion-col>
                <LarhraLogo />
              </ion-col>
            </ion-row>
          </p>
          <h2>Realisiert mit der Unterstützung von</h2>
          <p>
            <ion-row>
              <ion-col>
                <SnfLogo />
              </ion-col>
              <ion-col>
                <FagLogo />
              </ion-col>
              <ion-col>
                <UnibasLogo />
              </ion-col>
            </ion-row>
          </p>
          <div className="restricted-width">
            <ion-label>
              <small>
                Bildnachweis: Porträt der Tochter (Anna Maria Preiswerk,
                1778-1797), ⓒ Historisches Museum Basel, Natascha Jansen
              </small>
            </ion-label>
          </div>
        </ion-grid>
      </ProjectPageLayout>
    </div>
  );
};

export default AMPI_component;
