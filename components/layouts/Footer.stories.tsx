import { ComponentStory } from '@storybook/react';
import { Footer as FooterComponent, FooterProps } from './Footer.component';
export default {
  title: 'Components/Layout/Footer',
  component: FooterComponent,
  decorators: [(Story: any) => <Story />],
};

const Template: ComponentStory<typeof FooterComponent> = (args) => {
  return <FooterComponent {...args} />;
};

export const Footer = Template.bind({});
const footerProps: FooterProps = {
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
};
Footer.args = footerProps;
