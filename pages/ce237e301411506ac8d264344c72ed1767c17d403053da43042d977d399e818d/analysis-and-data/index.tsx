/* eslint-disable react/no-unescaped-entities */
import type { GetStaticProps, NextPage } from 'next';
import { Layout } from '../../../components/project-specific/urban-biographies/analysis-and-data/layout';
import { analysisAndDataLinks } from '../../../components/project-specific/urban-biographies/navbar';
import { HeadProps } from '../../../components/layouts/DefaultHead';
import styles from './index.module.css'


export interface Props { head: HeadProps }

const P: NextPage<Props> = (props) => {
  return (
    <Layout head={props.head} links={analysisAndDataLinks}>
      <ion-grid>
        <div className={styles.sectionGreen} style={{height: "50px"}}></div>

        <h2 style={{textAlign: 'center', paddingBottom: "20px"}}>Background on analysis & data</h2>

        <h4>Material Culture</h4>

        <p>
          The study of material culture adds depth to historical reconstructions, 
          which are often based on written sources, by introducing physical evidence 
          from the past. This approach gives us key insights into how people lived, 
          worked, and interacted in ancient cities like Antinoopolis and Heracleopolis Magna.
        </p>

        <p>
          By analyzing artifacts, buildings, and other physical remains, we can better understand:
          
          <ul>
            <li>The different roles and functions within the city (e.g., domestic, religious, economic).</li>
            <li>The development and transformation of urban spaces over time.</li>
            <li>The social and economic trends that shaped the cities of Antinoopolis and Heracleopolis.</li>
          </ul>
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
