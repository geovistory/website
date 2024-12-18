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
      <ion-grid class={styles.sectionGreen}>
        <h2 style={{textAlign: 'center'}}>Background on analysis & data</h2>

      <div style={{display: 'flex', flexDirection:'row',justifyContent:'center'}}>
        <div style={{padding: '50px'}}>
            <h3>Urban Prosopographies</h3>
            <p>
              Conceived as three increasing circles of integration into urban life, these urban prosopographies include: 
              <ol>
                <li>citizens (in the case of Antinoopolis) and legal residents (in the case of Heracleopolis);</li>
                <li>people who lived in the city; </li>
                <li>people who interacted with the city’s population from the outside.</li>
              </ol>
            </p>

            <h3>Material Culture</h3>

            <p>
              The study of <strong>material culture</strong> enriches historical reconstructions, often based on textual sources, 
              by incorporating tangible evidence of urban life. This approach provides crucial insights into social, economic, and cultural 
              dynamics in ancient cities like <strong>Antinoopolis</strong> and <strong>Heracleopolis Magna</strong>.
            </p>

            <p>
              The analysis of material culture helps us understand:
              <ul>
                <li><strong>Urban functions</strong> (e.g., domestic, religious, economic).</li>
                <li><strong>Chronology</strong> and the evolution of urban spaces.</li>
                <li><strong>Economic and cultural trajectories</strong> of Antinoopolis and Heracleopolis.</li>
              </ul>
            </p>
          </div>

        <div style={{padding: '50px'}}>
          <h3>Upcoming Publications on Antinoopolis and Hearcleopolis</h3>

          <h4>Antinoopolis</h4>
          <p>
            François Gerardin writes about Antinoopolis from its foundation in 130 CE to the middle of the fifth century as part of his habilitation project. 
            Founded by Hadrian on the site of the death of Antinoos, the city grew to become the capital of the Thebaid in the late Roman period and, subsequently, 
            Egypt’s second city. The habilitation is scheduled for completion on 31 July 2026 and will then be published as a book monograph.
          </p> 
          <p>
            In the future, this page will give access to the full datasets and present the data analysis conducted in the book and in related publication projects.
          </p>

          <h4>Herakleopolis</h4>
          <p>
            The history of Heracleopolis in the Roman and early late Roman periods is the subject of Lucas Weisser-Gericke's PhD dissertation.
            The data to be published on this page in the near future will provide the basis and background of the analysis carried out and the charts presented in his monograph. 
          </p> 
          <p>
            In addition, this part of the portal will present prosopographical data on people related to the Middle Egyptian nome metropolis Heracleopolis Magna, 
            as well as a selection of published material evidence from the site assembled by Stefania Alfarano. 
          </p>
        </div>
      </div>

        
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
