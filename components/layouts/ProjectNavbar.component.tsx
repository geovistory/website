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
                <ion-button href={`/project/${props.projectId}/explore`}>
                  Explore Data
                </ion-button>
              </>
            )}
          </span>
        </ion-buttons>
      </ion-toolbar>
    </>
  );
};
