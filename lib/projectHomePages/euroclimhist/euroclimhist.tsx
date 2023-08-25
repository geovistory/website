import { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Person } from '../../../components/elements/Person.component';
import { ProjectPageLayout } from '../../../components/layouts/ProjectPageLayout.component';
import { MeteoSchweizLogo } from '../../../components/logos/MeteoSchweizLogo';
import { UnibeLogo } from '../../../components/logos/UnibeLogo';
import { ProjectPageProps } from '../../../pages/project/[geov_id]';
import euroclimhistImg from '../../../public/euroclimhist.jpg';
import styles from './euroclimhist.module.css';

const EuroClimHist_component: NextPage<ProjectPageProps> = (props) => {
  const router = useRouter();

  return (
    <div className={styles.theme}>
      <ProjectPageLayout {...props.projectPageLayout}>
        <div className={styles.bannerContainer}>
          <Image
            className={styles.bannerImage}
            src={euroclimhistImg}
            placeholder="blur"
            alt="EuroClimHist"
            layout="fill"
            objectFit={'cover'}
          />
          <ion-searchbar
            class="restricted-width"
            color="light"
            enterkeyhint="enter"
            placeholder="Search and hit enter…"
            ref={(el: any) => {
              el?.getInputElement().then(() => {
                setTimeout(() => {
                  console.log('focus on ', el);
                  el?.setFocus();
                }, 300);
              });
              el?.addEventListener('keypress', (event: KeyboardEvent) => {
                if (event.key === 'Enter') {
                  el?.getInputElement().then((inputEl: HTMLInputElement) => {
                    console.log(inputEl?.value);
                    router.push({
                      pathname: `${props.params.geovID}/search`,
                      query: { term: inputEl?.value },
                    });
                  });
                }
              });
            }}
          ></ion-searchbar>
          <h1 className={styles.title}>
            <div className={styles.titleLine1}>Euro-Climhist Database</div>
          </h1>
        </div>
        <ion-grid fixed class="ion-padding">
          <p className="lead">
            The historical climate database Euro-Climhist contains a unique set
            of data on observations and measurement series of weather phenomena.
          </p>{' '}
          <p>
            The historical climate database Euro-Climhist (ECH) has been growing
            continually for a timespan of more than 40 years. It contains
            information on observations and measurement series of weather
            phenomena. These are provided by a multitude of (institutional)
            partners.
            <br />
            <br />
            The first period of documentation, going back to the 1970s. The
            database gained a first significant impulse for an international
            scope on entire Europe in the early 1990s, based on a project and
            several conferences financed by the European Science Foundation.
            Finally, an enlargement of Euro-Climhist and a professionalization
            of the technical staff became possible since 2010 through the
            support of the Swiss Global Climate Observing System (GCOS) Office
            at the Federal Office of Meteorology and Climatology Meteo Swiss. In
            this way, an improved webbased scientific information system is now
            accessible. Enjoy discovering it!
          </p>
          <h4>Contributors</h4>
          <p>
            <ion-row>
              <ion-col size="6">
                <Person
                  name="Prof. Dr. Christian Rohr"
                  description="Lead database project"
                />
              </ion-col>
              <ion-col size="6">
                <Person
                  name="Prof. em. Dr. Christian Pfister"
                  description="Founder Euro-Climhist"
                />
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col size="6">
                <Person
                  name="MA Tamara Terry Widmer"
                  description="Assistant & Data Manager"
                />
              </ion-col>
              <ion-col size="6">
                <Person
                  name="Lukas Würsch"
                  description="Research Associate/ IT"
                />
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col size="6">
                <Person
                  name="Matthias Fries, MSc"
                  description="Senior Research Scientist/ IT"
                />
              </ion-col>
            </ion-row>
          </p>
          <h4>Contact</h4>
          <p>
            <ion-row>
              <ion-label>
                <p>euroclimhist@hist.unibe.ch</p>
              </ion-label>
            </ion-row>
          </p>
          <h4>Institutional Partners</h4>
          <p>
            <ion-row>
              <ion-col size="4">
                <MeteoSchweizLogo />
              </ion-col>
              <ion-col size="4">
                <UnibeLogo />
              </ion-col>
            </ion-row>
          </p>
          <div className="restricted-width">
            <ion-label>
              <small>
                Credit Picture: Title: The Grindelwaldgletscher, Creator: Thomas
                Fearnley 1838, Public Domain,{' '}
                <a
                  href="https://commons.wikimedia.org/wiki/File:Thomas_Fearnley_-_Grindelwaldgletscher_-_Google_Art_Project.jpg"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://commons.wikimedia.org/wiki/File:Thomas_Fearnley_-_Grindelwaldgletscher_-_Google_Art_Project.jpg
                </a>
              </small>
            </ion-label>
          </div>
        </ion-grid>
      </ProjectPageLayout>
    </div>
  );
};

export default EuroClimHist_component;
