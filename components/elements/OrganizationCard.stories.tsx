import { ComponentStory } from '@storybook/react';
import {
  OrganizationCard as OrganizationCardComponent,
  OrganizationCardProps,
} from './OrganizationCard.component';

export default {
  title: 'Components/Elements/OrganizationCard',
  component: OrganizationCardComponent,
  decorators: [(Story: any) => <Story />],
};

const Template: ComponentStory<typeof OrganizationCardComponent> = (args) => {
  return <OrganizationCardComponent {...args} />;
};

export const OrganizationCardLarhra = Template.bind({});
const args: OrganizationCardProps = {
  imageURL: '/larhra-logo.jpg',
  imageHeight: 414,
  imageWidth: 500,
  organizationName: 'LARHRA',
  organizationDescription:
    'A French research lab focusing on digital history methods and techniques.',
  organizationURL:
    'http://larhra.ish-lyon.cnrs.fr/axe-de-recherche-en-histoire-numerique',
};
OrganizationCardLarhra.args = args;

export const OrganizationCardKleioLab = Template.bind({});
const args2: OrganizationCardProps = {
  imageURL: '/kleiolab-logo.png',
  imageHeight: 972,
  imageWidth: 1174,
  organizationName: 'KleioLab',
  organizationDescription:
    'A Swiss company specializing in information systems in the digital humanities.',
  organizationURL: 'https://kleiolab.ch',
};
OrganizationCardKleioLab.args = args2;
