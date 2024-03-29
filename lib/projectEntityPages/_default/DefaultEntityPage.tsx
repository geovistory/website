import { ProjectPageLayoutProps } from '../../../components/layouts/ProjectPageLayout.component';
import { ProjectEntityPageProps } from '../../../pages/project/[geov_id]/page/[entityId]';
import toReact from 'html-react-parser';
import Head from 'next/head';
import React from 'react';
import { ErrorBoundary } from '../../../components/elements/ErrorBoundary.component';
import { ProjectPageLayout } from '../../../components/layouts/ProjectPageLayout.component';

export interface SSRProps extends ProjectEntityPageProps {
  entityId: string;
  uriRegex: string;
  uriReplace: string;
}

export interface DefaultEntityProps extends SSRProps {
  projectPageLayout: ProjectPageLayoutProps;
  _ssrHtmlBody: string;
  _ssrHtmlHead: string;
  _ssrData: { [key: string]: any };
}

export function DefaultEntityPage(props: DefaultEntityProps) {
  return (
    <ErrorBoundary>
      <ProjectPageLayout {...props.projectPageLayout}>
        <Head>
          {toReact(props._ssrHtmlHead)}
          <title>{props._ssrData?.['entity-label']?.label}</title>
          <meta
            name="description"
            content={`Page about ${props._ssrData?.['entity-label']?.label} on Geovistory`}
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main
          className="mainGridNoPadding ion-color-tertiary-bg"
          dangerouslySetInnerHTML={{ __html: props._ssrHtmlBody }}
        ></main>
      </ProjectPageLayout>
    </ErrorBoundary>
  );
}

export function ssr(props: SSRProps) {
  return (
    <geov-entity
      sparql-endpoint={`https://sparql.geovistory.org/api_v1_project_${props.projectId}`}
      entity-id={props.entityId}
      uri-regex={props.uriRegex}
      uri-replace={props.uriReplace + '?p=' + props.projectId}
      project-id={props.projectId}
    ></geov-entity>
  );
}
