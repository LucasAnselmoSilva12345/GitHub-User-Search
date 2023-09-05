import { ChangeEvent, FormEvent, useState } from 'react';
import axios from 'axios';

import {
  Container,
  HeaderSearch,
  Input,
  Button,
  WithoutResults,
} from './style';
import { CardDetailsGitHubUser } from '../CardDetailsGitHubUser/index';

interface GitHubUserData {
  name: string;
  bio: string;
  avatar_url: string;
  location: string;
  html_url: string;
}

export function InputSearch() {
  const [githubUsername, setGitHubUsername] = useState<string>('');
  const [githubData, setGitHubData] = useState<GitHubUserData | null>(null);

  async function handleSearchGitHubUser(event: FormEvent) {
    event.preventDefault();
    try {
      const { data } = await axios.get<GitHubUserData>(
        `https://api.github.com/users/${githubUsername}`
      );
      setGitHubData(data);
    } catch (error) {
      console.error('Erro ao buscar usuário do GitHub:', error);
    }
  }

  return (
    <Container>
      <HeaderSearch>
        <Input
          type="text"
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setGitHubUsername(event.target.value);
          }}
          placeholder="Digite o username do GitHub"
        />
        <Button onClick={handleSearchGitHubUser}>Search</Button>
      </HeaderSearch>

      <section>
        {githubData ? (
          <CardDetailsGitHubUser
            avatar_url={githubData.avatar_url}
            name={githubData.name}
            bio={githubData.bio}
            location={githubData.location}
            url={githubData.html_url}
          />
        ) : (
          <WithoutResults>Nenhum usuário pesquisado...</WithoutResults>
        )}
      </section>
    </Container>
  );
}
