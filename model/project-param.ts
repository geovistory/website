export interface ProjectParams {
    featured: boolean,

    geovID: number,
    geovName: string,

    teiURL: string,
    sparqlURL: string,

    fullName: string,
    shortName: string,
    description: string,

    hasPage:boolean
    hasSPARQL:boolean
    hasTEI:boolean
}