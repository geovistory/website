import { GetStaticProps } from 'next';
import {
  projectParamsToNavbarProps,
  projectsParams,
} from '../../projectParams';
import { serverRender } from '../../serverRender';
import { DefaultEntityProps, SSRProps } from '../_default/DefaultEntityPage';

// change this to customize ssr part
export const ampiGetStaticProps: GetStaticProps<DefaultEntityProps> = async (
  context
) => {
  const projectId = parseInt(context?.params?.geov_id as string, 10);
  const params = projectsParams.find((pp) => pp.geovID == projectId);
  if (!params) return { notFound: true };

  const entityId = context?.params?.entityId as string;

  const ssrProps: SSRProps = {
    entityId,
    projectId,
    uriRegex: process.env.NEXT_PUBLIC_GEOV_URI_REGEX ?? '',
    uriReplace: process.env.NEXT_PUBLIC_GEOV_URI_REPLACE ?? '',
  };

  const res = await serverRender(ampiSsr(ssrProps));

  return {
    props: {
      ...ssrProps,
      projectPageLayout: {
        head: {
          headTitle: res.serverFetchedData?.['entity-label']?.label ?? '', // head title is set within Resource
          headOgDescription: `Page about ${res.serverFetchedData?.['entity-label']?.label} – provided by project ${params.shortName}`,
          headOgImage: params.headOgImage,
        },
        navbar: projectParamsToNavbarProps(params),
      },
      _ssrData: res.serverFetchedData,
      _ssrHtmlBody: res.bodyInnerHtml,
      _ssrHtmlHead: res.headInnerHtml,
    },
    revalidate: 10,
  };
};

export function ampiSsr(props: SSRProps) {
  const isAnnotated = `PREFIX ontome: <https://ontome.net/ontology/>
    PREFIX geov: <http://geovistory.org/resource/>
    SELECT  ((count(?subject ) > 0)as ?condition)
    WHERE {
      ?subject ontome:p1875 geov:${props.entityId} .
      ?subject a ontome:c933
    }
    GROUP BY ?subject
    LIMIT 1`
    .split('\n')
    .map((l) => l.trim())
    .filter((l) => !l.startsWith('#'))
    .join(' ')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
  return (
    <geov-entity
      sparql-endpoint={`https://sparql.geovistory.org/api_v1_project_${props.projectId}`}
      entity-id={props.entityId}
      uri-regex={props.uriRegex}
      uri-replace={props.uriReplace + '?p=' + props.projectId}
      project-id={props.projectId}
    >
      <div slot="body-end" className="section">
        <geov-if
          sparql-endpoint={`https://sparql.geovistory.org/api_v1_project_${props.projectId}`}
          sparql-query={isAnnotated}
        >
          <p className="ion-text-center">
            <br />
            <ion-button
              fill="outline"
              mode="ios"
              target={'_blank'}
              href={`http://geovistory.org/project/${props.projectId}/publication/entity-page.html?id=${props.entityId}`}
            >
              In der TEI Publikation öffnen
              <ion-icon slot="end" src="/svg/open.svg"></ion-icon>
            </ion-button>
          </p>
        </geov-if>
      </div>
    </geov-entity>
  );
}
