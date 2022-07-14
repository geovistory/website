import {
  IonApp,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonList,
  IonMenu,
  IonTitle,
  IonToolbar,
} from '@geovistory/design-system-react';
import { ReactNode } from 'react';
import { Footer, FooterProps } from './Footer.component';
import { Navbar } from './Navbar.component';
import styles from './DefaultPage.module.css'

export interface DefaultPageProps {
  children?: ReactNode;
  footer: FooterProps;
}

export const DefaultPage = (props: DefaultPageProps) => {
  return (
    <>
      <IonApp>
        <IonMenu side="start" menuId="main" contentId="main">
          <IonHeader>
            <IonToolbar className={styles.menuTitle}>
              <IonTitle></IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonList>
              <IonItemDivider>
                <IonLabel>Geovistory</IonLabel>
              </IonItemDivider>
              <IonItem href="/sparql" lines="full">
                Data Access
              </IonItem>
              <IonItem href="/about-geovistory" lines="full">
                About Geovistory
              </IonItem>
              <IonItem href="/about-us" lines="full">
                About Us
              </IonItem>
              <IonItemDivider>
                <IonLabel>Toolbox</IonLabel>
              </IonItemDivider>
              <IonItem
                href="https://toolbox.geovistory.org/login"
                target="_blank"
                lines="full"
              >
                Login
                <IonIcon name="open-outline" slot="end"></IonIcon>
              </IonItem>
            </IonList>
          </IonContent>
        </IonMenu>
        <IonHeader>
          <Navbar />
        </IonHeader>
        <IonContent>
          <IonGrid fixed className={styles.mainGrid}>
            {props.children}
          </IonGrid>
          <Footer featuredProjects={props.footer.featuredProjects}></Footer>
        </IonContent>
      </IonApp>
    </>
  );
};
