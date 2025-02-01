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
      <ion-grid>
        <div className={styles.sectionGreen} style={{height: "50px"}}></div>

        <h2 style={{textAlign: 'center', paddingBottom: "20px"}}>Project presentation</h2>

        <h4>Welcome to the Urban Biographies Project</h4>

        <p>
          Explore the history of two cities from Roman and Late Roman Egypt: <strong>Antinoopolis</strong> and <strong>Heracleopolis Magna</strong>. 
          This site provides full access to historical, archaeological, and biobliographical data, allowing you to learn 
          about the people who lived in, visited, and worked in these ancient cities.
        </p>

        <h4>What you will find on this website:</h4>

        <p>
          <ul>
            <li><strong>Urban Prosopographies:</strong> A comprehensive record of citizens, residents, and visitors of these cities, based on attestations from documents and literary texts, especially papyri.</li>
            <li><strong>Archaeological Material:</strong> A selection of artifacts and structures that further contextualize everyday life, offering insights into the social, economic, and cultural dynamics of these cities.</li>
            <li><strong>Interactive Data Portal:</strong> Explore the collected information through our digital portal for a more engaging research experience.</li>
          </ul>
        </p>

        <p style={{paddingTop: "50px"}}>
          <strong>For more information</strong>, visit our <a href="https://romegyptcities.philhist.unibas.ch/en/home-1/">homepage</a> to learn about the project’s origin, meet the team, and read our publications.
        </p>

        <p>
          We would like to sincerely thank the <strong>Swiss National Science Foundation (SNSF)</strong> for funding the development 
          of this digital interface.
        </p>

        <p>
          Over the course of four years (2021-2025), we have integrated textual and archaeological data to create this platform.
          The core purpose of this interface is to provide a comprehensive record of the people who were citizens, residents, 
          or visitors of these two cities. We have processed attestations from various documents—particularly papyri—and literary 
          texts to build searchable <strong>urban prosopographies</strong> for each city.
        </p>

        <p>
          In addition to the textual records, we have published a selection of <strong>archaeological materials</strong> to 
          further contextualize the lives of the people in these cities. By examining artifacts and structures 
          from <strong>Antinoopolis</strong> and <strong>Heracleopolis Magna</strong>, we gain deeper insights into the social, 
          economic, and cultural dynamics that shaped these cities. These materials offer valuable perspectives on everyday 
          life that written records alone cannot fully capture.
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
