import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 1rem;
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }

  ul,
  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  img {
    max-width: 100%;
    display: block;
  }
`;

export const lightTheme = {
  body: '#fff',
  text: '#363537',
  bgHeader: '#fff',
  colorHeader: '#1d4ed8',
  bgInput: '#fff',
  focusInput: '#334155',
  borderColorInput: '#ccc',
  colorPlaceholder: '#a3a3a3',
  bgButtonSearch: '#334155',
  bgButtonBorder: '#1e293b',
  colorWithoutUserSearch: '#78716C',
};

export const darkTheme = {
  body: '#171717',
  text: '#fff',
  bgHeader: '#171717',
  colorHeader: '#FACC15',
  borderBottomColor: '#FEF9C3',
  bgInput: '#292524',
  focusInput: '#2563EB',
  borderColorInput: '#44403C',
  colorPlaceholder: '#fff',
  bgButtonSearch: '#404040',
  bgButtonBorder: '#44403C',
  colorWithoutUserSearch: '#F5F5F4',
};
