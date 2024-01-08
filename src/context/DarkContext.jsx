import { createContext, useEffect } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";
import { useContext } from "react";

const DarkModeConext = createContext();

function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(
    window.matchMedia("(prefers-color-scheme: dark)").matches,
    "isDarkMode"
  );
  function toggleDarkMode() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }
  useEffect(
    function () {
      if (isDarkMode) {
        document.documentElement.classList.add("dark-mode");
        document.documentElement.classList.remove("light-mode");
      } else {
        document.documentElement.classList.add("light-mode");
        document.documentElement.classList.remove("dark-mode");
      }
    },
    [isDarkMode]
  );
  return (
    <DarkModeConext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeConext.Provider>
  );
}

function useDarkMode() {
  const context = useContext(DarkModeConext);
  if (context === undefined)
    throw new Error("Dark mode context was used outside the provider");

  return context;
}
export { DarkModeProvider, useDarkMode };
