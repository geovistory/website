import type { Components } from '@geovistory/design-system-web';
import {
  IonicSafeString,
  IonSegmentCustomEvent,
  SegmentChangeEventDetail,
} from '@ionic/core';
import type { GetStaticProps, NextPage } from 'next';
import { useState } from 'react';
import {
  DefaultPage,
  DefaultPageProps,
} from '../../components/layouts/DefaultPage.component';
import { projectsParams } from '../../projects/projectParams';

export interface ResourcesProps {
  defaultPage: DefaultPageProps;
}
const RDFSyntayDoc = (props: { title: string; acceptType: string }) => {
  return (
    <>
      <p>{props.title}</p>
      <p>
        <geov-code
          language="bash"
          code={`curl -L -H "Accept: ${props.acceptType}" \\
            http://geovistory.org/resource/i785518`}
        ></geov-code>
      </p>
    </>
  );
};
const Resources: NextPage<ResourcesProps> = (props) => {
  let [redirects, setRedirects] = useState('html');
  return (
    <DefaultPage {...props.defaultPage}>
      <h1>URI Dereferencing</h1>
      <p className="lead">
        You can ask for different representations of properties of an entity
        identified by a Geovistory URI. The representation may be in HTML or
        different RDF syntaxes.
      </p>
      <p>
        The Geovistory URI pattern is{' '}
        <code>http://geovistory.org/resource/:id</code>, where <code>:id</code>{' '}
        is the identifier of the Geovistory entity. When you http-request a
        Geovistory URI, the accept header of your http request determines
        whether you get back HTML or RDF. (This mechanism is called Content
        negotiation, see section 12 of the{' '}
        <a
          href="https://www.w3.org/Protocols/rfc2616/rfc2616.txt"
          target="_blank"
          rel="noreferrer"
        >
          HTTP specification
        </a>
        ) .
      </p>
      <h2>Get HTML</h2>
      <p>
        To get the resource&apos;s HTML page you can http-request the URI.
        <br />
        With the browser:{' '}
        <a
          href="http://geovistory.org/resource/i785518"
          target="_blank"
          rel="noreferrer"
        >
          http://geovistory.org/resource/i785518
        </a>
        <br />
        With curl (<code>-L</code> = follows redirects):
      </p>
      <p>
        <geov-code
          language="bash"
          code="curl -L http://geovistory.org/resource/i785518"
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
      ></RDFSyntayDoc>
      <RDFSyntayDoc
        title="JSON-LD"
        acceptType="application/ld+json"
      ></RDFSyntayDoc>
      <RDFSyntayDoc
        title="N-Triples"
        acceptType="application/n-triples"
      ></RDFSyntayDoc>
      <RDFSyntayDoc
        title="N-Quads"
        acceptType="application/n-quads"
      ></RDFSyntayDoc>
      <RDFSyntayDoc
        title="TRIX"
        acceptType="application/trix+xml"
      ></RDFSyntayDoc>
      <RDFSyntayDoc
        title="Thrift"
        acceptType="application/rdf+thrift"
      ></RDFSyntayDoc>
      <RDFSyntayDoc title="Turtle" acceptType="text/turtle"></RDFSyntayDoc>
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
              /:id
            </code>
          </li>
          <li>
            Browser/curl receive: <code>301 Moved Permanently</code>
          </li>
          <li>
            Browser/curl requests:
            <code>
              <strong>https://www</strong>.geovistory.org/
              <strong>resource</strong>/:id
            </code>
          </li>
          <li>
            Browser/curl receives: <code>301 Moved Permanently, Location </code>
          </li>
          <li>
            Browser/curl requests:
            <code>
              <strong>https://www</strong>.geovistory.org/<strong>page</strong>
              /:id
            </code>
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
              /:id
            </code>
          </li>
          <li>
            Browser/curl receive: <code>301 Moved Permanently</code>
          </li>
          <li>
            Browser/curl requests:
            <code>
              <strong>https://www</strong>.geovistory.org/
              <strong>resource</strong>/:id
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
