import type { GetStaticProps, NextPage } from "next";
import { HeadProps } from "../../components/layouts/DefaultHead";
import { Layout } from "./layout";
import styles from "./index.module.css"

export interface ResourcesProps {
  head: HeadProps;
}
const Resources: NextPage<ResourcesProps> = (props) => {
  return (
    <Layout head={props.head}>
      <ion-grid class={styles.sectionGreen}>
        <h2>Project presentation</h2>

        <p>
          Welcome to the official homepage of the <strong>Urban Biographies Project</strong>, an interdisciplinary initiative by the Institute of 
          Ancient History at the University of Basel. Its aim has been to study two cities from Roman and late Roman Egypt, 
          Antinoopolis and Heracleopolis. 
        </p>
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
          please visit the <a href="https://www.geovistory.org/project/6619613">Project Homepage</a>
        </p>
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
