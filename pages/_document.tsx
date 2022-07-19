import { Html, Head, Main, NextScript } from 'next/document';

const CustomHtml = (props:any) => Html(props);

export default function Document() {
  return (
    <CustomHtml className="ios" mode="ios">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </CustomHtml>
  );
}
