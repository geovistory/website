import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonIcon
} from '@geovistory/design-system-react';
import { arrowForwardOutline } from 'ionicons/icons';
import React from 'react';
import { ProjectParams } from '../../model/project-param';
import styles from './ProjectCard.module.css';
export interface ProjectCardProps {
  project: ProjectParams;
}

export const ProjectCard = ({
  project,
}: ProjectCardProps) => (
  <IonCard>
    <IonCardHeader>
      {/* <IonCardSubtitle>Featured Project</IonCardSubtitle> */}
      <IonCardTitle className={styles.title}>{project.shortName}</IonCardTitle>
    </IonCardHeader>

    <IonCardContent>
      <div className={styles.description}>{project.description}</div>
      {project.hasPage && (
        <div className={styles.buttonContainer}>
          <IonButton shape="round" href={'/project/' + project.geovID}>
            Open
            <IonIcon slot="end" icon={arrowForwardOutline}></IonIcon>
          </IonButton>
        </div>
      )}
    </IonCardContent>
  </IonCard>
);
