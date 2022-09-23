// syntax list from https://jena.apache.org/documentation/io/rdf-input.html
// These do not work: fuseki returns text/turtle 
// { httpContentType: 'text/trig', fileExtension: '.trig' },
// { httpContentType: 'application/rdf+protobuf', fileExtension: '.rpb' },
export const rdfSyntaxes = [
    { httpContentType: 'application/rdf+xml', fileExtension: '.rdf' },
    { httpContentType: 'application/ld+json', fileExtension: '.jsonld' },
    { httpContentType: 'application/n-triples', fileExtension: '.nt' },
    { httpContentType: 'application/n-quads', fileExtension: '.nq' },
    { httpContentType: 'application/trix+xml', fileExtension: '.trix' },
    { httpContentType: 'application/rdf+thrift', fileExtension: '.rt' },
    { httpContentType: 'text/turtle', fileExtension: '.ttl' },
];
