import {
  GeovCarousel,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonGrid,
  IonIcon,
  IonRow,
  IonText,
} from '@geovistory/design-system-react';
import type { GetStaticProps, NextPage } from 'next';
import {
  OrganizationCard,
  OrganizationCardProps,
} from '../components/elements/OrganizationCard.component';
import {
  DefaultPage,
  DefaultPageProps,
} from '../components/layouts/DefaultPage.component';
import { projectsParams } from '../projects/projectParams';
import styles from './about-us.module.css';
import { mailOutline } from 'ionicons/icons';

const larhra: OrganizationCardProps = {
  imageURL: '/larhra-logo.jpg',
  imageHeight: 414,
  imageWidth: 500,
  organizationName: 'LARHRA',
  organizationDescription:
    'A French research lab focusing on digital history methods and techniques.',
  organizationURL:
    'http://larhra.ish-lyon.cnrs.fr/axe-de-recherche-en-histoire-numerique',
};
const kleiolab: OrganizationCardProps = {
  imageURL: '/kleiolab-logo.png',
  imageHeight: 972,
  imageWidth: 1174,
  organizationName: 'KleioLab',
  organizationDescription:
    'A Swiss company specializing in information systems in the digital humanities.',
  organizationURL: 'https://kleiolab.ch',
};
export interface AboutUsProps {
  defaultPage: DefaultPageProps;
}
const AboutUs: NextPage<AboutUsProps> = (props) => {
  return (
    <DefaultPage
      {...props.defaultPage}
      noPaddingSlot={
        <>
          <div className={styles.bannerContainer}>
            <IonGrid fixed>
              <IonRow>
                <IonCol sizeXs='12' sizeSm='6' className={styles.bannerLeftCol}>
                  <IonText color="primary" className={styles.bannerTitle}>
                    We are historians, developers and digital humanists.
                  </IonText>
                  <div className={styles.bannerText}>
                    The humanities and social sciences play a central role in
                    society. We see enormous potential for these sciences in
                    digital methods and tools. Geovistory was realized to
                    unleash this potential.
                  </div>
                </IonCol>
                <IonCol sizeXs='12' sizeSm='6' className={styles.bannerRightCol}>
                  <GeovCarousel
                    className={styles.carousel}
                    images={[
                      '/team.jpg',
                      '/about-us_carousel-1.jpg',
                      '/about-us_carousel-2.png',
                    ]}
                  ></GeovCarousel>
                </IonCol>
              </IonRow>
            </IonGrid>
          </div>
          <IonGrid fixed className={styles.restContainer}>
            <IonRow class="ion-text-center">
              <IonCol className={styles.innitiatorsCol}>
                <h1 className={styles.innitiatorsTitle}>Initiators</h1>
                <p className={styles.innitiatorsDescription}>
                  Geovistory is a common initiative of LARHRA and KleioLab.
                </p>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <OrganizationCard {...larhra}></OrganizationCard>
              </IonCol>
              <IonCol>
                <OrganizationCard {...kleiolab}></OrganizationCard>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonCard color="primary">
                  <IonCardHeader>
                    <IonCardTitle class="ion-text-center">
                      Want to join the initiative?
                    </IonCardTitle>
                    <IonCardSubtitle></IonCardSubtitle>
                  </IonCardHeader>
                  <IonCardContent className="ion-text-center">
                    <div>We are happy to hear from you.</div>
                    <IonButton
                      class="ion-margin-top"
                      shape="round"
                      fill="outline"
                      color="light"
                      href="javascript:location='mailto:\u0069\u006e\u0066\u006f\u0040\u006b\u006c\u0065\u0069\u006f\u006c\u0061\u0062\u002e\u0063\u0068';void 0"
                    >
                      <IonIcon slot="end" icon={mailOutline}></IonIcon>
                      Write us an Email
                    </IonButton>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          </IonGrid>
        </>
      }
    />
  );
};

export default AboutUs;
export const getStaticProps: GetStaticProps<AboutUsProps> = async () => {
  return {
    props: {
      defaultPage: {
        footer: {
          featuredProjects: projectsParams.filter((pp) => pp.featured),
        },
      },
    },
    revalidate: 86400,
  };
};
