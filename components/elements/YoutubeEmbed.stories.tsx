import { ComponentStory } from '@storybook/react';
import {
  YoutubeEmbed as YoutubeEmbedComponent,
  YoutubeEmbedProps,
} from './YoutubeEmbed.component';

export default {
  title: 'Components/Elements/YoutubeEmbed',
  component: YoutubeEmbedComponent,
  decorators: [(Story:any) => <Story />],
};

const Template: ComponentStory<typeof YoutubeEmbedComponent> = (args) => {
  return <YoutubeEmbedComponent {...args} />;
};

export const YoutubeEmbed = Template.bind({});
const args: YoutubeEmbedProps = { title: 'Title Foo', embedId: 'u6tx1Jd6Oq4' };
YoutubeEmbed.args = args;
