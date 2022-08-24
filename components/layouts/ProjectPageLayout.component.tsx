import {
  IonApp,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonList,
  IonMenu,
  IonTitle,
  IonToolbar,
} from '@geovistory/design-system-react';
import { ReactNode } from 'react';
import { ProjectFooter } from './ProjectFooter.component';
import { ProjectNavbar, ProjectNavbarProps } from './ProjectNavbar.component';
import styles from './ProjectPageLayout.module.css';

export interface ProjectPageLayoutProps {
  navbar: ProjectNavbarProps;
  children?: ReactNode;
}

export const ProjectPageLayout = (props: ProjectPageLayoutProps) => {
  return (
    <>
      <IonApp>
        <IonMenu side="start" menuId="main" contentId="main">
          <IonHeader>
            <IonToolbar className={styles.menuTitle}>
              <IonTitle></IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonList>
              <IonItemDivider>
                <IonLabel>{props.navbar.title}</IonLabel>
              </IonItemDivider>
              <IonItem href={`/project/${props.navbar.projectId}`}>
                Project home
              </IonItem>
              {props.navbar.teiLinkEnabled && (
                <IonItem
                  href={`/project/${props.navbar.projectId}/publication`}
                >
                  Inhalt
                </IonItem>
              )}
              {props.navbar.sparqlLinkEnabled && (
                <IonItem href={`/project/${props.navbar.projectId}/sparql`}>
                  SPARQL
                </IonItem>
              )}
              <IonItemDivider>
                <IonLabel>Geovistory</IonLabel>
              </IonItemDivider>
              <IonItem href="/" lines="full">
                Geovistory home
              </IonItem>
            </IonList>
          </IonContent>
        </IonMenu>
        <IonHeader>
          <ProjectNavbar {...props.navbar} />
        </IonHeader>
        <IonContent>
          {props.children}
          <ProjectFooter showEeditiones={props.navbar.teiLinkEnabled}></ProjectFooter>
        </IonContent>
      </IonApp>
    </>
  );
};
