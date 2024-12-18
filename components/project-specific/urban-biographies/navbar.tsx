/* eslint-disable @next/next/no-html-link-for-pages */
  import styles from './navbar.module.css';
  import { useRouter } from 'next/router';

  const rootPath = '/ce237e301411506ac8d264344c72ed1767c17d403053da43042d977d399e818d'
  
  export interface NavbarProps {
    title: string;
    projectId: number;
    className?: string;
  }

  export const analysisAndDataLinks = [
    {label: "Analysis & Data", href: rootPath + "/analysis-and-data"},
    {label: "Herakleopolis", href: rootPath + "/analysis-and-data/herakleopolis"},
    {label: "Antinoopolis", href: rootPath + "/analysis-and-data/antinoopolis"}
  ]

  export const dataPortalLinks = [
    {label: "Data Portal", href: rootPath + "/data-portal"},
    {label: "Data Access", href: rootPath + "/data-portal/data-access"}
  ]

  export const menuStructure = [
    {
      label: "Methodology & Process",
      links: [{label: "Methodology & Process", href: rootPath + "/methodology-and-process"}],
      activateFor: '/methodology-and-process'
    },
    {label: "Analysis & Data", links: analysisAndDataLinks, activateFor: '/analysis-and-data'},
    {label: "Data Portal", links: dataPortalLinks, activateFor: '/data-portal'},
  ];
  
  export const Navbar = (props: NavbarProps) => {
    const router = useRouter();
    return (
      <div className={styles.theme}>
        <ion-toolbar class={styles.toolbar} color="dark">
          <ion-buttons slot="start" class={styles.buttonsLeft}>
            <ion-menu-button
              class="ion-hide-md-up"
              id="main"
              menu="main"
            ></ion-menu-button>
            <ion-button class="ion-hide-md-up" href={rootPath}>
              {props.title}
            </ion-button>
            <a href="/" className="ion-hide-md-down">
              <ion-img
                class={styles.logo}
                src={'/Geovistory-Logo-No-Text-Black.svg'}
              />
            </a>
            <span className="ion-hide-md-down">
              <ion-button
                href={rootPath}
                style={
                  router.pathname === rootPath ? { fontWeight: '600', color: '#111' } : { color: '#111' }
                }
              >
                Urban Biographies
              </ion-button>
              {menuStructure.map((menuItem, mindex) => (
                <span key={mindex}>
                  <ion-button
                    href={menuItem.links[0].href}
                    style={
                      router.pathname.includes(menuItem.activateFor)
                        ? { fontWeight: '600', color: '#111' }
                        : { color: '#111' }
                    }
                  >
                    {menuItem.label}
                  </ion-button>
                </span>
              ))}
            </span>
          </ion-buttons>
  
        <ion-buttons slot="end" style={{color: '#111'}}>
          <ion-button href={`/project/6619613/sparql`}>SPARQL</ion-button>
        </ion-buttons>

          <ion-buttons class="ion-hide-md-up" slot="end">
            <a href="/">
              <ion-img
                class={styles.logo}
                src={'/Geovistory-Logo-No-Text-Gray.svg'}
              />
            </a>
          </ion-buttons>
        </ion-toolbar>
      </div>
    );
  };
  
  export default Navbar