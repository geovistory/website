import { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Person } from '../../../components/elements/Person.component';
import { ProjectPageLayout } from '../../../components/layouts/ProjectPageLayout.component';
import { CzeckAcademyScienceLogo200 } from '../../../components/logos/CzeckAcademyScienceLogo200';
import { GacrLogo200 } from '../../../components/logos/GacrLogo200';
import { SnfLogo200 } from '../../../components/logos/SnfLogo200';
import { UnifriLogo200 } from '../../../components/logos/UniFriLogo200';
import { ProjectPageProps } from '../../../pages/project/[geov_id]';
import bannerImg from '../../../public/urban-biographies.jpg';
import styles from './urban-biographies.module.css';
import { UnibasLogo200 } from '../../../components/logos/UnibasLogo200';

const UrbanBiographies_component: NextPage<ProjectPageProps> = (props) => {
  const router = useRouter();

  return (
    <div className={styles.theme}>
      <ProjectPageLayout {...props.projectPageLayout}>
        <div className={styles.bannerContainer}>
          <Image
            className={styles.bannerImage}
            src={bannerImg}
            placeholder="blur"
            alt="Roman Forum"
            layout="fill"
            objectFit={'cover'}
          />
        </div>
        <ion-grid fixed class="ion-padding">
          <h1>{props.params.fullName}</h1>
          <p className="lead">
            Antinoopolis and Heracleopolis in Egypt, c. 100- c. 650 CE.
          </p>
          <p>
            The Urban Biographies Project aims to integrate textual and material
            data and develop new digital tools to bring back into life the
            sights and smells of two cities from ancient Egypt in the Roman and
            late antique periods. By ancient historical standards, the evidence
            for both cities is voluminous: with more than one thousand texts for
            Antinoopolis, one of the currently most prolific sites for
            Greco-Roman and Byzantine Egypt, and about two hundred and fifty for
            Heracleopolis, whose archaeological evidence is also significant.
            The project team will analyze the parameters for urban development
            in Roman/late antique Egypt and write “urban biographies” of two
            important sites, in which all the available evidence will be brought
            to bear on broader questions of political, economic, cultural, and
            religious change.
          </p>
          <p>
            In addition to book monographs, peer-reviewed articles and edited
            volumes, the tools for the integration, analysis, and visualization
            of the data pertaining to people (digital urban prosopography) and
            places (a GIS platform for the contextualization and interpretation
            of archaeological data) will make the results of the project easily
            searchable and widely accessible, which will be also presented at a
            series of workshops and international conferences.
          </p>
          <p>
            Find more information on the{' '}
            <a
              href="https://romegyptcities.philhist.unibas.ch/en"
              target="_blank"
              rel="noreferrer"
            >
              project website
            </a>{' '}
            of the University of Basel.
          </p>
        </ion-grid>
        <ion-grid class={styles.section}>
          <h3>Involved People</h3>
          <ion-row class="restricted-width">
            <ion-col size="6">
              <Person name="Prof. Dr. Sabine Huebner" description="" />
            </ion-col>
            <ion-col size="6">
              <Person name="Dr. François Gerardin" description="" />
            </ion-col>
            <ion-col size="6">
              <Person name="Dr. Stefania Alfarano" description="" />
            </ion-col>

            <ion-col size="6">
              <Person name="Lucas Gericke, MA" description="" />
            </ion-col>
            <ion-col size="6">
              <Person name="Gregorio Aostalli, BA" description="" />
            </ion-col>
          </ion-row>
        </ion-grid>
        <ion-grid class={styles.sectionGray}>
          <h3>Funding agencies and partners</h3>
          <div className={styles.partners}>
            <ion-row>
              <ion-col
                size="4"
                style={{ display: 'flex' }}
                class="ion-justify-content-center"
              >
                <ion-card href="https://www.snf.ch/" target="_blank">
                  <div
                    style={{ display: 'flex', background: 'white' }}
                    className="ion-justify-content-center"
                  >
                    <SnfLogo200 />
                  </div>
                </ion-card>
              </ion-col>
              <ion-col
                size="4"
                style={{ display: 'flex' }}
                class="ion-justify-content-center"
              >
                <ion-card href="https://unibas.ch/" target="_blank">
                  <div
                    style={{ display: 'flex', background: 'white' }}
                    className="ion-justify-content-center"
                  >
                    <UnibasLogo200 />
                  </div>
                </ion-card>
              </ion-col>
            </ion-row>
          </div>
        </ion-grid>
        <ion-grid class={styles.section}>
          <div className="restricted-width">
            <ion-label>
              <small>
                <a
                  href="https://digitalcollections.nypl.org/items/510d47e0-1069-a3d9-e040-e00a18064a99"
                  target="_blank"
                  rel="noreferrer"
                >
                  Photo
                </a>
                : Rare Book Division, The New York Public Library. &quot;
                Antinoë [Antinoöpolis]. Vue des ruines de la ville, prise du
                côté du sud-ouest.&quot;{' '}
                <i>The New York Public Library Digital Collections</i>. 1817.
              </small>
            </ion-label>
          </div>
        </ion-grid>
      </ProjectPageLayout>
    </div>
  );
};

export default UrbanBiographies_component;
