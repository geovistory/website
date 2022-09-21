import { Html, Head, Main, NextScript } from 'next/document';

const CustomHtml = (props: any) => Html(props);

export default function Document() {
  return (
    <CustomHtml className="ios" mode="ios">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </CustomHtml>
  );
}
