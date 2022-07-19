import { ComponentStory } from '@storybook/react';
import {
  Person as PersonComponent,
  PersonProps,
} from './Person.component';

export default {
  title: 'Components/Elements/Person',
  component: PersonComponent,
  decorators: [(Story: any) => <Story />],
};

const Template: ComponentStory<typeof PersonComponent> = (args) => {
  return <PersonComponent {...args} />;
};

export const Person = Template.bind({});
const args: PersonProps = {
  name: 'Prof. Dr. Hanna Musterfrau',
  description: 'Departement für Fantasie, Unitopia',
};
Person.args = args;
