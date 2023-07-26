import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Person } from '../../components/elements/Person.component';
import { ProcessettiNavbar } from '../../components/project-specific/ProcessettiNavbar.component';
import styles from './index.module.css';

export interface ResourcesProps {}
const Resources: NextPage<ResourcesProps> = (props) => {
  return (
    <>
      <Head>
        <title>Processetti</title>
      </Head>
      <ion-app class={styles.theme}>
        <ion-content>
          <ProcessettiNavbar
            title="Progetto ANR Processetti"
            projectId={591}
          ></ProcessettiNavbar>
          <ion-menu side="start" menu-id="main" content-id="main">
            <ion-header>
              <ion-toolbar class={styles.menuTitle}>
                <ion-title></ion-title>
              </ion-toolbar>
            </ion-header>
            <ion-content>
              <ion-list>
                <ion-item-divider>
                  <ion-label>Banca dati</ion-label>
                </ion-item-divider>
                <ion-item href="processetti/metodologia" lines="full">
                  Metodologia
                </ion-item>
                <ion-item lines="full">
                  ...
                </ion-item>
              </ion-list>
            </ion-content>
          </ion-menu>
          <ion-grid class={styles.banner}>
            <h1>
              Progetto <br /> ANR Processetti
            </h1>
            <div className={styles.bannerImageContainer}>
              <ion-img
                class={styles.bannerImage}
                src="/processetti-main.jpg"
                alt="Progetto ANR Processetti"
              />
            </div>
          </ion-grid>
          <ion-grid class={styles.sectionPrimary}>
            Progetto ANR Processetti
          </ion-grid>
          <ion-grid class={styles.section}>
            <h2>
              Matrimonio e mobilità a Venezia <br /> XVI-XVII secoli
            </h2>
          </ion-grid>
          <ion-grid class={styles.sectionGray}>
            <h3>Presentazione breve del progetto</h3>

            <p>
              Il progetto di ricerca &quot;Processetti&quot;. Matrimonio e mobilità a
              Venezia, XVI-XVIII secolo ha un duplice obiettivo: da un lato, le
              strutture e i percorsi migratori verso Venezia attraverso lo
              sfruttamento delle informazioni contenute nelle inchieste
              prematrimoniali (processetti) a cui venivano sottoposti vedovi e
              stranieri per stabilire il loro stato libero; dall&apos;altro,
              studiare l&apos;attuazione di questa procedura di controllo su
              scala italiana e in una prospettiva comparativa verso il mondo
              ortodosso.
              <br />
              Questo progetto si basa sulla creazione di un database utilizzando
              la piattaforma collaborativa Geovistory fornita dalla società
              svizzera kleiolab.
            </p>
            <p>
              Il sito offre strumenti di ricerca (bibliografia), sviluppa la
              metodologia utilizzata per strutturare i dati e consente di
              visualizzare i risultati dell&apos;indagine riguardanti la
              tipologia dei processetti, la natura delle relazioni che
              intercorrono fra i richiedenti e i loro testimoni, il loro
              mestieri e le loro origini geografiche.
              <br />
              Permette di effettuare semplici interrogazioni.
            </p>
          </ion-grid>
          <ion-grid class={styles.section}>
            <h3>Responsabile scientifico</h3>
            <p>
              <Person
                name="Professeur Jean-François Chauvard"
                description="Professeur d’histoire moderne, Université Paris 1
                  Panthéon-Sorbonne"
              />
            </p>

            <h3>Squadra di ricerca</h3>
            <p>Spoglio archivistisco, banca dati, analisi</p>
            <ion-row class="restricted-width">
              <ion-col size="6">
                <Person
                  name="Francesca Zungo"
                  description="Collaboratrice du projet"
                />
              </ion-col>
              <ion-col size="6">
                <Person
                  name="Davide Drago"
                  description="Collaborateur du projet"
                />
              </ion-col>
            </ion-row>
            <ion-row class="restricted-width">
              <ion-col size="6">
                <Person
                  name="Jacopo Cossu"
                  description="Collaborateur du projet"
                />
              </ion-col>
              <ion-col size="6">
                <Person
                  name="Teresa Bernardi"
                  description="Post-doctorat Université de Padoue"
                />
              </ion-col>
            </ion-row>

            <h3>Partecipanti</h3>
            <ion-row class="restricted-width">
              <ion-col size="6">
                <Person
                  name="Prof. Alfredo Viggiano"
                  description="DiSSGeA, Università di Padova"
                />
              </ion-col>
              <ion-col size="6">
                <Person
                  name="Anna Athanasouli"
                  description="Università di Creta"
                />
              </ion-col>
            </ion-row>
            <ion-row class="restricted-width">
              <ion-col size="6">
                <Person
                  name="Prof. Anna Bellavitis"
                  description="Université de Rouen"
                />
              </ion-col>
              <ion-col size="6">
                <Person
                  name="Paola Benussi"
                  description="Archivio di Stato di Venezia"
                />
              </ion-col>
            </ion-row>
            <ion-row class="restricted-width">
              <ion-col size="6">
                <Person
                  name="Dr. Habil. Francesco Beretta"
                  description="CNRS-LARHRA"
                />
              </ion-col>
              <ion-col size="6">
                <Person
                  name="Eleonora Canepari"
                  description="Aix Marseille Université"
                />
              </ion-col>
            </ion-row>
            <ion-row class="restricted-width">
              <ion-col size="6">
                <Person
                  name="Prof. Andrea Caracausi"
                  description="DiSSGeA, Università di Padova"
                />
              </ion-col>
              <ion-col size="6">
                <Person
                  name="Katerina Korrè"
                  description="Università di Corfu"
                />
              </ion-col>
            </ion-row>
            <ion-row class="restricted-width">
              <ion-col size="6">
                <Person
                  name="Katerina Konstantinidou"
                  description="National and Kapodistrian University of Athens"
                />
              </ion-col>
              <ion-col size="6">
                <Person
                  name="Laura Levantino"
                  description="Archivio storico del Patriarcato di Venezia"
                />
              </ion-col>
            </ion-row>
            <ion-row class="restricted-width">
              <ion-col size="6">
                <Person
                  name="Water Panciera"
                  description="Università di Padova"
                />
              </ion-col>
            </ion-row>
          </ion-grid>
          <ion-grid class={styles.sectionGray}>
            <h3>Partner istituzionali</h3>
            <div className={styles.partners}>
              <ion-row>
                <ion-col
                  size="4"
                  style={{ display: 'flex' }}
                  class="ion-justify-content-center"
                >
                  <ion-card
                    href="http://www.agence-nationale-recherche.fr/"
                    target="_blank"
                  >
                    <div
                      style={{ display: 'flex', background: 'white' }}
                      className="ion-justify-content-center"
                    >
                      <Image
                        src="/logo_ANR.gif"
                        width={200}
                        height={200}
                        objectFit={'scale-down'}
                        alt="Logo Agence Nationale de la Recherche"
                      />
                    </div>
                  </ion-card>
                </ion-col>
                <ion-col
                  size="4"
                  style={{ display: 'flex' }}
                  class="ion-justify-content-center"
                >
                  <ion-card href="http://resefe.fr/" target="_blank">
                    <div
                      style={{ display: 'flex', background: 'white' }}
                      className="ion-justify-content-center"
                    >
                      <Image
                        src="/Logo_efr.png"
                        width={200}
                        height={200}
                        objectFit={'scale-down'}
                        alt="Logo Ecole Française de Rome"
                      />
                    </div>
                  </ion-card>
                </ion-col>

                <ion-col
                  size="4"
                  style={{ display: 'flex' }}
                  class="ion-justify-content-center"
                >
                  <ion-card href="#" target="_blank">
                    <div
                      style={{ display: 'flex', background: 'white' }}
                      className="ion-justify-content-center"
                    >
                      <Image
                        src="/logo_ekpa.png"
                        width={200}
                        height={200}
                        objectFit={'scale-down'}
                        alt="Logo University of Athens"
                      />
                    </div>
                  </ion-card>
                </ion-col>
              </ion-row>
              <ion-row>
                <ion-col
                  size="4"
                  style={{ display: 'flex' }}
                  class="ion-justify-content-center"
                >
                  <ion-card href="https://www.unipd.it/" target="_blank">
                    <div
                      style={{ display: 'flex', background: 'white' }}
                      className="ion-justify-content-center"
                    >
                      <Image
                        src="/Logo_padova.png"
                        width={200}
                        height={200}
                        objectFit={'scale-down'}
                        alt="Logo Università Delgli Studi Di Padova"
                      />
                    </div>
                  </ion-card>
                </ion-col>

                <ion-col
                  size="4"
                  style={{ display: 'flex' }}
                  class="ion-justify-content-center"
                >
                  <ion-card href="#h" target="_blank">
                    <div
                      style={{ display: 'flex', background: 'white' }}
                      className="ion-justify-content-center"
                    >
                      <Image
                        src="/Logo_sga.png"
                        width={200}
                        height={200}
                        objectFit={'scale-down'}
                        alt="Logo DiSSGeA"
                      />
                    </div>
                  </ion-card>
                </ion-col>
                <ion-col
                  size="4"
                  style={{ display: 'flex' }}
                  class="ion-justify-content-center"
                >
                  <ion-card href="http://www.efa.gr/" target="_blank">
                    <div
                      style={{ display: 'flex', background: 'white' }}
                      className="ion-justify-content-center"
                    >
                      <Image
                        src="/LOGO-EFA-CT-72.jpg"
                        width={200}
                        height={200}
                        objectFit={'scale-down'}
                        alt="Logo Ecole Française d'Athènes"
                      />
                    </div>
                  </ion-card>
                </ion-col>
              </ion-row>
              <ion-row>
                <ion-col
                  size="4"
                  style={{ display: 'flex' }}
                  class="ion-justify-content-center"
                >
                  <ion-card
                    href="http://larhra.ish-lyon.cnrs.fr/"
                    target="_blank"
                  >
                    <div
                      style={{ display: 'flex', background: 'white' }}
                      className="ion-justify-content-center"
                    >
                      <Image
                        src="/larhra-bleu-blanc-full.jpg"
                        width={200}
                        height={200}
                        objectFit={'scale-down'}
                        alt="Logo LARHRA"
                      />
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
                      <Image
                        src="/kleiolab-logo.png"
                        width={200}
                        height={200}
                        objectFit={'scale-down'}
                        alt="KleioLab logo"
                      />
                    </div>
                  </ion-card>
                </ion-col>
              </ion-row>
            </div>
          </ion-grid>
          <ion-grid fixed class={styles.section}>
            <h3>Sviluppo del progetto</h3>
            <geov-mermaid>
              {`
              %%{
                init: {
                  'theme': 'base',
                  'themeVariables': {
                    'cScale0':'#ffebac',
                    'cScaleLabel0': '#000',
                    'cScale1':'#d0d9d9',
                    'cScaleLabel1': '#000',
                    'cScale2':'#ffebac',
                    'cScaleLabel2': '#000',
                    'fontFamily': 'Roboto,RobotoDraft,Helvetica,Arial,sans-serif'          
                  }
                }
              }%%
              
              timeline
                section 2019
                  2019: Fornitura della piattaforma Geovistory da parte della società svizzera Kleiolab
                section 2020-2022 <br> Spoglio archivistico presso l’Archivio storico patriarcale di Venezia. Trascrizione, annotazione semantica, strutturazione dei dati
                  2020: Reclutamento di tre studiosi (J. Cossu, F. Zugno, D. Drago) per una collaborazione della durata di tre anni Contratto post-doc per Teresa Bernardi (Università di Padova, Dipartimento DiSSGeA, progetto di eccellenza "Mobility & Humanities")
                  2021: Missioni di ricerca presso gli archivi  di Anna Athanasouli (Università di Creta), Katerina Konstantinidou (National and Kapodistrian University of Athens) e Katerina Korrè (Università di Corfu).
                      : Giornata di studi Contrôle pré-matrimonial, bigamie et mariages mixtes en Europe orientale, 10 t 11 settembre 2021 all’Università nazionale capodistriana di Atene e all’École française d’Athènes.
                  2022: Convegno Disciplinare il matrimonio, tracciare la mobilità, riconoscere le relazioni.
                      : Esami prematrimoniali nel mondo cattolico (XVI-XVIII secolo), organizzato all'Università di Padova, 27-28 ottobre 2022.
                section 2023
                  2023: Analisi dei dati di Jacopo Cossu.
                      : Consegna di un libro sul controllo dello stato libero dalla Casa Editrice Viella
          `}
            </geov-mermaid>
          </ion-grid>
        </ion-content>
      </ion-app>
    </>
  );
};

export default Resources;
export const getStaticProps: GetStaticProps<ResourcesProps> = async () => {
  return { props: {} };
};
