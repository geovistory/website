
export async function getRdf(
  sparqlURL: string,
  entityId: string,
  accept: string
) {
  const query = `CONSTRUCT {
  <http://geovistory.org/resource/${entityId}> ?p ?o .
} WHERE { 
  <http://geovistory.org/resource/${entityId}> ?p ?o .
}
LIMIT 1000`;

  const resp = await fetch(
    sparqlURL +
    '?query=' +
    encodeURIComponent(query.replace(/\s+/g, ' ').trim()) +
    '&outputFormat=response',
    {
      method: 'POST',
      headers: { Accept: accept },
    }
  ).then((r) => {
    return r.text();
  });

  return resp;
}
