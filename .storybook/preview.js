import '../styles/globals.css';
  console.log('heere')
  document.documentElement.setAttribute('mode', 'ios')

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
