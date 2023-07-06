import type { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import React from 'react';
import {
  DefaultPage,
  DefaultPageProps,
} from '../components/layouts/DefaultPage.component';
import { projectsParams } from '../lib/projectParams';
import styles from './lod4hss.module.css';

export interface Lod4HssProps {
  defaultPage: DefaultPageProps;
}
const Lod4Hss: NextPage<Lod4HssProps> = (props) => {
  return (
    <DefaultPage {...props.defaultPage}>
      <div className={styles.mainLogo}>
        <Image
          width={340}
          height={100}
          objectFit="scale-down"
          alt="Linked open research data"
          src="/lod4hss/lod4hss.png"
        />
      </div>
      <p>
        The project{' '}
        <strong>Linked Open Data for the Humanities and Social Sciences</strong>{' '}
        intends to:
      </p>
      <ion-list class="restricted-width" lines="none">
        <ion-item>
          <ion-avatar slot="start">
            <Image
              width={80}
              height={80}
              alt="Linked open research data"
              src="/lod4hss/picto/picto_linked2.jpg"
            />
          </ion-avatar>
          <ion-label class="ion-text-wrap">
            Bring Linked Open Research Data practices to the Humanities & Social
            Sciences.
          </ion-label>
        </ion-item>
        <ion-item>
          <ion-avatar slot="start">
            <Image
              width={80}
              height={80}
              alt="Reusable data"
              src="/lod4hss/picto/picto_reuse2.jpg"
            />
          </ion-avatar>
          <ion-label class="ion-text-wrap">
            Operationalize the FAIR principles, aiming at data reusability.
          </ion-label>
        </ion-item>
        <ion-item>
          <ion-avatar slot="start">
            <Image
              width={80}
              height={80}
              alt="Community"
              src="/lod4hss/picto/picto_community2.jpg"
            />
          </ion-avatar>
          <ion-label class="ion-text-wrap">
            Strengthen the community of researchers, data experts and web
            developers in the humanities and social sciences.
          </ion-label>
        </ion-item>
      </ion-list>
      <h2>The Project</h2>
      <p>
        The project “Linked Open Data for the Humanities and Social Sciences”
        (LOD4HSS) is supported through a swissuniversities{' '}
        <a
          href="https://www.swissuniversities.ch/en/topics/digitalisation/open-research-data/swiss-open-research-data-grants"
          target="_blank"
          rel="noreferrer"
        >
          Open Research Data Grant
        </a>
        . LOD4HSS strives to bring forward the open Geovistory platform,
        propagating Open Research Data workflows according to different
        use-cases (research data analysis & publishing, teaching, interlinking &
        reusing available data) and in line with the needs of the various
        domains in the Humanities and Social Sciences. It aims to expand and
        strengthen the community of data producers and consumers providing
        easy-to-use tools and means for exchange, based on a clearly defined
        governance structure closely aligned with academia.
      </p>
      <p>
        Geovistory supports Open Research Data for Switzerland and the
        international Humanities & Social Sciences community. We foster an
        engaged community and document best practices. Consequentially
        contributing to methodological innovations of research as Open Data and
        aiming to provide Geovistory as a sustainable platform.
      </p>
      <h2>Get in touch</h2>
      <p>
        Please join us on{' '}
        <a
          href="https://discord.gg/wVfM5BMZsf"
          target="_blank"
          rel="noreferrer"
        >
          Discord
        </a>{' '}
        or drop us a message: info[at]geovistory.org.
      </p>
      <h2>Partners</h2>
      <p className={styles.partners}>
        <ion-card class={styles.partnersCard}>
          <ion-card-content>
            {/* ROW 1 */}
            <ion-row>
              <ion-col size="4">
                <Image
                  src="/lod4hss/logos/larhra.jpg"
                  width={150}
                  height={100}
                  objectFit={'scale-down'}
                  alt="LARHRA"
                />
              </ion-col>
              <ion-col size="4">
                <Image
                  src="/lod4hss/logos/kleiolab.png"
                  width={150}
                  height={100}
                  objectFit={'scale-down'}
                  alt="KleioLab"
                />
              </ion-col>

              <ion-col size="4">
                <Image
                  src="/lod4hss/logos/unibe.png"
                  width={150}
                  height={100}
                  objectFit={'scale-down'}
                  alt="University of Bern"
                />
              </ion-col>
            </ion-row>

            {/* ROW 2 */}
            <ion-row>
              <ion-col size="4">
                <Image
                  src="/lod4hss/logos/unine.png"
                  objectFit={'scale-down'}
                  width={150}
                  height={100}
                  alt="University of Neuchâtel"
                />
              </ion-col>
              <ion-col size="4">
                <Image
                  src="/lod4hss/logos/uzh.svg"
                  objectFit={'scale-down'}
                  width={150}
                  height={100}
                  alt="University of Zürich"
                />
              </ion-col>

              <ion-col size="4">
                <Image
                  src="/lod4hss/logos/dasch.png"
                  objectFit={'scale-down'}
                  width={150}
                  height={100}
                  alt="DaSCH"
                />
              </ion-col>
            </ion-row>

            {/* ROW 3 */}
            <ion-row>
              <ion-col size="4">
                <Image
                  src="/lod4hss/logos/hep.png"
                  width={150}
                  height={100}
                  objectFit={'scale-down'}
                  alt="Haute école pédagogique vaud"
                />
              </ion-col>
              <ion-col size="4">
                <Image
                  src="/lod4hss/logos/unibas.svg"
                  width={150}
                  height={100}
                  objectFit={'scale-down'}
                  alt="University of Basel"
                />
              </ion-col>

              <ion-col size="4">
                <Image
                  src="/lod4hss/logos/unifr.png"
                  width={150}
                  height={100}
                  objectFit={'scale-down'}
                  alt="University of Freiburg"
                />
              </ion-col>
            </ion-row>

            {/* ROW 4 */}
            <ion-row>
              <ion-col size="4">
                <Image
                  src="/lod4hss/logos/uniberlin.png"
                  width={150}
                  height={100}
                  objectFit={'scale-down'}
                  alt="Freie Universität Berlin"
                />
              </ion-col>
              <ion-col size="4">
                <Image
                  src="/lod4hss/logos/usi.png"
                  width={150}
                  height={100}
                  objectFit={'scale-down'}
                  alt="Università della Svizzera italiana"
                />
              </ion-col>

              <ion-col size="4">
                <Image
                  src="/lod4hss/logos/unigreifswald.png"
                  width={150}
                  height={100}
                  objectFit={'scale-down'}
                  alt="Universität Greifswald"
                />
              </ion-col>
            </ion-row>

            {/* ROW 4 */}
            <ion-row>
              <ion-col size="4">
                <Image
                  src="/lod4hss/logos/unitrier.png"
                  width={150}
                  height={100}
                  objectFit={'scale-down'}
                  alt="Universität Trier"
                />
              </ion-col>
              <ion-col size="4">
                <Image
                  src="/lod4hss/logos/abes.png"
                  width={150}
                  height={100}
                  objectFit={'scale-down'}
                  alt="Agence bibliographique de l'enseignement supérieur"
                />
              </ion-col>

              <ion-col size="4">
                <Image
                  src="/lod4hss/logos/huygens.png"
                  width={150}
                  height={100}
                  objectFit={'scale-down'}
                  alt="Huygens Institurte"
                />
              </ion-col>
              <ion-col size="4">
                <Image
                  src="/lod4hss/logos/sari.png"
                  width={150}
                  height={100}
                  objectFit={'scale-down'}
                  alt="Swiss Art Research Infrastructure (SARI)"
                />
              </ion-col>
            </ion-row>
          </ion-card-content>
        </ion-card>
      </p>
      <h2>With the financial support of</h2>
      <p className={styles.partners}>
        <Image
          src="/lod4hss/logos/swissuniversities.svg"
          width={300}
          height={100}
          objectFit={'scale-down'}
          alt="swissuniversities"
        />
      </p>
    </DefaultPage>
  );
};

export default Lod4Hss;
export const getStaticProps: GetStaticProps<Lod4HssProps> = async () => {
  return {
    props: {
      defaultPage: {
        headTitle: 'LOD4HSS',
        footer: {
          featuredProjects: projectsParams.filter((pp) => pp.featured),
        },
      },
    },
    revalidate: 86400,
  };
};
