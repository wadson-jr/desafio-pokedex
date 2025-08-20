import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import ThemeSwitcher from "../components/ThemeSwitch/ThemeSwitch.jsx";
import {
  Container,
  BackLink,
  Title,
  SubTitle,
  Image,
  TypeList,
  Abilities,
  AbilityItem,
  MovesGrid,
  MovesItem,
  Content,
} from "./PokemonDetailStyles.jsx";

export default function PokemonDetail() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [abilityDescriptions, setAbilityDescriptions] = useState({});

  useEffect(() => {
    const fetchPokemon = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = await res.json();
        setPokemon(data);

        const descriptions = {};
        for (const ab of data.abilities) {
          const resAbility = await fetch(ab.ability.url);
          const abilityData = await resAbility.json();

          const desc =
            abilityData.effect_entries.find(
              (entry) =>
                entry.language.name === "pt" || entry.language.name === "en"
            )?.effect || "Sem Descrição.";

          descriptions[ab.ability.name] = desc;
        }
        setAbilityDescriptions(descriptions);
      } catch (error) {
        console.error("Error ao buscar detalhes do Pokémon:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [name]);

  if (loading) return <p>Carregando...</p>;
  if (!pokemon) return <p>Pokémon não encontrado.</p>;

  return (
    <Container>
      <BackLink to={"/"}>Voltar</BackLink>
      <ThemeSwitcher />

      <Content>
        <Title>
          {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
        </Title>
        <Image src={pokemon.sprites.front_default} alt={pokemon.name} />

        <TypeList>
          Types: {pokemon.types.map((t) => t.type.name).join(" / ")}
        </TypeList>

        <SubTitle>Abilities</SubTitle>
        <Abilities>
          {pokemon.abilities.map((ab, index) => (
            <AbilityItem key={index}>
              <strong>{ab.ability.name}:</strong>{" "}
              {abilityDescriptions[ab.ability.name]}
            </AbilityItem>
          ))}
        </Abilities>

        <SubTitle>Moves</SubTitle>
        <MovesGrid>
          {pokemon.moves.map((move, index) => (
            <MovesItem key={index}>{move.move.name}</MovesItem>
          ))}
        </MovesGrid>
      </Content>
    </Container>
  );
}
