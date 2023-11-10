import { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { ProjectPageLayout } from '../../../components/layouts/ProjectPageLayout.component';
import { AbesLogo } from '../../../components/logos/AbesLogo';
import { KleiolabLogo } from '../../../components/logos/KleiolabLogo';
import { LarhraLogo } from '../../../components/logos/LarhraLogo';
import { UnibeLogo } from '../../../components/logos/UnibeLogo';
import { ProjectPageProps } from '../../../pages/project/[geov_id]';
import bannerImg from '../../../public/academic-careers.jpg';
import styles from './academic-careers.module.css';
const AcademicCareers_component: NextPage<ProjectPageProps> = (props) => {
  const router = useRouter();

  return (
    <div className={styles.theme}>
      <ProjectPageLayout {...props.projectPageLayout}>
        <div className={styles.bannerContainer}>
          <Image
            className={styles.bannerImage}
            src={bannerImg}
            placeholder="blur"
            alt="Solvay conference 1911"
            layout="fill"
            objectFit={'cover'}
          />
          <ion-searchbar
            class={styles.searchbar}
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
            <div className={styles.titleLine1}>
              Academic <br /> Education & Careers
            </div>
          </h1>
        </div>
        <ion-grid fixed class="ion-padding">
          <p className="lead">
            An open collaborative project of the Geovistory community on the
            history of science and universities.
          </p>
          <p>
            <strong>
              Everyone is invited to join and contribute with their own data.
            </strong>
          </p>
          <p>
            The project is dedicated to the history of science and universities.
            You will find information about professors from different
            universities and their academic careers: from graduation to
            professorship.
          </p>
          <p>
            This project was initiated at the virtual DHd (German Digital
            Humanities Conference) in 2021, as part of a collaborative
            experiment. The original description of the experiment can be found{' '}
            <a
              href="https://vdhd2021.hypotheses.org/264"
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>
            . In this experiment, a first dataset, the directory of scholars at
            the University of Kiel in Germany, has been added. It was further
            enriched with data from various projects, such as the siprojuris
            project on French law professors.
          </p>
          <geov-yasgui
            class="restricted-width"
            id="el-1"
            default-plugin="mapCircles"
            collapse="true"
            ref={(el: HTMLGeovYasguiElement) => {
              el.plugins = new Set<'mapCircles'>(['mapCircles']);
              el.queryTabs = [
                {
                  name: 'Birth Place',
                  sparqlEndpoint:
                    'https://sparql.geovistory.org/api_v1_project_1483135',
                  query: `PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ontome: <https://ontome.net/ontology/>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>

SELECT 
  ?label ?long ?lat (count(?sv) * 0.5 as ?radius) (count(?sv) as ?number) ("Birth place" as ?type) ?link
WHERE {

  # Geographical Place -had presence-> Presence -was at-> Place (lat/long)
  ?s ontome:p147i/ontome:p148 ?place.

  # Geographical Place -label-> label
  ?s rdfs:label ?label.

  # Geographical Place -is place of-> Birth
  ?s ontome:p7i ?sv.

  # Extract lat and long from WKT
  bind(replace(str(?place), '<http://www.opengis.net/def/crs/EPSG/0/4326>', "", "i") as ?rep)
  bind(xsd:float(replace(str(?rep), "^[^0-9\\\\.-]*([-]?[0-9\\\\.]+) .*$", "$1" )) as ?long )
  bind(xsd:float(replace( str(?rep), "^.* ([-]?[0-9\\\\.]+)[^0-9\\\\.]*$", "$1" )) as ?lat )

  # Append the project query param to the URI
  bind(concat(str(?s), "?p=1483135") as ?link )
}
GROUP BY ?label ?long ?lat ?type ?link                
                `,
                },
              ];
            }}
          ></geov-yasgui>

          <h4>What can you do?</h4>
          <p>
            You can explore the available information using the graphical data
            explorer or the sparql endpoint. For example, you might want to
            explore the existing scholars per domain.
          </p>
          <p>
            <ion-button href={props.params.geovID + '/search'}>
              Search data
            </ion-button>
          </p>
          <p>
            Query and visualize the data, starting from an example map
            visualization where you can adapt the SPARQL query to
            show other geographical information of this community project.
          </p>
          <p>
            <ion-button href={props.params.geovID + '/sparql'}>
              Query and visualize data
            </ion-button>
          </p>
          <p>
            Or you can create an account in the{' '}
            <a
              href="https://toolbox.geovistory.org/"
              target="_blank"
              rel="noreferrer"
            >
              Geovistory Toolbox
            </a>{' '}
            and contribute to the community project as described in the Project
            manual.
          </p>
          <p>
            <ion-button
              href={
                'https://docs.geovistory.com/start/community-project-academic-education-and-careers'
              }
            >
              Project manual
            </ion-button>
          </p>
          <p>
            Contact us in case of questions! Either on{' '}
            <a
              href="https://discord.gg/pjcwjnruVb"
              target="_blank"
              rel="noreferrer"
            >
              Discord
            </a>{' '}
            or drop us a message:{' '}
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:info@geovistory.org"
            >
              info@geovistory.org
            </a>
            .
          </p>
          <h4>Institutional Partners</h4>
          <p>
            <ion-card
              style={{
                marginLeft: '0',
                marginRight: '0',
                paddingBottom: '1.5rem',
              }}
            >
              <ion-card-content>
                <ion-row>
                  <ion-col
                    size="6"
                    style={{ display: 'flex' }}
                    class="ion-justify-content-center"
                  >
                    <LarhraLogo />
                  </ion-col>
                  <ion-col
                    size="6"
                    style={{ display: 'flex' }}
                    class="ion-justify-content-center"
                  >
                    <KleiolabLogo />
                  </ion-col>
                </ion-row>
                <ion-row>
                  <ion-col
                    size="6"
                    style={{ display: 'flex' }}
                    class="ion-justify-content-center"
                  >
                    <UnibeLogo />
                  </ion-col>
                  <ion-col
                    size="6"
                    style={{ display: 'flex' }}
                    class="ion-justify-content-center"
                  >
                    <AbesLogo />
                  </ion-col>
                </ion-row>
              </ion-card-content>
            </ion-card>
          </p>
          <div className="restricted-width" style={{ marginTop: '5rem' }}>
            <ion-label>
              <small>
                Credit: Photograph of participants of the first Solvay
                Conference, in 1911, Brussels, Belgium. Taken by Benjamin
                Couprie. Public Domain.
              </small>
            </ion-label>
          </div>
        </ion-grid>
      </ProjectPageLayout>
    </div>
  );
};

export default AcademicCareers_component;
