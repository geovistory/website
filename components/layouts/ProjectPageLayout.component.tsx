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
      <ion-app>
        <ion-menu side="start" menu-id="main" content-id="main">
          <ion-header>
            <ion-toolbar className={styles.menuTitle}>
              <ion-title></ion-title>
            </ion-toolbar>
          </ion-header>
          <ion-content>
            <ion-list>
              <ion-item-divider>
                <ion-label>{props.navbar.title}</ion-label>
              </ion-item-divider>
              <ion-item href={`/project/${props.navbar.projectId}`}>
                Project home
              </ion-item>
              {props.navbar.teiLinkEnabled && (
                <ion-item
                  href={`/project/${props.navbar.projectId}/publication`}
                >
                  Inhalt
                </ion-item>
              )}
              {props.navbar.sparqlLinkEnabled && (
                <ion-item href={`/project/${props.navbar.projectId}/sparql`}>
                  Data Access
                </ion-item>
              )}
              <ion-item-divider>
                <ion-label>Geovistory</ion-label>
              </ion-item-divider>
              <ion-item href="/" lines="full">
                Geovistory home
              </ion-item>
            </ion-list>
          </ion-content>
        </ion-menu>
        <ion-header>
          <ProjectNavbar {...props.navbar} />
        </ion-header>
        <ion-content>
          {props.children}
          <ProjectFooter showEeditiones={props.navbar.teiLinkEnabled}></ProjectFooter>
        </ion-content>
      </ion-app>
    </>
  );
};
