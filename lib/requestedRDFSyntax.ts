import { rdfSyntaxes } from './rdfSyntaxes';

export interface RDFSyntax {
    httpContentType: string,
    fileExtension: string
}
export function requestedRDFSyntax(headerAccept?: string | null): RDFSyntax | undefined {
    if (!headerAccept) return;

    for (const syntax of rdfSyntaxes) {
        if (headerAccept?.includes(syntax.httpContentType))
            return syntax;
    }
}
