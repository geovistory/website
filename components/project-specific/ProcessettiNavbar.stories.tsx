import { ComponentStory } from '@storybook/react';
import {
  ProcessettiNavbar as ProcessettiNavbarComponent,
  ProcessettiNavbarProps,
} from './ProcessettiNavbar.component';
export default {
  title: 'Components/Layout/ProcessettiNavbar',
  component: ProcessettiNavbarComponent,
  decorators: [(Story: any) => <Story />],
};

const Template: ComponentStory<typeof ProcessettiNavbarComponent> = (args) => {
  return <ProcessettiNavbarComponent {...args}></ProcessettiNavbarComponent>;
};

export const ProcessettiNavbar = Template.bind({});
const args: ProcessettiNavbarProps = {
  title: 'Progetto ANR Processetti',
  projectId: 591
};
ProcessettiNavbar.args = args;
