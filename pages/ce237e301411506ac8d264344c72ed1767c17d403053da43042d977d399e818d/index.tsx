import type { GetStaticProps, NextPage } from "next";
import { HeadProps } from "../../components/layouts/DefaultHead";
import { Layout } from "../../components/project-specific/urban-biographies/layout";
import styles from "./index.module.css"


// THE FOLDER NAME IS LIKE THAT IN ORDER TO HIDE THE WEBSITE FROM THE PUBLIC

export interface ResourcesProps {
  head: HeadProps;
}
const Resources: NextPage<ResourcesProps> = (props) => {
  return (
    <Layout head={props.head}>
      <ion-grid class={styles.sectionGreen}>
        <h2 style={{textAlign: 'center'}}>Project presentation</h2>

      <div style={{display: 'flex', flexDirection:'row',justifyContent:'center'}}>
        <div style={{padding: '50px'}}>

            <p>
              Welcome to the digital interface of the <strong>Urban Biographies Project</strong>, which studies two cities from Roman and late Roman Egypt,
              Antinoopolis and Heracleopolis. This interface presents the textual and material data that have been collected, processed, and analyzed 
              by the project team. In this website you will find:
              <ol>
                <li>a full record of the people who were citizens, residents, or visitors of these two cities, based on attestations from 
                  documents–especially papyri–as well as literary texts. These “urban prosopographies” are searchable in the “data portal”.</li>
                <li>a selection of published archaeological materials to provide further contextualization for people’s lives in those two cities. 
                  Artifacts and structures from Antinoopolis and Heracleopolis Magna give invaluable insights into the social, economic, 
                  and cultural dynamics that shaped these cities, shedding light on everyday life in ways that written records alone cannot fully capture.
                </li>
              </ol>
            </p>
            <p>
              For more information on the project, the team members, events and publications, please visit the <a href="https://romegyptcities.philhist.unibas.ch/en/home-1/">Project Homepage</a>.
            </p>
            
          </div>

          <div style={{padding: '50px'}}>

            <p>We heartily thank the Swiss National Science Foundation (SNSF) for funding the creation of this interface.</p>

            <p>
              In the four years of the project (2021-2025), we have combined textual and material data to develop this digital interface. 
              At its core, it is meant to provide a full record of the people who were citizens, residents, or visitors of these two cities. 
              Attestations from documents -especially papyri- as well as literary texts have been processed to build urban prosopographies 
              for each city: both are searchable here. 
            </p>
            <p>
              Published archaeological materials provide further contextualization for the lives of the people in those two cities. 
              By examining artifacts from Antinoopolis and Heracleopolis Magna, we gain valuable insights into the social, 
              economic, and cultural dynamics that shaped these cities, shedding light on everyday life in ways that written records 
              alone cannot fully capture.
            </p>
            <p>
              For more information on the genesis of the project, the team members, events and publications, 
              please visit the 
            </p>

        </div>
      </div>

      </ion-grid>
    </Layout>
  );
};

export default Resources;
export const getStaticProps: GetStaticProps<ResourcesProps> = async () => {
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
