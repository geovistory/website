import toReact from 'html-react-parser';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { ErrorBoundary } from '../../components/elements/ErrorBoundary.component';
import {
  DefaultPage,
  DefaultPageProps,
} from '../../components/layouts/DefaultPage.component';
import { ProjectParams, projectsParams } from '../../lib/projectParams';
import { serverRender } from '../../lib/serverRender';
interface SSRProps {
  entityId: string;
}

interface ResourceProps extends SSRProps {
  defaultPage: DefaultPageProps;
  featuredProjects: ProjectParams[];
  _ssrHtmlBody: string;
  _ssrHtmlHead: string;
  _ssrData: { [key: string]: any };
  endpoint: string;
}

export default function Resource(props: ResourceProps) {
  return (
    <ErrorBoundary>
      <DefaultPage
        {...props.defaultPage}
        noPaddingSlot={
          <div className="mainGridNoPadding ion-color-tertiary-bg">
            <Head>{toReact(props._ssrHtmlHead)}</Head>
            <div dangerouslySetInnerHTML={{ __html: props._ssrHtmlBody }}></div>
          </div>
        }
      ></DefaultPage>
    </ErrorBoundary>
  );
}

function ssr(props: SSRProps, endpoint: string) {
  return (
    <geov-entity
      sparql-endpoint={endpoint}
      entity-id={props.entityId}
      uri-regex={process.env.NEXT_PUBLIC_GEOV_URI_REGEX}
      uri-replace={process.env.NEXT_PUBLIC_GEOV_URI_REPLACE}
    >
      <div slot="body-end" className="section">
        <ion-grid fixed={true}>
          <ion-card>
            <ion-card-header>
              <ion-card-subtitle>Metadata</ion-card-subtitle>
            </ion-card-header>

            <ion-list lines="none">
              <ion-item
                href={`http://geovistory.org/resource/${props.entityId}`}
              >
                <ion-label>
                  <p>URI</p>
                  http://geovistory.org/resource/{props.entityId}
                </ion-label>
              </ion-item>
            </ion-list>
          </ion-card>
        </ion-grid>
      </div>
    </geov-entity>
  );
}

// export const getStaticProps: GetStaticProps<ResourceProps> = async (
//   context
// ) => {

//   const entityId = context?.params?.entityId as string;
//   const endpoint = context?.params?.endpoint as string ??  as string;

//   const props: SSRProps = { entityId };

//   const res = await serverRender(ssr(props, endpoint));

//   const featuredProjects = projectsParams.filter((pp) => pp.featured);

//   return {
//     props: {
//       ...props,
//       featuredProjects,
//       defaultPage: {
//         head: {
//           headTitle: res.serverFetchedData?.['entity-label']?.label ?? '', // head title is set within Resource
//           headOgDescription: `Page about ${res.serverFetchedData?.['entity-label']?.label} on Geovistory`,
//           headOgImage: null,
//         },
//         footer: {
//           featuredProjects,
//         },
//       },
//       _ssrData: res.serverFetchedData,
//       _ssrHtmlBody: res.bodyInnerHtml,
//       _ssrHtmlHead: res.headInnerHtml,
//       endpoint: endpoint
//     },
//     revalidate: 10,
//   };
// };


// export async function getStaticPaths() {
//   return {
//     paths: ['/page/i92342', '/page/i3158616'],
//     fallback: 'blocking', // can also be false or 'blocking'
//   };
// }


import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps<ResourceProps> = async (
  context
) => {
  const entityId = context?.params?.entityId as string;
  const endpoint = context?.query?.endpoint as string ?? 'https://sparql.geovistory.org/api_v1_community_data';

  const props: SSRProps = { entityId };

  const res = await serverRender(ssr(props, endpoint));

  const featuredProjects = projectsParams.filter((pp) => pp.featured);

  return {
    props: {
      ...props,
      featuredProjects,
      defaultPage: {
        head: {
          headTitle: res.serverFetchedData?.['entity-label']?.label ?? '',
          headOgDescription: `Page about ${res.serverFetchedData?.['entity-label']?.label} on Geovistory`,
          headOgImage: null,
        },
        footer: {
          featuredProjects,
        },
      },
      _ssrData: res.serverFetchedData,
      _ssrHtmlBody: res.bodyInnerHtml,
      _ssrHtmlHead: res.headInnerHtml,
      endpoint,
    },
  };
};