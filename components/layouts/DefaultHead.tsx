import Head from 'next/head';
import { FunctionComponent } from 'react';

export interface HeadProps {
  // the title to be put in <head><title></title></head>
  headTitle: string | null;
  // the decription for <meta property="og:description">
  headOgDescription: string | null;
  // the source for <meta property="og:image">
  headOgImage: string | null;
}
export const DefaultHead: FunctionComponent<HeadProps> = (props) => {
  const title = props.headTitle +
    (props.headTitle?.includes('Geovistory') ? '' : ' – Geovistory');
  const description = props.headOgDescription ??
    props.headTitle ??
    'Virtual Research Environment for Humanities and Social Sciences';
  return (
    <Head>
      {props.headTitle && <title>{title}</title>}
      <meta name="description" content={description} />
      {/* SOCIAL MEDIA */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={props.headTitle ?? 'Geovistory'} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content={props.headOgImage ?? '/socialimage/geovistory.png'} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
    </Head>
  );
};
