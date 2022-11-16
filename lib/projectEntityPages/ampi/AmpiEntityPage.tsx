import toReact from 'html-react-parser';
import Head from 'next/head';
import React from 'react';
import { ErrorBoundary } from '../../../components/elements/ErrorBoundary.component';
import {
  ProjectPageLayout,
  ProjectPageLayoutProps,
} from '../../../components/layouts/ProjectPageLayout.component';
import { SSRProps } from '../_default/DefaultEntityPage';

export interface AmpiEntityProps extends SSRProps {
  projectPageLayout: ProjectPageLayoutProps;
  _ssrHtmlBody: string;
  _ssrHtmlHead: string;
  _ssrData: { [key: string]: any };
}

export function AmpiEntityPage(props: AmpiEntityProps) {
  return (
    <ErrorBoundary>
      <ProjectPageLayout {...props.projectPageLayout}>
        <Head>
          {toReact(props._ssrHtmlHead)}
          <title>{props._ssrData?.entityLabel?.label}</title>
          <meta
            name="description"
            content={`Page about ${props._ssrData?.entityLabel?.label} on Geovistory`}
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="mainGrid">
          <div dangerouslySetInnerHTML={{ __html: props._ssrHtmlBody }}></div>
          <br />
          <p>
            <small>
              URI:{' '}
              <a href={`http://geovistory.org/resource/${props.entityId}`}>
                http://geovistory.org/resource/{props.entityId}
              </a>
            </small>
            <br />
            <small>
              Project URL:{' '}
              <a
                href={`http://geovistory.org/resource/${props.entityId}?p=${props.projectId}`}
              >
                http://geovistory.org/resource/
                {props.entityId}?p={props.projectId}
              </a>
            </small>
          </p>
          <geov-entity-properties
            class="restricted-width"
            language="en"
            sparql-endpoint="https://sparql.geovistory.org/api_v1_community_data"
            entity-id={props.entityId}
            uri-regex={process.env.NEXT_PUBLIC_GEOV_URI_REGEX}
            uri-replace={
              process.env.NEXT_PUBLIC_GEOV_URI_REPLACE + '?p=' + props.projectId
            }
          ></geov-entity-properties>
        </main>
      </ProjectPageLayout>
    </ErrorBoundary>
  );
}
