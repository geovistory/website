import { GetStaticProps } from 'next';
import {
  projectParamsToNavbarProps,
  projectsParams,
} from '../../projectParams';
import { serverRender } from '../../serverRender';
import { DefaultEntityProps, ssr, SSRProps } from './DefaultEntityPage';

export const defaultGetStaticProps: GetStaticProps<DefaultEntityProps> = async (
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

  const res = await serverRender(ssr(ssrProps));

  return {
    props: {
      ...ssrProps,
      projectPageLayout: {
        headTitle: res.serverFetchedData?.['entity-label']?.label ?? '', // head title is set within Resource
        headOgDescription: `Page about ${res.serverFetchedData?.['entity-label']?.label} – provided by project ${params.shortName}`,
        headOgImage: params.headOgImage,
        navbar: projectParamsToNavbarProps(params),
      },
      _ssrData: res.serverFetchedData,
      _ssrHtmlBody: res.bodyInnerHtml,
      _ssrHtmlHead: res.headInnerHtml,
    },
    revalidate: 10,
  };
};
