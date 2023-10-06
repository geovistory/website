import type { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import { Person } from '../../components/elements/Person.component';
import { HeadProps } from '../../components/layouts/DefaultHead';
import { AnrLogo200 } from '../../components/logos/AnrLogo200';
import { EcoleFrancaisRomeLogo200 } from '../../components/logos/EcoleFrancaisRomeLogo200';
import { ProcessettiBanner } from '../../components/project-specific/ProcessettiBanner.component';
import { ProcessettiLayout } from '../../components/project-specific/ProcessettiLayout.component';
import styles from './index.module.css';

export interface ResourcesProps {
  head: HeadProps;
}
const Resources: NextPage<ResourcesProps> = (props) => {
  return (
    <ProcessettiLayout head={props.head}>
      <ion-grid class={styles.section}>
        <h2>Test</h2>
      </ion-grid>
      <ion-grid class={styles.sectionGray}>
        <iframe
          src="/static-html/mappaS.html"
          frameBorder="0"
          style={{ width: '100%', height: '800px' }}
        ></iframe>
      </ion-grid>
    </ProcessettiLayout>
  );
};

export default Resources;
export const getStaticProps: GetStaticProps<ResourcesProps> = async () => {
  return {
    props: {
      head: {
        headOgDescription: 'Progetto ANR Processetti',
        headTitle: 'Progetto ANR Processetti',
        headOgImage: '/socialimage/processetti.jpg',
      },
    },
  };
};
