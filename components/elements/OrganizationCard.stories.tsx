import { ComponentStory } from '@storybook/react';
import {
  OrganizationCard as OrganizationCardComponent,
  OrganizationCardProps,
} from './OrganizationCard.component';
import Image from 'next/image';
import larhraImg from '../../public/larhra-logo.jpg';

export default {
  title: 'Components/Elements/OrganizationCard',
  component: OrganizationCardComponent,
  decorators: [(Story: any) => <Story />],
};

const Template: ComponentStory<typeof OrganizationCardComponent> = (args) => {
  return <OrganizationCardComponent {...args} />;
};

export const OrganizationCardLarhra = (
  <OrganizationCardComponent
    organizationName={'LARHRA'}
    organizationDescription={
      'A French research lab focusing on digital history methods and techniques.'
    }
    organizationURL={
      'http://larhra.ish-lyon.cnrs.fr/axe-de-recherche-en-histoire-numerique'
    }
  >
    <Image
      src={larhraImg}
      alt={'LARHRA image'}
      layout="responsive"
      width={500}
      height={414}
      placeholder="blur"
    />
  </OrganizationCardComponent>
);

// export const OrganizationCardKleioLab = Template.bind({});
// const args2: OrganizationCardProps = {
//   imageURL: '/kleiolab-logo.png',
//   imageHeight: 972,
//   imageWidth: 1174,
//   organizationName: 'KleioLab',
//   organizationDescription:
//     'A Swiss company specializing in information systems in the digital humanities.',
//   organizationURL: 'https://kleiolab.ch',
// };
// OrganizationCardKleioLab.args = args2;
