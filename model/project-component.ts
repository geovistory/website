import { NextPage } from 'next';
import { ProjectPageProps } from '../pages/project/[geov_id]';

export interface ProjectConfig {
    [key: number]: {
        component?: NextPage<ProjectPageProps>,
    },
}