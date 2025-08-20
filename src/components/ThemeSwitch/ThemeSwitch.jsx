import { useTheme } from "../../theme/ThemeToggler.jsx";
import { ThemeToggleButton } from "./ThemeSwitchStyles.jsx";
import { FaSun, FaMoon } from "react-icons/fa";


export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <ThemeToggleButton id="ThemeSwitch" onClick={toggleTheme}>
      {theme === "light" ? <FaSun size={20} /> : <FaMoon size={20} />}
      <p>Mudar para tema {theme === "light" ? "Escuro" : "Claro"}</p>
    </ThemeToggleButton>
  );
}