import styled from "styled-components";
import { Link } from "react-router-dom";

export const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.cardBackground};
  border: 2px solid ${({ theme }) => theme.cardBorder};
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  transition: transform 0.2s, box-shadow 0.2s, background 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.15);
  }
`;

export const PokemonName = styled.span`
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 0.5rem;
  text-transform: capitalize;
  color: ${({ theme }) => theme.text};
`;

export const PokemonImage = styled.img`
  object-fit: contain;
  width: 100%;
  max-width: 120px;
  height: auto;
  margin: 0 auto;
`;

export const PokemonId = styled.span`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.subText};
`;
