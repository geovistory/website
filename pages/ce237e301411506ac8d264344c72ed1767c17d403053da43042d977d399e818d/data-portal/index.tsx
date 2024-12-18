/* eslint-disable react/no-unescaped-entities */
import type { GetStaticProps, NextPage } from 'next';
import { Layout } from '../../../components/project-specific/urban-biographies/data-portal/layout';
import { dataPortalLinks } from '../../../components/project-specific/urban-biographies/navbar';
import { HeadProps } from '../../../components/layouts/DefaultHead';
import styles from './index.module.css'


export interface Props { head: HeadProps }

const P: NextPage<Props> = (props) => {
  return (
    <Layout head={props.head} links={dataPortalLinks}>
      <ion-grid class={styles.sectionGreen}>
        <h2 style={{textAlign: 'center'}}>Data Portal</h2>

        <p>
          This fully searchable data portal is open to everyone–from scholars working on Antinoopolis or Heracleopolis, 
          to the editors of papyri or texts from, or related to, either city, to students of Greco-Roman and late Antique Egypt, 
          or practitioners of the digital humanities with an interest in online prosopographies and digital archaeology. 
        </p>

        <h4>Chronological Limitations</h4>

        <p>
          For Heracleopolis, we covered the period from the death of Augustus 
          to the end of the fourth century CE and, for Antinoopolis, from the city’s foundation in 130 CE to the middle of the fifth century CE.
        </p>

        <p>
          Full prosopographical coverage is not guaranteed: all the data we have been able to collect have been published before August 1, 2024. 
          If you encounter missing data, or data that have been published after that date, we very much appreciate 
          hearing from you (<a href="#" data-mailto-token="nbjmup+gsbodpjt/hfsbsejoAvojcbt/di" data-mailto-vector="1">francois.gerardin@unibas.ch</a>)
        </p>

        <h4>What to expect in comparison with the Trismegistos Portal:</h4>

        <p>
          In the Trismegistos Portal, prosopographical data on individuals are split up in separate Ref and Per entries; 
          this data portal displays all available information at a glance.
          Attestations of people in literary sources have been added. 
          Most important, this data portal creates connections among these isolated prosopographical data by situating them in a specific–in this case, urban–context.
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
