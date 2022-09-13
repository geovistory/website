import { arrowForwardOutline } from 'ionicons/icons';
import { version } from '../../package.json';
import styles from './Footer.module.css';

export interface FooterProps {
  featuredProjects: Array<{
    shortName: string;
    geovID: number;
    hasPage: boolean;
  }>;
}

export const Footer = (props: FooterProps) => {
  return (
    <ion-grid class={styles.container}>
      <ion-row class="ion-align-items-stretch">
        {/* Left Column (purple) */}

        <ion-col size-xs="12" size-md="4" class={styles.leftCol}>
          {/* <img src="/geovistory-logo-white.svg"></img> */}
          <h5 className={styles.whoWeAre}>Who we are:</h5>
          <ion-button href="/about-geovistory" shape="round">
            About Geovistory
            <ion-icon slot="end" icon={arrowForwardOutline}></ion-icon>
          </ion-button>
          <ion-button href="/about-us" shape="round">
            About Us
            <ion-icon slot="end" icon={arrowForwardOutline}></ion-icon>
          </ion-button>
          <div className={styles.legalNotice}>
            <div>Geovistory 2022 Imprint</div>
            <div>v{version}</div>
            <div><a href="/legal">legal notice</a></div>

          </div>
        </ion-col>

        {/* Right Column (light) */}

        <ion-col size-xs="12" size-md="8" class={styles.rightCol}>
          <ion-row>
            {/* Right > Featured Projects */}
            <ion-col
              size-xs="12"
              size-sm="5"
              class={styles.featuredProjectsContainer}
            >
              <ion-list lines="full" class={styles.featuredProjectsList}>
                <ion-list-header class={styles.featuredProjectsHeader}>
                  <h5 style={{ width: '100%' }}>
                    <ion-text>Featured Projects</ion-text>
                  </h5>
                </ion-list-header>
                {props.featuredProjects.map((proj) => (
                  <ion-item
                    class={styles.featuredProject}
                    key={'footer-' + proj.geovID}
                    href={proj.hasPage ? `/project/${proj.geovID}` : undefined}
                  >
                    {proj.shortName}
                  </ion-item>
                ))}
              </ion-list>
            </ion-col>

            {/* Right > Get Started */}

            <ion-col size-xs="12" size-sm="5" pull-sm="1" push-sm="1">
              <ion-card class={styles.getStartedCard}>
                <ion-card-header>
                  <ion-card-title>
                    <h5 className={styles.getStartedCardHeader}>
                      <ion-text>Get started</ion-text>
                    </h5>
                  </ion-card-title>
                </ion-card-header>
                <ion-card-content>
                  <ion-row>
                    <ion-col>
                      <ion-button
                        href="https://toolbox.geovistory.org/login"
                        target="_blank"
                        shape="round"
                        expand="block"
                      >
                        Register
                      </ion-button>
                    </ion-col>
                    <ion-col>
                      <ion-button
                        href="https://toolbox.geovistory.org/login"
                        target="_blank"
                        shape="round"
                        fill="outline"
                        expand="block"
                      >
                        Login
                      </ion-button>
                    </ion-col>
                  </ion-row>
                </ion-card-content>
              </ion-card>
            </ion-col>
          </ion-row>
        </ion-col>
      </ion-row>
    </ion-grid>
  );
};
