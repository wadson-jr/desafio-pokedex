import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useTheme } from "./theme/ThemeToggler.jsx";
import { lightTheme, darkTheme } from "./theme/theme.js";

import HomePage from "./PokedexHomePage/HomePage";
import PokemonDetail from "./PokedexDetailPage/PokemonDetail.jsx";

export default function App() {
  const { theme } = useTheme();

  const selectedTheme = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={selectedTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pokemon/:name" element={<PokemonDetail />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
