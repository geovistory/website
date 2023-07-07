import { Components } from '@geovistory/design-system-web/loader';
import { mailOutline } from 'ionicons/icons';
import type { GetStaticProps, NextPage } from 'next';
import {
  OrganizationCard,
  OrganizationCardProps,
} from '../components/elements/OrganizationCard.component';
import {
  DefaultPage,
  DefaultPageProps,
} from '../components/layouts/DefaultPage.component';
import { projectsParams } from '../lib/projectParams';
import styles from './about-us.module.css';

const larhra: OrganizationCardProps = {
  imageURL: '/larhra-logo.jpg',
  imageHeight: 414,
  imageWidth: 500,
  organizationName: 'LARHRA',
  organizationDescription:
    'A joint French research unit in History of the CNRS and the universities of Lyon and Grenoble. A research group of LARHRA, the Digital history research team focuses on digital humanities methods and techniques.',
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
const unibe: OrganizationCardProps = {
  imageURL: '/logo-unibe.png',
  imageHeight: 972,
  imageWidth: 1174,
  organizationName: 'University of Bern',
  organizationDescription:
    'The Digital Humanities are part of the Walter Benjamin Kolleg at the University of Bern researching and critiquing digital applications in the Humanities.',
  organizationURL: 'https://www.dh.unibe.ch/',
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
            <ion-grid fixed>
              <ion-row>
                <ion-col size-xs="12" size-sm="6" class={styles.bannerLeftCol}>
                  <ion-text color="primary" class={styles.bannerTitle}>
                    We are historians, developers and digital humanists.
                  </ion-text>
                  <div className={styles.bannerText}>
                    The humanities and social sciences play a central role in
                    society. We see enormous potential for these sciences in
                    digital methods and tools. Geovistory was realized to
                    unleash this potential.
                  </div>
                </ion-col>
                <ion-col size-xs="12" size-sm="6" class={styles.bannerRightCol}>
                  <geov-carousel
                    class={styles.carousel}
                    ref={(carousel?: Components.GeovCarousel) => {
                      if (carousel)
                        carousel.images = [
                          '/geovistory-team.jpg',
                          '/about-us_carousel-1.jpg',
                          '/about-us_carousel-2.png',
                        ];
                    }}
                  ></geov-carousel>
                </ion-col>
              </ion-row>
            </ion-grid>
          </div>
          <ion-grid fixed class={styles.restContainer}>
            <ion-row class="ion-text-center">
              <ion-col class={styles.innitiatorsCol}>
                <h1 className={styles.innitiatorsTitle}>Initiators</h1>
                <p className={styles.innitiatorsDescription}>
                  Geovistory is a common initiative of LARHRA and KleioLab.
                </p>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col>
                <OrganizationCard {...larhra}></OrganizationCard>
              </ion-col>
              <ion-col>
                <OrganizationCard {...kleiolab}></OrganizationCard>
              </ion-col>
              <ion-col>
                <OrganizationCard {...unibe}></OrganizationCard>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col>
                <ion-card color="primary">
                  <ion-card-header>
                    <ion-card-title class="ion-text-center">
                      Want to join the initiative?
                    </ion-card-title>
                    <ion-card-subtitle></ion-card-subtitle>
                  </ion-card-header>
                  <ion-card-content class="ion-text-center">
                    <div>We are happy to hear from you.</div>
                    <ion-button
                      class="ion-margin-top"
                      shape="round"
                      fill="outline"
                      color="light"
                      href="javascript:location='mailto:\u0069\u006e\u0066\u006f\u0040\u006b\u006c\u0065\u0069\u006f\u006c\u0061\u0062\u002e\u0063\u0068';void 0"
                    >
                      <ion-icon slot="end" icon={mailOutline}></ion-icon>
                      Write us an Email
                    </ion-button>
                  </ion-card-content>
                </ion-card>
              </ion-col>
            </ion-row>
          </ion-grid>
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
        headTitle: 'About Us',
        footer: {
          featuredProjects: projectsParams.filter((pp) => pp.featured),
        },
      },
    },
    revalidate: 86400,
  };
};
