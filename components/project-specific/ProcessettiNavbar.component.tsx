/* eslint-disable @next/next/no-html-link-for-pages */
import {
  boat,
  colorFilter,
  dice,
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

export const metodologiaLinks = [
  { href: '/processetti/metodologia', label: 'Metodologia' },
  { href: '/processetti/metodologia/introduzione', label: 'Introduzione' },
  { href: '/processetti/metodologia/tag', label: 'Tag (annotazione)' },
  { href: '/processetti/metodologia/motivation-type', label: 'Motivation Type' },
  { href: '/processetti/metodologia/mobility', label: 'Mobility' },
  { href: '/processetti/metodologia/interazioni-sociali', label: 'Interazioni sociali' },
  { href: '/processetti/metodologia/temporalità', label: 'Temporalità' },
  { href: '/processetti/metodologia/professioni', label: 'Professioni' },
  { href: '/processetti/metodologia/luoghi', label: 'Luoghi' },
];
export const ricercaLinks = [
  {
    href: '/processetti/ricerca-libera',
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
    href: '/processetti/grafici-e-tabelle',
    label: 'Presentazione',
    icon: library,
  },
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
  { label: 'Metodologia Banca dati', links: metodologiaLinks },
  { label: 'Grafici e tabelle', links: graficiTabelleLinks },
  { label: 'Ricerca libera', links: ricercaLinks },
];
export const ProcessettiNavbar = (props: ProcessettiNavbarProps) => {
  return (
    <div className={styles.theme}>
      <ion-toolbar class={styles.toolbar} color="dark">
        <ion-buttons slot="start" class={styles.buttonsLeft}>
          <ion-menu-button
            class="ion-hide-md-up"
            id="main"
            menu="main"
          ></ion-menu-button>
          <ion-button class="ion-hide-md-up" href={`/processetti`}>
            {props.title}
          </ion-button>
          <a href="/" className="ion-hide-md-down">
            <ion-img
              class={styles.logo}
              src={'/Geovistory-Logo-No-Text-Gray.svg'}
            />
          </a>
          <span className="ion-hide-md-down">
            <ion-button href={`/processetti`}>Presentazione</ion-button>
            {menuStructure.map((menuItem, mindex) => (
              <span key={mindex}>
                {menuItem.links.length === 1 ? (
                  <ion-button href={menuItem.links[0].href}>
                    {menuItem.label}
                  </ion-button>
                ) : (
                  <>
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
                  </>
                )}
              </span>
            ))}
          </span>
        </ion-buttons>
        <ion-buttons class="ion-hide-md-up" slot="end">
          <a href="/">
            <ion-img
              class={styles.logo}
              src={'/Geovistory-Logo-No-Text-Gray.svg'}
            />
          </a>
        </ion-buttons>
      </ion-toolbar>
    </div>
  );
};
