import { NextPage } from 'next';
import Image from 'next/image';
import { Person } from '../../../components/elements/Person.component';
import { ProjectPageLayout } from '../../../components/layouts/ProjectPageLayout.component';
import { ProjectPageProps } from '../../../pages/project/[geov_id]';
import { AnrLogo } from '../../../components/logos/AnrLogo';
import styles from './processetti.module.css';
import { EcoleFrancaisRomeLogo } from '../../../components/logos/EcoleFrancaisRomeLogo';
import { UniAthensLogo } from '../../../components/logos/UniAthensLogo';
import { UniPadovaLogo } from '../../../components/logos/UniPadovaLogo';
import { SgaLogo } from '../../../components/logos/SgaLogo';
import { EcoleFrancaisAthensLogo } from '../../../components/logos/EcoleFrancaisAthensLogo';
import { LarhraLogo } from '../../../components/logos/LarhraLogo';
import { KleiolabLogo } from '../../../components/logos/KleiolabLogo';

const Processetti_component: NextPage<ProjectPageProps> = (props) => {
  const params = props.params;

  return (
    <div className={styles.theme}>
      <ProjectPageLayout {...props.projectPageLayout}>
        <ion-grid fixed class="ion-padding">
          <h1>{params.fullName}</h1>
          <p className="lead">
            Migration et mariage à Venise au 16ème/17ème siècle.
          </p>{' '}
          <div className="restricted-width">
            <ion-img
              src="/Processetti_Immagine-Teresa-Bernardi.jpeg"
              alt="B.Licinio, Familienbild - B.Licinio / Family Portr./ Paint./ 	C16 - B. Licinio / Portrait de famille"
            />
          </div>
          <div className="restricted-width">
            <ion-label>
              <small>
                B.Licinio, Familienbild - B.Licinio / Family Portr./ Paint./ C16
                - B. Licinio / Portrait de famille
              </small>
            </ion-label>
          </div>
          {/* <h2>Description</h2> */}
          <p>
            Comment retracer les migrations de travail en direction de Venise
            entre XVIe et XVIIe siècles&nbsp;? Comment les immigrés, hommes et
            femmes, intégraient-ils le monde des métiers&nbsp;? Comment
            mobilisaient-ils leurs relations de travail quand ils avaient à
            désigner des témoins au moment de leur mariage&nbsp;? Une source
            exceptionnelle permet de répondre à ces questions : il s’agit des
            enquêtes conduites par l’autorité épiscopale pour vérifier que les
            futurs époux, non-natifs de la ville, n’étaient pas mariés ailleurs.
          </p>
          <p>
            Ce programme de recherche historique porte sur les interactions
            entre une institution et une pratique : d’un côté, le mariage,
            sacrement de l’Église et étape essentielle dans l’établissement
            professionnel et l’inclusion sociale ; de l’autre, la mobilité,
            prise dans sa double acception spatiale et sociale. Il prend pour
            terrain d’enquête, la Venise moderne, qui était à la fois une très
            grande ville de plus de 150000 habitants à la fin du XVIe siècle et
            une ville-monde dont la population mêlée venait de tout le pourtour
            méditerranéen et de pays transalpins. À ce titre, elle constitue un
            observatoire privilégié pour étudier les mariages
            interconfessionnels (entre catholiques et orthodoxes), entre
            étrangers et entre natifs et immigrés.
          </p>
          <p>
            En s’appuyant sur l’environnement virtuel de recherche « Geovistory
            Toolbox », une base de données nominative, sémantiquement claire et
            interopérable selon les principes FAIR a été constituée
            collaborativement pour exploiter cette riche source.
          </p>
          <h4>Porteur du projet</h4>
          <p>
            <Person
              name="Professeur Jean-François Chauvard"
              description="Professeur d’histoire moderne, Université Paris 1
                  Panthéon-Sorbonne"
            />
          </p>
          <h4>
            Transcription, annotation sémantique, saisie et analyse des données
          </h4>
          <p>
            <ion-row>
              <ion-col size="6">
                <Person
                  name="Francesca Zungo"
                  description="Collaboratrice du projet"
                />
              </ion-col>
              <ion-col size="6">
                <Person
                  name="Davide Drago"
                  description="Collaborateur du projet"
                />
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col size="6">
                <Person
                  name="Jacopo Cossu"
                  description="Collaborateur du projet"
                />
              </ion-col>
              <ion-col size="6">
                <Person
                  name="Teresa Bernardi"
                  description="Post-doctorat Université de Padoue"
                />
              </ion-col>
            </ion-row>
          </p>
          <h4>Modélisation sémantique et analyse des données</h4>
          <p>
            <Person
              name="Dr. habil. Francesco Beretta"
              description="Chargé de recherche, CNRS, LARHRA"
            />
          </p>
          <h4>Institutions partenaires</h4>
          {/* <ion-card-header>
              <ion-card-title>
                <h2 className={styles.logosTitle}>Institutions partenaires</h2>
              </ion-card-title>
            </ion-card-header> */}
          <p>
            <ion-row>
              <ion-col size="4">
                <AnrLogo />
              </ion-col>
              <ion-col size="4">
                <EcoleFrancaisRomeLogo />
              </ion-col>

              <ion-col size="4">
                <UniAthensLogo />
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col size="4">
                <UniPadovaLogo />
              </ion-col>

              <ion-col size="4">
                <SgaLogo />
              </ion-col>
              <ion-col size="4">
                <EcoleFrancaisAthensLogo />
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col size="4">
                <LarhraLogo />
              </ion-col>
              <ion-col size="4">
                <KleiolabLogo />
              </ion-col>
            </ion-row>
          </p>
        </ion-grid>
      </ProjectPageLayout>
    </div>
  );
};

export default Processetti_component;
