import React, { FunctionComponent } from 'react';
import theming from './layout.module.css';
import { DefaultHead, HeadProps } from '../../layouts/DefaultHead';
import { ProjectFooter } from '../../layouts/ProjectFooter.component';
import { Banner } from './banner';
import styles from './layout.module.css';
import { Navbar } from './navbar';
import { SideMenu } from './side-menu';

interface LayoutProps {
  head: HeadProps;
  hideBanner?: boolean;
}
export const Layout: FunctionComponent<LayoutProps> = (
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
            <Navbar
              title="Urban Biographies"
              projectId={591}
            ></Navbar>
          </div>
          {!props.hideBanner && (
            <div className={styles.banner}>
              <Banner></Banner>
            </div>
          )}
          {props.children}
          <ProjectFooter showEeditiones={false}></ProjectFooter>
          <SideMenu></SideMenu>
        </ion-content>
      </ion-app>
    </>
  );
};

export default Layout