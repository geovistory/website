import {
  IonButton,
  IonButtons,
  IonMenuButton,
  IonToolbar,
} from '@geovistory/design-system-react';
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
      <IonToolbar className={styles.toolbar} color="light">
        <IonButtons className={styles.buttonsLeft}>
          <IonButton href={`/project/${props.projectId}`}>
            {props.title}
          </IonButton>
        </IonButtons>
        <IonButtons slot="end">
          <IonMenuButton
            class="ion-hide-sm-up"
            id="main"
            menu="main"
          ></IonMenuButton>
          <span className="ion-hide-sm-down">
            {props.teiLinkEnabled && (
              <IonButton href={`/project/${props.projectId}/publication`}>
                Inhalt
              </IonButton>
            )}
            {props.sparqlLinkEnabled && (
              <IonButton href={`/project/${props.projectId}/sparql`}>
                Data Access
              </IonButton>
            )}
          </span>
        </IonButtons>
      </IonToolbar>
    </>
  );
};
