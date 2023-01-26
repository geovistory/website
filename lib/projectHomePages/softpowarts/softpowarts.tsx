import { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Person } from '../../../components/elements/Person.component';
import { ProjectPageLayout } from '../../../components/layouts/ProjectPageLayout.component';
import { ProjectPageProps } from '../../../pages/project/[geov_id]';
import styles from './softpowarts.module.css';

const Softpowarts_component: NextPage<ProjectPageProps> = (props) => {
  const router = useRouter();

  return (
    <div className={styles.theme}>
      <ProjectPageLayout {...props.projectPageLayout}>
        <div className={styles.bannerContainer}>
          <Image
            className={styles.bannerImage}
            src="/softpowarts.jpg"
            alt="Softpowarts"
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
            <div className={styles.titleLine1}>Softpowarts</div>
          </h1>
        </div>
        <ion-grid fixed class="ion-padding">
          <p className="lead">
            Le soft power sud-américain : l&apos;usage politique de la
            circulation des arts de la scène au XXe siècle.
          </p>{' '}
          <p>
            Ce projet met en exergue l&apos;usage des arts de la scène comme
            arme politique relevant des diplomaties officielles et
            non-officielles, ou soft power, des pays sud-américains. Basé sur
            des archives théâtrales peu exploitées ou inédites, il vise à créer
            une plateforme de recherche numérique collaborative afin de
            renouveler l&apos;historiographie des relations culturelles
            interaméricaines au XXe siècle.
          </p>
          <p>
            <ion-button href={props.params.geovID + '/search'}>
              Accès aux données
            </ion-button>
          </p>
          <p>
            Les résultats de la recherche peuvent être filtrés par classe, comme
            par exemple :
            <ul>
              <li>
                Performance pour des concerts, des spectacles de danse et des
                représentations théâtrales
              </li>
              <li>Person pour les personnes</li>
              <li>Group pour les institutions et groupes</li>
              <li>Bibliographical Record pour les données bibliographiques</li>
            </ul>
          </p>
          <h4>Responsable scientifique</h4>
          <p>
            <ion-row>
              <ion-col size="6">
                <Person
                  name="Dr. Simele Soares-Rodigues"
                  description="Histoire Contemporaine, Maître de conférences, Université Lyon 3"
                />
              </ion-col>
            </ion-row>
          </p>
          <h4>Annotation sémantique, saisie et analyse des données</h4>
          <p>
            <ion-row>
              <ion-col size="6">
                <Person
                  name="Zandor Emerson Zarria"
                  description="Collaborateur du Projet"
                />
              </ion-col>
            </ion-row>
          </p>
          <h4>Modélisation sémantique et analyse des données</h4>
          <p>
            <ion-row>
              <ion-col size="6">
                <Person
                  name="Dr. habil. Francesco Beretta"
                  description="Chargé de recherche, CNRS, LARHRA"
                />
              </ion-col>
            </ion-row>
          </p>
          <h4>Institutions partenaires</h4>
          <p>
            <ion-row>
              <ion-col size="4">
                <Image
                  src="/logo_msh_lyon_st_etienne.jpg"
                  width={150}
                  height={150}
                  objectFit={'scale-down'}
                  alt="MSH Lyon St-Etienne"
                />
              </ion-col>
              <ion-col size="4">
                <Image
                  src="/larhra-logo.jpg"
                  width={150}
                  height={150}
                  objectFit={'scale-down'}
                  alt="LARHRA"
                />
              </ion-col>
              <ion-col size="4">
                <Image
                  src="/logo_musee_rio.jpg"
                  width={150}
                  height={150}
                  objectFit={'scale-down'}
                  alt="Musee Rio"
                />
              </ion-col>
              <ion-col size="4">
                <Image
                  src="/logo_marge.jpg"
                  width={150}
                  height={150}
                  objectFit={'scale-down'}
                  alt="MARGE"
                />
              </ion-col>
              <ion-col size="4">
                <Image
                  src="/logo_unila.jpg"
                  width={150}
                  height={150}
                  objectFit={'scale-down'}
                  alt="UNILA"
                />
              </ion-col>
              <ion-col size="4">
                <Image
                  src="/logo_teatro_solis.jpg"
                  width={150}
                  height={150}
                  objectFit={'scale-down'}
                  alt="Teatro Solis"
                />
              </ion-col>
            </ion-row>
          </p>
          <p>
            <ion-label>
              <small>
                Reference:{' '}
                <a
                  href="https://pt.wikipedia.org/wiki/Theatro_Municipal_de_S%C3%A3o_Paulo#/media/Ficheiro:Vista_do_centro_da_cidade_de_S%C3%A3o_Paulo_(SP),_early_20th_century_01.tif"
                  target="_blank"
                  rel="noreferrer"
                >
                  Vista do centro da cidade de São Paulo (SP)
                </a>
                , Public Domain
              </small>
            </ion-label>
          </p>
        </ion-grid>
      </ProjectPageLayout>
    </div>
  );
};

export default Softpowarts_component;
