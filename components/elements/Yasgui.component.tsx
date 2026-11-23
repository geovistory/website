import { useEffect, useRef } from 'react';
import '@matdata/yasgui/build/yasgui.min.css';

export interface YasguiProps {
  endpoint: string;
  yasqueDefaultQuery?: string;
  persistenceId?: string;
}

const defaultQuery = `PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX xml: <http://www.w3.org/XML/1998/namespace>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX geo: <http://www.opengis.net/ont/geosparql#>
PREFIX time: <http://www.w3.org/2006/time#>
PREFIX ontome: <https://ontome.net/ontology/>
PREFIX geov: <http://geovistory.org/resource/>

SELECT ?subject ?predicate ?object
WHERE {
  ?subject ?predicate ?object .
}
LIMIT 10`;

export const Yasgui = ({
                         endpoint,
                         yasqueDefaultQuery,
                         persistenceId,
                       }: YasguiProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    Promise.all([
      import('@matdata/yasgui'),
      import('@matdata/yasgui-graph-plugin'),
    ]).then(([{ default: YasguiClass }, { default: GraphPlugin }]) => {
      if (containerRef.current && !containerRef.current.hasChildNodes()) {
        YasguiClass.Yasr.registerPlugin('Graph', GraphPlugin);

        const yasgui = new YasguiClass(containerRef.current, {
          requestConfig: {
            endpoint,
          },
          copyEndpointOnNewTab: true,
          persistenceId: persistenceId ?? 'geovistory_generic_yasgui',
        });

        const currentTab = yasgui.getTab();
        if (currentTab) {
          currentTab.setEndpoint(endpoint);
          currentTab.setQuery(yasqueDefaultQuery ?? defaultQuery);
        }
      }
    });
  }, [endpoint, yasqueDefaultQuery, persistenceId]);

  return <div ref={containerRef} />;
};