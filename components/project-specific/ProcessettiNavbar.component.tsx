import {
  boat,
  colorFilter,
  footsteps,
  gitNetwork,
  library,
  storefront,
  walk,
} from 'ionicons/icons';
import Link from 'next/link';
import styles from './ProcessettiNavbar.module.css';
export interface ProcessettiNavbarProps {
  title: string;
  projectId: number;
  className?: string;
}

export const bancaDatiLinks = [
  {
    href: '/processetti/metodologia',
    label: 'Metodologia',
  },
  {
    href: '/processetti/search',
    label: 'Ricerca libera',
  },
];
export const strumentiLinks = [
  {
    href: '/processetti/bibliografia',
    label: 'Bibliografia',
  },
  {
    href: '/processetti/fonti',
    label: 'Fonti',
  },
];
export const graficiTabelleLinks = [
  {
    href: '/processetti/grafici-e-tabelle/processetti',
    label: 'Processetti',
    icon: library,
  },
  {
    href: '/processetti/grafici-e-tabelle/soggetti',
    label: 'Soggetti',
    icon: colorFilter,
  },
  {
    href: '/processetti/grafici-e-tabelle/professioni',
    label: 'Professioni',
    icon: walk,
  },
  {
    href: '/processetti/grafici-e-tabelle/origini',
    label: 'Origini',
    icon: footsteps,
  },
  {
    href: '/processetti/grafici-e-tabelle/in-citta',
    label: 'In città',
    icon: storefront,
  },

  {
    href: '/processetti/grafici-e-tabelle/mobilita',
    label: 'Mobilità',
    icon: boat,
  },
  {
    href: '/processetti/grafici-e-tabelle/relazioni',
    label: 'Relazioni',
    icon: gitNetwork,
  },
];
export const menuStructure = [
  { label: 'Strumenti', links: strumentiLinks },
  { label: 'Banca dati', links: bancaDatiLinks },
  { label: 'Grafici e tabelle', links: graficiTabelleLinks },
];
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
            {menuStructure.map((menuItem, mindex) => (
              <span key={mindex}>
                <ion-button id={'_' + mindex}>{menuItem.label}</ion-button>
                <ion-popover trigger={'_' + mindex} trigger-action="click">
                  <ion-content color="primary">
                    <ion-list lines={'none'}>
                      {menuItem.links.map((x, i) => (
                        <ion-item key={i} color="primary" href={x.href}>
                          {x.label}
                        </ion-item>
                      ))}
                    </ion-list>
                  </ion-content>
                </ion-popover>
              </span>
            ))}
          </span>
        </ion-buttons>
      </ion-toolbar>
    </div>
  );
};
