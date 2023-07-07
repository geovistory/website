import { ComponentStory } from '@storybook/react';
import {
  DefaultPage as DefaultPageComponent,
  DefaultPageProps,
} from './DefaultPage.component';
export default {
  title: 'Components/Layout/DefaultPage',
  component: DefaultPageComponent,
  decorators: [(Story: any) => <Story />],
};

const Template: ComponentStory<typeof DefaultPageComponent> = (args) => {
  return (
    <DefaultPageComponent {...args}>
      <h1>Some content</h1>
      <p className="lead">
        Some lead text Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Magni consectetur qui aut debitis praesentium quia consequuntur deserunt
        explicabo eligendi veniam rerum nemo inventore distinctio repellat
        exercitationem, omnis optio illum cum.
      </p>
      <div style={{ background: 'lightblue', height: 100, paddingTop:20 }}>
        <p>Box expanding to grid</p>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel explicabo
        voluptates nihil beatae eligendi obcaecati quaerat dolores quo ab labore
        optio, accusantium neque maxime tempora deserunt natus! Quaerat, ea
        culpa!
      </p>
    </DefaultPageComponent>
  );
};

export const DefaultPageFixedGrid = Template.bind({});
const args: DefaultPageProps = {
  headTitle: 'Tagebücher Anne Maria Preiswerk Iselin',
  footer: {
    featuredProjects: [
      {
        shortName: 'Tagebücher Anne Maria Preiswerk Iselin',
        hasPage: true,
        geovID: 123,
      },
      { shortName: 'Project B', hasPage: false, geovID: 123 },
      { shortName: 'Project C', hasPage: true, geovID: 123 },
      { shortName: 'Project D', hasPage: false, geovID: 123 },
    ],
  },
};
DefaultPageFixedGrid.args = args;

export const DefaultPageExpandingGrid = Template.bind({});
const argsExpand: DefaultPageProps = {
  ...args,
  expand: true,
};
DefaultPageExpandingGrid.args = argsExpand;
