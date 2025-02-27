import React, { FunctionComponent } from 'react';
import theming from './basic-layout.module.css';
import { DefaultHead, HeadProps } from '../layouts/DefaultHead';
import { ProjectFooter } from '../layouts/ProjectFooter.component';
import styles from './basic-layout.module.css';


export const Layout: FunctionComponent = (props) => {
  return (
    <>
      <DefaultHead
        headTitle={""}
        headOgImage={""}
        headOgDescription={""}
      ></DefaultHead>
      <ion-app class={theming.theme}>
        <ion-content class={styles.content}>
          {props.children}
          <ProjectFooter showEeditiones={false}></ProjectFooter>
        </ion-content>
      </ion-app>
    </>
  );
};

export default Layout