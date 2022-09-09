import { ReactNode } from 'react';
import { Footer, FooterProps } from './Footer.component';
import { Navbar } from './Navbar.component';
import styles from './DefaultPage.module.css';
import { openOutline } from 'ionicons/icons';
export interface DefaultPageProps {
  children?: ReactNode;
  noPaddingSlot?: ReactNode;
  footer: FooterProps;

  /**
   * if true: main container for its children takes up the
   *          entire width of the screen
   *    else: main container has max width based on the current
   *          screen size.
   *
   * see: https://ionicframework.com/docs/layout/grid#grid-attributes
   */
  expand?: boolean;
}

export const DefaultPage = (props: DefaultPageProps) => {
  return (
    <>
      <ion-app>
        <ion-menu side="start" menu-id="main" content-id="main">
          <ion-header>
            <ion-toolbar class={styles.menuTitle}>
              <ion-title></ion-title>
            </ion-toolbar>
          </ion-header>
          <ion-content>
            <ion-list>
              <ion-item-divider>
                <ion-label>Geovistory</ion-label>
              </ion-item-divider>
              <ion-item href="/sparql" lines="full">
                Data Access
              </ion-item>
              <ion-item href="/about-geovistory" lines="full">
                About Geovistory
              </ion-item>
              <ion-item href="/about-us" lines="full">
                About Us
              </ion-item>
              <ion-item-divider>
                <ion-label>Toolbox</ion-label>
              </ion-item-divider>
              <ion-item
                href="https://toolbox.geovistory.org/login"
                target="_blank"
                lines="full"
              >
                Login
                <ion-icon icon={openOutline} slot="end"></ion-icon>
              </ion-item>
            </ion-list>
          </ion-content>
        </ion-menu>
        <ion-header>
          <Navbar />
        </ion-header>
        <ion-content>
          {props.noPaddingSlot && (
            <ion-grid fixed={false}>{props.noPaddingSlot}</ion-grid>
          )}
          {props.children && (
            <ion-grid fixed={!props.expand} class={styles.mainGrid}>
              {props.children}
            </ion-grid>
          )}
          <Footer featuredProjects={props.footer.featuredProjects}></Footer>
        </ion-content>
      </ion-app>
    </>
  );
};
