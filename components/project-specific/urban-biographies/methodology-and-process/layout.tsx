import { FunctionComponent } from 'react';
import { HeadProps } from '../../../layouts/DefaultHead';
import { Layout as ParentLayout} from '../layout'


interface LayoutProps {
  head: HeadProps;
  hideBanner?: boolean;
  links: {
    href: string;
    label: string;
    icon?: string;
  }[];
}
export const Layout: FunctionComponent<LayoutProps> = (props) => {
  return (
    <ParentLayout head={props.head} hideBanner={props.hideBanner}>
      {props.children}
    </ParentLayout>
  );
};

export default Layout