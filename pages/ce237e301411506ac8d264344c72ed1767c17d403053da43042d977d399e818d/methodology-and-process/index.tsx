/* eslint-disable react/no-unescaped-entities */
import type { GetStaticProps, NextPage } from 'next';
import { Layout } from '../../../components/project-specific/urban-biographies/methodology-and-process/layout';
import { metodologiaLinks } from '../../../components/project-specific/ProcessettiNavbar.component';
import { HeadProps } from '../../../components/layouts/DefaultHead';
import styles from "./index.module.css"


export interface Props { head: HeadProps }

const P: NextPage<Props> = (props) => {
  return (
    <Layout head={props.head} links={metodologiaLinks}>
      <ion-grid class={styles.sectionGreen}>
        <h2 style={{textAlign: 'center'}}>Methodology & Process</h2>

        <p>
          Data have been collected for the two prosopographies in collaboration with Yanne Broux, KU Leuven, by:
          <ul>
            <li>Creating an environment in TM for the selection, expansion, and processing of “references” (TM Ref) as well the “persons” (TM Per) connected with them;</li>
            <li>Importing these tables into the Geovistory environment;</li>
            <li>Cleaning up and fine-tuning these data.</li>
          </ul>
        </p>

        <p>In parallel, literary attestations of places and people related to these two cities have been collected in the Geovistory environment and, if relevant, linked to documentary attestations.</p>

        <p>
          The research on archaeological materials has been based exclusively on published data from excavations conducted over the past two centuries. 
          Despite limitations in the recording of previous excavations, the examination of excavation reports and archival records enables researchers 
          to trace the long-term development of these settlements, from the Pharaonic period through the Late Antique era. 
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