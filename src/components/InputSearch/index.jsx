import React, { useState } from 'react';
import axios from 'axios';
import { CardProfileGitHub } from 'lulib-ui';

import { Container, Input, Button } from './style.js';

export function InputSearch() {
  const [githubUsername, setGitHubUsername] = useState('');

  function handleSearchGitHubUser(event) {
    event.preventDefault();

    axios
      .get(`https://api.github.com/users/${githubUsername}`)
      .then((response) => {
        return response.data;
      });
  }

  return (
    <Container>
      <form>
        <Input
          type="text"
          value={githubUsername}
          onChange={(event) => setGitHubUsername(event.target.value)}
          placeholder="Digite o username do GitHub"
        />
        <Button>Search</Button>
      </form>

      {githubUsername.length === 0 ? (
        <p>Nenhum usuário pesquisado</p>
      ) : (
        <CardProfileGitHub username={githubUsername} />
      )}
    </Container>
  );
}
