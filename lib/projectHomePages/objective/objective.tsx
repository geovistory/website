import { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState, MouseEvent } from 'react';
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
  const [activeTab, setActiveTab] = useState<'home' | 'data'>('home');

  const handleTabChange = (e: MouseEvent, tab: 'home' | 'data') => {
    e.preventDefault();
    e.stopPropagation();
    setActiveTab(tab);
  };

  const preventFocusScroll = (e: MouseEvent) => {
    e.preventDefault();
  };

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
                style={{marginTop: '12rem !important'}}
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
                          query: { term: inputEl?.value},

                        });
                      });
                    }
                  });
                }}
            ></ion-searchbar>

            <div className={styles.title}>
              <h1 className={styles.title1}>OBJECTive</h1>
              <h3 className={styles.title2}>Tracking <i>Objets d&apos;art</i> in Time through the Art Market</h3>
            </div>

          </div>

          <div className="ion-padding-top ion-margin-bottom" style={{ display: 'flex', justifyContent: 'center' }}>
            <ion-segment
                value={activeTab}
                class={styles.customSegment}
                style={{ maxWidth: '600px' }}
            >
              <ion-segment-button
                  value="home"
                  onClick={(e: any) => handleTabChange(e, 'home')}
                  onMouseDown={preventFocusScroll}
              >
                <ion-label>Project Presentation</ion-label>
              </ion-segment-button>

              <ion-segment-button
                  value="data"
                  onClick={(e: any) => handleTabChange(e, 'data')}
                  onMouseDown={preventFocusScroll}
              >
                <ion-label>Data Overview</ion-label>
              </ion-segment-button>
            </ion-segment>
          </div>

          <ion-grid fixed class="ion-padding">

            {activeTab === 'home' && (
                <div className="animate__animated animate__fadeIn">
                  <p className="lead">
                    <strong>
                      Historical data on auctions in the modern era (1750-1950), ready to explore and reuse
                    </strong>
                  </p>{' '}
                  <p className={styles.justify}>
                    <i>Objets d&apos;art</i> (or decorative arts) are challenging to research as they include a vast array of objects, encompassing ceramics,
                    furniture, glass, metalwork, and textiles, all with distinctive forms, functions and materials, and their creators are often unknown.
                    Under-represented in cultural economics and heritage studies, the absence of a comprehensive dataset is an obstacle to study and track pieces across time.
                  </p>
                  <p className={styles.justify}>
                    This project aims to create a database on <i>objets d&apos;art</i> auction sales by working from a consistent source: the auction catalogue.
                  </p>

                  <p className={styles.emphasize}>
                    <strong>
                      From September 2023 to 2025 this project benefited from an ANR/Access ERC funding, to explore the corpus, map the project planning and test the methods.
                      This is a first step (proof of concept) to build-up a formal model, in offering access to a dataset (FAIR) from a first selection of 28 auctions,
                      taking place in Paris from 1839 until 1895, referencing their catalogues and total of 12 596 lots (around 23 000 objects),
                      corresponding to more than 456 000 information in the database.
                    </strong>
                  </p>

                  <p className={styles.justify}>
                    From the mid-18th century auctions have been organised, mainly in Paris and London, to sell and disperse objects,
                    increasing greatly in the first half of the 19th century to reach a rhythm of several thousand sales per decade.
                    Individual auctions have always both combined and dispersed a great diversity of fine objects, from a multitude of origins.
                    The catalogue is a crucial record. In many cases annotated catalogues exist (with hammer prices and buyers) and others can be cross-referenced
                    with auctioneers&apos; archives. The core of the dataset will be built up from the selection of a vast corpus of auction catalogues for the decorative arts.
                    These catalogues will be interrogated through digital methods (extraction, processing and machine learning) and Geovistory will be used to
                    integrate and structure various data collections. The database will offer a new tool for identification and provenance research but will also
                    focus on the individuals and institutions involved (sellers/buyers), allowing for a study of the networks and characteristics of this market over a long period.
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

                      <ion-col size="6">
                        <Person
                            name="Gaétan Muck"
                            description="Data Scientist/Engineer"
                        />
                      </ion-col>
                    </ion-row>
                  </p>

                  <h4>LARHRA Collaborators</h4>
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

                  <div className="restricted-width">
                    <ion-label>
                      <small>
                        Image: Ignacio de León y Escosura, Auction Sale in Clinton Hall, New York, 1876, The Metropolitan Museum of Art, 83.11, Gift of the Artist, 1883
                      </small>
                    </ion-label>
                  </div>
                </div>
            )}

            {activeTab === 'data' && (
                <div className="animate__animated animate__fadeIn">

                  <p className={styles.justify}>
                    The different visualisations are guided by the main research questions:
                  </p>
                  <p>
                    <ul>
                      <li>What kind of objects are circulating on the auction market in the time periods? What is their origin of manufacture? Their typology and material? When were they made?</li>
                      <li>Who are the actors leading the market?</li>
                    </ul>
                  </p>
                  <p className={styles.justify}>
                    The recorded data emanates from a selection of 28 Parisian auctions, taking place from 1839 until 1895, referencing their catalogues and total of 12 596 lots. The number of auctions doesn’t allow us to reach conclusive broader analysis but this overview of the recorded data can be used to highlight the quality of the information and the research perspectives once more data could be aggregated.
                  </p>

                  <p className={styles.justify}>
                    A few figures give an idea of the sheer volume of data recorded from the selection of sales:
                    <br />
                    12,596 auction lots are recorded in the database (each lot can combine several objects such as pairs or sets):
                    <br />
                    4,890 have a recorded origin of production (40%), referring to more than 170 different geographical locations, mostly in Europe but also Asia, the Middle East, Northern Africa, Central and South America.
                  </p>

                  <ion-row class="ion-margin-vertical">
                    <ion-col size="12" size-md="6">
                      <div style={{position: 'relative', width: '100%', height: '300px'}}>
                        <Image
                            src="/objective/map_of_all_origins_Europe.png"
                            layout="fill"
                            objectFit="contain"
                            alt="Map of origins Europe"
                        />
                      </div>
                    </ion-col>
                    <ion-col size="12" size-md="6">
                      <div style={{position: 'relative', width: '100%', height: '300px'}}>
                        <Image
                            src="/objective/map_of_all_origins_Global.png"
                            layout="fill"
                            objectFit="contain"
                            alt="Map of origins Global"
                        />
                      </div>
                    </ion-col>
                  </ion-row>
                  <div style={{textAlign: 'center', fontSize: '0.8em', color: '#666', marginBottom: '2rem'}}>
                    © OBJECTive / Camille Mestdagh - Gaetan Muck - 2025.
                  </div>

                  <p className={styles.justify}>
                    4,560 lots of objects have both known origins and recorded materials/techniques (37%); allowing us to analyse relationships between the country of origin, the materials used and the techniques applied.
                    <br />
                    10,790 have objects materials and/or techniques recorded (94%), listing 1,551 materials and/or technique references. More than 10,000 objects can be found in the top 10 categories of materials and techniques: Gold or Gilded, Porcelain, Bronze, Enamel, Wood, Silver, Marble, Copper, Ivory and Glass.
                  </p>

                  <p className={styles.justify}>
                    12,273 lots have an identifiable object type (98%) and nearly 5,000 can be classified within the top 12 object types, including: Vase, Plat, Pendule, Coupe, Sculpture, Boîte, Plateau, Tasse et Soucoupe, Flambeau, Montre, Table…
                  </p>

                  <ion-row class="ion-margin-vertical">
                    <ion-col size="12" size-md="6">
                      <div style={{position: 'relative', width: '100%', height: '300px'}}>
                        <Image
                            src="/objective/periods.png"
                            layout="fill"
                            objectFit="contain"
                            alt="Periods graph"
                        />
                      </div>
                    </ion-col>
                    <ion-col size="12" size-md="6">
                      <div style={{position: 'relative', width: '100%', height: '300px'}}>
                        <Image
                            src="/objective/authors.png"
                            layout="fill"
                            objectFit="contain"
                            alt="Authors graph"
                        />
                      </div>
                    </ion-col>
                  </ion-row>
                  <div style={{textAlign: 'center', fontSize: '0.8em', color: '#666', marginBottom: '2rem'}}>
                    © OBJECTive / Camille Mestdagh - Gaetan Muck - 2025.
                  </div>

                  <p className={styles.justify}>
                    For 3,118 lots the production period of the objects is referenced and could be recorded (just under 25%). It is interesting to note that the periods of production are mostly referenced in auction catalogues from the 1860s and increasingly into the 1880s. The “XVIe siècle” and “Renaissance” as well as the period known as “Louis XVI” in France are the most commonly found in the lots listed in the auction catalogues, followed by “Louis XIV” and Louis “XV” era.
                    <br />
                    Only very few lots of objects refer to authorship, referring to a single artist or maker’s names (5%). The most commonly found are: Boulle , followed by Clodion, Gouthière, Della Robbia (more than 20 times), then Thomire and Bernard Palissy (just over 10 times).
                  </p>

                  <p className={styles.justify}>
                    Thanks to the information recorded from the front pages of auction catalogues we can also measure and compare the participation of auctioneers and experts across the sales. The domination of the Auctioneer Charles Pillet is evident, directing more than half the sales selected, followed by Paul Chevallier, his successor.
                    <br />
                    In the same way, the leading expert is Charles Mannheim, employed in more than half the sales, followed by Charles Roussel who appears in a small number of them.
                  </p>

                  <div className="ion-margin-top ion-margin-bottom">
                    <h4 style={{textAlign: 'center', marginBottom: '1rem'}}>Experts participations in auction across all catalogues</h4>
                    <div style={{position: 'relative', width: '100%', height: '500px'}}>
                      <Image
                          src="/objective/experts.png"
                          layout="fill"
                          objectFit="contain"
                          alt="Experts participation graph"
                      />
                    </div>
                    <div style={{textAlign: 'center', fontSize: '0.8em', color: '#666', marginTop: '0.5rem'}}>
                      © OBJECTive / Camille Mestdagh - Gaetan Muck - 2025.
                    </div>
                  </div>

                  <div className="ion-margin-vertical">
                    <hr />
                  </div>

                  <div className="ion-text-center">
                    <h4>LIST OF CATALOGUES USED FOR THE START OF THE PROJECT OBJECTive (2023-2025)</h4>
                    <p style={{fontStyle: 'italic', marginBottom: '1rem'}}>(SOURCE FOR DATA EXTRACTION)</p>

                    <div style={{columns: '2 auto', columnGap: '2rem', textAlign: 'left', maxWidth: '600px', margin: '0 auto'}}>
                      <ul style={{listStyle: 'none', padding: 0, fontSize: '0.9em', lineHeight: '1.6'}}>
                        <li>1839-02-06 Debruge-Duménil</li>
                        <li>1839-03-12 Debruge-Duménil</li>
                        <li>1839-03-18 Curiosités</li>
                        <li>1840-12-14 Debruge-Duménil</li>
                        <li>1845-03-10 Berthon</li>
                        <li>1845-12-16 Jamar</li>
                        <li>1850-01-23 Debruge-Duménil</li>
                        <li>1855-06-04 Hope</li>
                        <li>1861-04-08 Prince-Soltykoff</li>
                        <li>1862-06-27 Pembroke</li>
                        <li>1862-11-03 Baslini</li>
                        <li>1863-01-13 Demidoff</li>
                        <li>1865-04-21 Beauvau</li>
                        <li>1866-02-07 Van-Cuyck</li>
                        <li>1866-03-30 Daigremont</li>
                        <li>1867-11-25 Mannheim-père</li>
                        <li>1867-12-09 Mannheim-père</li>
                        <li>1868-03-09 Monbro</li>
                        <li>1868-06-10 Didier</li>
                        <li>1876-04-03 Vaux-Praslin</li>
                        <li>1880-03-15 San-Donato</li>
                        <li>1882-04-17 Febvre</li>
                        <li>1883-02-12 Marquis</li>
                        <li>1883-04-09 Beurdeley</li>
                        <li>1883-04-23 Beurdeley</li>
                        <li>1889-03-11 Ayers</li>
                        <li>1890-05-05 Baron-Seillière</li>
                        <li>1895-05-27 Beurdeley</li>
                      </ul>
                    </div>
                  </div>

                </div>
            )}

          </ion-grid>
        </ProjectPageLayout>
      </div>
  );
};

export default OBJECTive_component;
