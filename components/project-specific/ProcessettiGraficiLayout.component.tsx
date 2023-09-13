import { libraryOutline } from 'ionicons/icons';
import router from 'next/router';
import { FunctionComponent, LegacyRef, useEffect, useRef } from 'react';
import theming from '../../pages/processetti/index.module.css';
import { DefaultHead, HeadProps } from '../layouts/DefaultHead';
import { ProjectFooter } from '../layouts/ProjectFooter.component';
import { ProcessettiGraficiBanner } from './ProcessettiGraficiBanner.component';
import styles from './ProcessettiGraficiLayout.module.css';
import {
  graficiTabelleLinks,
  ProcessettiNavbar,
} from './ProcessettiNavbar.component';
import { ProcessettiSideMenu } from './ProcessettiSideMenu';

interface ProcessettiGraficiLayout {
  head: HeadProps;
}
export const ProcessettiGraficiLayout: FunctionComponent<
  ProcessettiGraficiLayout
> = (props) => {
  return (
    <>
      <DefaultHead
        headTitle={props.head.headTitle}
        headOgImage={props.head.headOgImage}
        headOgDescription={props.head.headOgDescription}
      ></DefaultHead>

      <ion-app class={theming.theme}>
        <ion-content class={styles.content} fullscreen={true}>
          <div className={styles.navBar}>
            <ProcessettiNavbar
              title="Progetto ANR Processetti"
              projectId={591}
            ></ProcessettiNavbar>
          </div>
          <ProcessettiGraficiBanner></ProcessettiGraficiBanner>
          <div className={`${styles.tabBar} ion-hide-sm-down`}>
            <ion-tab-bar color="primary" class={styles.tabBar}>
              {graficiTabelleLinks.map((x, i) => (
                <TabButton
                  key={i}
                  href={x.href}
                  label={x.label}
                  icon={x.icon}
                ></TabButton>
              ))}
            </ion-tab-bar>
          </div>

          {props.children}
          <ProjectFooter showEeditiones={false}></ProjectFooter>
          <ProcessettiSideMenu></ProcessettiSideMenu>
        </ion-content>
      </ion-app>
    </>
  );
};
const TabButton: FunctionComponent<{
  href: string;
  label: string;
  icon?: string;
}> = (x) => {
  const button: LegacyRef<HTMLIonTabButtonElement> = useRef(null);
  useEffect(() => {
    if (button.current) button.current.selected = router.pathname === x.href;
  });
  return (
    <ion-tab-button
      ref={button}
      class={styles.tabButton}
      href={x.href}
      layout="icon-hide"
    >
      {/* <ion-icon icon={x.icon ? x.icon : libraryOutline}></ion-icon> */}
      <ion-label styles={{fontSize:'10px'}}>{x.label}</ion-label>
    </ion-tab-button>
  );
};
