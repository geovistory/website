/* eslint-disable react/no-unescaped-entities */
import type { GetStaticProps, NextPage } from 'next';
import { GraficiTabelleProps } from '../../../components/project-specific/GraficiTabelleProps';
import { ProcessettiGraficiLayout } from '../../../components/project-specific/ProcessettiGraficiLayout.component';
import { metodologiaLinks } from '../../../components/project-specific/ProcessettiNavbar.component';

const P: NextPage<GraficiTabelleProps> = (props) => {
  return (
    <ProcessettiGraficiLayout head={props.head} links={metodologiaLinks}>
      <ion-grid fixed>
        <h1>Introduzione metodologica</h1>

        <p>Coming soon...</p>
      </ion-grid>
    </ProcessettiGraficiLayout>
  );
};

export default P;
export const getStaticProps: GetStaticProps<GraficiTabelleProps> = async () => {
  return {
    props: {
      head: {
        headOgDescription: 'Metodologia > Introduzione',
        headTitle: 'Metodologia > Introduzione',
        headOgImage: '/socialimage/processetti.jpg',
      },
    },
  };
};
