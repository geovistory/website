import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonIcon,
  IonItem
} from '@geovistory/design-system-react';
import { openOutline } from 'ionicons/icons';
import Image from 'next/image';
import React from 'react';
import styles from './OrganizationCard.module.css';
export interface OrganizationCardProps {
  imageURL: string;

  // for image size, see https://nextjs.org/docs/api-reference/next/image#width
  imageWidth: number; // width of the original image (not the rendered output)
  imageHeight: number // height of the original image (not the rendered output)
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
  <IonCard>
    <IonItem lines="full">
      {/* <IonIcon icon={pin} slot="start" /> */}
      {/* <IonLabel>ion-item in a card, icon left, button right</IonLabel> */}
      <IonButton fill="clear" slot="end" href={organizationURL} target="_blank">
        Visit website
        <IonIcon icon={openOutline} slot="end" />
      </IonButton>
    </IonItem>
    <Image src={imageURL} alt={organizationName + ' image'} layout="responsive" width={imageWidth} height={imageHeight} />
    <IonCardHeader>
      {/* <IonCardSubtitle>Featured Project</IonCardSubtitle> */}
      <IonCardTitle className={styles.title}>{organizationName}</IonCardTitle>
    </IonCardHeader>

    <IonCardContent>
      <div className={styles.description}>{organizationDescription}</div>
    </IonCardContent>
  </IonCard>
);
