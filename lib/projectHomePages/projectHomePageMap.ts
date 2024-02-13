
import { NextPage } from 'next';
import { ProjectPageProps } from '../../pages/project/[geov_id]';
import AMPI_component from "./ampi/ampi";
import MaritimeHistory_component from './maritime-history/maritime-history';
import Processetti_component from "./processetti/processetti";
import EuroClimHist_component from "./euroclimhist/euroclimhist";
import RomasDeportation_component from "./romas-deportation/romas-deportation";
import Softpowarts_component from './softpowarts/softpowarts';
import AcademicCareers_component from './academic-careers/academic-careers';
import RomanSenate_component from './roman-senate/roman-senate';
import SwitzerlandAndBeyond_component from './switzerland-and-beyond/switzerland-and-beyond';
import StudentInternationalism_component from './student-internationalism/student-internationalism';
import UrbanBiographies_component from './urban-biographies/urban-biographies';
import EnfantsDuPlacard_component from './enfants-du-placard/enfants-du-placard';


interface Map {
    [key: number]: NextPage<ProjectPageProps>
}
export const projectHomePageMap: Map = {
    // AMPI
    924033: AMPI_component,

    // Maritime History
    84760: MaritimeHistory_component,

    // Processetti
    591: Processetti_component,

    // EuroClimHist
    6529336: EuroClimHist_component,

    // Roma's deportation
    3354801: RomasDeportation_component,

    // Softpowarts
    3350169: Softpowarts_component,

    // Academic Careers
    1483135: AcademicCareers_component,

    // Roman Senate
    941447: RomanSenate_component,

    // Switzerland and beyond
    153: SwitzerlandAndBeyond_component,
    
    11172552: StudentInternationalism_component,

    6619613: UrbanBiographies_component,
    
    1458522: EnfantsDuPlacard_component
};
