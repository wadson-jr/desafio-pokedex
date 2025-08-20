import { useEffect, useState, useRef } from "react";
import PokemonCard from "../components/PokemonCard/PokemonCard.jsx";
import ThemeSwitcher from "../components/ThemeSwitch/ThemeSwitch.jsx";
import SearchInput from "../components/SearchInput/SearchInput.jsx";
import {
  Container,
  Title,
  Grid,
  CardWrapper,
  LoadButton,
} from "./HomePageStyles";

const POKEMON_API_URL = "https://pokeapi.co/api/v2/pokemon";

export default function HomePage() {
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const loadedOnce = useRef(false);

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.trim().toLowerCase())
  );

  const loadPokemons = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${POKEMON_API_URL}?limit=12&offset=${offset}`
      );
      const data = await response.json();
      setPokemons((prev) => [...prev, ...data.results]);
      setOffset((prev) => prev + 12);
    } catch (error) {
      console.error("Erro", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!loadedOnce.current) {
      loadPokemons();
      loadedOnce.current = true;
    }
  }, []);

  const resetAndLoadPokemons = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${POKEMON_API_URL}?limit=12&offset=0`);
      const data = await response.json();
      setPokemons(data.results);
      setOffset(12);
    } catch (err) {
      console.error("Erro", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const query = searchTerm.trim().toLowerCase();

    if (query === "") {
      resetAndLoadPokemons();
      return;
    }

    const fetchSinglePokemon = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);
        if (!res.ok) throw new Error("Pokémon não encontrado");
        const data = await res.json();

        setPokemons([
          {
            name: data.name,
            url: `https://pokeapi.co/api/v2/pokemon/${data.id}/`,
          },
        ]);
      } catch (err) {
        console.error("Erro", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSinglePokemon();
  }, [searchTerm]);

  return (
    <Container>
      <ThemeSwitcher />

      <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <Title>Lista de Pokémons</Title>

      <Grid>
        {filteredPokemons.map((pokemon, index) => (
          <CardWrapper key={index}>
            <PokemonCard name={pokemon.name} url={pokemon.url} />
          </CardWrapper>
        ))}
      </Grid>

      {searchTerm === "" && (
        <LoadButton onClick={loadPokemons} disabled={loading}>
          {loading ? "Carregando..." : "Carregar mais"}
        </LoadButton>
      )}
    </Container>
  );
}
