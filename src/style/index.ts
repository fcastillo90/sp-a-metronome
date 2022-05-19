import { createGlobalStyle } from "styled-components"

/**
 * Global style for the application
 */
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
    white: {
      main: '#fff',
      contrastText: '#000',
    }
  },
  spacing: {
    unit: 8,
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    htmlFontSize: 14,
    h1: {
      fontSize: '1.286rem',
      fontWeight: 'normal',
      letterSpacing: '0.334em',
      lineHeight: 1.166,
      textTransform: 'uppercase',
    },
    h2: {
      fontSize: '1.2rem',
      fontWeight: 300,
      letterSpacing: '-0.00833em',
      lineHeight: 1.2,
      textTransform: 'capitalize',
    },
    h3: {
      fontSize: '1.15rem',
      fontWeight: 400,
      letterSpacing: '0em',
      lineHeight: 1.167,
      textTransform: 'capitalize',
    },
    h4: {
      fontSize: '1.1rem',
      fontWeight: 400,
      letterSpacing: '0.00735em',
      lineHeight: 1.235,
      textTransform: 'capitalize',
    },
    h5: {
      fontSize: '1.05rem',
      fontWeight: 400,
      letterSpacing: '0em',
      lineHeight: 1.334,
      textTransform: 'capitalize',
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
      letterSpacing: '0.0075em',
      lineHeight: 1.6,
      textTransform: 'capitalize',
    },
    p: {
      fontSize: '1rem',
      fontWeight: 400,
      letterSpacing: '0.0075em',
      lineHeight: 1,
      textTransform: 'none',
    },
    span: {
      fontSize: '0.9rem',
      fontWeight: 400,
      letterSpacing: '0.0075em',
      lineHeight: 1,
      textTransform: 'none',
    }
  },

}

interface GlobalStyleProps {
  theme: typeof theme
}

/**
 * Global style for the application
 */
export const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  html {
    font-size: ${({ theme }) => theme.typography.htmlFontSize}px;
    color: ${({theme}) => theme.palette.background.contrastText};
    font-family: ${({theme}) => theme.typography.fontFamily};
  }

  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: ${({theme}) => theme.palette.background.main};
    margin: 0;
  }

  * {
    box-sizing: border-box;
  }
`

export default theme