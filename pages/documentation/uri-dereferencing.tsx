import type { Components } from '@geovistory/design-system-web';
import {
  IonicSafeString,
  IonInputCustomEvent,
  IonSegmentCustomEvent,
  SegmentChangeEventDetail,
} from '@ionic/core';
import type { GetStaticProps, NextPage } from 'next';
import { useState } from 'react';
import {
  DefaultPage,
  DefaultPageProps,
} from '../../components/layouts/DefaultPage.component';
import { projectsParams } from '../../lib/projectParams';

export interface ResourcesProps {
  defaultPage: DefaultPageProps;
}

const RDFSyntayDoc = (props: {
  title: string;
  acceptType: string;
  entityId: string;
  queryParam: string;
}) => {
  return (
    <>
      <p>{props.title}</p>
      <p>
        <geov-code
          language="bash"
          code={`curl -L -H "Accept: ${props.acceptType}" \\
            http://geovistory.org/resource/${props.entityId}${props.queryParam}`}
        ></geov-code>
      </p>
    </>
  );
};
const Resources: NextPage<ResourcesProps> = (props) => {
  let [redirects, setRedirects] = useState('html');
  let [entityId, setEntityId] = useState('i785518');
  let [queryParam, setQueryParam] = useState('');
  let [pId, setPId] = useState<number | undefined>();

  const setProjectId = (projectId?: number) => {
    setPId(projectId);
    projectId ? setQueryParam(`?p=${projectId}`) : setQueryParam('');
  };

  return (
    <DefaultPage {...props.defaultPage}>
      <h1>URI Dereferencing</h1>
      <p className="lead">
        You can ask for different representations of properties of an entity
        identified by a Geovistory URI. The representation may be in HTML or
        different RDF syntaxes.
      </p>
      <p>The Geovistory URI pattern is </p>
      <p>
        <geov-code
          language="bash"
          code="http://geovistory.org/resource/:entityId?p=:projectId"
        ></geov-code>
      </p>
      <p>
        <code>:entityId</code> is the identifier of the entity.
        <br />
        <code>?p=:projectId</code> is optional and allows to specify a project.
      </p>
      <p>
        The accept header of your http request determines whether you get back
        HTML or RDF (see below; See content negotiation in section
        12 in the {' '}
        <a
          href="https://www.w3.org/Protocols/rfc2616/rfc2616.txt"
          target="_blank"
          rel="noreferrer"
        >
          HTTP specification
        </a>
        ) .
      </p>

      <p>Change these parameters to adjust the commands below:</p>
      <p>
        <ion-list>
          <ion-item lines="full">
            <ion-label position="fixed">entityId</ion-label>
            <ion-input
              value="i785518"
              ref={(el: any) => {
                el?.addEventListener(
                  'ionChange',
                  (event: IonInputCustomEvent<{ value: string }>) => {
                    setEntityId(event.detail.value);
                  }
                );
              }}
            ></ion-input>
          </ion-item>
          <ion-item lines="full">
            <ion-label position="fixed">projectId</ion-label>
            <ion-input
              clear-input="true"
              type="number"
              placeholder="Enter project id (optional)"
              ref={(el: any) => {
                el?.addEventListener(
                  'ionChange',
                  (event: IonInputCustomEvent<{ value: number }>) => {
                    setProjectId(event.detail.value);
                  }
                );
              }}
            ></ion-input>
          </ion-item>
        </ion-list>
      </p>

      <h2>Get HTML</h2>
      <p>
        To get the resource&apos;s HTML page you can http-request the URI.
        <br />
        With the browser:{' '}
        <a
          href={`http://geovistory.org/resource/${entityId}${queryParam}`}
          target="_blank"
          rel="noreferrer"
        >
          http://geovistory.org/resource/{entityId}
          {queryParam}
        </a>
        <br />
        With curl (<code>-L</code> = follows redirects):
      </p>
      <p>
        <geov-code
          language="bash"
          code={`curl -L http://geovistory.org/resource/${entityId}${queryParam}`}
        ></geov-code>
      </p>

      <h2>Get RDF</h2>
      <p>
        To get the resource&apos;s rdf representation, set the{' '}
        <code>accept header</code> to one of the following rdf syntaxes:
      </p>
      <RDFSyntayDoc
        title="RDF XML"
        acceptType="application/rdf+xml"
        entityId={entityId}
        queryParam={queryParam}
      ></RDFSyntayDoc>
      <RDFSyntayDoc
        title="JSON-LD"
        acceptType="application/ld+json"
        entityId={entityId}
        queryParam={queryParam}
      ></RDFSyntayDoc>
      <RDFSyntayDoc
        title="N-Triples"
        acceptType="application/n-triples"
        entityId={entityId}
        queryParam={queryParam}
      ></RDFSyntayDoc>
      <RDFSyntayDoc
        title="N-Quads"
        acceptType="application/n-quads"
        entityId={entityId}
        queryParam={queryParam}
      ></RDFSyntayDoc>
      <RDFSyntayDoc
        title="TRIX"
        acceptType="application/trix+xml"
        entityId={entityId}
        queryParam={queryParam}
      ></RDFSyntayDoc>
      <RDFSyntayDoc
        title="Thrift"
        acceptType="application/rdf+thrift"
        entityId={entityId}
        queryParam={queryParam}
      ></RDFSyntayDoc>
      <RDFSyntayDoc
        title="Turtle"
        acceptType="text/turtle"
        entityId={entityId}
        queryParam={queryParam}
      ></RDFSyntayDoc>
      <h2>Redirects in detail</h2>

      <p>When you request the URI, it will be redirected as follows:</p>
      <p>
        <ion-segment
          value="html"
          onIonChange={() => {
            alert();
          }}
          ref={(s: any) => {
            s &&
              s.addEventListener(
                'ionChange',
                (ev: IonSegmentCustomEvent<SegmentChangeEventDetail>) => {
                  setRedirects(ev.detail.value ?? 'html');
                }
              );
          }}
        >
          <ion-segment-button value="html">
            <ion-label>HTML</ion-label>
          </ion-segment-button>
          <ion-segment-button value="rdf">
            <ion-label>RDF</ion-label>
          </ion-segment-button>
        </ion-segment>
      </p>
      {redirects === 'html' && (
        <ol className="restricted-width">
          <li>
            Browser/curl request:{' '}
            <code>
              <strong>http://</strong>geovistory.org/<strong>resource</strong>
              /{entityId}{queryParam}
            </code>
          </li>
          <li>
            Browser/curl receive: <code>301 Moved Permanently</code>
          </li>
          <li>
            Browser/curl requests:
            <code>
              <strong>https://www</strong>.geovistory.org/
              <strong>resource</strong>/{entityId}{queryParam}
            </code>
          </li>
          <li>
            Browser/curl receives: <code>301 Moved Permanently, Location </code>
          </li>
          <li>
            Browser/curl requests:
            {pId ? (
              <code>
                <strong>https://www</strong>.geovistory.org/
                <strong>project/{pId}/page</strong>
                /{entityId}{queryParam}
              </code>
            ) : (
              <code>
                <strong>https://www</strong>.geovistory.org/
                <strong>page</strong>
                /{entityId}
              </code>
            )}{' '}
          </li>
          <li>Browser/curl receives: HTML</li>{' '}
        </ol>
      )}
      {redirects === 'rdf' && (
        <ol className="restricted-width">
          <li>
            Browser/curl request:{' '}
            <code>
              <strong>http://</strong>geovistory.org/<strong>resource</strong>
              /{entityId}{queryParam}
            </code>
          </li>
          <li>
            Browser/curl receive: <code>301 Moved Permanently</code>
          </li>
          <li>
            Browser/curl requests:
            <code>
              <strong>https://www</strong>.geovistory.org/resource/{entityId}{queryParam}
            </code>
          </li>
          <li>Browser/curl receives: RDF</li>{' '}
        </ol>
      )}
    </DefaultPage>
  );
};

export default Resources;
export const getStaticProps: GetStaticProps<ResourcesProps> = async () => {
  return {
    props: {
      defaultPage: {
        footer: {
          featuredProjects: projectsParams.filter((pp) => pp.featured),
        },
      },
    },
    revalidate: 86400,
  };
};
