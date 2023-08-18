/// <reference path="../node_modules/@geovistory/design-system-web/dist/types/components-react.d.ts" />
import { defineCustomElements } from '@geovistory/design-system-web/loader';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
defineCustomElements();
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
