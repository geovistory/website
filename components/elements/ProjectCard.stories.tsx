import { ComponentStory } from '@storybook/react';
import {
  ProjectCard as ProjectCardComponent,
  ProjectCardProps,
} from './ProjectCard.component';

export default {
  title: 'Components/Elements/ProjectCard',
  component: ProjectCardComponent,
  decorators: [(Story: any) => <Story />],
};

const Template: ComponentStory<typeof ProjectCardComponent> = (args) => {
  return <ProjectCardComponent {...args} />;
};

export const ProjectCardWithButton = Template.bind({});
const args: ProjectCardProps = {
  project: {
    geovID: 591,
    geovName: 'Processetti',

    featured: true,

    teiURL: '',
    sparqlURL: '',

    fullName: 'ANR Processetti',
    shortName: 'ANR Processetti',
    description:
      'Les Processetti : Migration et mariage à Venise au 16ème/17ème siècle.',

    hasPage: true,
    hasSPARQL: false,
    hasTEI: false,
  },
};
ProjectCardWithButton.args = args;

export const ProjectCardWithoutButton = Template.bind({});
const args2: ProjectCardProps = {
  project: {
    geovID: 591,
    geovName: 'Processetti',

    featured: true,

    teiURL: '',
    sparqlURL: '',

    fullName: 'ANR Processetti',
    shortName: 'Project with an overflowing title, because the title is very, very long.',
    description: `Les Processetti : Migration et mariage à Venise au 16ème/17ème siècle.
      Les Processetti : Migration et mariage à Venise au 16ème/17ème siècle.
       16ème/17ème siècle. 16ème/17ème siècle.16ème/17ème siècle.16ème/17ème siècle. 
       Les Processetti : Migration et mariage à Venise au 16ème/17ème siècle.`,

    hasPage: false,
    hasSPARQL: false,
    hasTEI: false,
  },
};
ProjectCardWithoutButton.args = args2;
