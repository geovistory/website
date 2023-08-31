import { libraryOutline } from 'ionicons/icons';
import router from 'next/router';
import { FunctionComponent, LegacyRef, useEffect, useRef } from 'react';
import theming from '../../pages/processetti/index.module.css';
import { DefaultHead, HeadProps } from '../layouts/DefaultHead';
import { ProjectFooter } from '../layouts/ProjectFooter.component';
import { ProcessettiGraficiBanner } from './ProcessettiGraficiBanner.component';
import { ProcessettiLayout } from './ProcessettiLayout.component';
import styles from './ProcessettiLayout.module.css';
import {
  graficiTabelleLinks,
  ProcessettiNavbar,
} from './ProcessettiNavbar.component';

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
          <ProcessettiNavbar
            title="Progetto ANR Processetti"
            projectId={591}
          ></ProcessettiNavbar>
          <ProcessettiGraficiBanner></ProcessettiGraficiBanner>

          {props.children}
          <ProjectFooter showEeditiones={false}></ProjectFooter>
        </ion-content>
        <ion-tab-bar translucent={true} color="" class={styles.tabBar}>
          {graficiTabelleLinks.map((x, i) => (
            <TabButton
              key={i}
              href={x.href}
              label={x.label}
              icon={x.icon}
            ></TabButton>
          ))}
        </ion-tab-bar>
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
      layout="icon-top"
    >
      <ion-icon icon={x.icon ? x.icon : libraryOutline}></ion-icon>
      <ion-label>{x.label}</ion-label>
    </ion-tab-button>
  );
};
