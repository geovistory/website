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
          <span className="ion-hide-md-down" style={{ display: 'flex' }}>
            <ion-button href="/data" strong={true}>
              Data
            </ion-button>
            <ion-button href="/community" strong={true}>
              Community
            </ion-button>
            <ion-button href="/documentation" strong={true}>
              Docs
            </ion-button>

            <ion-button id="about-trigger">About</ion-button>
            <ion-popover trigger="about-trigger" trigger-action="click">
              <ion-content>
                <ion-list lines={'none'}>
                  <ion-item href="/about-geovistory">Geovistory</ion-item>
                  <ion-item href="/about-us">Team</ion-item>
                  <ion-item href="/lod4hss">LOD4HSS</ion-item>
                </ion-list>
              </ion-content>
            </ion-popover>
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
