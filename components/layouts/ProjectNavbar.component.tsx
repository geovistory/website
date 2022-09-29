import Link from 'next/link';
import styles from './ProjectNavbar.module.css';
export interface ProjectNavbarProps {
  title: string;
  projectId: number;
  sparqlLinkEnabled: boolean;
  teiLinkEnabled: boolean;
}
export const ProjectNavbar = (props: ProjectNavbarProps) => {
  return (
    <>
      <ion-toolbar class={styles.toolbar} color="light">
        <ion-buttons class={styles.buttonsLeft}>
          <Link href="/" passHref={true}>
            <a>
              <ion-img
                class={styles.logo}
                src={'/Geovistory-Logo-No-Text-Gray.svg'}
              />
            </a>
          </Link>
          <ion-button href={`/project/${props.projectId}`}>
            {props.title}
          </ion-button>
        </ion-buttons>
        <ion-buttons slot="end">
          <ion-menu-button
            class="ion-hide-sm-up"
            id="main"
            menu="main"
          ></ion-menu-button>
          <span className="ion-hide-sm-down">
            {props.teiLinkEnabled && (
              <ion-button href={`/project/${props.projectId}/publication`}>
                Inhalt
              </ion-button>
            )}
            {props.sparqlLinkEnabled && (
              <>
                <ion-button href={`/project/${props.projectId}/sparql`}>
                  SPARQL
                </ion-button>
                <ion-button href={`/project/${props.projectId}/search`}>
                  Search
                </ion-button>
              </>
            )}
          </span>
        </ion-buttons>
      </ion-toolbar>
    </>
  );
};
