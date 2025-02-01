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
      <ion-grid>
        <div className={styles.sectionGreen} style={{height: "50px"}}></div>

        <h2 style={{textAlign: 'center', paddingBottom: "20px"}}>Methodology & Process</h2>

        <h4>Mapping Ancient Lives - The Written Record</h4>

        <p>
          In collaboration with Yanne Broux from KU Leuven, we have gathered data for the 
          two prosopographies using the following steps:

          <ul>
            <li>Data Collection & Processing: A dedicated environment in TM was created to organize and process data on "references" (TM Ref) and "persons" (TM Per).</li>
            <li>Integration into Geovistory: The processed data was seamlessly integrated into the Geovistory environment.</li>
            <li>Data Refining: We then fine-tuned the data for accuracy and consistency.</li>
          </ul>

          Additionally, we collected literary references, as well as documentary sources, related to places and people associated with these cities, linking them to the relevant data in the database.
        </p>


        <h4>From Fragments to Urban Life</h4>

        <p>
          Our research on archaeological materials is based exclusively on published excavation data from the past two centuries. 
          Despite gaps in earlier records, we carefully examined excavation reports and archival materials to track the development
          of these cities over time. This process has enabled us to create a detailed narrative of the settlements, from their 
          origins in the Pharaonic period to their transformation during the Late Antique era.
          <br />
          By integrating both literary and archaeological data, as well as documentary sources, 
          we offer a more complete and nuanced understanding of the cities' histories.
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