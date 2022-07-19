import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonGrid,
  IonIcon,
  IonItem,
  IonList,
  IonListHeader,
  IonRow,
  IonText,
} from '@geovistory/design-system-react';
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
    <IonGrid className={styles.container}>
      <IonRow class="ion-align-items-stretch">
        {/* Left Column (purple) */}

        <IonCol sizeXs="12" sizeMd="4" className={styles.leftCol}>
          {/* <img src="/geovistory-logo-white.svg"></img> */}
          <h5 className={styles.whoWeAre}>Who we are:</h5>
          <IonButton href="/about-geovistory" shape="round">
            About Geovistory
            <IonIcon slot="end" icon={arrowForwardOutline}></IonIcon>
          </IonButton>
          <IonButton href="/about-us" shape="round">
            About Us
            <IonIcon slot="end" icon={arrowForwardOutline}></IonIcon>
          </IonButton>
          <div className={styles.legalNotice}>
            <div>Geovistory 2022 Imprint</div>
            <div>v{version}</div>
          </div>
        </IonCol>

        {/* Right Column (light) */}

        <IonCol sizeXs="12" sizeMd="8" className={styles.rightCol}>
          <IonRow>
            {/* Right > Featured Projects */}
            <IonCol
              sizeXs="12"
              sizeSm="5"
              className={styles.featuredProjectsContainer}
            >
              <IonList lines="full" className={styles.featuredProjectsList}>
                <IonListHeader className={styles.featuredProjectsHeader}>
                  <h5 style={{ width: '100%' }}>
                    <IonText>Featured Projects</IonText>
                  </h5>
                </IonListHeader>
                {props.featuredProjects.map((proj) => (
                  <IonItem
                    className={styles.featuredProject}
                    key={'footer-' + proj.geovID}
                    href={proj.hasPage ? `/project/${proj.geovID}` : undefined}
                  >
                    {proj.shortName}
                  </IonItem>
                ))}
              </IonList>
            </IonCol>

            {/* Right > Get Started */}

            <IonCol sizeXs="12" sizeSm="5" pullSm="1" pushSm="1">
              <IonCard className={styles.getStartedCard}>
                <IonCardHeader>
                  <IonCardTitle>
                    <h5 className={styles.getStartedCardHeader}>
                      <IonText>Get started</IonText>
                    </h5>
                  </IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonRow>
                    <IonCol>
                      <IonButton
                        href="https://toolbox.geovistory.org/login"
                        target="_blank"
                        shape="round"
                        expand="block"
                      >
                        Register
                      </IonButton>
                    </IonCol>
                    <IonCol>
                      <IonButton
                        href="https://toolbox.geovistory.org/login"
                        target="_blank"
                        shape="round"
                        fill="outline"
                        expand="block"
                      >
                        Login
                      </IonButton>
                    </IonCol>
                  </IonRow>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};
