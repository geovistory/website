import styles from "./index.module.css"
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, plugins } from "chart.js";
import { GraphController } from 'chartjs-chart-graph';
import { FamilyTree } from '../../components/elements/FamilyTree.component';
import Layout from '../../components/project-specific/BasicLayout';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, GraphController);

type DataDescription = {
  class_name: string;
  count: string;
};

type FamilyTree = {
  name: string;
  parent?: string;
};

type PageProps = {
  dataDescription: DataDescription[];
  familyTree: FamilyTree[];
};

async function sparqlQuery(text: string): Promise<any> {

  const endpoint = "https://sparql-yellow.geovistory.org/british-royal-family-tree";
  const url = `${endpoint}?query=${encodeURIComponent(text)}&format=json`;

  const response = await fetch(url)
  const data = await response.json()
  return data.results.bindings
}

export async function getServerSideProps() {

  // Data description
  const dataDescriptionQuery = `
    PREFIX sh: <http://www.w3.org/ns/shacl#>
    PREFIX base: <http://geovistory.org/information/>
                        
    SELECT ?class_name ?class_uri (count(*) as ?count)
    WHERE {
        GRAPH base:british_royal_family {
            ?uri a ?class_uri .
        }
        GRAPH base:shacl {
            ?node_shape sh:targetClass ?class_uri .
            ?node_shape sh:name ?class_name .
        }
        
    }
    GROUP BY ?class_name ?class_uri
    ORDER BY DESC(?count)
  `;
  const dataDescription_raw = await sparqlQuery(dataDescriptionQuery)
  const dataDescription = dataDescription_raw.map((dd: any) => ({class_name: dd.class_name.value, count: dd.count.value}))

  const familyTreeQuery = `
      PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
      PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
      PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
      PREFIX sdh: <https://sdhss.org/ontology/core/>
      PREFIX base: <http://geovistory.org/information/>
                          
      SELECT ?parent_name ?children_name
      WHERE {
          GRAPH base:british_royal_family {
                ?relationship_uri sdh:P20 ?parent_uri .
                ?parent_uri rdfs:label ?parent_name .
                ?birth_uri sdh:P22 ?relationship_uri .
                ?birth_uri crm:P98 ?children_uri .
                ?children_uri rdfs:label ?children_name .
          }
      }
  `
  const familyTree_raw = await sparqlQuery(familyTreeQuery)

  const familyTree: Array<FamilyTree> = [{name: "Elisabeth II"}]

  for(let i=0; i<=100; i++){
    let familyTreeSize = familyTree.length
    let royalBloodlineSoFar = familyTree.map(p => p.name)
    let filtered = familyTree_raw.filter((p: any) => royalBloodlineSoFar.includes(p.parent_name.value))
    filtered.forEach((p: any) => {
      if (!royalBloodlineSoFar.includes(p.children_name.value))
        familyTree.push({name: p.children_name.value, parent: p.parent_name.value})
    })
    if (familyTree.length == familyTreeSize) break
  }


  return { props: { dataDescription, familyTree } };
}

export default function Page({ dataDescription, familyTree }: PageProps) {

  const dataDescriptionChartData = {
    labels: dataDescription.map(item => item.class_name),
    datasets: [{
      label: "Class distribution",
      data: dataDescription.map(item => parseInt(item.count)),
      backgroundColor: "rgb(120, 120, 226)"
    }]
  }
  const dataDescriptionChartOptions: any = {
    indexAxis: "y",
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: true, text: "Class distribution"}
    },
  }

  return (
    <Layout>
      <ion-grid>
        <div className={styles.sectionGreen} style={{height: "50px"}}></div>

        <h2 style={{textAlign: 'center', paddingBottom: "20px"}}>Example project: British Royal Family</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <h3>The data</h3>

        <p>
          <Bar data={dataDescriptionChartData} options={dataDescriptionChartOptions} />
        </p>

        <p>
          Interdum et malesuada fames ac ante ipsum primis in faucibus. 
          Suspendisse turpis nisi, aliquam ut ullamcorper sed, efficitur non risus. 
          Mauris imperdiet nulla ex, eget vulputate nunc finibus et. Ut lacinia ultricies orci, 
          quis ultrices est tincidunt vitae. Cras lobortis nulla sit amet ultricies bibendum. 
          Maecenas vitae ante non urna bibendum hendrerit id ut ipsum. Donec vitae rutrum quam. 
          Vestibulum ac aliquet arcu. Ut a mauris quis tortor tristique suscipit ac vel lorem. 
          Morbi sed vestibulum nisl.
        </p>

        <h3>The Royal bloodline family tree</h3>

        <p>
          Morbi a nibh eros. Morbi tincidunt urna eget pretium consectetur. 
          Donec eu ex ligula. Sed a dolor sodales, tincidunt eros molestie, accumsan neque. 
          Proin aliquam lacus vel ex vestibulum, quis pharetra ipsum sagittis. 
          Suspendisse rutrum aliquet elit a condimentum. Cras vel suscipit arcu. Donec quis sollicitudin urna.
        </p>

        <p>
          <FamilyTree nodes={familyTree} />
        </p>


        <h3>Conclusion on the project</h3>

        <p>
          Proin id mi sit amet magna blandit rhoncus. Integer rutrum mauris tellus, ac consequat justo sollicitudin id. 
          In consectetur orci a dignissim lacinia. Nulla eu ultrices ex. Nam molestie neque vitae leo sagittis tincidunt. 
          In nec leo eget lectus auctor euismod eget ut massa. Ut vel turpis dictum dolor luctus venenatis vitae in elit. 
          Nam convallis eleifend turpis, nec condimentum ligula congue a. Suspendisse tincidunt venenatis ornare. 
          Pellentesque laoreet metus quis purus dapibus, vitae imperdiet felis gravida.

          Duis porttitor mi lobortis consequat eleifend. 
          Phasellus ac ullamcorper tortor. Praesent efficitur lacinia leo, ut efficitur tortor blandit id. 
          Praesent dapibus eleifend lectus, vitae hendrerit purus viverra ac. Duis hendrerit nisi ullamcorper, 
          gravida massa sed, vestibulum risus. Suspendisse id iaculis dolor. Curabitur venenatis scelerisque est, 
          ac sagittis sem ultrices sed. Suspendisse et ligula eget dolor tincidunt maximus eu in neque. 
          Donec cursus eu quam et consectetur. Donec ultricies in ipsum a euismod. Sed congue ante a felis dictum, 
          ac mollis eros ornare. Proin molestie fringilla luctus. Morbi id mollis felis. Nam molestie ut ligula 
          vel aliquam. Vivamus dapibus ex vitae felis commodo, euismod tincidunt nunc tempor.
        </p>

      </ion-grid>
    </Layout>
  );
};