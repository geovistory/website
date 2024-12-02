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
        <h2>Background on analysis & data</h2>
        <p>
          <ol>
            <li>Urban Prosopographies</li>
            <p>
              <ul>
                <li>You may think of these “urban prosopographies” as a way to move down in ancient societies from the visible “elites,” mentioned in literary sources, to less visible, sometimes voiceless, people, who contributed equally to historical development. </li>
                <li>Who is included in our urban prosopographies?</li>
                <ul>
                  <li>We can think of these prosopographies as three overlapping circles of integration into urban life </li>
                  <li>The first one includes citizens (in the case of Antinoopolis) and legal residents (in the case of Heracleopolis).</li>
                  <li>The second one encompasses people for whom we may assume that they lived in the city.</li>
                  <li>The third one includes people who interacted with the city's population from the outside. </li>
                </ul>

                <li>Taking its cue from the critique levelled by Moses Finley at the comprehensive collection of the evidence for ancient cities, the analysis conducted as part of this project aimed at “capturing the essence” of urban life–selecting aspects that set off one city from another. The following will expose some case-studies.</li>
              </ul>
              
               
              
              
              
               
            </p>

            <li>Material Culture</li>
            <p>
              The study of <strong>material culture</strong> enriches historical reconstructions, often based on textual sources, by incorporating tangible evidence of urban life. This approach provides crucial insights into social, economic, and cultural dynamics in ancient cities like <strong>Antinoopolis</strong> and <strong>Heracleopolis Magna</strong>.
            </p>
            <p>
              The analysis of material culture helps us understand:
              <ul>
                <li><strong>Urban functions</strong> (e.g., domestic, religious, economic).</li>
                <li><strong>Chronology</strong> and the evolution of urban spaces.</li>
                <li><strong>Economic and cultural trajectories</strong> of Antinoopolis and Heracleopolis.</li>
              </ul>
              
              
              
            </p>

            <li>Upcoming Publications on Antinoopolis and Hearcleopolis</li>
            <p>...</p>
          </ol>

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
