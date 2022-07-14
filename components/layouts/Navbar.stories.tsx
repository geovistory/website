import { ComponentStory } from '@storybook/react';
import { Navbar as NavbarComponent, NavbarProps } from './Navbar.component';
export default {
  title: 'Components/Layout/Navbar',
  component: NavbarComponent,
  decorators: [(Story: any) => <Story />],
};

const Template: ComponentStory<typeof NavbarComponent> = (args) => {
  return <NavbarComponent {...args}></NavbarComponent>;
};

export const Navbar = Template.bind({});
const args: NavbarProps = {};
Navbar.args = args;
