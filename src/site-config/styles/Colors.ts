import theme from 'styled-theming';

const Colors = {
  primary: theme('mode', {
    light: 'red',
    dark: '#000',
  }),
  secondary: theme('mode', {
    light: 'black',
    dark: '#000',
  }),
  tertiary: theme('mode', {
    light: 'gray',
    dark: '#000',
  }),
  quaternary: theme('mode', {
    light: 'yellow',
    dark: '#000',
  }),
  danger: theme('mode', {
    light: 'red',
    dark: '#000',
  }),
  safe: theme('mode', {
    light: 'forestgreen',
    dark: '#000',
  }),
  background: theme('mode', {
    light: '#fff',
    dark: '#000',
  }),
  disabled: theme('mode', {
    light: '#eee',
    dark: '#eee',
  }),
  boxShadow: theme('mode', {
    light: 'rgb(153, 153, 153, .3)',
    dark: '#eee',
  }),
  buttonPrimary: theme('mode', {
    light: 'black',
    dark: '#eee',
  }),
  buttonSecondary: theme('mode', {
    light: 'black',
    dark: '#eee',
  }),
};

export default Colors;
