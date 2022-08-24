import { ProjectParams } from "../model/project-param"


export const projectsParams: Array<ProjectParams> = [
    // Default project
    {
        geovID: 0,
        geovName: 'Community',

        featured: false,

        teiURL: '',
        sparqlURL: '',

        fullName: 'Community Project',
        shortName: 'Community Project',
        description: 'Community Project',

        hasPage: false,
        hasSPARQL: false,
        hasTEI: false
    },

    // AMPI
    {
        geovID: 924033,
        geovName: 'AMPI',

        featured: true,

        teiURL: '',
        sparqlURL: '',

        fullName: 'Tagebücher Anna Maria Preiswerk-Iselin',
        shortName: 'Tagebücher Anna Maria Preiswerk-Iselin',
        description: 'Digitale Edition der Tagebücher der Anna Maria Preiswerk-Iselin (1758-1840).',

        hasPage: true,
        hasSPARQL: true,
        hasTEI: true
    },

    // Processetti
    {
        geovID: 591,
        geovName: 'Processetti',

        featured: true,

        teiURL: '',
        sparqlURL: '',

        fullName: 'ANR Processetti',
        shortName: 'ANR Processetti',
        description: 'Les Processetti : Migration et mariage à Venise au 16ème/17ème siècle.',

        hasPage: true,
        hasSPARQL: false,
        hasTEI: false
    },
    // Maritime History
    {
        geovID: 84760,
        geovName: 'Maritime History',

        featured: true,

        teiURL: '',
        sparqlURL: '',

        fullName: 'Maritime History',
        shortName: 'Maritime History',
        description: 'Historical information of about the Dutch East India Company, ready to explore and re-use at your hand. A pilot project.',

        hasPage: true,
        hasSPARQL: true,
        hasTEI: false
    },


    // ANR Globalvat
    {
        geovID: -1,
        geovName: 'GLOBALVAT',

        featured: true,

        teiURL: '',
        sparqlURL: '',

        fullName: 'ANR Globalvat',
        shortName: 'ANR Globalvat',
        description: 'Reconstruire les sociétés et la personne humaine (1939-58) : L’apport des archives vaticanes.',

        hasPage: false,
        hasSPARQL: false,
        hasTEI: false
    }
]





