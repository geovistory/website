/* eslint-disable @next/next/no-server-import-in-page */
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { requestedRDFSyntax } from './lib/requestedRDFSyntax';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {

    const projectId = request.nextUrl.searchParams.get('p')

    // Q: is RDF requested?
    if (requestedRDFSyntax(request.headers.get('accept'))) {

        // A: Yes. Rewrite this request to  /api/resource/:id 

        request.nextUrl.pathname = '/api' + request.nextUrl.pathname;
        return NextResponse.rewrite(request.nextUrl, { headers: request.headers })

    } else {
        // A: No.

        // Q: is project page requested?
        if (projectId) {
            
            // A: Yes. Redirect to /:project/page/:id
            const pathRest = request.nextUrl.pathname.replace('/resource/', '/page/');
            request.nextUrl.pathname = '/project/' + projectId + pathRest
            return NextResponse.redirect(request.nextUrl)
        }
        else {

            // A: No. Redirect to /page/:id

            request.nextUrl.pathname = request.nextUrl.pathname.replace('/resource/', '/page/');
            return NextResponse.redirect(request.nextUrl)
        }

    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/resource/:path*',
}


