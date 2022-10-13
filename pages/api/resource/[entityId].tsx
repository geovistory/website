import type { NextApiRequest, NextApiResponse } from 'next';
import { rdfSyntaxes } from '../../../lib/rdfSyntaxes';
import { requestedRDFSyntax } from '../../../lib/requestedRDFSyntax';
import { getRdf } from '../../../lib/getRdf';

const resource = async (req: NextApiRequest, res: NextApiResponse) => {
  // extract entityId and projectId
  const { entityId, p } = req.query;

  // validate entityId
  if (!entityId || typeof entityId !== 'string') return res.status(400);

  // get rdf syntax, defaults to rdf+xml
  const rdfSyntax = requestedRDFSyntax(req.headers.accept) ?? rdfSyntaxes[0];

  // set sparql endpoint url
  const sparqlEndpoint = p
    ? `https://sparql.geovistory.org/api_v1_project_${p}`
    : 'https://sparql.geovistory.org/api_v1_community_data';

  const rdf = await getRdf(sparqlEndpoint, entityId, rdfSyntax.httpContentType);

  res
    .status(200)
    .setHeader('Content-Type', rdfSyntax.httpContentType)
    .send(rdf);
};

export default resource;
