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
                Edition
              </ion-button>
            )}
            {props.sparqlLinkEnabled && (
              <>
                <ion-button href={`/project/${props.projectId}/sparql`}>
                  SPARQL
                </ion-button>

                <ion-button
                  href={`https://sparklis.geovistory.org/?title=Geovistory%20Project%20${props.title}&endpoint=https%3A//sparql.geovistory.org/api_v1_project_${props.projectId}&entity_lexicon_select=http%3A//www.w3.org/2000/01/rdf-schema%23label&concept_lexicons_select=http%3A//www.w3.org/2000/01/rdf-schema%23label`}
                  target="blank"
                >
                  Sparklis
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
