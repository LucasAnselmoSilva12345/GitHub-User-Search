import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  height: 64px;
  background: #fff;
  border-bottom: 1px solid #eee;
`;

export const Profile = styled.h1`
  font-size: 2rem;
  color: #1d4ed8;
`;

export const SwitchThemeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export const SwitchThemeLabel = styled.span`
  font-size: 1.2rem;
  color: #3b82f6;
`;
