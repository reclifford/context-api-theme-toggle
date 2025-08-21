import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ContentBox() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="container">
      <div className="box">
        <h1>Choose your Theme</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <p>Current Theme is: {theme}</p>
      </div>
    </div>
  );
}
