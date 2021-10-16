import { useContext, useState } from "react";
import "./App.css";
import Body from "./Components/Body/Body";
import Nav from "./Components/Nav/Nav";
import ThemeContext from "./Context/ThemeContext";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const styles = {
    containerStyles: {
      backgroundColor: darkMode === true ? "black" : "yellow",
      height: "100vh",
    },
  };

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <div style={styles.containerStyles}>
        <Nav></Nav>
        <Body />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
