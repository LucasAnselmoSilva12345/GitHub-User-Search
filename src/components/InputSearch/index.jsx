import React, { useState } from 'react';
import axios from 'axios';

import {
  Container,
  HeaderSearch,
  Input,
  Button,
  WithoutResults,
} from './style.js';
import { CardDetailsGitHubUser } from '../CardDetailsGitHubUser/index';

export function InputSearch() {
  const [githubUsername, setGitHubUsername] = useState('');
  const [githubName, setGitHubName] = useState('');
  const [githubBio, setGitHubBio] = useState('');
  const [githubAvatarURL, setGitHubAvatarURL] = useState('');
  const [githubLocation, setGitHubLocation] = useState('');
  const [githubURL, setGitHubURL] = useState('');

  function handleSearchGitHubUser(event) {
    event.preventDefault();
    axios
      .get(`https://api.github.com/users/${githubUsername}`)
      .then((response) => {
        setGitHubName(response.data.name);
        setGitHubBio(response.data.bio);
        setGitHubAvatarURL(response.data.avatar_url);
        setGitHubLocation(response.data.location);
        setGitHubURL(response.data.html_url);
      });
  }

  return (
    <Container>
      <HeaderSearch>
        <Input
          type="text"
          onChange={(event) => {
            setGitHubUsername(event.target.value);
          }}
          placeholder="Digite o username do GitHub"
        />
        <Button onClick={handleSearchGitHubUser}>Search</Button>
      </HeaderSearch>

      <section>
        {githubName ? (
          <CardDetailsGitHubUser
            avatar_url={githubAvatarURL}
            name={githubName}
            bio={githubBio}
            location={githubLocation}
            url={githubURL}
          />
        ) : (
          <WithoutResults>Nenhum usuário pesquisado...</WithoutResults>
        )}
      </section>
    </Container>
  );
}
