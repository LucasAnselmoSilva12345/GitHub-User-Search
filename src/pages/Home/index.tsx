import { Header } from '../../components/Header';
import { InputSearch } from '../../components/InputSearch';
import { SectionContainer } from './style';
import { useDarkMode } from '../../styles/DarkMode/useDarkMode';
import { GlobalStyles, lightTheme, darkTheme } from '../../styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import '../../styles/global.css';

export function Home() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <Header theme={theme} toggleTheme={toggleTheme} />
        <SectionContainer>
          <InputSearch />
        </SectionContainer>
      </ThemeProvider>
    </>
  );
}
