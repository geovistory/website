/* eslint-disable react/no-unescaped-entities */
import type { GetStaticProps, NextPage } from 'next';
import { Layout } from './layout';
import { dataPortalLinks } from '../navbar';
import { HeadProps } from '../../../components/layouts/DefaultHead';
import styles from './index.module.css'


export interface Props { head: HeadProps }

const P: NextPage<Props> = (props) => {
  return (
    <Layout head={props.head} links={dataPortalLinks}>
      <ion-grid class={styles.sectionGreen}>
        <h2>Data Portal</h2>

      <p>
        <ul>
          <li>Intended Users</li>
          <ul>
            <li>Whether you’re a scholar working on Antinoopolis or Heracleopolis; the editor of a papyrus or text from, or related to, either city; or a student of Greco-Roman and late Antique Egypt; or simply a digital humanities enthusiast with an interest in online prosopographies, this is the place where you’ll be able to search for people from these two cities. </li>
          </ul>
          <li>Limitations</li>
          <ul>
            <li>Please bear in mind the chronological limitations: for Heracleopolis, we covered the period from the death of Augustus to the end of the fourth century CE and, for Antinoopolis, from the city’s foundation in 130 CE to the middle of the fifth century CE.</li>
            <li>Please note that full prosopographical coverage is not guaranteed: all the data we have been able to collect have been published before August 1, 2024. If you encounter missing data, or data that have been published after that date, we very much appreciate hearing from you (link to email)</li>
          </ul>
          <li>What to expect in comparison with the Trismegistos Portal:</li>
          <ul>
            <li>In the Trismegistos Portal, prosopographical data on individuals are split up in separate Ref and Per entries; this data portal displays all available information at a glance.</li>
            <li>Attestations of people in literary sources have been added</li>
            <li>Most important, this data portal creates connections among these isolated prosopographical data by situating them in a specific–in this case, urban–context</li>
          </ul>
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
