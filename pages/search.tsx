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
        footer: {
          featuredProjects: projectsParams.filter((pp) => pp.featured),
        },
      },
    },
  };
};
