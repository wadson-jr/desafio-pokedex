import { useContext, createContext, useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme.js";

const ThemeTogglerContext = createContext();

export const useTheme = () => useContext(ThemeTogglerContext);

export const ThemeProviderWrapper = ({ children }) => {
  const [themeName, setThemeName] = useState("light");

  const toggleTheme = () => {
    setThemeName((prev) => (prev === "light" ? "dark" : "light"));
  };

  const selectedTheme = themeName === "light" ? lightTheme : darkTheme;

  return (
    <ThemeTogglerContext.Provider value={{ theme: themeName, toggleTheme }}>
      <StyledThemeProvider theme={selectedTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeTogglerContext.Provider>
  );
};
