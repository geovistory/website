import { DefaultPage as DefaultPageComponent } from './DefaultPage.component';
export default {
  title: 'Components/Layout/DefaultPage',
  component: DefaultPageComponent,
  decorators: [(Story: any) => <Story />],
};

export const DefaultPage = () => (
  <DefaultPageComponent>
    <h1>Some content</h1>
    <p className="lead">
      Some lead text Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Magni consectetur qui aut debitis praesentium quia consequuntur deserunt
      explicabo eligendi veniam rerum nemo inventore distinctio repellat
      exercitationem, omnis optio illum cum.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel explicabo
      voluptates nihil beatae eligendi obcaecati quaerat dolores quo ab labore
      optio, accusantium neque maxime tempora deserunt natus! Quaerat, ea culpa!
    </p>
  </DefaultPageComponent>
);
