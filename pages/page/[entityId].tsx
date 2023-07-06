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
import { openOutline } from 'ionicons/icons';
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
          <div className="mainGridNoPadding ion-color-tertiary-bg">
            <Head>
              {toReact(props._ssrHtmlHead)}
              <title>{props._ssrData?.['entity-label']?.label}</title>
              <meta
                name="description"
                content={`Page about ${props._ssrData?.['entity-label']?.label} on Geovistory`}
              />
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <div dangerouslySetInnerHTML={{ __html: props._ssrHtmlBody }}></div>
          </div>
        }
      ></DefaultPage>
    </ErrorBoundary>
  );
}

function ssr(props: SSRProps) {
  return (
    <geov-entity
      sparql-endpoint="https://sparql.geovistory.org/api_v1_community_data"
      entity-id={props.entityId}
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
                  <p>URI: http://geovistory.org/resource/{props.entityId}</p>
                </ion-label>
              </ion-item>
            </ion-list>
          </ion-card>
        </ion-grid>
      </div>
    </geov-entity>
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
        headTitle: null, // head title is set within Resource
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
