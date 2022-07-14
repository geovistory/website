import {
  IonButton,
  IonButtons,
  IonImg,
  IonMenuButton,
  IonToolbar
} from '@geovistory/design-system-react';
import Link from 'next/link';
import styles from './Navbar.module.css';
export interface NavbarProps {}
export const Navbar = (props: NavbarProps) => {
  return (
    <>
      <IonToolbar className={styles.toolbar} color="light">
        <Link href="/" passHref={true}>
          <a>
            <IonImg
              class="ion-hide-sm-up"
              className={styles.logo}
              src={'/Geovistory-Logo-No-Text-White.svg'}
            />
            <IonImg
              class="ion-hide-sm-down"
              className={styles.logo}
              src={'/geovistory-logo.svg'}
            />
          </a>
        </Link>
        <IonButtons slot="end">
          <IonMenuButton class="ion-hide-sm-up" id="main" menu="main"></IonMenuButton>
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

    </>
  );
};
