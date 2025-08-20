import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { SearchContainer, ToggleButton, Input } from "./SearchInputStyles.jsx";
import { useTheme } from "../../theme/ThemeToggler.jsx";
import { darkTheme, lightTheme } from "../../theme/theme.js";

export default function SearchInput({ searchTerm, setSearchTerm }) {
  const [showInput, setShowInput] = useState(false);
  const { theme } = useTheme();

  const iconColor = theme === "light" ? lightTheme.text : darkTheme.text;

  return (
    <SearchContainer $show={showInput}>
      <ToggleButton onClick={() => setShowInput((prev) => !prev)}>
        <FaSearch style={{ color: iconColor}} />
      </ToggleButton>

      <Input
        type="text"
        placeholder="Buscar Pokémon"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </SearchContainer>
  );
}
