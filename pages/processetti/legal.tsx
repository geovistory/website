import type { GetStaticProps, NextPage } from 'next';
import { HeadProps } from '../../components/layouts/DefaultHead';
import { ProcessettiLayout } from '../../components/project-specific/ProcessettiLayout.component';
import styles from './index.module.css';

export interface ResourcesProps {
  head: HeadProps;
}
const Resources: NextPage<ResourcesProps> = (props) => {
  return (
    <ProcessettiLayout head={props.head}>
      <ion-grid class={styles.section}>
        <h2>Legal Notice</h2>
      </ion-grid>
      <ion-grid class={`${styles.sectionGray} ${styles.textLeft}`}>
        <p className="left">
          This website (www.geovistory.org/project/processetti) is published
          under the responsibility of Professor Dr. Jean-François Chauvard
          (jean-francois.chauvard@univ-paris1.fr).
        </p>
        <p>
          Website developer: <br />
          KleioLab GmbH
        </p>
        <p>
          Hosting provider: <br />
          DigitalOcean, LLC
        </p>
        <p>
          Intellectual property:
          <br />
          Except where otherwise noted, content on this site is licensed under a{' '}
          <a
            href="https://creativecommons.org/licenses/by-sa/4.0/"
            target="_blank"
            rel="noreferrer"
          >
            Creative Commons Attribution-ShareAlike 4.0 International
          </a>{' '}
          license.
        </p>
      </ion-grid>
    </ProcessettiLayout>
  );
};

export default Resources;
export const getStaticProps: GetStaticProps<ResourcesProps> = async () => {
  return {
    props: {
      head: {
        headOgDescription: 'Progetto ANR Processetti – Legal notice',
        headTitle: 'Progetto ANR Processetti',
        headOgImage: '/socialimage/processetti.jpg',
      },
    },
  };
};
