import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  @media (min-width: 992px) {
    width: 70%;
    margin: 0 auto;
    padding: 1rem 2rem;
  }
`;

export const HeaderSearch = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media (min-width: 992px) {
    width: 100%;
    margin: 0 auto;
    justify-content: space-between;
  }
`;

export const Input = styled.input`
  background-color: ${({ theme }) => theme.bgInput};
  border: 1px solid ${({ theme }) => theme.borderColorInput};
  border-radius: 4px;
  padding: 0.5rem;
  width: 100%;
  max-width: 400px;
  font-size: 1rem;
  transition: all 0.5s linear;

  &::-webkit-input-placeholder {
    color: ${({ theme }) => theme.colorPlaceholder};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.focusInput};
  }

  &:focus::-webkit-input-placeholder {
    color: transparent;
  }

  &:outline {
    outline: none;
  }
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.bgButtonSearch};
  border: 1px solid ${({ theme }) => theme.bgButtonBorder};
  color: #ffffff;
  border-radius: 4px;
  padding: 0.5rem;
  font-size: 1rem;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  transition: all 0.5s linear;

  &:hover {
    filter: opacity(75%);
  }
`;

export const WithoutResults = styled.p`
  font-size: 1rem;
  font-weight: 300;
  text-align: center;
  color: ${({ theme }) => theme.colorWithoutUserSearch};
`;
