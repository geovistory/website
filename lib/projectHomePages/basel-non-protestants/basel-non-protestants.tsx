import { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FigCaption } from '../../../components/elements/FigCaption.component';
import ImageWrapperComponent from '../../../components/elements/ImageWrapper.component';
import { Person } from '../../../components/elements/Person.component';
import { ProjectPageLayout } from '../../../components/layouts/ProjectPageLayout.component';
import { KleiolabLogo200 } from '../../../components/logos/KleiolabLogo200';
import { SnfLogo200 } from '../../../components/logos/SnfLogo200';
import { UnibasLogo200 } from '../../../components/logos/UnibasLogo200';
import { ProjectPageProps } from '../../../pages/project/[geov_id]';
import bannerImg from '../../../public/basel-non-protestants.jpg';
import styles from './basel-non-protestants.module.css';
import { StadtGeschichteBasel200 } from '../../../components/logos/StadtGeschichteBasel200';

const query = `PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ontome: <https://ontome.net/ontology/>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>

SELECT
(SAMPLE(?buildingLabel) as ?label)
(CONCAT(
'[',
    GROUP_CONCAT(CONCAT('{"label":"',?persName,'", "url":"',str(?person),'?p=1719422"}'); separator=', '),
    ']'
) as ?children)

?long ?lat ?link ?type
(count(?link) * 0.5 as ?radius)
WHERE {

# Construction -had presence-> Presence -was at-> Place (lat/long)
?building ontome:p147i/ontome:p148 ?place.

# Construction -label-> label
?building rdfs:label ?buildingLabel.

# Construction -is location of-> Legal location of an Actor
?building ontome:p1851i ?location.

# -is social quality of -> Person
?location ontome:p1411 ?person.

?person ontome:p1188i/ontome:p1189/rdfs:label ?type.

# Person -label-> persName
?person rdfs:label ?persName.

# Extract lat and long from WKT
bind(replace(str(?place), '<http://www.opengis.net/def/crs/EPSG/0/4326>', "", "i") as ?rep)
bind(xsd:float(replace(str(?rep), "^[^0-9\\\\.-]*([-]?[0-9\\\\.]+) .*$", "$1" )) as ?long )
bind(xsd:float(replace( str(?rep), "^.* ([-]?[0-9\\\\.]+)[^0-9\\\\.]*$", "$1" )) as ?lat )

# Append the project query param to the URI
bind(concat(str(?building), "?p=1719422") as ?link )


}
GROUP BY ?building ?long ?lat ?type ?link`;
const BaselNonProtestants_component: NextPage<ProjectPageProps> = (props) => {
  const router = useRouter();

  return (
    <div className={styles.theme}>
      <ProjectPageLayout {...props.projectPageLayout}>
        <div className={styles.bannerContainer}>
          <ImageWrapperComponent
            height="100%"
            caption={
              <FigCaption collapsible={true} collapsed={true}>
                Rund um den Gemsbrunnen am Unterer Heuberg 4/2 Ecke Gemsberg
                bildete sich ein erstes Zentrum jüdischen Lebens in Basel. Georg
                Wolf, Inhaber des Lithographiegeschäfts am Unteren Heuberg 2,
                war Gründungsmitglied des Männervereins Dowor Tow. Die Synagoge,
                die von 1850 bis 1868 in Betrieb war, befand sich im Gebäude am
                Ende der Strasse links. Das Bild stammt von ca. 1910. (Quelle:
                StaBS NEG 1823)
              </FigCaption>
            }
            noDialog={true}
          >
            <Image
              className={styles.bannerImage}
              src={bannerImg}
              placeholder="blur"
              alt="Roman Forum"
              layout="fill"
              objectFit={'cover'}
            />
          </ImageWrapperComponent>{' '}
          <ion-searchbar
            class={`restricted-width ${styles.searchBar}`}
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
            <div className={styles.titleLine1}>{props.params.fullName}</div>
          </h1>
        </div>

        <ion-grid fixed class="ion-padding">
          <h2>
            Wo waren Zentren des religiösen nicht-protestantischen Lebens in
            Basel?
          </h2>
          <p className="lead">
            Lokalisierung von jüdischen und katholischen Wohnzentren von 1850
            bis 1910 anhand von Vereins- und Berufslisten
          </p>
          <p>
            Ausgangspunkt des Projekts war die Frage nach Zentren des jüdischen
            und katholischen Lebens in Basel von 1850 bis 1910. Die beiden
            Religionsgruppen gehörten im protestantischen Basel zu den
            Minderheiten. Können mit Hilfe von Adresslisten von Vereinen und
            Berufstätigen Zentren des religiösen nicht-protestantischen Lebens
            herausgearbeitet werden?
          </p>
          <geov-yasgui
            id="el-1"
            default-plugin="mapCircles"
            collapse="true"
            ref={(el: HTMLGeovYasguiElement) => {
              if (el) {
                el.plugins = new Set<'mapCircles'>(['mapCircles']);
                el.queryTabs = [
                  {
                    name: 'Alle Gruppen',
                    sparqlEndpoint:
                      'https://sparql.geovistory.org/api_v1_project_1719422',
                    query: query,
                  },
                ];
                el.pluginConfig = {
                  mapCircles: {
                    disableScrollZoom: false,
                    displayMapNavigationControls: false,
                    maxZoom: 25,
                    radiusMin: 4,
                    radiusMax: 25,
                  },
                };
              }
            }}
          ></geov-yasgui>
          <p>
            Zur Lokalisierung von jüdischen Zentren dienten beispielhaft zwei
            Adresslisten. Einerseits wurde der 1857 gegründete jüdische
            Männerverein Dowor Tor ausgewählt. Die Adressen der
            Gründungsmitglieder wurde recherchiert und lokalisiert. Sie
            bestätigen, dass sich in der zweiten Hälfte des 19. Jahrhunderts in
            der Altstadt rund um den Heuberg, wo 1850 ein Warenlager in eine
            kleine Synagoge umgebaut worden war, ein Zentrum jüdischen Lebens
            gebildet hatte (siehe dunkelblaue Punkte auf der Karte).
          </p>
          <p>
            Andererseits wurde anhand einer Liste von jüdischen Handwerkerinnen
            und Handwerkern, die der jüdische Frauenverein rund 50 Jahre später
            erstellt hatte, untersucht, ob sich in der Zeit bis 1910 neue
            Zentren gebildet hatten. Die Analyse der Wohnorte zeigte, dass sich
            diese zusätzlich zur Altstadt auch im Hegenheimerquartier ballten.
            Nur vereinzelt lebten Personen hingegen im Kleinbasel (hellblau).
          </p>
          <p>
            Ebenfalls zwei Vereinslisten dienten zur Untersuchung von
            katholischen Zentren. Die Gründungsmitglieder des Katholikenvereins
            von 1850 wohnten in der ganzen Stadt, verteilt auf die Grossbasler
            und Kleinbasler Altstadt. Obwohl sich das religiöse und soziale
            Zentrum um die Clarakirche in Kleinbasel konzentrierte, wohnten die
            Vereinsmitglieder über die ganze Stadt verteilt (dunkelgrün).
            Weniger aussagekräftig ist die Analyse der Wohnorte der
            Vorstandsmitglieder des Jünglingsvereins St. Clara von 1905: Sie
            konzentrieren sich im Kleinbasel (hellgrün). Dies erklärt sich
            damit, dass 1884 mit der Pfarrei St. Marien eine eigenständige
            katholische Kirche mit religiösem und sozialem Leben im Grossbasel
            entstanden war.{' '}
          </p>
        
          <p>
            Die Arbeit ist im Rahmen der Arbeiten zum 6. Band des Projekts
            Stadt.Geschichte.Basel entstanden und hat zur Datenerfassung mit der
            Geovistory Toolbox gearbeitet.
          </p>
        </ion-grid>
        <ion-grid class={styles.section}>
          <h3>Involvierte Personen</h3>
          <ion-row class="restricted-width">
            <ion-col size="6">
              <Person name="Benedikt Pfister" description="Historiker" />
            </ion-col>
          </ion-row>
        </ion-grid>
        <ion-grid class={styles.sectionGray}>
          <h3>Partner</h3>
          <div className={styles.partners}>
            <ion-row>
   
       
              <ion-col
                size="4"
                style={{ display: 'flex' }}
                class="ion-justify-content-center"
              >
                <ion-card href="https://stadtgeschichtebasel.ch/" target="_blank">
                  <div
                    style={{ display: 'flex', background: 'white' }}
                    className="ion-justify-content-center"
                  >
                    <StadtGeschichteBasel200 />
                  </div>
                </ion-card>
              </ion-col>
              <ion-col
                size="4"
                style={{ display: 'flex' }}
                class="ion-justify-content-center"
              >
                <ion-card href="https://www.kleiolab.ch" target="_blank">
                  <div
                    style={{ display: 'flex', background: 'white' }}
                    className="ion-justify-content-center"
                  >
                    <KleiolabLogo200 />
                  </div>
                </ion-card>
              </ion-col>
            </ion-row>
          </div>
        </ion-grid>
        <ion-grid class={styles.section}>
          <div className="restricted-width">
            <ion-label>
              <small>Bild: StaBS NEG 1823</small>
            </ion-label>
          </div>
        </ion-grid>
      </ProjectPageLayout>
    </div>
  );
};

export default BaselNonProtestants_component;
