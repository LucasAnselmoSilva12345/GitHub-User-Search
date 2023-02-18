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
  width: 90%;
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
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CardDetailsGitHubUserName = styled.h1`
  font-size: 1.5rem;
  font-weight: 400;
  text-align: center;
  color: #1e293b;
`;

export const CardDetailsGitHubUserBio = styled.p`
  margin: 0.5rem 0 0 0;
  font-size: 1rem;
  font-weight: 300;
  color: #333;
`;

export const CardDetailsGitHubUserData = styled.div`
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CardDetailsGitHubUserInfo = styled.div`
  width: 100%;
  padding: 1rem 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 1rem;
  align-items: center;
  justify-content: center;
`;
