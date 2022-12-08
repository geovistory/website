import { renderToString } from '@geovistory/design-system-web/hydrate';
import type { JSXElementConstructor, ReactElement } from 'react';
import ReactDOMServer from 'react-dom/server';
import { Window } from 'happy-dom';
export async function serverRender(
  element: ReactElement<any, string | JSXElementConstructor<any>>
) {
  const html = ReactDOMServer.renderToString(element);
  let serverFetchedData: any;
  const stencilHydrateOutput = await renderToString(html, {
    removeHtmlComments: true,
    beforeHydrate: (doc) => {
      doc.__STENCIL_DATA__ = {};
    },
    afterHydrate: (doc) => {
      serverFetchedData = doc.__STENCIL_DATA__;
    },
  });
  removeUndefined(serverFetchedData);
  const happyDomWindow = new Window();
  const happyDomDoc = happyDomWindow.document;
  happyDomDoc.write(stencilHydrateOutput.html);
  const bodyInnerHtml = happyDomDoc.querySelector('body').getInnerHTML();
  const headInnerHtml = happyDomDoc.querySelector('head').getInnerHTML();
  return { bodyInnerHtml: bodyInnerHtml, headInnerHtml, serverFetchedData };
}

const removeUndefined = (obj: any) => {
  for (const key in obj) {
    if (typeof obj[key] === 'undefined') {
      delete obj[key];
    } else if (typeof obj[key] === 'object') {
      removeUndefined(obj[key]);
    }
  }
};
