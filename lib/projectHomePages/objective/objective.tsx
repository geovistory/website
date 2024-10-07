import { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Person } from '../../../components/elements/Person.component';
import { ProjectPageLayout } from '../../../components/layouts/ProjectPageLayout.component';
import { ProjectPageProps } from '../../../pages/project/[geov_id]';
import bannerImage from '../../../public/objective.png';
import styles from './objective.module.css';
import { LarhraLogo } from '../../../components/logos/LarhraLogo';
import { KleiolabLogo } from '../../../components/logos/KleiolabLogo';
import { AnrLogo2 } from '../../../components/logos/AnrLogo2';
import { Lyon2Logo } from '../../../components/logos/Lyon2Logo';

const OBJECTive_component: NextPage<ProjectPageProps> = (props) => {
  const router = useRouter();

  return (
    <div className={styles.theme}>
      <ProjectPageLayout {...props.projectPageLayout}>
        <div className={styles.bannerContainer}>
          <Image
            className={styles.bannerImage}
            src={bannerImage}
            alt="OBJECTive"
            layout="fill"
            placeholder="blur"
            objectFit={'cover'}
          />

          <ion-searchbar
            class="restricted-width"
            color="light"
            enterkeyhint="enter"
            placeholder="Search and hit enter…"
            ref={(el: any) => {
              setTimeout(() => {
                el?.getInputElement().then(() => {
                  console.log('focus on ', el);
                  el?.setFocus();
                });
              }, 300);
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
            <div className={styles.titleLine1}>OBJECTive</div>
          </h1>
        </div>



        <div className="restricted-width">
            <ion-label>
              <small>
                Image: Ignacio de León y Escosura, Auction Sale in Clinton Hall, New York, 1876, The Metropolitan Museum of Art, 83.11, Gift of the Artist, 1883
              </small>
            </ion-label>
          </div>

        <ion-grid fixed class="ion-padding">
          <p className="lead">
            <strong>
              Tracking <i>Objets d&apos;art</i> in Time through the Art Market<br />
              Historical data on auctions in the modern era (1750-1950), ready to explore and reuse
            </strong>
          </p>{' '}
          <p>
            <i>Objets d&apos;art</i> (or decorative arts) are challenging to research as they include a vast array of objects, encompassing ceramics, 
            furniture, glass, metalwork, and textiles, all with distinctive forms, functions and materials, and their creators are often unknown.
            Under-represented in cultural economics and heritage studies, the absence of a comprehensive dataset is an obstacle to study and track pieces across time.
          </p>
          <p>
            This project aims to create a database on <i>objets d&apos;art</i> auction sales (from 1750s until 1950s) by working from a consistent source: the auction catalogue.
          </p>
          <p>
            From the mid-18th century auctions have been organised, mainly in Paris and London, to sell and disperse objects, 
            increasing greatly in the first half of the 19th century to reach a rhythm of several thousand sales per decade.
            Individual auctions have always both combined and dispersed a great diversity of fine objects, from a multitude of origins.
            The catalogue is a crucial record. In many cases annotated catalogues exist (with hammer prices and buyers) and others can be cross-referenced 
            with auctioneers&apos; archives. The core of the dataset will be built up from the selection of a vast corpus of auction catalogues for the decorative arts. 
            These catalogues will be interrogated through digital methods (extraction, processing and machine learning) and Geovistory will be used to 
            integrate and structure various data collections. The database will offer a new tool for identification and provenance research but will also 
            focus on the individuals and institutions involved (sellers/buyers), allowing for a study of the networks and characteristics of this market over a long period.
          </p>
          <p>
            <strong>
              From September 2023 to 2025 this project benefits from an ANR/Access ERC funding, 
              to explore the corpus, map the project planning and test the methods with the input of the LARHRA engineers.
            </strong>
          </p>
          <h4>The team</h4>
          <p>
            <ion-row>
              <ion-col size="6">
                <Person
                  name="Dr. Camille Mestdagh"
                  description="Project Leader"
                />
              </ion-col>
            </ion-row>
          </p>

          <h4>LARHRA Engineers</h4>
          <p>
            <ion-row>
              <ion-col size="6">
                <Person
                    name="Morgane Pica M.A"
                    description="Database preparatory work"
                  />
              </ion-col>
              <ion-col size="6">
                <Person
                    name="Vincent Alamercery M.A"
                    description="Modelling preparatory work"
                  />
              </ion-col>
            </ion-row>
          </p>

          <h4>Scientific Commitee</h4>
          <p>
            (being formed)
          </p>


          <h4>Institutional Partners</h4>
          <p>
            <ion-row>
              <ion-col size="6">
                <AnrLogo2 />
              </ion-col>
              <ion-col size="6">
                <LarhraLogo />
              </ion-col>
              <ion-col size="6">
                <Lyon2Logo />
              </ion-col>
              <ion-col size="6">
                <KleiolabLogo />
              </ion-col>
            </ion-row>
          </p>
        </ion-grid>
      </ProjectPageLayout>
    </div>
  );
};

export default OBJECTive_component;
