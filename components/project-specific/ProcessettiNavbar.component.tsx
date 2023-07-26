import Link from 'next/link';
import { getOntoExlorerUrl } from '../../lib/getOntoExploerUrl';
import styles from './ProcessettiNavbar.module.css';
export interface ProcessettiNavbarProps {
  title: string;
  projectId: number;
}
export const ProcessettiNavbar = (props: ProcessettiNavbarProps) => {
  return (
    <div className={styles.theme}>
      <ion-toolbar class={styles.toolbar} color="dark">
        <ion-buttons class={styles.buttonsLeft}>
          <Link href="/" passHref={true}>
            <a>
              <ion-img
                class={styles.logo}
                src={'/Geovistory-Logo-No-Text-Gray.svg'}
              />
            </a>
          </Link>
          <ion-button href={`/processetti`}>{props.title}</ion-button>
        </ion-buttons>
        <ion-buttons slot="end">
          <ion-menu-button
            class="ion-hide-md-up"
            id="main"
            menu="main"
          ></ion-menu-button>
          <span className="ion-hide-md-down">
            <ion-button id="strumenti-trigger">Strumenti</ion-button>
            <ion-popover trigger="strumenti-trigger" trigger-action="click">
              <ion-content color="primary">
                <ion-list lines={'none'}>
                  <ion-item color="primary" href="/processetti/bibliografia" >
                    Bibliografia
                  </ion-item>
                  <ion-item color="primary" href="/processetti/fonti">Fonti</ion-item>
                </ion-list>
              </ion-content>
            </ion-popover>

            <ion-button id="banca-dati-trigger">Banca dati</ion-button>
            <ion-popover trigger="banca-dati-trigger" trigger-action="click">
              <ion-content>
                <ion-list lines={'none'}>
                  <ion-item color="primary" href={`/processetti/metodologia`}>
                    Metodologia
                  </ion-item>
                  <ion-item color="primary" href={`/processetti/search`}>Ricerca</ion-item>
                  <ion-item color="primary" href={`/processetti/libera`}>libera</ion-item>
                  <ion-item color="primary" href={`/processetti/sparql`}>SPARQL</ion-item>
                  <ion-item color="primary"
                    href={getOntoExlorerUrl(props.projectId, props.title)}
                    target="blank"
                  >
                    OntoExplorer
                  </ion-item>
                  <ion-item color="primary"
                    href={`https://sparklis.geovistory.org/?title=Geovistory%20Processetti%20${props.title}&endpoint=https%3A//sparql.geovistory.org/api_v1_Processetti_${props.projectId}&entity_lexicon_select=http%3A//www.w3.org/2000/01/rdf-schema%23label&concept_lexicons_select=http%3A//www.w3.org/2000/01/rdf-schema%23label`}
                    target="blank"
                  >
                    Sparklis
                  </ion-item>
                </ion-list>
              </ion-content>
            </ion-popover>
            <ion-button id="grafici">Grafici e tabelle</ion-button>
            <ion-popover trigger="grafici" trigger-action="click">
              <ion-content>
                <ion-list lines={'none'}>
                  <ion-item color="primary">Processetti</ion-item>
                  <ion-item color="primary">Soggetti</ion-item>
                  <ion-item color="primary">Professioni</ion-item>
                  <ion-item color="primary">Origini</ion-item>
                  <ion-item color="primary">In città</ion-item>
                  <ion-item color="primary">Mobilità</ion-item>
                  <ion-item color="primary">Relazioni</ion-item>
                </ion-list>
              </ion-content>
            </ion-popover>
          </span>
        </ion-buttons>
      </ion-toolbar>
    </div>
  );
};
