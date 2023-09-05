import { FunctionComponent } from 'react';
import { menuStructure } from './ProcessettiNavbar.component';
import styles from './ProcessettiSideMenu.module.css';

export const ProcessettiSideMenu: FunctionComponent<{}> = () => (
  <ion-menu side="start" menu-id="main" content-id="main">
    <ion-header>
      <ion-toolbar class={styles.menuTitle} color="dark">
        <ion-title class={styles.menuTitle} ></ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list color="dark">
        {menuStructure.map((menuItem, mindex) => (
          <div key={mindex}>
            <ion-item-divider color="primary">
              <ion-label>{menuItem.label}</ion-label>
            </ion-item-divider>
            {menuItem.links.map((linkItem, lindex) => (
              <ion-item key={lindex} href={linkItem.href} lines="full">
                {linkItem.label}
              </ion-item>
            ))}
          </div>
        ))}
      </ion-list>
    </ion-content>
  </ion-menu>
);
