import theme from '../src/styles/theme/index';
import { themes } from '@storybook/theming';

export const parameters = {
  chakra: {
    theme,
  },
  darkMode: {
    current: 'dark',
    dark: { ...themes.dark }
  }
}