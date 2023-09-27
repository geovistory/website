import React, { FunctionComponent } from 'react';
import theming from '../../pages/processetti/index.module.css';
import { DefaultHead, HeadProps } from '../layouts/DefaultHead';
import { ProjectFooter } from '../layouts/ProjectFooter.component';
import { ProcessettiBanner } from './ProcessettiBanner.component';
import styles from './ProcessettiLayout.module.css';
import { ProcessettiNavbar } from './ProcessettiNavbar.component';
import { ProcessettiSideMenu } from './ProcessettiSideMenu';

interface ProcessettiLayout {
  head: HeadProps;
  hideBanner?: boolean;
}
export const ProcessettiLayout: FunctionComponent<ProcessettiLayout> = (
  props
) => {
  return (
    <>
      <DefaultHead
        headTitle={props.head.headTitle}
        headOgImage={props.head.headOgImage}
        headOgDescription={props.head.headOgDescription}
      ></DefaultHead>
      <ion-app class={theming.theme}>
        <ion-content class={styles.content}>
          <div className={styles.navbar}>
            <ProcessettiNavbar
              title="Progetto ANR Processetti"
              projectId={591}
            ></ProcessettiNavbar>
          </div>
          {!props.hideBanner && (
            <div className={styles.banner}>
              <ProcessettiBanner></ProcessettiBanner>
            </div>
          )}
          {props.children}
          <ProjectFooter showEeditiones={false}></ProjectFooter>
          <ProcessettiSideMenu></ProcessettiSideMenu>
        </ion-content>
      </ion-app>
    </>
  );
};
