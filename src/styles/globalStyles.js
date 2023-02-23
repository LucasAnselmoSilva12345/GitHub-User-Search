import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap');
  html{
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
  borderColorInput: '#ccc',
  colorPlaceholder: '#a3a3a3',
  bgButtonSearch: '#334155',

  colorWithoutUserSearch: '#78716C',
};

export const darkTheme = {
  body: '#171717',
  text: '#fff',

  bgHeader: '#171717',
  colorHeader: '#FACC15',
  borderBottomColor: '#FEF9C3',

  bgInput: '#292524',
  borderColorInput: '#44403C',
  colorPlaceholder: '#E7E5E4',
  bgButtonSearch: '#404040',

  colorWithoutUserSearch: '#F5F5F4',
};
