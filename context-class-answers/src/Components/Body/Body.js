import React,{useContext} from "react";
import Card from "../Card/Card";
import Card2 from "../Card/Card2"
import ThemeContext from "../../Context/ThemeContext";
const Body = () => {
   const { darkMode, setDarkMode } = useContext(ThemeContext);
  const styles = {
    mainStyles: {
      height: "90vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };

  return <div style={styles.mainStyles}>{darkMode ? <Card /> : <Card2 />}</div>;
};

export default Body;
