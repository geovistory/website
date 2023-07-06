import type { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import { YoutubeEmbed } from '../components/elements/YoutubeEmbed.component';
import {
  DefaultPage,
  DefaultPageProps,
} from '../components/layouts/DefaultPage.component';
import { projectsParams } from '../lib/projectParams';

export interface AboutGeovistoryProps {
  defaultPage: DefaultPageProps;
}
const AboutGeovistory: NextPage<AboutGeovistoryProps> = (props) => {
  return (
    <DefaultPage {...props.defaultPage}>
      <h1>About Geovistory</h1>
      <p className="lead">
        Geovistory brings a paradigm shift in the handling of scientific data in
        the social sciences and humanities and innovatively taps the potential
        of digitization. With impacts not only for research, but for the general
        public.
      </p>
      <p className="ion-padding-top">
        <YoutubeEmbed embedId="SfWt9TrCA6I" title="Geovistory in 90 seconds" />
      </p>

      <h3>For research</h3>
      <p>
        Geovistory is a collaborative and open information system. Data from all
        research projects active in Geovistory are automatically integrated:
        Instead of a hundred research projects making the first kilometer in
        information production, in Geovistory a hundred research projects go a
        thousand kilometers together. This is because the data is integrated
        (semantically & linked) and produced collaboratively. This creates a
        treasure of data (knowledge graph) that is unprecedented in terms of
        quality and quantity. On the basis of this, new insights become possible
        by means of innovative visualization and analysis tools.
      </p>
      <p>
        The information in Geovistory is interoperable and reusable: each data
        point is semantically defined (according to{' '}
        <a href="https://www.cidoc-crm.org/">CIDOC-CRM</a> and domain specific
        extensions), published under Creative Commons license and linked to
        external resources according to the vision of linked open data for
        research (LOD-R) and the{' '}
        <a href="https://www.go-fair.org/fair-principles/">FAIR</a> principles.
      </p>
      <h3>For society</h3>
      <p>
        Geovistory is a publicly accessible information system where information
        from scientific research projects is curated. Geovistory thus offers a
        trustworthy and sound source of information, which is particularly
        significant in a world in a struggle for the dominance of narratives
        (fake news). This way, Geovistory contributes to an improved
        understanding of economic, social and historical phenomena and thus to
        the strengthening of the socio-critical role of the social sciences &
        humanities.
      </p>

      <h2>The product</h2>
      <p>
        The Geovistory information system has two browser-based access points.
        The first is the data publication platform{' '}
        <a href="https://www.geovistory.org/">Geovistory.org</a>. Here,
        researchers and interested parties (the general public) can review
        projects, directly access and evaluate curated data. The publication
        platform is designed in such a way that external software engineers can
        develop and integrate their own components (web components). On the
        other hand, this is the access to the virtual research environment, the{' '}
        <a href="https://toolbox.geovistory.org/home">Toolbox</a>, where
        researchers collect, curate and evaluate data.{' '}
      </p>
      <p>
        The information system is used by an active community, which constantly
        develops and documents it. For this purpose, suitable channels, forums
        and a good documentation are available (for the use of the toolbox, as
        well as for the technical further development of Geovistory).
      </p>
      <p>
        Geovistory is complemented by appropriate exchange spaces &
        documentation (for academia, education, journalism, tourism etc) for
        developing a community of active researches (prosumers) and data users
        (consumers) that bring the platform to life.
      </p>

      <h2>To whom Geovistory belongs</h2>

      <p>
        The publication platform Geovistory.org is jointly developed by
        KleioLab, LARHRA, the University of Bern and other actors joining the
        Geovistory vision. The{' '}
        <Link href="/lod4hss" target="_blank">
          LOD4HSS-project
        </Link>
        , co-funded by swissuniversities, structures these efforts. The data
        publication platform <Link href="/">Geovistory.org</Link> is developed
        open source and available to the community via GitHub. The appropriate
        open-source licensing yet needs to be decided. The publication platform
        is designed in such a way that external software engineers can develop
        and integrate their own components (
        <a
          href="https://design.geovistory.org/?path=/story/welcome--welcome"
          target="_blank"
          rel="noreferrer"
        >
          web components
        </a>
        ). We invite all contributors to develop these components also open
        source and will do so ourselves.
      </p>
      <p>
        The Toolbox is owned, developed and maintained by KleioLab. It is not
        open source. However, this is about to change. The Toolbox is freely
        accessible for all individual projects.
      </p>

      <h2>The data and their accessibility</h2>
      <p>
        All data in Geovistory are open and licensed under{' '}
        <a href="https://creativecommons.org/licenses/by-sa/4.0/">
          Creative Commons BY-SA 4.0
        </a>{' '}
        and can be freely reused. All structured data are semantically defined
        according to <a href="https://www.cidoc-crm.org/">CIDOC-CRM</a> and
        domain specific extensions (Semantic Data for Humanities & Social
        Sciences <a href="https://ontome.net/namespace/11">SDHSS</a>
        ). Supported data formats also include{' '}
        <a href="https://tei-c.org/">TEI</a> (Text Encoding Initiative). Data
        are made accessible on a graphical interface and a standard
        SPARQL-endpoint.
      </p>
    </DefaultPage>
  );
};

export default AboutGeovistory;
export const getStaticProps: GetStaticProps<AboutGeovistoryProps> =
  async () => {
    return {
      props: {
        defaultPage: {
          headTitle: 'About Geovistory',
          footer: {
            featuredProjects: projectsParams.filter((pp) => pp.featured),
          },
        },
      },
      revalidate: 86400,
    };
  };
