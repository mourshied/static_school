import { theme as defaultTheme, extendTheme } from '@chakra-ui/react';

const breakpoints = {
  sm: '425px',
  md: '768px',
  lg: '960px',
  xl: '1280px',
  '2xl': '1440px',
};

const theme = extendTheme({
  fonts: {
    heading: `'Inter', ${defaultTheme.fonts.heading}`,
    body: `'Inter', ${defaultTheme.fonts.body}`,
  },
  breakpoints,
});

export default theme;