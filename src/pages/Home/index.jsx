import { Header } from '../../components/Header';
import { InputSearch } from '../../components/InputSearch';
import '../../styles/global.css';
import { SectionContainer } from './style.js';
import { CardDetailsGitHubUser } from '../../components/CardDetailsGitHubUser';

export function Home() {
  return (
    <>
      <Header />
      <SectionContainer>
        <InputSearch />
        <CardDetailsGitHubUser />
      </SectionContainer>
    </>
  );
}
