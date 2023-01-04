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
            <ion-toolbar class={styles.menuTitle}>
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
                  Edition
                </ion-item>
              )}
              {props.navbar.sparqlLinkEnabled && (
                <>
                  <ion-item href={`/project/${props.navbar.projectId}/sparql`}>
                    SPARQL
                  </ion-item>
                  <ion-item href={`https://sparklis-dev.geovistory.org/?title=Geovistory%20Project%20${props.navbar.title}&endpoint=https%3A//sparql.geovistory.org/api_v1_project_${props.navbar.projectId}&entity_lexicon_select=http%3A//www.w3.org/2000/01/rdf-schema%23label&concept_lexicons_select=http%3A//www.w3.org/2000/01/rdf-schema%23label`} target="blank">
                    Sparklis
                  </ion-item>
                  <ion-item href={`/project/${props.navbar.projectId}/search`}>
                    Search
                  </ion-item>
                </>
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
          <ProjectFooter
            showEeditiones={props.navbar.teiLinkEnabled}
          ></ProjectFooter>
        </ion-content>
      </ion-app>
    </>
  );
};
