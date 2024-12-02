/* eslint-disable @next/next/no-html-link-for-pages */
  import styles from './navbar.module.css';
  import { useRouter } from 'next/router';
  
  export interface NavbarProps {
    title: string;
    projectId: number;
    className?: string;
  }

  export const analysisAndDataLinks = [
    {label: "Analysis & Data", href: "/urban-biographies/analysis-and-data"},
    {label: "Herakleopolis", href: "/urban-biographies/analysis-and-data/herakleopolis"},
    {label: "Antinoopolis", href: "/urban-biographies/analysis-and-data/antinoopolis"}
  ]

  export const dataPortalLinks = [
    {label: "Data portal", href: "/urban-biographies/data-portal"},
    {label: "Data Access", href: "/urban-biographies/data-portal/data-access"}
  ]

  export const menuStructure = [
    {
      label: "Methodology & Process",
      links: [{label: "Methodology & Process", href: "/urban-biographies/methodology-and-process"}],
      activateFor: '/methodology-and-process'
    },
    {label: "Analysis & Data", links: analysisAndDataLinks, activateFor: '/analysis-and-data'},
    {label: "Data portal", links: dataPortalLinks, activateFor: '/data-portal'},
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
            <ion-button class="ion-hide-md-up" href={`/urban-biographies`}>
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
                href={`/urban-biographies`}
                style={
                  router.pathname === '/urban-biographies' ? { fontWeight: '600', color: '#111' } : { color: '#111' }
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
  
          <ion-buttons slot="end">
            <ion-button href={`/project/591/sparql`}>SPARQL</ion-button>
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