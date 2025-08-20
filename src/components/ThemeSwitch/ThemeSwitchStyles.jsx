import styled from "styled-components";

export const ThemeToggleButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: 2px solid ${({ theme }) => theme.cardBorder};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.buttonColor};
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  z-index: 1000;
  transition: background 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.15);
  };

  @media (max-width: 850px) {
    padding: 0.5rem;
    top: 65px;
    p {
      display: none;
    };
  }
`;