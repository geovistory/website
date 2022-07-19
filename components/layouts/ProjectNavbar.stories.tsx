import { ComponentStory } from '@storybook/react';
import { ProjectNavbar as ProjectNavbarComponent, ProjectNavbarProps } from './ProjectNavbar.component';
export default {
  title: 'Components/Layout/ProjectNavbar',
  component: ProjectNavbarComponent,
  decorators: [(Story: any) => <Story />],
};

const Template: ComponentStory<typeof ProjectNavbarComponent> = (args) => {
  return <ProjectNavbarComponent {...args}></ProjectNavbarComponent>;
};

export const ProjectNavbar = Template.bind({});
const args: ProjectNavbarProps = {
  title: 'My project title',
  projectId: 123,
  sparqlLinkEnabled: true,
  teiLinkEnabled: true,
};
ProjectNavbar.args = args;
