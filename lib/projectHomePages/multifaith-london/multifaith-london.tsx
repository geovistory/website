import { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Person } from '../../../components/elements/Person.component';
import { ProjectPageLayout } from '../../../components/layouts/ProjectPageLayout.component';
import { ProjectPageProps } from '../../../pages/project/[geov_id]';
import bannerImage from '../../../public/multifaith-london.jpg';
import styles from './multifaith-london.module.css';
import { LermaLogo } from '../../../components/logos/LermaLogo';
import { KleiolabLogo } from '../../../components/logos/KleiolabLogo';
import { AmuLogo } from '../../../components/logos/AmuLogo';
import { QmcrleLogo } from '../../../components/logos/QmcrleLogo';
import { BritishCouncilLogo } from '../../../components/logos/BritishCouncilLogo';
import { CampusFranceLogo } from '../../../components/logos/CampusFranceLogo';

const query = `
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>

PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ontome: <https://ontome.net/ontology/>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>

SELECT 
(SAMPLE(?buildingLabel) as ?label) ?lat ?long ?buildingLabel ("Meeting places" as ?type) (1 as ?radius)

WHERE {

  	# Only the Constructions
  	?building rdf:type ontome:c441.

	# Get the Constructions label
    ?building rdfs:label ?buildingLabel.

	# Construction -had presence-> Presence -was at-> Place (lat/long)
	?building ontome:p147i/ontome:p148 ?place.

	# Extract lat and long from WKT
	bind(replace(str(?place), '<http://www.opengis.net/def/crs/EPSG/0/4326>', "", "i") as ?rep)
	bind(xsd:float(replace(str(?rep), "^[^0-9\\\\.-]*([-]?[0-9\\\\.]+) .*$", "$1" )) as ?long )
	bind(xsd:float(replace( str(?rep), "^.* ([-]?[0-9\\\\.]+)[^0-9\\\\.]*$", "$1" )) as ?lat )
	
  	# Extract the type
  
}
GROUP BY ?building ?long ?lat ?type ?buildingLabel
`

const MultiFaithLondon_component: NextPage<ProjectPageProps> = (props) => {
  const router = useRouter();

  return (
    <div className={styles.theme}>
      <ProjectPageLayout {...props.projectPageLayout}>
        <div className={styles.bannerContainer}>
          <Image
            className={styles.bannerImage}
            src={bannerImage}
            alt="Mapping Multifaith London, 1689-c.1740"
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
                      query: { term: inputEl?.value },
                    });
                  });
                }
              });
            }}
          ></ion-searchbar>

          <div className={styles.title}>
            <h1 className={styles.title1}>Mapping Multifaith London, 1689-c.1740</h1>
          </div>
        </div>

        <ion-grid fixed class="ion-padding">
          <p className="lead">
            <strong>
                Mapping different faith communities in 18th century London
            </strong>
          </p>{' '}
          <p className={styles.justify}>
                Mapping Multifaith London provides the first digital map of a European capital&apos;s 
                dissenting and nonconformist heritage by following the development of minority religious 
                communities and stranger churches in London across the period 1689-c.1740. 
                The primary aim of the project is to reassess these communities&apos; significance in early-modern 
                religious history and the history of religious sociability, by observing how multiconfessional 
                exchange developed in religious places, such as places of worship, places of memory, 
                and charitable and educational institutions. For this pilot, funded by a bilateral 
                Programme Hubert Curien (Campus France, the British Council), we created a relational database of dissenting 
                (presbyterian, congregational and baptist) and Huguenot places of worship using a manuscript list from 1730. 
                We put our data into  Geovistory and translate it to a map of London from 1746  (John Rocque&apos;s map, 
                georeferenced and provided by the British Library and used with permission). You can use this map to search for 
                people and places and to see where they were located and how they were connected.
          </p>


          <p className="lead">
            <strong>
            The interactive map below depicts the meeting places of the different faith communities in 18th century London.
            </strong>
          </p>{' '}
          <geov-yasgui
            id="el-1"
            default-plugin="mapCircles"
            collapse="true"
            ref={(el: HTMLGeovYasguiElement) => {
              if (el) {
                el.plugins = new Set<'mapCircles'>(['mapCircles']);
                el.queryTabs = [
                  {
                    name: 'All Constructions',
                    sparqlEndpoint:
                      'https://sparql.geovistory.org/api_v1_project_15458106',
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




          <h4>Project leaders</h4>
          <p>
            <ion-row>
              <ion-col size="6">
                <Person
                  name="Anne Dunan-Page"
                  description=""
                />
              </ion-col>
              <ion-col size="6">
                <Person
                  name="Tessa Whitehouse"
                  description=""
                />
              </ion-col>
            </ion-row>
          </p>

          <h4>Geovistory co-ordinators</h4>
          <p>
            <ion-row>
              <ion-col size="6">
                <Person
                    name="William Burgess"
                    description=""
                  />
              </ion-col>
              <ion-col size="6">
                <Person
                    name="David Knecht M.A."
                    description=""
                  />
              </ion-col>
            </ion-row>
          </p>

          <h4>Huguenot Team</h4>
          <p>
            Dan Rafiqi (King&apos;s College London)<br/>
            Mathilde Monge (Université Toulouse Jean-Jaurès)<br/>
            Ed Legon (Queen Mary University of London)<br/>
          </p>

          <h4>Catholic Team</h4>
          <p>
            Claire Schiano-Locurcio (Aix-Marseille Université)<br/>
            Laurence Lux-Sterritt (AMU)<br/>
            Emily Vine (Exeter University)<br/>
          </p>

          <h4>Quakers Team</h4>
          <p>
            Anna Hellier (Université Rennes 2)<br/>
            Naomi Pullin (Warwick University)<br/>
          </p>

          <h4>English Dissenters Team</h4>
          <p>
            Anne Dunan-Page (Aix-Marseille Université)<br/>
            Colin Harris (Aix-Marseille Université)<br/>
            Alison Searle (Leeds University)<br/>
          </p>

          <h4>Jewish Team</h4>
          <p>
            Emily Vine (Exeter University)<br/>
            Tessa Whitehouse (Queen Mary University of London)<br/>
          </p>

          <h4>Architecture and Mapping Team</h4>
          <p>
            Harry Adams (Courtauld Institute)<br/>
            Christine Stevenson (Courtauld Institute)<br/>
          </p>

          <h4>Digital advisers</h4>
          <p>
            Hannah Williams (Queen Mary University of London)<br/>
            Chris Sparks (Queen Mary University of London)<br/>
          </p>


          <h4>Institutional Partners</h4>
          <p>
            <ion-row>
              <ion-col size="6">
                <LermaLogo />
              </ion-col>
              <ion-col size="6">
                <AmuLogo />
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col size="6">
                <QmcrleLogo />
              </ion-col>
              <ion-col size="6">
                <BritishCouncilLogo />
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col size="6">
                <CampusFranceLogo />
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

export default MultiFaithLondon_component;
