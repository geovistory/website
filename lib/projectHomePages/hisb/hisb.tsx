import { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Person } from '../../../components/elements/Person.component';
import { ProjectPageLayout } from '../../../components/layouts/ProjectPageLayout.component';
import { ProjectPageProps } from '../../../pages/project/[geov_id]';
import bannerImage from '../../../public/hisb-banner.jpg';
import styles from './hisb.module.css';
import { LermaLogo } from '../../../components/logos/LermaLogo';
import { KleiolabLogo } from '../../../components/logos/KleiolabLogo';
import { AmuLogo } from '../../../components/logos/AmuLogo';
import { QmcrleLogo } from '../../../components/logos/QmcrleLogo';
import { BritishCouncilLogo } from '../../../components/logos/BritishCouncilLogo';
import { CampusFranceLogo } from '../../../components/logos/CampusFranceLogo';


const Hisb_component: NextPage<ProjectPageProps> = (props) => {
  const router = useRouter();

  return (
    <div className={styles.theme}>
      <ProjectPageLayout {...props.projectPageLayout}>
        <div className={styles.bannerContainer}>
          <Image
            className={styles.bannerImage}
            src={bannerImage}
            alt="Historisch-Genealogisches Informationssystem Basel"
            layout="fill"
            placeholder="blur"
            objectFit={'cover'}
          />

          <div className={styles.title}>
            <h1 className={styles.title1}>Historisch-Genealogisches Informationssystem Basel</h1>
          </div>
        </div>

        <ion-grid fixed class="ion-padding">
          <p className="lead">
            <strong>
              Das HISB als Zugang zu den Basler Volkszählungen.
            </strong>
          </p>{' '}
          <p className={styles.justify}>
            Das «Historisch-Genealogische Informationssystem Basel» (HISB) hat zum Ziel, 
            die im Bürgerforschungsprojekt Basel-Spitalfriedhof (BBS) erschlossenen Personendaten in 
            einem webbasierten Informationssystem der Forschung und der Öffentlichkeit zugänglich zu machen. 
            <br />
            Die zurzeit zugänglichen Daten umfassen die Personen der Basler Volkszählungen 1850 und 1860.
          </p>


          <p>
            <ion-row>
              <ion-col size="12">
                <Person
                  name="Dr. Gerhard Hotz, Projektverantwortlicher"
                  description=""
                />
              </ion-col>
            </ion-row>
          </p>
          </ion-grid>
      </ProjectPageLayout>
    </div>
  );
};

export default Hisb_component;
