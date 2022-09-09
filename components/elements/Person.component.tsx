
import React from 'react';
import { person } from 'ionicons/icons';
import styles from './Person.module.css'

export interface PersonProps {
  name: string;
  description: string;
}

export const Person = (props: PersonProps) => (
  <ion-item lines='none' class={styles.item}>
    <ion-avatar slot="start" class={styles.avatar}>
      <ion-icon
        class={styles.icon}
        icon={person}
      ></ion-icon>
      {/* <img src="/avatar.svg" /> */}
    </ion-avatar>
    <ion-label>
      <h2>{props.name}</h2>
      <p>{props.description}</p>
    </ion-label>
  </ion-item>
);
