import type { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import { Person } from "../../components/elements/Person.component";
import { HeadProps } from "../../components/layouts/DefaultHead";
import { AnrLogo200 } from "../../components/logos/AnrLogo200";
import { EcoleFrancaisRomeLogo200 } from "../../components/logos/EcoleFrancaisRomeLogo200";
import { ProcessettiBanner } from "../../components/project-specific/ProcessettiBanner.component";
import { ProcessettiLayout } from "../../components/project-specific/ProcessettiLayout.component";
import styles from "./index.module.css";

export interface ResourcesProps {
  head: HeadProps;
}
const Resources: NextPage<ResourcesProps> = (props) => {
  return (
    <ProcessettiLayout head={props.head}>
      <ion-grid class={styles.section}>
        <h2>
          Matrimonio e mobilità a Venezia <br /> XVI-XVII secoli
        </h2>
      </ion-grid>
      <ion-grid class={styles.sectionGray}>
        <h3>Presentazione del progetto</h3>

        <p>
          Il progetto di ricerca{" "}
          <i>
            &quot;Processetti&quot;. Matrimonio e mobilità a Venezia, XVI-XVIII
            secolo
          </i>{" "}
          ha un duplice obiettivo: da un lato, indagare le strutture e i
          percorsi migratori verso Venezia, attraverso lo sfruttamento delle
          informazioni contenute nelle inchieste prematrimoniali (
          <i>processetti</i>) a cui venivano sottoposti vedovi e stranieri per
          stabilire il loro stato libero; dall&apos;altro, studiare
          l&apos;attuazione di questa specifica procedura di controllo su scala
          italiana e, in prospettiva comparativa, nel mondo ortodosso.
          <br />
          Il progetto, nella persistente tensione tra la complessa natura del
          contenuto documentario e la necessità di un trattamento dei dati
          storici in una prospettiva integrata - tanto qualitativa quanto
          quantitativa -, ha previsto la creazione di un <i>database</i> ospitato dalla
          piattaforma collaborativa Geovistory, realizzata e messa a
          disposizione dalla società svizzera KleioLab.
          <br />
          L&apos;implementazione contenutistica della base di dati, condotta nel
          corso di un triennio, ha ampiamente beneficiato della attiva
          collaborazione dell&apos;Archivio Storico del Patriarcato di Venezia
          che, oltre ad aver agevolato l&apos;accesso alle fonti documentarie, ha messo
          a disposizione del <i>team</i> di ricerca anche l&apos;imprescindibile{" "}
          <i>expertise</i> archivistico e paleografico.
        </p>
        <p>
          Il sito intende offrire strumenti di ricerca (bibliografia), esporre
          sinteticamente la metodologia utilizzata nell&apos;estrinsecazione e
          strutturazione dei dati storici e consentire la visualizzazione di
          parte dei risultati di indagine, inclusi la tipologia dei
          processetti, la natura delle relazioni che intercorrono fra i
          richiedenti e i loro testimoni, le professioni e le origini
          geografiche dei soggetti registrati.
          <br />Attraverso specifici strumenti di ricerca, il sito offre inoltre la possibilità
          di effettuare semplici interrogazioni esplorative e consultare
          i dati raccolti, anche nelle loro molteplici interdipendenze.
        </p>
       {/* A Elisa, ragione ultima di ogni mio sforzo. Jacopo */}
      </ion-grid>
      <ion-grid class={styles.section}>
        <h3>Responsabile scientifico</h3>
        <p>
          <Person
            name="Professeur Jean-François Chauvard"
            description="Université Paris 1
                  Panthéon-Sorbonne"
          />
        </p>

        <h3>Squadra di ricerca</h3>
        <p>Spoglio archivistisco, banca dati, analisi</p>
        <ion-row class="restricted-width">
          <ion-col size="6">
            <Person
              name="Francesca Zungo"
              description="Collaboratrice del progetto"
            />
          </ion-col>
          <ion-col size="6">
            <Person name="Davide Drago" description="Collaboratore del progetto" />
          </ion-col>
        </ion-row>
        <ion-row class="restricted-width">
          <ion-col size="6">
            <Person name="Jacopo Cossu" description="Collaboratore del progetto" />
          </ion-col>
          <ion-col size="6">
            <Person
              name="Teresa Bernardi"
              description="Post-doc, DiSSGeA, Università di Padova"
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
            <Person name="Anna Athanasouli" description="Università di Creta" />
          </ion-col>
        </ion-row>
        <ion-row class="restricted-width">
          <ion-col size="6">
            <Person
              name="Prof. Anna Bellavitis"
              description="Università di Rouen-Normandie"
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
              description="LARHRA, CNRS"
            />
          </ion-col>
          <ion-col size="6">
            <Person
              name="Eleonora Canepari"
              description="Aix-Marseille Université"
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
            <Person name="Katerina Korrè" description=" Ionian University" />
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
            <Person name="Water Panciera" description="Università di Padova" />
          </ion-col>
        </ion-row>
      </ion-grid>
      <ion-grid class={styles.sectionGray}>
        <h3>Partner istituzionali</h3>
        <div className={styles.partners}>
          <ion-row>
            <ion-col
              size="4"
              style={{ display: "flex" }}
              class="ion-justify-content-center"
            >
              <ion-card
                href="http://www.agence-nationale-recherche.fr/"
                target="_blank"
              >
                <div
                  style={{ display: "flex", background: "white" }}
                  className="ion-justify-content-center"
                >
                  <AnrLogo200 />
                </div>
              </ion-card>
            </ion-col>
            <ion-col
              size="4"
              style={{ display: "flex" }}
              class="ion-justify-content-center"
            >
              <ion-card href="http://resefe.fr/" target="_blank">
                <div
                  style={{ display: "flex", background: "white" }}
                  className="ion-justify-content-center"
                >
                  <EcoleFrancaisRomeLogo200 />
                </div>
              </ion-card>
            </ion-col>

            <ion-col
              size="4"
              style={{ display: "flex" }}
              class="ion-justify-content-center"
            >
              <ion-card href="#" target="_blank">
                <div
                  style={{ display: "flex", background: "white" }}
                  className="ion-justify-content-center"
                >
                  <Image
                    src="/logo_ekpa.png"
                    width={200}
                    height={200}
                    objectFit={"scale-down"}
                    alt="Logo University of Athens"
                  />
                </div>
              </ion-card>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col
              size="4"
              style={{ display: "flex" }}
              class="ion-justify-content-center"
            >
              <ion-card href="https://www.unipd.it/" target="_blank">
                <div
                  style={{ display: "flex", background: "white" }}
                  className="ion-justify-content-center"
                >
                  <Image
                    src="/Logo_padova.png"
                    width={200}
                    height={200}
                    objectFit={"scale-down"}
                    alt="Logo Università Delgli Studi Di Padova"
                  />
                </div>
              </ion-card>
            </ion-col>

            <ion-col
              size="4"
              style={{ display: "flex" }}
              class="ion-justify-content-center"
            >
              <ion-card href="#h" target="_blank">
                <div
                  style={{ display: "flex", background: "white" }}
                  className="ion-justify-content-center"
                >
                  <Image
                    src="/Logo_sga.png"
                    width={200}
                    height={200}
                    objectFit={"scale-down"}
                    alt="Logo DiSSGeA"
                  />
                </div>
              </ion-card>
            </ion-col>
            <ion-col
              size="4"
              style={{ display: "flex" }}
              class="ion-justify-content-center"
            >
              <ion-card href="http://www.efa.gr/" target="_blank">
                <div
                  style={{ display: "flex", background: "white" }}
                  className="ion-justify-content-center"
                >
                  <Image
                    src="/LOGO-EFA-CT-72.jpg"
                    width={200}
                    height={200}
                    objectFit={"scale-down"}
                    alt="Logo Ecole Française d'Athènes"
                  />
                </div>
              </ion-card>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col
              size="4"
              style={{ display: "flex" }}
              class="ion-justify-content-center"
            >
              <ion-card href="http://larhra.ish-lyon.cnrs.fr/" target="_blank">
                <div
                  style={{ display: "flex", background: "white" }}
                  className="ion-justify-content-center"
                >
                  <Image
                    src="/larhra-bleu-blanc-full.jpg"
                    width={200}
                    height={200}
                    objectFit={"scale-down"}
                    alt="Logo LARHRA"
                  />
                </div>
              </ion-card>
            </ion-col>
            <ion-col
              size="4"
              style={{ display: "flex" }}
              class="ion-justify-content-center"
            >
              <ion-card href="https://kleiolab.ch" target="_blank">
                <div
                  style={{ display: "flex", background: "white" }}
                  className="ion-justify-content-center"
                >
                  <Image
                    src="/kleiolab-logo.png"
                    width={200}
                    height={200}
                    objectFit={"scale-down"}
                    alt="KleioLab logo"
                  />
                </div>
              </ion-card>
            </ion-col>
            <ion-col
          	size="4"
          	style={{ display: "flex" }}
          	class="ion-justify-content-center"
        	>
          	<ion-card href="http://www.archiviostoricodelpatriarcatodivenezia.it/" target="_blank">
            	<div
              	style={{ display: "flex", background: "white" }}
              	className="ion-justify-content-center"
            	>
              	<Image
                	src="/Logo_ASPV.png"
                	width={200}
                	height={200}
                	objectFit={"scale-down"}
                	alt="Logo Archivio storico del Patriarcato di Venezia"
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
          
                    'cScale0':'#9f7a09',
                    'cScaleLabel0': '#fff',
          
                    'cScale1':'#0892a5',
                    'cScaleLabel1': '#fff',
          
                    'cScale2':'#74a08b',
                    'cScaleLabel2': '#fff',
          
                    'cScale3':'#0892a5',
                    'cScaleLabel3': '#fff',
          
                    'cScale4':'#9f7a09',
                    'cScaleLabel4': '#fff',
          
                    'font-family': 'Roboto,RobotoDraft,Helvetica,Arial,sans-serif'          
                  }
                }
              }%%
              timeline
                2019: Fornitura della piattaforma Geovistory da parte della società svizzera Kleiolab
                2020: Spoglio archivistico presso l’Archivio storico del Patriarcato di Venezia. Trascrizione, annotazione semantica, strutturazione dei dati
                    : Reclutamento di tre studiosi (J. Cossu, F. Zugno, D. Drago) per una collaborazione della durata di tre anni. Stipula di un contratto post-doc con Teresa Bernardi (Università di Padova, Dipartimento DiSSGeA, progetto di eccellenza "Mobility & Humanities")
                2021: Spoglio archivistico presso l’Archivio storico del Patriarcato di Venezia. Trascrizione, annotazione semantica, strutturazione dei dati
                    : Missioni di ricerca presso gli archivi compiute da Anna Athanasouli (Università di Creta), Katerina Konstantinidou (National and Kapodistrian University of Athens) e Katerina Korrè (Ionian University)
                    : Giornata di studi "Contrôle pré-matrimonial, bigamie et mariages mixtes en Europe orientale", svoltasi presso l’Università nazionale capodistriana di Atene e all’École française d’Athènes (10-11 settembre 2021)
                2022: Spoglio archivistico presso l’Archivio storico del Patriarcato di Venezia. Trascrizione, annotazione semantica, strutturazione dei dati
                    : Convegno "Disciplinare il matrimonio, tracciare la mobilità, riconoscere le relazioni. Esami prematrimoniali nel mondo cattolico (XVI-XVIII secolo)", svoltosi presso l'Università di Padova (27-28 ottobre 2022)                
                2023: Preparazione e analisi dati a cura di Jacopo Cossu
                    : Consegna alla Casa Editrice Viella di una raccolta di saggi sul controllo dello stato libero
          `}
        </geov-mermaid>
      </ion-grid>
      <ion-grid fixed class={styles.sectionGray}>
        <a href="processetti/legal">Legal Notice</a>
      </ion-grid>
    </ProcessettiLayout>
  );
};

export default Resources;
export const getStaticProps: GetStaticProps<ResourcesProps> = async () => {
  return {
    props: {
      head: {
        headOgDescription: "Progetto ANR Processetti",
        headTitle: "Progetto ANR Processetti",
        headOgImage: "/socialimage/processetti.jpg",
      },
    },
  };
};
