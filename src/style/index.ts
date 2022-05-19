import { createGlobalStyle } from "styled-components"

const theme = {
  palette: {
    primary: {
      main: '#64bca4',
      contrastText: '#161020',
    },
    secondary: {
      main: '#8eacff',
      contrastText: '#161020',
    },
    tertiary: {
      main: '#2d1c3f',
      contrastText: '#8eacff',
    },
    background: {
      main: '#161020',
      contrastText: '#fff',
    },
  },
  spacing: {
    unit: 8,
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    htmlFontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    h1: {
      fontSize: '6rem',
      fontWeight: 300,
      lineHeight: 1.167,
      letterSpacing: '-0.01562em',
    },
    h2: {
      fontSize: '3.75rem',
      fontWeight: 300,
      lineHeight: 1.2,
      letterSpacing: '-0.00833em',
    },
    h3: {
      fontSize: '3rem',
      fontWeight: 400,
      lineHeight: 1.167,
      letterSpacing: '0em',
    },
    h4: {
      fontSize: '2.125rem',
      fontWeight: 400,
      lineHeight: 1.235,
      letterSpacing: '0.00735em',
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 400,
      lineHeight: 1.334,
      letterSpacing: '0em',
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 500,
      lineHeight: 1.6,
      letterSpacing: '0.0075em',
    },
    p: {
      fontSize: '1.25rem',
      fontWeight: 400,
      lineHeight: 1.6,
      letterSpacing: '0.0075em',
    },
    span: {
      fontSize: '1.25rem',
      fontWeight: 400,
      lineHeight: 1.6,
      letterSpacing: '0.0075em',
    }
  },

}

interface GlobalStyleProps {
  theme: typeof theme
}

export const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: ${({theme}) => theme.palette.background.main};
    color: ${({theme}) => theme.palette.background.contrastText};
    font-family: ${({theme}) => theme.typography.fontFamily};
    margin: 0;
  }

  * {
    box-sizing: border-box;
  }
`

export default theme