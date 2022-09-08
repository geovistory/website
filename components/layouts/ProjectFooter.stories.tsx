import { ComponentStory } from '@storybook/react';
import {
  ProjectFooter as ProjectFooterComponent,
  ProjectFooterProps,
} from './ProjectFooter.component';

export default {
  title: 'Components/Layout/ProjectFooter',
  component: ProjectFooterComponent,
  decorators: [(Story: any) => <Story />],
};

const Template: ComponentStory<typeof ProjectFooterComponent> = (args) => {
  return <ProjectFooterComponent {...args} />;
};
export const ProjectFooterOne = Template.bind({});

const footerPropsOne: ProjectFooterProps = {
  showEeditiones: false,
};

ProjectFooterOne.args = footerPropsOne;

export const ProjectFooterTwo = Template.bind({});

const footerProps: ProjectFooterProps = {
  showEeditiones: true,
};

ProjectFooterTwo.args = footerProps;


