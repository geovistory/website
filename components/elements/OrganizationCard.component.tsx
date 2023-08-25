import { openOutline } from 'ionicons/icons';
import Image from 'next/image';
import React, { PropsWithChildren, ReactNode } from 'react';
import styles from './OrganizationCard.module.css';
export interface OrganizationCardProps {
  organizationName: string;
  organizationDescription: string;
  organizationURL: string;
  children?: ReactNode;
}

export const OrganizationCard = ({
  organizationName,
  organizationDescription,
  organizationURL,
  children,
}: PropsWithChildren<OrganizationCardProps>) => (
  <ion-card class={styles.container} href={organizationURL} target="_blank">
    <div className={styles.imageContainer}>
      {children}
    </div>
    <ion-card-content>
      <div className={styles.description}>
        <strong>{organizationName}</strong> – {organizationDescription}
      </div>
    </ion-card-content>
  </ion-card>
);
