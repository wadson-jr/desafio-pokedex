import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.background};
  background-image: url(${({ theme }) => theme.backgroundImage});
  background-repeat: repeat-x;
  background-size: contain;
  background-position: bottom;
  background-attachment: fixed;
  padding: 2rem;
  box-sizing: border-box;
  transition: background 0.3s;
  justify-items: center;
`;

export const BackLink = styled(Link)`
  background: ${({ theme }) => theme.buttonColor};
  color: ${({ theme }) => theme.text};
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.cardBorder};
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 1rem;
  text-decoration: none;
  position: fixed;
  transition: background 0.3s;
  top: 20px;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 850px) {
    padding: 0.5rem;
    top: 65px;
    left: 20px;
  }
`;

export const Content = styled.div`
  justify-items: center;
  background: ${({ theme }) => theme.contentBackground};
  border: 2px solid ${({ theme }) => theme.cardBorder};
  border-radius: 12px;
  padding: 1rem;

  @media (max-width: 850px) {
    gap: 1.5rem;
    justify-items: center;
    width: 100%;
    padding: 1rem;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.text};
`;

export const SubTitle = styled.h2`
  font-size: 1.5rem;
  margin: 2rem 0;
  color: ${({ theme }) => theme.text};
`;

export const Image = styled.img`
  width: 200px;
  height: auto;
  display: flex;
`;

export const TypeList = styled.div`
  font-size: 1.5rem;
  margin: 1rem 0;
  background-color: ${({ theme }) => theme.cardBackground};
  border: 2px solid ${({ theme }) => theme.cardBorder};
  padding: 0.5rem;
  border-radius: 8px;
  color: ${({ theme }) => theme.text};
`;

export const Abilities = styled.ul`
  list-style: none;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.text};
  max-width: 50rem;
`;

export const AbilityItem = styled.li`
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.cardBackground};
  border: 2px solid ${({ theme }) => theme.cardBorder};
  padding: 0.5rem;
  border-radius: 8px;
`;

export const MovesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 1.5rem;
  max-width: 1000px;

  @media (max-width: 850px) {
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    width: 100%;
    padding: 1rem;
  }
`;

export const MovesItem = styled.div`
  background-color: ${({ theme }) => theme.cardBackground};
  border: 2px solid ${({ theme }) => theme.cardBorder};
  padding: 0.5rem 0.1rem;
  border-radius: 12px;
  text-align: center;
  font-size: 0.9rem;
  width: 100%;
  color: ${({ theme }) => theme.text};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;
