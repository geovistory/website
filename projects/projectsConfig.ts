
import { ProjectConfig } from '../model/project-component'
import AMPI_component from "./ampi/ampi"
import Processetti_component from "./processetti/processetti"


export const projectsConfig: ProjectConfig = {
    0: {
        component: undefined,
    },

    // AMPI
    924033: {
        component: AMPI_component,
       
    },

    // Processetti
    591: {
        component: Processetti_component,
    }
};
