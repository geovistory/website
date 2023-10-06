/// <reference path="../node_modules/@geovistory/design-system-web/dist/types/components-react.d.ts" />
import { defineCustomElements } from '@geovistory/design-system-web/loader';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import '../styles/globals.css';
function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    defineCustomElements();
  });
  return <Component {...pageProps} />;
}

export default MyApp;
