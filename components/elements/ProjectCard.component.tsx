
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
  <ion-card class={styles.container}>
    <ion-card-header>
      {/* <ion-card-subtitle>Featured Project</ion-card-subtitle> */}
      <ion-card-title class={styles.title}>{project.shortName}</ion-card-title>
    </ion-card-header>

    <ion-card-content class={styles.content}>
      <div className={styles.description}>{project.description}</div>
      {project.hasPage && (
        <div className={styles.buttonContainer}>
          <ion-button shape="round" href={'/project/' + project.geovID}>
            Open
            <ion-icon slot="end" icon={arrowForwardOutline}></ion-icon>
          </ion-button>
        </div>
      )}
    </ion-card-content>
  </ion-card>
);
