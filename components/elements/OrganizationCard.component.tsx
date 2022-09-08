import { openOutline } from 'ionicons/icons';
import Image from 'next/image';
import React from 'react';
import styles from './OrganizationCard.module.css';
export interface OrganizationCardProps {
  imageURL: string;

  // for image size, see https://nextjs.org/docs/api-reference/next/image#width
  imageWidth: number; // width of the original image (not the rendered output)
  imageHeight: number; // height of the original image (not the rendered output)
  organizationName: string;
  organizationDescription: string;
  organizationURL: string;
}

export const OrganizationCard = ({
  imageURL,
  imageWidth,
  imageHeight,
  organizationName,
  organizationDescription,
  organizationURL,
}: OrganizationCardProps) => (
  <ion-card class={styles.container}>
    <ion-item lines="full">
      {/* <ion-icon icon={pin} slot="start" /> */}
      {/* <ion-label>ion-item in a card, icon left, button right</ion-label> */}
      <ion-button
        fill="clear"
        slot="end"
        href={organizationURL}
        target="_blank"
      >
        Visit website
        <ion-icon icon={openOutline} slot="end" />
      </ion-button>
    </ion-item>
    <div className={styles.imageContainer}>
      <Image
        src={imageURL}
        alt={organizationName + ' image'}
        layout="responsive"
        width={imageWidth}
        height={imageHeight}
      />
    </div>
    <ion-card-header>
      {/* <ion-card-subtitle>Featured Project</ion-card-subtitle> */}
      <ion-card-title class={styles.title}>{organizationName}</ion-card-title>
    </ion-card-header>

    <ion-card-content>
      <div className={styles.description}>{organizationDescription}</div>
    </ion-card-content>
  </ion-card>
);
