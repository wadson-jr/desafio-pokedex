import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  min-width: auto;
  padding: 2rem;
  background: ${({ theme }) => theme.background};
  background-image: url(${({ theme }) => theme.backgroundImage});
  background-repeat: repeat-x;
  background-size: cover;
  background-position: bottom;
  background-attachment: fixed;
  box-sizing: border-box;
  transition: background 0.3s;
`;


export const Title = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.text};
  margin-bottom: 2rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1.5rem;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 855px) {
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    justify-items: center;
    width: 100%;
    padding: 1rem;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 200px;
`;

export const LoadButton = styled.button`
  display: block;
  margin: 2rem auto;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  border: 2px solid ${({ theme }) => theme.cardBorder};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.buttonColor};
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.15);
  }
`;
