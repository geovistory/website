import { DefaultPage as DefaultPageComponent } from './DefaultPage.component';
export default {
  title: 'Components/Page elements',
  component: DefaultPageComponent,
  decorators: [(Story:any) => <Story />],
};

export const DefaultPage = () => <DefaultPageComponent><h1>Some content</h1></DefaultPageComponent>;
