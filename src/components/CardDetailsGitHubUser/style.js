import styled from 'styled-components';

export const CardDetailsGitHubUserContainer = styled.div`
  width: 100%;
  margin: 0 0 1rem 0;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CardDetailsGitHubUserImage = styled.img`
  width: 50%;
  margin: 0 auto;
  border-radius: 50%;
`;

export const CardDetailsGitHubUserDetailsStructure = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CardDetailsGitHubUserDetails = styled.div`
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

export const CardDetailsGitHubUserName = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  color: ${({ theme }) => theme.colorUsername};
`;

export const CardDetailsGitHubUserBio = styled.p`
  margin: 0.5rem 0;
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  color: ${({ theme }) => theme.colorBio};
`;

export const CardDetailsGitHubUserCity = styled.span`
  font-size: 1rem;
  font-weight: 300;
  text-align: center;
  color: ${({ theme }) => theme.colorCity};
`;
