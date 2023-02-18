import React from 'react';

import {
  CardDetailsGitHubUserContainer,
  CardDetailsGitHubUserImage,
  CardDetailsGitHubUserDetailsStructure,
  CardDetailsGitHubUserDetails,
  CardDetailsGitHubUserName,
  CardDetailsGitHubUserBio,
  CardDetailsGitHubUserData,
  CardDetailsGitHubUserInfo,
} from './style.js';

export function CardDetailsGitHubUser() {
  return (
    <CardDetailsGitHubUserContainer>
      <div>
        <CardDetailsGitHubUserImage
          src="https://avatars.githubusercontent.com/u/1?v=4"
          alt="avatar"
        />
      </div>
      <CardDetailsGitHubUserDetailsStructure>
        <CardDetailsGitHubUserDetails>
          <CardDetailsGitHubUserName>Lucas Anselmo</CardDetailsGitHubUserName>
          <p>Date</p>
        </CardDetailsGitHubUserDetails>

        <CardDetailsGitHubUserBio>Messagem</CardDetailsGitHubUserBio>

        <CardDetailsGitHubUserData>
          <p>Reactions</p>
          <p>Comments</p>
          <p>Shared</p>
        </CardDetailsGitHubUserData>

        <CardDetailsGitHubUserInfo>
          <span>City</span>
          <span>City</span>
          <span>City</span>
          <span>City</span>
        </CardDetailsGitHubUserInfo>
      </CardDetailsGitHubUserDetailsStructure>
    </CardDetailsGitHubUserContainer>
  );
}
