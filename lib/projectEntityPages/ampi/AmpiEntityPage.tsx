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
        <main
          className="mainGridNoPadding ion-color-tertiary-bg"
          dangerouslySetInnerHTML={{ __html: props._ssrHtmlBody }}
        ></main>
      </ProjectPageLayout>
    </ErrorBoundary>
  );
}
