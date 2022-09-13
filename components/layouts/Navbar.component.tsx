import Link from 'next/link';
import styles from './Navbar.module.css';
export interface NavbarProps {}
export const Navbar = (props: NavbarProps) => {
  return (
    <>
      <ion-toolbar class={styles.toolbar} color="light">
        <Link href="/" passHref={true}>
          <a>
            <ion-img
              class={'ion-hide-md-up ' + styles.logo}
              src={'/Geovistory-Logo-No-Text-White.svg'}
            />
            <ion-img
              class={'ion-hide-md-down ' + styles.logo}
              src={'/geovistory-logo.svg'}
            />
          </a>
        </Link>
        <ion-buttons slot="end">
          <ion-menu-button
            class="ion-hide-md-up"
            id="main"
            menu="main"
          ></ion-menu-button>
          <span className="ion-hide-md-down" style={{display:'flex'}}>
            <ion-button href="/sparql" strong={true}>
              Data Access
            </ion-button>
            <ion-button href="/resources" strong={true}>
              Resources
            </ion-button>
            <ion-button href="/about-geovistory">About Geovistory</ion-button>
            <ion-button href="/about-us">About Us</ion-button>
            <span className={styles.divider}></span>
            <ion-button
              href="https://toolbox.geovistory.org/login"
              target="_blank"
              color="primary"
              fill="clear"
            >
              Log in
            </ion-button>
          </span>
        </ion-buttons>
      </ion-toolbar>
    </>
  );
};
