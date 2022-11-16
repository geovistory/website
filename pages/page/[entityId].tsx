import toReact from 'html-react-parser';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { ErrorBoundary } from '../../components/elements/ErrorBoundary.component';
import {
  DefaultPage,
  DefaultPageProps,
} from '../../components/layouts/DefaultPage.component';
import { serverRender } from '../../lib/serverRender';
import { ProjectParams, projectsParams } from '../../lib/projectParams';
interface SSRProps {
  entityId: string;
}

interface ResourceProps extends SSRProps {
  defaultPage: DefaultPageProps;
  featuredProjects: ProjectParams[];
  _ssrHtmlBody: string;
  _ssrHtmlHead: string;
  _ssrData: { [key: string]: any };
}

export default function Resource(props: ResourceProps) {
  return (
    <ErrorBoundary>
      <DefaultPage
        {...props.defaultPage}
        noPaddingSlot={
          <div className="mainGrid">
            <Head>
              {toReact(props._ssrHtmlHead)}
              <title>{props._ssrData?.entityLabel?.label}</title>
              <meta
                name="description"
                content={`Page about ${props._ssrData?.entityLabel?.label} on Geovistory`}
              />
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <div dangerouslySetInnerHTML={{ __html: props._ssrHtmlBody }}></div>
            <p>
              <small>
                URI:{' '}
                <a href={`http://geovistory.org/resource/${props.entityId}`}>
                  http://geovistory.org/resource/{props.entityId}
                </a>
              </small>
            </p>
            <geov-entity-properties
              class="restricted-width"
              language="en"
              sparql-endpoint="https://sparql.geovistory.org/api_v1_community_data"
              entity-id={props.entityId}
              uri-regex={process.env.NEXT_PUBLIC_GEOV_URI_REGEX}
              uri-replace={process.env.NEXT_PUBLIC_GEOV_URI_REPLACE}
            ></geov-entity-properties>
          </div>
        }
      ></DefaultPage>
    </ErrorBoundary>
  );
}

function ssr(props: SSRProps) {
  return (
    <ion-grid fixed={false}>
      <h2>
        <geov-entity-label
          sparql-endpoint="https://sparql.geovistory.org/api_v1_community_data"
          entity-id={props.entityId}
          _ssr-id="entityLabel"
        ></geov-entity-label>
      </h2>
      <p>
        <geov-entity-class-label
          class="restricted-width"
          sparql-endpoint="https://sparql.geovistory.org/api_v1_community_data"
          entity-id={props.entityId}
          _ssr-id="classLabel"
        ></geov-entity-class-label>
      </p>
      <geov-entity-definition
        class="restricted-width"
        sparql-endpoint="https://sparql.geovistory.org/api_v1_community_data"
        entity-id={props.entityId}
        _ssr-id="def"
      ></geov-entity-definition>
    </ion-grid>
  );
}

export const getStaticProps: GetStaticProps<ResourceProps> = async (
  context
) => {
  const entityId = context?.params?.entityId as string;

  const props: SSRProps = { entityId };

  const res = await serverRender(ssr(props));

  const featuredProjects = projectsParams.filter((pp) => pp.featured);

  return {
    props: {
      ...props,
      featuredProjects,
      defaultPage: {
        footer: {
          featuredProjects,
        },
      },
      _ssrData: res.serverFetchedData,
      _ssrHtmlBody: res.bodyInnerHtml,
      _ssrHtmlHead: res.headInnerHtml,
    },
    revalidate: 10,
  };
};

export async function getStaticPaths() {
  return {
    paths: ['/page/i92342', '/page/i3158616'],
    fallback: 'blocking', // can also be false or 'blocking'
  };
}
