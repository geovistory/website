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
import bannerImg from '../../../public/student-internationalism.jpg';
import styles from './student-internationalism.module.css';

const StudentInternationalism_component: NextPage<ProjectPageProps> = (
  props
) => {
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
            Globalization and Europeanization of Student Life since 1945
          </p>
          <p>
            Our research on student organizations during the Cold War focuses on
            transnational links and implemented actions. The project consists of
            four sub-projects and a common database on the organisations, people
            and events.
          </p>
          <p>
            The position of students has developed and changed significantly
            over the seven decades following the Second World War. Starting as a
            small elite portion of a generation in the post-war time, students
            saw the massification of tertiary education in the 1960s, the turn
            to individualization and career-oriented educational systems in the
            1980s, and the creation of pan-European international student
            networks in the 1990s. These processes often intersected with other
            trends and phenomena of the twentieth century, such as the Cold War,
            globalization, decolonization, social movements or the growing role
            of international organizations.
          </p>
          <p>
            The project is about students’ political and social life in post-war
            Europe. It focuses on the analysis of student organizations as
            platforms that channeled the student agentivity – both on
            international and national levels. The following organisations are
            in the focus of our research: The International Union of Students
            (IUS), the International Student Conference (ISC), Pax Romana, the
            World Federation of Christian Students (WCFS), the World Festival of
            Youth and Students, the Czechoslovak Union of Youth (ČSM), the
            Czechoslovak Socialist Youth Union (SSM) and the Swiss Student Union
            (VSS-UNES-USU).
          </p>
          <p>
            Find more information on the{' '}
            <a
              href="https://projects.unifr.ch/students-cold-war/"
              target="_blank"
              rel="noreferrer"
            >
              project website
            </a>{' '}
            of the University of Fribourg.
          </p>{' '}
          <p>
            The project works with the{' '}
            <a
              href="https://toolbox.geovistory.org"
              target="_blank"
              rel="noreferrer"
            >
              Geovistory Toolbox
            </a>{' '}
            to create, curate and publish its research data.
          </p>
        </ion-grid>
        <ion-grid class={styles.section}>
          <h3>Involved People</h3>
          <ion-row class="restricted-width">
            <ion-col size="6">
              <Person
                name="Matthieu Gillabert"
                description="University of Fribourg"
              />
            </ion-col>
            <ion-col size="6">
              <Person
                name="Mikuláš Pešta"
                description="Czech Academy of Sciences"
              />
            </ion-col>
            <ion-col size="6">
              <Person
                name="Lidia Lesnykh"
                description="University of Fribourg"
              />
            </ion-col>

            <ion-col size="6">
              <Person
                name="Martina Pácha"
                description="Czech Academy of Sciences"
              />
            </ion-col>
            <ion-col size="6">
              <Person
                name="Timothy Schürmann"
                description="University of Fribourg"
              />
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
                <ion-card href="https://gacr.cz/" target="_blank">
                  <div
                    style={{ display: 'flex', background: 'white' }}
                    className="ion-justify-content-center"
                  >
                    <GacrLogo200 />
                  </div>
                </ion-card>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col
                size="4"
                style={{ display: 'flex' }}
                class="ion-justify-content-center"
              >
                <ion-card href="https://www.unifr.ch/" target="_blank">
                  <div
                    style={{ display: 'flex', background: 'white' }}
                    className="ion-justify-content-center"
                  >
                    <UnifriLogo200 />
                  </div>
                </ion-card>
              </ion-col>
              <ion-col
                size="4"
                style={{ display: 'flex' }}
                class="ion-justify-content-center"
              >
                <ion-card href="https://www.avcr.cz/" target="_blank">
                  <div
                    style={{ display: 'flex', background: 'white' }}
                    className="ion-justify-content-center"
                  >
                    <CzeckAcademyScienceLogo200 />
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
                Photo credit: Národní archiv České republiky (National Archive
                of the Czech Republic): Posters on the occasion of the 40th
                anniversary of the International Union of Students. (f.
                Mezinárodní svaz studentstva), public domain.
              </small>
            </ion-label>
          </div>
        </ion-grid>
      </ProjectPageLayout>
    </div>
  );
};

export default StudentInternationalism_component;
