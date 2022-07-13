import {
  IonHeader,
  IonToolbar,
  IonMenu,
  IonList,
  IonTitle,
  IonContent,
  IonItem,
  IonMenuButton,
  IonButton,
  IonButtons,
  IonImg,
  IonApp,
  IonIcon,
  IonGrid,
} from '@geovistory/design-system-react';
import Link from 'next/link';
import { ReactNode } from 'react';
import styles from './DefaultPage.module.css';

interface DefaultPageProps {
  children: ReactNode;
}

export const DefaultPage = (props: DefaultPageProps) => {
  return (
    <>
      <IonMenu side="start" menuId="first" contentId="main-menu">
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>Geovistory</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonItem href="/sparql" lines="full">
              Data Access
            </IonItem>
            <IonItem href="/about-geovistory" lines="full">
              About Geovistory
            </IonItem>
            <IonItem href="/about-us" lines="full">
              About Us
            </IonItem>
            <IonItem
              href="https://toolbox.geovistory.org/login"
              target="_blank"
              color="primary"
              lines="full"
            >
              Login
              <IonIcon name="open-outline" slot="end"></IonIcon>
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>
      <IonApp>
        <IonHeader>
          <IonToolbar className={styles.toolbar} color="light">
            <Link href="/" passHref={true}>
              <a>
                <IonImg className={styles.logo} src={'/geovistory-logo.svg'} />
              </a>
            </Link>
            <IonButtons slot="end">
              <IonMenuButton
                class="ion-hide-sm-up"
                id="main-menu"
              ></IonMenuButton>
              <span className="ion-hide-sm-down">
                <IonButton href="/sparql" strong={true}>
                  Data Access
                </IonButton>
                <IonButton href="/about-geovistory">About Geovistory</IonButton>
                <IonButton href="/about-us">About Us</IonButton>
                <span className={styles.divider}></span>
                <IonButton
                  href="https://toolbox.geovistory.org/login"
                  target="_blank"
                  color="primary"
                  fill="clear"
                >
                  Log in
                </IonButton>
              </span>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonGrid fixed class="ion-padding">
            {props.children}
          </IonGrid>
          <IonToolbar>Footer</IonToolbar>
        </IonContent>
      </IonApp>
    </>
  );
};
