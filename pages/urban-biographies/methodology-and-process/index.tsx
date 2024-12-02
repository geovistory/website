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
        <h2>Methodology & Process</h2>
        <p>
            In collecting the data for the two prosopographies we have been lucky to work with the Trismegistos Team (KU Leuven). 
            The steps of our collaboration were:
            <ul>
                <li>Creation of an environment in TM for the selection, expansion, and processing of mentions (REF) as well the people (PER) these mentions attest to.</li>
                <li>Import of these into the Geovistory environment and further refinement of the data..</li>
            </ul>
        </p>
        <p>
            In parallel, literary attestations of places and people related to these two cities have been collected in the Geovistory environment and, if relevant, linked to documentary attestations.
        </p>
        <p>
            The research on archaeological materials has been based exclusively on published data from excavations conducted over the past two centuries. However, the lack of detailed documentation from earlier excavations often makes it challenging to reconstruct the precise contexts of artifacts. Despite these limitations, the examination of excavation reports and archival records enables researchers to trace the long-term development of these settlements, from the Pharaonic period through the Late Antique era.
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