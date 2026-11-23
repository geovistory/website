import {useEffect, useRef} from 'react';
import {NextPage} from 'next';
import Image from 'next/image';
import {useRouter} from 'next/router';
import {Person} from '../../../components/elements/Person.component';
import {ProjectPageLayout} from '../../../components/layouts/ProjectPageLayout.component';
import {ProjectPageProps} from '../../../pages/project/[geov_id]';
import bannerImage from '../../../public/multifaith-london.jpg';
import styles from './multifaith-london.module.css';
import {LermaLogo} from '../../../components/logos/LermaLogo';
import {KleiolabLogo} from '../../../components/logos/KleiolabLogo';
import {AmuLogo} from '../../../components/logos/AmuLogo';
import {QmcrleLogo} from '../../../components/logos/QmcrleLogo';
import {BritishCouncilLogo} from '../../../components/logos/BritishCouncilLogo';
import {CampusFranceLogo} from '../../../components/logos/CampusFranceLogo';
import '@matdata/yasgui/build/yasgui.min.css';

const query = `
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ontome: <https://ontome.net/ontology/>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>

SELECT * 
WHERE {
  {
    SELECT 
    (SAMPLE(?buildingLabel) as ?label) ?lat (?long as ?lon) ?buildingLabel ("Baptist" as ?type) (1 as ?radius) ?link
    WHERE {
        # Only the Constructions
        ?building rdf:type ontome:c441.
        # Get the Constructions label
        ?building rdfs:label ?buildingLabel.
        # Get the type (has tag)
        ?building ontome:p1440/rdfs:label ?raw_type.
        # Construction -had presence-> Presence -was at-> Place (lat/long)
        ?building ontome:p147i/ontome:p148 ?place.
        FILTER(contains(?raw_type, "Baptist")) 
        # Extract lat and long from WKT
        bind(replace(str(?place), '<http://www.opengis.net/def/crs/EPSG/0/4326>', "", "i") as ?rep)
        bind(xsd:float(replace(str(?rep), "^[^0-9\\\\.-]*([-]?[0-9\\\\.]+) .*$", "$1" )) as ?long )
        bind(xsd:float(replace( str(?rep), "^.* ([-]?[0-9\\\\.]+)[^0-9\\\\.]*$", "$1" )) as ?lat )
        # Append the project query param to the URI
        bind(concat(str(?building), "?p=15458106") as ?link )

        FILTER(
          BOUND(?lat) && BOUND(?long) &&
          str(?lat) != "NaN" && str(?long) != "NaN" &&
          ?lat >= -90 && ?lat <= 90 &&
          ?long >= -180 && ?long <= 180
        )
    }
    GROUP BY ?building ?long ?lat ?type ?buildingLabel ?link
  }
  UNION
  {
    SELECT 
    (SAMPLE(?buildingLabel) as ?label) ?lat (?long as ?lon) ?buildingLabel ?type (1 as ?radius) ?link
    WHERE {
        # Only the Constructions
        ?building rdf:type ontome:c441.
        # Get the Constructions label
        ?building rdfs:label ?buildingLabel.
        # Get the type (has tag)
        ?building ontome:p1440/rdfs:label ?type.
        # Construction -had presence-> Presence -was at-> Place (lat/long)
        ?building ontome:p147i/ontome:p148 ?place.
        FILTER(!contains(?type, "Baptist"))
        # Extract lat and long from WKT
        bind(replace(str(?place), '<http://www.opengis.net/def/crs/EPSG/0/4326>', "", "i") as ?rep)
        bind(xsd:float(replace(str(?rep), "^[^0-9\\\\.-]*([-]?[0-9\\\\.]+) .*$", "$1" )) as ?long )
        bind(xsd:float(replace( str(?rep), "^.* ([-]?[0-9\\\\.]+)[^0-9\\\\.]*$", "$1" )) as ?lat )
        # Append the project query param to the URI
        bind(concat(str(?building), "?p=15458106") as ?link )

        FILTER(
          BOUND(?lat) && BOUND(?long) &&
          str(?lat) != "NaN" && str(?long) != "NaN" &&
          ?lat >= -90 && ?lat <= 90 &&
          ?long >= -180 && ?long <= 180
        )
    }
    GROUP BY ?building ?long ?lat ?type ?buildingLabel ?link
  }
  FILTER(!contains(?type, "Jew"))
  FILTER(!contains(?type, "Catholic"))
}
ORDER BY ?type
`;

const ENDPOINT = 'https://sparql.geovistory.org/api_v1_project_15458106';
const PERSISTENCE_KEY = 'geovistory_multifaith_london_sparql_tabs_v2';

const MultiFaithLondon_component: NextPage<ProjectPageProps> = (props) => {
    const router = useRouter();
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        import('@matdata/yasgui').then(({default: Yasgui}) => {
            if (containerRef.current && !containerRef.current.hasChildNodes()) {
                const hasSavedSession = Object.keys(localStorage).some((key) =>
  key.includes(PERSISTENCE_KEY)
);

                const yasgui = new Yasgui(containerRef.current, {
                    requestConfig: {
                        endpoint: ENDPOINT,
                    },
                    copyEndpointOnNewTab: true,
                    persistenceId: PERSISTENCE_KEY,
                    yasr: {
                        pluginOrder: ['geo', 'table', 'response'],
                        defaultPlugin: 'geo',
                    },
                });

                const themeManager = (yasgui as any).themeManager;
                if (themeManager && !themeManager.getStoredTheme()) {
                    themeManager.setTheme('light');
                }

                if (!hasSavedSession) {
                    const firstTab = yasgui.getTab();
                    if (firstTab) {
                        firstTab.setName('All Constructions');
                        firstTab.setEndpoint(ENDPOINT);
                        firstTab.setQuery(query);
                    }
                }
            }
        });
    }, []);

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
                                            query: {term: inputEl?.value},
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
                        The primary aim of the project is to reassess these communities&apos; significance in
                        early-modern
                        religious history and the history of religious sociability, by observing how multiconfessional
                        exchange developed in religious places, such as places of worship, places of memory,
                        and charitable and educational institutions. For this pilot, funded by a bilateral
                        Programme Hubert Curien (Campus France, the British Council), we created a relational database
                        of dissenting
                        (quaker, presbyterian, congregational and baptist) and Huguenot places of worship using a
                        manuscript list from 1730.
                        We put our data into Geovistory and translate it to a map of London from 1746 (John
                        Rocque&apos;s map,
                        georeferenced and provided by the British Library and used with permission). You can use this
                        map to search for
                        people and places and to see where they were located and how they were connected.
                    </p>

                    <p className="lead">
                        <strong>
                            The map below depicts the meeting places of dissenting and huguenot communities in 18th
                            century London
                        </strong>
                    </p>{' '}

                    <div ref={containerRef} style={{marginBottom: '2rem'}}/>

                    <p>
                        <strong>Note</strong> that the map is shown in high resolution when you zoom in. Click on any
                        location for detailed information.
                    </p>

                    <p>
                        Find here further information:
                        <ul>
                            <li><a href="https://mml.hypotheses.org/">Mapping Multifaith London blog</a></li>
                            <li><a href="https://umap.openstreetmap.fr/fr/map/multifaith-2024-cmh_1109014">Mapping
                                Multifaith London u-Map teaching tool</a></li>
                        </ul>
                    </p>

                    <h4>Project leaders</h4>
                    <p>
                        <ion-row>
                            <ion-col size="12">
                                <Person
                                    name="Anne Dunan-Page (Aix-Marseille Université)"
                                    description=""
                                />
                            </ion-col>
                        </ion-row>
                        <ion-row>
                            <ion-col size="12">
                                <Person
                                    name="Tessa Whitehouse (Queen Mary University of London)"
                                    description=""
                                />
                            </ion-col>
                        </ion-row>
                    </p>

                    <h4>Geovistory co-ordinators</h4>
                    <p>
                        <ion-row>
                            <ion-col size="12">
                                <Person
                                    name="William Burgess  (Queen Mary University of London)"
                                    description=""
                                />
                            </ion-col>
                        </ion-row>
                        <ion-row>
                            <ion-col size="6">
                                <Person
                                    name="David Knecht (KleioLab)"
                                    description=""
                                />
                            </ion-col>
                        </ion-row>
                    </p>

                    <h4>Institutional Partners</h4>
                    <p>
                        <ion-row>
                            <ion-col size="6">
                                <LermaLogo/>
                            </ion-col>
                            <ion-col size="6">
                                <AmuLogo/>
                            </ion-col>
                        </ion-row>
                        <ion-row>
                            <ion-col size="6">
                                <QmcrleLogo/>
                            </ion-col>
                            <ion-col size="6">
                                <BritishCouncilLogo/>
                            </ion-col>
                        </ion-row>
                        <ion-row>
                            <ion-col size="6">
                                <CampusFranceLogo/>
                            </ion-col>
                            <ion-col size="6">
                                <KleiolabLogo/>
                            </ion-col>
                        </ion-row>
                    </p>

                </ion-grid>
            </ProjectPageLayout>
        </div>
    );
};

export default MultiFaithLondon_component;