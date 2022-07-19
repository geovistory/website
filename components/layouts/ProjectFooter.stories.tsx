import { ComponentStory } from '@storybook/react';
import { ProjectFooter as ProjectFooterComponent, ProjectFooterProps } from './ProjectFooter.component';

export default {
  title: 'Components/Layout/ProjectFooter',
  component: ProjectFooterComponent,
  decorators: [(Story: any) => <Story />],
};

const Template: ComponentStory<typeof ProjectFooterComponent> = (args) => {
  return <ProjectFooterComponent {...args} />;
};

export const ProjectFooter = Template.bind({});

const footerProps: ProjectFooterProps = {
};

ProjectFooter.args = footerProps;
