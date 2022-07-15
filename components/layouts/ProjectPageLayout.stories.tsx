import { ComponentStory } from '@storybook/react';
import {
  ProjectPageLayout as ProjectPageLayoutComponent,
  ProjectPageLayoutProps,
} from './ProjectPageLayout.component';
export default {
  title: 'Components/Layout/ProjectPageLayout',
  component: ProjectPageLayoutComponent,
  decorators: [(Story: any) => <Story />],
};

const Template: ComponentStory<typeof ProjectPageLayoutComponent> = (args) => {
  return (
    <ProjectPageLayoutComponent {...args}>
        <h1>Some content</h1>
        <p className="lead">
          Some lead text Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Magni consectetur qui aut debitis praesentium quia consequuntur deserunt
          explicabo eligendi veniam rerum nemo inventore distinctio repellat
          exercitationem, omnis optio illum cum.
        </p>
        <div style={{ background: 'lightblue', height: 100, paddingTop: 20 }}>
          <p>Box expanding to grid</p>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel explicabo
          voluptates nihil beatae eligendi obcaecati quaerat dolores quo ab labore
          optio, accusantium neque maxime tempora deserunt natus! Quaerat, ea
          culpa!
        </p>
    </ProjectPageLayoutComponent>
  );
};

export const ProjectPageLayoutFixedGrid = Template.bind({});
const args: ProjectPageLayoutProps = {
  navbar: {
    projectId: 123,
    title: 'Title of my project',
  },
};
ProjectPageLayoutFixedGrid.args = args;

