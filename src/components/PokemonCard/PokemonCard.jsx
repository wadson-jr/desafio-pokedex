import {
  Card,
  PokemonName,
  PokemonImage,
  PokemonId,
} from "./PokemonCardStyles";

export default function PokemonCard({ name, url }) {
  const getPokemonId = (url) => {
    const parts = url.split("/").filter(Boolean);
    return parts[parts.length - 1];
  };

  const id = getPokemonId(url);

  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <Card to={`/pokemon/${name}`}>
      <PokemonImage src={imageUrl} alt={name} />
      <PokemonId>#{id.padStart(3, "0")}</PokemonId>
      <PokemonName>{name}</PokemonName>
    </Card>
  );
}
