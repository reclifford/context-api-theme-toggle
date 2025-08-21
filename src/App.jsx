import "./App.css";
import ContentBox from "./ContentBox";
import { ThemeProvider } from "./ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <ContentBox />
    </ThemeProvider>
  );
}

export default App;
