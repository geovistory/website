import '../styles/globals.css';
import { defineCustomElements } from '@geovistory/design-system-web/loader';
document.documentElement.setAttribute('mode', 'ios');
defineCustomElements();
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
