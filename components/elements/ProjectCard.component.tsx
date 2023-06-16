import { arrowForwardOutline } from 'ionicons/icons';
import { NextComponentType } from 'next';
import React from 'react';
import { ProjectParams } from '../../lib/projectParams';
import styles from './ProjectCard.module.css';
export interface ProjectCardProps {
  project: ProjectParams;
  height?: number;
}

export const ProjectCard = ({ project, height }: ProjectCardProps) => (
  <ion-card
    class={styles.container}
    style={{ height: height ? height + 'px' : 'unset' }}
  >
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
