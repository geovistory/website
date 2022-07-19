/* eslint-disable import/no-anonymous-default-export */
import { ComponentStory } from '@storybook/react';
import { CCLicense as CCLicenseComponent } from './CCLicense.component';

export default {
  title: 'Components/Elements/CCLicense',
  component: CCLicenseComponent,
  decorators: [(Story: any) => <Story />],
};

const Template: ComponentStory<typeof CCLicenseComponent> = () => {
  return <CCLicenseComponent />;
};

export const CCLicense = Template.bind({});
