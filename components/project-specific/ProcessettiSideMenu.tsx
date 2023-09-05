import { FunctionComponent } from 'react';
import styles from './ProcessettiNavbar.module.css';


export const ProcessettiSideMenu: FunctionComponent<{}> = () => (
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
        <ion-item lines="full">...</ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>
);
