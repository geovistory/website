import {
  IonAvatar,
  IonIcon,
  IonItem,
  IonLabel,
} from '@geovistory/design-system-react';
import React from 'react';
import { person } from 'ionicons/icons';
import styles from './Person.module.css'

export interface PersonProps {
  name: string;
  description: string;
}

export const Person = (props: PersonProps) => (
  <IonItem lines='none' className={styles.item}>
    <IonAvatar slot="start" className={styles.avatar}>
      <IonIcon
        className={styles.icon}
        icon={person}
      ></IonIcon>
      {/* <img src="/avatar.svg" /> */}
    </IonAvatar>
    <IonLabel>
      <h2>{props.name}</h2>
      <p>{props.description}</p>
    </IonLabel>
  </IonItem>
);
