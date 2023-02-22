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
  <ion-card class={styles.container} href={organizationURL} target="_blank">
    {/* <ion-card-header>
      <ion-card-title class={styles.title}>{organizationName}</ion-card-title>
    </ion-card-header> */}

    <div className={styles.imageContainer}>
      <Image
        src={imageURL}
        alt={organizationName + ' image'}
        layout="responsive"
        width={imageWidth}
        height={imageHeight}
      />
    </div>
    <ion-card-content>
      <div className={styles.description}>
        <strong>{organizationName}</strong> – {organizationDescription}
      </div>
    </ion-card-content>
    {/* <ion-item lines="full">
      <ion-button
        fill="clear"
        slot="end"
        href={organizationURL}
        target="_blank"
      >
        Visit website
        <ion-icon icon={openOutline} slot="end" />
      </ion-button>
    </ion-item> */}
  </ion-card>
);
