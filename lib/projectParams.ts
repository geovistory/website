import { ProjectNavbarProps } from '../components/layouts/ProjectNavbar.component';

export interface ProjectParams {
    featured: boolean,

    // preferred classe in entity explorer
    preferredClasses: string[]

    geovID: number,
    geovName: string,

    teiURL: string,
    sparqlURL: string,

    fullName: string,
    shortName: string,
    description: string,

    hasPage: boolean

    sparqlLinkEnabled: boolean
    teiLinkEnabled: boolean
    searchLinkEnabled: boolean;
    ontoExplorerLinkEnabled: boolean;
    sparklisLinkEnabled: boolean;
}


export const projectsParams: Array<ProjectParams> = [
    // Default project
    {
        geovID: 0,
        geovName: 'Community',

        preferredClasses: [],

        featured: false,

        teiURL: '',
        sparqlURL: '',

        fullName: 'Community Project',
        shortName: 'Community Project',
        description: 'Community Project',

        hasPage: false,
        sparqlLinkEnabled: false,
        searchLinkEnabled: false,
        ontoExplorerLinkEnabled: false,
        sparklisLinkEnabled: false,
        teiLinkEnabled: false
    },

    // AMPI
    {
        geovID: 924033,
        geovName: 'AMPI',

        preferredClasses: ['c21', 'c219', 'c635', 'c785', 'c633'],

        featured: true,

        teiURL: '',
        sparqlURL: '',

        fullName: 'Tagebücher Anna Maria Preiswerk-Iselin',
        shortName: 'Tagebücher Anna Maria Preiswerk-Iselin',
        description: 'Digitale Edition der Tagebücher der Anna Maria Preiswerk-Iselin (1758-1840).',

        hasPage: true,
        sparqlLinkEnabled: true,
        searchLinkEnabled: true,
        ontoExplorerLinkEnabled: true,
        sparklisLinkEnabled: true,
        teiLinkEnabled: true
    },

    // Processetti
    {
        geovID: 591,
        geovName: 'Processetti',

        preferredClasses: ['c21', 'c363', 'c636'],

        featured: true,

        teiURL: '',
        sparqlURL: '',

        fullName: 'ANR Processetti',
        shortName: 'ANR Processetti',
        description: 'Les Processetti : Migration et mariage à Venise au 16ème/17ème siècle.',

        hasPage: true,
        sparqlLinkEnabled: false,
        teiLinkEnabled: false,
        searchLinkEnabled: false,
        ontoExplorerLinkEnabled: false,
        sparklisLinkEnabled: false,

    },

    // Maritime History
    {
        geovID: 84760,
        geovName: 'Maritime History',

        preferredClasses: ['c523', 'c21', 'c363', 'c522', 'c529'],

        featured: true,

        teiURL: '',
        sparqlURL: '',

        fullName: 'Maritime History',
        shortName: 'Maritime History',
        description: 'Historical information about the Dutch East India Company, ready to explore and re-use at your hand.',

        hasPage: true,
        sparqlLinkEnabled: true,
        searchLinkEnabled: true,
        ontoExplorerLinkEnabled: true,
        sparklisLinkEnabled: true,
        teiLinkEnabled: false,
    },


    // ANR Globalvat
    {
        geovID: -1,
        geovName: 'GLOBALVAT',

        preferredClasses: [],

        featured: false,

        teiURL: '',
        sparqlURL: '',

        fullName: 'ANR Globalvat',
        shortName: 'ANR Globalvat',
        description: 'Reconstruire les sociétés et la personne humaine (1939-58) : L’apport des archives vaticanes.',

        hasPage: false,
        sparqlLinkEnabled: false,
        searchLinkEnabled: false,
        ontoExplorerLinkEnabled: false,
        sparklisLinkEnabled: false,
        teiLinkEnabled: false
    },

    // EuroClimHist
    {
        geovID: 6529336,
        geovName: 'EuroClimHist',

        preferredClasses: [],

        featured: false,

        teiURL: '',
        sparqlURL: '',

        fullName: 'Euro-Climhist Database',
        shortName: 'Euro-Climhist Database',
        description: 'The historical climate database Euro-Climhist contains a unique set of data on observations and measurement series of weather phenomena.',

        hasPage: true,
        sparqlLinkEnabled: true,
        searchLinkEnabled: true,
        ontoExplorerLinkEnabled: true,
        sparklisLinkEnabled: true,
        teiLinkEnabled: false
    },

    // EHESS
    {
        geovID: 3354801,
        geovName: 'Roma\'s deportation to Transnistria, 1942-1944',

        preferredClasses: ['c363', 'c21', 'c68', 'c636',],

        featured: true,

        teiURL: '',
        sparqlURL: '',

        fullName: 'Roma\'s deportation to Transnistria, 1942-1944',
        shortName: 'Roma\'s deportation',
        description: 'Individual trajectories, and collective fates. ',

        hasPage: true,
        sparqlLinkEnabled: true,
        searchLinkEnabled: true,
        ontoExplorerLinkEnabled: true,
        sparklisLinkEnabled: true,
        teiLinkEnabled: false,
    },
    // Softpowarts
    {
        geovID: 3350169,
        geovName: 'Softpowarts',

        preferredClasses: ['c363', 'c21', 'c870', 'c247', 'c698', 'c68'],

        featured: false,

        teiURL: '',
        sparqlURL: '',

        fullName: 'Softpowarts',
        shortName: 'Softpowarts',
        description: "Le soft power sud-américain : l'usage politique de la circulation des arts de la scène au XXe siècle",

        hasPage: true,
        sparqlLinkEnabled: true,
        searchLinkEnabled: true,
        ontoExplorerLinkEnabled: true,
        sparklisLinkEnabled: true,
        teiLinkEnabled: false
    },
    // Academic Careers
    {
        geovID: 1483135,
        geovName: 'Academic Education & Careers',

        preferredClasses: ['c21', 'c859', 'c861', 'c860', 'c850', 'c68'],

        featured: true,

        teiURL: '',
        sparqlURL: '',

        fullName: 'Academic Education & Careers',
        shortName: 'Academic Education & Careers',
        description: "An open collaborative project of the Geovistory community dedicated to the history of science and universities.",

        hasPage: true,
        sparqlLinkEnabled: true,
        searchLinkEnabled: true,
        ontoExplorerLinkEnabled: true,
        sparklisLinkEnabled: true,
        teiLinkEnabled: false
    }


]



export const projectParamsToNavbarProps = (params: ProjectParams): ProjectNavbarProps => ({
    projectId: params.geovID,
    title: params.shortName,
    teiLinkEnabled: params.teiLinkEnabled,
    sparqlLinkEnabled: params.sparqlLinkEnabled,
    ontoExplorerLinkEnabled: params.ontoExplorerLinkEnabled,
    searchLinkEnabled: params.searchLinkEnabled,
    sparklisLinkEnabled: params.sparklisLinkEnabled,
})

