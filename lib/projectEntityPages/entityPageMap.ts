import { NextPage } from 'next';
import { AmpiEntityPage } from './ampi/AmpiEntityPage';

interface Map {
    [key: number]:  NextPage<any>,
}
export const entityPageMap: Map = {
    // AMPI
    924033:  AmpiEntityPage
};
