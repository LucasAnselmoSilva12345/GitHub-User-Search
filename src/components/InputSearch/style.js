import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;

  @media (min-width: 992px) {
    width: 70%;
    margin: 0 auto;
    padding: 1rem 2rem;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`;

export const Input = styled.input`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0.5rem;
  width: 100%;
  max-width: 400px;
  font-size: 1rem;

  &::-webkit-input-placeholder {
    color: #a3a3a3;
  }

  &:focus {
    outline: none;
    border-color: #334155;
  }

  &:focus::-webkit-input-placeholder {
    color: transparent;
  }

  &:outline {
    outline: none;
  }
`;

export const Button = styled.button`
  background-color: #334155;
  border: 1px solid #1e293b;
  color: #ffffff;
  border-radius: 4px;
  padding: 0.5rem;
  font-size: 1rem;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #4b5563;
  }
`;
