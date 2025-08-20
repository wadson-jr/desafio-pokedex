import styled from "styled-components";

export const Input = styled.input`
  width: 30vh;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.cardBorder};
  background-color: ${({ theme }) => theme.inputBackground};
  color: ${({ theme }) => theme.text};
  position: fixed;
  transition: background 0.3s;

  &:focus {
    outline: none;
  }

  @media (max-width: 850px) {
    position: static;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  position: fixed;
  top: 65px;
  left: 20px;

  @media (max-width: 850px) {
    input {
      display: ${({ $show }) => ($show ? "block" : "none")};
      width: 100%;
    }
  }
`;

export const ToggleButton = styled.button`
  border: 2px solid ${({ theme }) => theme.cardBorder};
  background-color: ${({ theme }) => theme.inputBackground};
  cursor: pointer;
  font-size: 1rem;
  padding: 0.5rem 0.5rem;
  border-radius: 8px;

  @media (min-width: 770px) {
    display: none;
  }
`;
