import { ButtonBlank } from 'lulib-ui';

import {
  CardDetailsGitHubUserContainer,
  CardDetailsGitHubUserImage,
  CardDetailsGitHubUserDetailsStructure,
  CardDetailsGitHubUserDetails,
  CardDetailsGitHubUserName,
  CardDetailsGitHubUserBio,
  CardDetailsGitHubUserCity,
} from './style';

interface CardDetailsGitHubUserProps {
  avatar_url: string;
  name: string;
  bio: string;
  location: string;
  html_url: string;
}

export function CardDetailsGitHubUser({
  avatar_url,
  name,
  bio,
  location,
  html_url,
}: CardDetailsGitHubUserProps) {
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

        <ButtonBlank link={html_url} nameButton="Follow" />
      </CardDetailsGitHubUserDetailsStructure>
    </CardDetailsGitHubUserContainer>
  );
}
