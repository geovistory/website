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

        <h4>Urban Prosopographies</h4>

        <p>
          Conceived as three increasing circles of integration into urban life, these urban prosopographies include: 
          <ol>
            <li>citizens (in the case of Antinoopolis) and legal residents (in the case of Heracleopolis);</li>
            <li>people who lived in the city; </li>
            <li>people who interacted with the city’s population from the outside.</li>
          </ol>
        </p>

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

      <h4>Upcoming Publications on Antinoopolis and Hearcleopolis</h4>
      <p></p>
      <h5>Antinoopolis</h5>

      <p>
        François Gerardin writes about Antinoopolis from its foundation in 130 CE to the middle of the fifth century as part of his habilitation project. 
        Founded by Hadrian on the site of the death of Antinoos, the city grew to become the capital of the Thebaid in the late Roman period and, subsequently, 
        Egypt’s second city. The habilitation is scheduled for completion on 31 July 2026 and will then be published as a book monograph.
      </p> 
      <p>
        In the future, this page will give access to the full datasets and present the data analysis conducted in the book and in related publication projects.
      </p>

      <h5>Herakleopolis</h5>
      <p>
        The history of Heracleopolis in the Roman and early late Roman periods is the subject of Lucas Weisser-Gericke's PhD dissertation.
        The data to be published on this page in the near future will provide the basis and background of the analysis carried out and the charts presented in his monograph. 
      </p> 
      <p>
        In addition, this part of the portal will present prosopographical data on people related to the Middle Egyptian nome metropolis Heracleopolis Magna, 
        as well as a selection of published material evidence from the site assembled by Stefania Alfarano. 
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
