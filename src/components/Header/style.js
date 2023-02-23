import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  height: 64px;
  background: ${({ theme }) => theme.bgHeader};
  border-bottom: 1px solid ${({ theme }) => theme.borderBottomColor};
`;

export const Profile = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.colorHeader};
`;

export const SwitchThemeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;
