/* eslint-disable react/no-unescaped-entities */
import type { GetStaticProps, NextPage } from 'next';
import { Layout } from '../../../../components/project-specific/urban-biographies/analysis-and-data/layout';
import { analysisAndDataLinks } from '../../../../components/project-specific/urban-biographies/navbar';
import { HeadProps } from '../../../../components/layouts/DefaultHead';
import styles from './index.module.css'


export interface Props { head: HeadProps }

const P: NextPage<Props> = (props) => {
  return (
    <Layout head={props.head} links={analysisAndDataLinks}>
      <ion-grid class={styles.sectionGreen}>
        <h2>Antinoopolis</h2>
        <p>
          François Gerardin writes about Antinoopolis from its foundation in 130 CE to the middle of the fifth century as part of his habilitation project. Founded by Hadrian on the site of the death of Antinoos, the city grew to become the capital of the Thebaid in the late Roman period and, subsequently, Egypt’s second city. The habilitation is scheduled for completion on 31 July 2026 and will then be published as a book monograph.
        </p> 
        <p>
          In the future, this page will give access to the full datasets and present the data analysis conducted in the book and in related publication projects.
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
