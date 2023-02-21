import { Header } from '../../components/Header';
import { InputSearch } from '../../components/InputSearch';
import '../../styles/global.css';
import { SectionContainer } from './style.js';

export function Home() {
  return (
    <>
      <Header />
      <SectionContainer>
        <InputSearch />
      </SectionContainer>
    </>
  );
}
