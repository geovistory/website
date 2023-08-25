import type { GetServerSideProps, GetStaticProps, NextPage } from 'next';
import {
  DefaultPage,
  DefaultPageProps,
} from '../components/layouts/DefaultPage.component';
import { projectsParams } from '../lib/projectParams';
import styles from './search.module.css';
export interface SearchProps {
  explorerTerm: string | null;
  defaultPage: DefaultPageProps;
}

const Search: NextPage<SearchProps> = (props) => {
  return (
    <DefaultPage
      {...props.defaultPage}
      noPaddingSlot={
        <div className={styles.container}>
          <geov-explorer
            init-search-string={props.explorerTerm ?? undefined}
            ref={(e: HTMLGeovExplorerElement) => {
              if (e) e.preferredItems = ['c21', 'c363', 'c523', 'c68'];
            }}
            sparql-endpoint={`https://sparql.geovistory.org/api_v1_community_data`}
            uri-regex={process.env.NEXT_PUBLIC_GEOV_URI_REGEX}
            uri-replace={process.env.NEXT_PUBLIC_GEOV_URI_REPLACE}
          ></geov-explorer>
        </div>
      }
    ></DefaultPage>
  );
};

export default Search;
export const getServerSideProps: GetServerSideProps<SearchProps> = async ({
  query,
}) => {
  const explorerTerm = query?.term ? query?.term.toString() : null;
  return {
    props: {
      explorerTerm,
      defaultPage: {
        headTitle: 'Search',
        headOgDescription:'Search for Persons, Places, Organizations, Ship Voyages, etc.',
        footer: {
          featuredProjects: projectsParams.filter((pp) => pp.featured),
        },
      },
    },
  };
};
