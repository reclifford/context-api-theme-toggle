/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const initialTheme = () => {
  const chosenTheme = localStorage.getItem("ThemeChoice");
  return chosenTheme ? JSON.parse(chosenTheme) : "light"; // check for localStorage first otherwise default to "light" mode
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialTheme);

  // check if user OS prefers dark mode
  // useEffect(() => {
  //   const themePreference = window.matchMedia("(prefers-color-scheme: dark)");
  //   if (themePreference.matches) {
  //     setTheme("dark");
  //   }
  // }, []);

  // update body.dataset on theme change
  useEffect(() => {
    document.body.dataset.theme = theme; // set the body dataset
    localStorage.setItem("ThemeChoice", JSON.stringify(theme)); // save theme choice to localStorage
  }, [theme]);

  // toggle theme
  const toggleTheme = () => {
    const updatedTheme = theme === "light" ? "dark" : "light";
    setTheme(updatedTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
