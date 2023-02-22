import React from 'react';
import { ButtonBlank } from 'lulib-ui';

import {
  CardDetailsGitHubUserContainer,
  CardDetailsGitHubUserImage,
  CardDetailsGitHubUserDetailsStructure,
  CardDetailsGitHubUserDetails,
  CardDetailsGitHubUserName,
  CardDetailsGitHubUserBio,
  CardDetailsGitHubUserCity,
} from './style.js';

export function CardDetailsGitHubUser({
  avatar_url,
  name,
  bio,
  location,
  url,
}) {
  return (
    <CardDetailsGitHubUserContainer>
      <div>
        <CardDetailsGitHubUserImage src={avatar_url} alt={name} />
      </div>
      <CardDetailsGitHubUserDetailsStructure>
        <CardDetailsGitHubUserDetails>
          <CardDetailsGitHubUserName>{name}</CardDetailsGitHubUserName>
          <CardDetailsGitHubUserBio>{bio}</CardDetailsGitHubUserBio>
          <CardDetailsGitHubUserCity>{location}</CardDetailsGitHubUserCity>
        </CardDetailsGitHubUserDetails>

        <ButtonBlank link={url} nameButton="Follow" />
      </CardDetailsGitHubUserDetailsStructure>
    </CardDetailsGitHubUserContainer>
  );
}
