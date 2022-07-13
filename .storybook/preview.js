import '../styles/globals.css';
document.documentElement.setAttribute('mode', 'ios');

/**
 * Workaround to make storybook work with next/image.
 * see: https://dev.to/burdiuz/comment/1p5fa
 */
import Image from 'next/image';

Image.propTypes = {
  unoptimized: null,
};

Image.defaultProps = {
  unoptimized: true,
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
