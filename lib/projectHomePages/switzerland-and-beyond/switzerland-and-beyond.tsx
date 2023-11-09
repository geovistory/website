import { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Person } from '../../../components/elements/Person.component';
import { ProjectPageLayout } from '../../../components/layouts/ProjectPageLayout.component';
import { ProjectPageProps } from '../../../pages/project/[geov_id]';
import bannerImage from '../../../public/switzerland-and-beyond.jpeg';
import styles from './switzerland-and-beyond.module.css';
import { LarhraLogo } from '../../../components/logos/LarhraLogo';
import { HuygensLogo } from '../../../components/logos/HuygensLogo';
import { KleiolabLogo } from '../../../components/logos/KleiolabLogo';
import { UnibeLogo } from '../../../components/logos/UnibeLogo';

const SwitzerlandAndBeyond_component: NextPage<ProjectPageProps> = (props) => {
  const router = useRouter();

  return (
    <div className={styles.theme}>
      <ProjectPageLayout {...props.projectPageLayout}>
        <div className={styles.bannerContainer}>
          <Image
            className={styles.bannerImage}
            src={bannerImage}
            alt="Switzerland and Beyond"
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
            <div className={styles.titleLine1}>Switzerland and Beyond</div>
          </h1>
        </div>
        <ion-grid fixed class="ion-padding">
          <p className="lead">
            Linking Historical People, Places, and Organizations
          </p>{' '}
          <p>
            For the history of Switzerland, an abundance of source material, 
            information about places, persons, and organizations has been digitally 
            made accessible through various projects and infrastructures. This ongoing project 
            aims to bring together the data of these ventures by aggregating information from 
            the Historical Lexicon, Wikidata, DBPedia, the Swiss Law Sources Collection, 
            hallerNet, and various other outlets.
          </p>
          <p>
            The goal of the project is to demonstrate the interconnectedness of digitally 
            provided data sets and looming insights in the past of Switzerland but also other 
            subject and topics.
          </p>
          <p>
          The documentation of the project can be found on <a href="https://github.com/geovistory/switzerland-and-beyond/wiki">this page</a>.
          </p>
          <h4>Involved People</h4>
          <p>
            <ion-row>
              <ion-col size="6">
                <Person
                  name="Prof. Dr. Tobias Hodel"
                  description="Assistant Prof., University of Bern"
                />
              </ion-col>
              <ion-col size="6">
                <Person
                  name="Dr. Habil. Francesco Beretta"
                  description="Chargé de recherche, CNRS, LARHRA"
                />
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col size="6">
                <Person
                    name="Gaétan Muck"
                    description="Data Analyst KleioLab"
                  />
              </ion-col>
            </ion-row>
          </p>
          <h4>Institutional Partners</h4>
          <p>
            <ion-row>
              <ion-col size="4">
                <KleiolabLogo />
              </ion-col>
              <ion-col size="4">
                  <UnibeLogo />
              </ion-col>
              <ion-col size="4">
                <LarhraLogo />
              </ion-col>
            </ion-row>
          </p>
          <div className="restricted-width">
            <ion-label>
              <small>
                Photography | Festival parade in Liestal 1901, honors von Seiler, 
                Arnold - Kooperationinitiative Museen Baselland, Switzerland - CC BY-SA.{' '}
                <a
                  href="https://www.europeana.eu/item/2058611/_kimbl_1c394874_bf0c_4b83_8ed0_1f5addc8e9a1?lang=en"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.europeana.eu/item/2058611/_kimbl_1c394874_bf0c_4b83_8ed0_1f5addc8e9a1?lang=en
                </a>
              </small>
            </ion-label>
          </div>
        </ion-grid>
      </ProjectPageLayout>
    </div>
  );
};

export default SwitzerlandAndBeyond_component;
