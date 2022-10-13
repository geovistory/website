import toReact from 'html-react-parser';
import { openOutline } from 'ionicons/icons';
import Head from 'next/head';
import React from 'react';
import { ErrorBoundary } from '../../../components/elements/ErrorBoundary.component';
import { ProjectPageLayout, ProjectPageLayoutProps } from '../../../components/layouts/ProjectPageLayout.component';
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
            <ion-button
              fill="outline"
              target={'_blank'}
              href={`http://geovistory.org/project/${props.projectId}/publication/entity-page.html?id=${props.entityId}`}
            >
              In der TEI Publikation öffnen
              <ion-icon slot="end" icon={openOutline}></ion-icon>
            </ion-button>
          </p>
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
        </main>
      </ProjectPageLayout>
    </ErrorBoundary>
  );
}
