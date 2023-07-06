import type { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import {
  DefaultPage,
  DefaultPageProps,
} from '../components/layouts/DefaultPage.component';
import { projectsParams } from '../lib/projectParams';

export interface CommunityProps {
  defaultPage: DefaultPageProps;
}
const Community: NextPage<CommunityProps> = (props) => {
  return (
    <DefaultPage {...props.defaultPage}>
      <h1>Geovistory Community</h1>
      <p className="lead">
        You are a researcher, developer, data analyst or just interested in
        humanities and their digital expressions? Then, the Geovistory community
        might be of interest to you!
      </p>
      <p>
        Geovistory&apos;s community is open to you, no matter your background or
        expertise. At the core of Geovistory&apos;s environment is the community
        that participates in the production of linked open data (LOD), the
        analysis of information and knowledge graphs, the development of digital
        tools and components, the creation of ontology and profiles, or simply
        engages in the various discussions.{' '}
        <Link href="/about-geovistory">Learn more about Geovistory</Link>.
      </p>
      <h2>Discord</h2>
      <p>
        <Link href="#"> Join us on Discord and stay tuned!</Link>
      </p>
      <p>
        Discord is a discussion platform that allows you to join our groups and
        channels as well as write personal messages to other membes.
      </p>
      <p>Geovistory Discord channels:</p>
      <p>
        <ul>
          <li>
            <strong>#rules</strong>, to state the various rules of the Geovitory
            Discord Server
          </li>
          <li>
            <strong>#presentation</strong>, where newcomers are invited to
            present themselves in a few words
          </li>
          <li>
            <strong>#coffee-talks</strong>, dedicated to off-topic discussions;
          </li>
          <li>
            <strong>#miscellaneous</strong>, used to post interesting stuff
            (events, announcements, funding opportunities, new ideas...);
          </li>
          <li>
            <strong>#geovistory-news</strong>, where we announce updates,
            improvements and new things around Geovistory;
          </li>
          <li>
            <strong>#q-and-a</strong>, where you can ask all your questions
            related to Geovistory.
          </li>
        </ul>
      </p>
      <h2>Newsletter</h2>
      <p>
        Fill in this form and receive the Geovistory newsletter so that you
        don&apos;t miss our latest developments.
      </p>
      <h2>Github</h2>
      <p>
        The platform GitHub is used by our DevOps team to develop and maintain
        the Geovistory infrastructure. It allows the publication of the source
        code of the various components, as well as tracking the different tasks,
        milestones, and recording issues that need to be solved.
      </p>
      <p>
        If coding interests you, check out our various repositories used for the
        Geovistory environment. Of particular interest to you might be our{' '}
        <a
          href="https://design.geovistory.org"
          target="_blank"
          rel="noreferrer"
        >
          Geovistory Design System
        </a>
        , built from open-source webcomponents. You can use it to build your own
        webpage featuring Geovistory data!
      </p>
      <h2>Email and Twitter</h2>
      <p>
        You don&apos;t like discord? Contact us via email{' '}
        <a target="_blank" rel="noreferrer" href="mailto:info@geovistory.org">
          info@geovistory.org
        </a>{' '}
        or on{' '}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/Geovistory?s=20"
        >
          info@twitter.org
        </a>
        . Or visit us in our offices in Bern, Lyon and Basel. You are always
        welcome for a coffee!
      </p>
    </DefaultPage>
  );
};

export default Community;
export const getStaticProps: GetStaticProps<CommunityProps> = async () => {
  return {
    props: {
      defaultPage: {
        headTitle: 'Geovistory Community',
        footer: {
          featuredProjects: projectsParams.filter((pp) => pp.featured),
        },
      },
    },
    revalidate: 86400,
  };
};
