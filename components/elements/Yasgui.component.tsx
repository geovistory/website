import '@triply/yasgui/build/yasgui.min.css';
import React from 'react';

export interface YasguiProps {
  endpoint: string;
  yasqueDefaultQuery?: string;
}

let defaultQuery = `PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX xml: <http://www.w3.org/XML/1998/namespace>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX geo: <http://www.opengis.net/ont/geosparql#>
PREFIX time: <http://www.w3.org/2006/time#>
PREFIX onto-c: <https://ontome.net/class/>
PREFIX onto-p: <https://ontome.net/property/>
PREFIX geov: <http://geovistory.org/resource/>

SELECT ?subject ?predicate ?object
WHERE {
  ?subject ?predicate ?object .
}
LIMIT 10`;

export const Yasgui = ({ endpoint, yasqueDefaultQuery }: YasguiProps) => {
  React.useEffect(() => {
    const createYasgui = async () => {
      const Y = (await import('@triply/yasgui')).default;
      localStorage.removeItem('yagui__config');
      const el = document.getElementById('yasgui');
      if (!el) return;
      const yasgui = new Y(el, {
        requestConfig: {
          endpoint,
        },
      });
      const t = yasgui.getTab();
      if (!t) return;
      t.setQuery(yasqueDefaultQuery ?? defaultQuery);
      t.getYasqe().collapsePrefixes();
    };
    createYasgui().catch(console.error);
  });

  return <div id="yasgui" />;
};
