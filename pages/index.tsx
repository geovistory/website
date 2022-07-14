import type { GetStaticProps, NextPage } from 'next';
import {
  DefaultPage,
  DefaultPageProps,
} from '../components/layouts/DefaultPage.component';
import { GeovCarousel } from '@geovistory/design-system-react';
import { projectsParams } from '../projects/config';
export interface HomeProps {
  defaultPage: DefaultPageProps;
}
const Home: NextPage<HomeProps> = (props) => {
  return (
    <DefaultPage {...props.defaultPage}>
      <h1>Geovistory</h1>
      <GeovCarousel
        style={{ height: 400, maxWidth: 600 }}
        images={[
          '/carousel-1_maquette-lugdunum.jpg',
          '/carousel-2_tapisserie-bayeux.jpg',
          '/carousel-3_vitrail.jpg',
          '/carousel-4_astrolabe-arabe.jpg',
          '/carousel-5_quetzalcoatl.jpg',
          '/carousel-6_bronzes-benin.jpg',
          '/carousel-7_carte-amerique.jpg',
          '/carousel-8_assemble-vizille.jpg',
          '/carousel-9_acte-deces.jpg',
          '/carousel-10_guerre-russo-japonaise.jpg',
          '/carousel-11_congret-musique.jpg',
          '/carousel-12_toronto.jpg',
        ]}
      ></GeovCarousel>
      <p> some text</p>
      <p> some text</p>
      <p> some text</p>
      <p> some text</p>
      <p> some text</p>
      <p> some text</p>
      <p> some text</p>
      <p> some text</p>
      <p> some text</p>
      <p> some text</p> <p> some text</p>
      <p> some text</p>
      <p> some text</p>
      <p> some text</p>
      <p> some text</p>
      <p> some text</p>
      <p> some text</p>
      <p> some text</p>
      <p> some text</p>
      <p> some text</p> <p> some text</p>
      <p> some text</p>
      <p> some text</p>
      <p> some text</p>
      <p> some text</p>
      <p> some text</p>
      <p> some text</p>
      <p> some text</p>
      <p> some text</p>
      <p> some text</p> <p> some text</p>
      <p> some text</p>
      <p> some text</p>
      <p> some text</p>
      <p> some text</p>
      <p> some text</p>
      <p> some text</p>
      <p> some text</p>
      <p> some text</p>
      <p> some text</p> <p> some text</p>
      <p> some text</p>
      <p> some text</p>
      <p> some text</p>
      <p> some text</p>
      <p> some text</p>
      <p> some text</p>
      <p> some text</p>
      <p> some text</p>
      <p> some text</p> <p> some text</p>
      <p> some text</p>
      <p> some text</p>
      <p> some text</p>
      <p> some text</p>
      <p> some text</p>
      <p> some text</p>
      <p> some text</p>
      <p> some text</p>
      <p> some text</p>
    </DefaultPage>
  );
};

export default Home;
export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  return {
    props: {
      defaultPage:{
        footer: {
          featuredProjects: projectsParams.filter((pp) => pp.featured)
        }
      }
    },
    revalidate: 86400,
  };
};
