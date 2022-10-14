import { GetStaticProps } from 'next';
import { projectsParams } from '../../projectParams';
import { serverRender } from '../../serverRender';
import { DefaultEntityProps, ssr, SSRProps } from './DefaultEntityPage';


export const defaultGetStaticProps: GetStaticProps<DefaultEntityProps> = async (
  context
) => {
  const projectId = parseInt(context?.params?.geov_id as string, 10);
  const params = projectsParams.find((pp) => pp.geovID == projectId);
  if (!params)
    return { notFound: true };

  const entityId = context?.params?.entityId as string;

  const ssrProps: SSRProps = { entityId, projectId };

  const res = await serverRender(ssr(ssrProps));

  return {
    props: {
      ...ssrProps,
      projectPageLayout: {
        navbar: {
          projectId,
          title: params.shortName,
          teiLinkEnabled: params.hasTEI,
          sparqlLinkEnabled: params.hasSPARQL,
        },
      },
      _ssrData: res.serverFetchedData,
      _ssrHtmlBody: res.bodyInnerHtml,
      _ssrHtmlHead: res.headInnerHtml,
    },
    revalidate: 10,
  };
};
