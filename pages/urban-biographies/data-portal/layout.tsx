import router from 'next/router';
import { FunctionComponent, LegacyRef, useEffect, useRef } from 'react';
import { HeadProps } from '../../../components/layouts/DefaultHead';
import { Layout as ParentLayout} from '../layout'
import styles from './layout.module.css';


interface LayoutProps {
  head: HeadProps;
  hideBanner?: boolean;
  links: {
    href: string;
    label: string;
    icon?: string;
  }[];
}

export const Layout: FunctionComponent<LayoutProps> = (props) => {
  return (
    <ParentLayout head={props.head} hideBanner={props.hideBanner}>
      <div className={`${styles.tabBar} ion-hide-sm-down`}>
        <ion-tab-bar color="primary" class={styles.tabBar}>
          {props.links.map((x, i) => (
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
    </ParentLayout>
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
      <ion-label styles={{ fontSize: '10px' }}>{x.label}</ion-label>
    </ion-tab-button>
  );
};
