/* eslint-disable react/no-unescaped-entities */
import type { GetStaticProps, NextPage } from 'next';
import { Layout } from '../layout';
import { analysisAndDataLinks } from '../../navbar';
import { HeadProps } from '../../../../components/layouts/DefaultHead';
import styles from './index.module.css'


export interface Props { head: HeadProps }

const P: NextPage<Props> = (props) => {
  return (
    <Layout head={props.head} links={analysisAndDataLinks}>
      <ion-grid class={styles.sectionGreen}>
        <h2>Herakleopolis</h2>
        <p>
          The history of Heracleopolis in the Roman and early late Roman periods is the subject of Lucas Weisser-Gericke's PhD dissertation. The data to be published on this page in the near future will provide the basis and background of the analysis carried out and the charts presented in his monograph. 
        </p> 
        <p>
          In addition, this part of the portal will present prosopographical data on people related to the Middle Egyptian nome metropolis Heracleopolis Magna, as well as a selection of published material evidence from the site assembled by Stefania Alfarano. 
        </p>
      </ion-grid>
    </Layout>
  );
};

export default P;
export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      head: {
        headOgDescription: "Urban Biographies",
        headTitle: "Urban Biographies",
        headOgImage: "/socialimage/urban-biographies.jpg",
      },
    },
  };
};
