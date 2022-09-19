import type { NextApiRequest, NextApiResponse } from 'next';
import { rdfSyntaxes } from '../../../lib/rdfSyntaxes';
import { requestedRDFSyntax } from '../../../lib/requestedRDFSyntax';
import { getRdf } from '../../../lib/getRdf';

const resource = async (req: NextApiRequest, res: NextApiResponse) => {
  // extract entityId
  const { entityId } = req.query;

  // validate entityId
  if (!entityId || typeof entityId !== 'string') return res.status(400);

  // get rdf syntax, defaults to rdf+xml
  const rdfSyntax = requestedRDFSyntax(req.headers.accept) ?? rdfSyntaxes[0];

  const rdf = await getRdf(
    'https://sparql.geovistory.org/api_v1_community_data',
    entityId,
    rdfSyntax.httpContentType
  );

  res
    .status(200)
    .setHeader('Content-Type', rdfSyntax.httpContentType)
    .send(rdf);
};

export default resource;
