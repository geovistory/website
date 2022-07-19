/* eslint-disable import/no-anonymous-default-export */
import { ComponentStory } from '@storybook/react';

import { Yasgui as YasguiComponent, YasguiProps } from './Yasgui.component';

export default {
  title: 'Components/Elements/Yasgui',
  component: YasguiComponent,
  decorators: [(Story: any) => <Story />],
};

const Template: ComponentStory<typeof YasguiComponent> = (args) => {
  return <YasguiComponent {...args} />;
};

export const Yasgui = Template.bind({});
const args: YasguiProps = {
  endpoint: 'https://sparql.geovistory.org/api_v1_community_data',
};
Yasgui.args = args;
