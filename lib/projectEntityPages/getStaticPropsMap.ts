
import { GetStaticProps } from 'next';
import { ProjectEntityPageProps } from '../../pages/project/[geov_id]/page/[entityId]';
import { ampiGetStaticProps } from './ampi/ampiGetStaticProps';
interface Map {
    [key: number]: GetStaticProps<ProjectEntityPageProps>
}

export const getStaticPropsMap: Map = {
    // AMPI
    924033: ampiGetStaticProps
};
