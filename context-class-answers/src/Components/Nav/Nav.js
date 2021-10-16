import React from "react";
import Toggle from "../Toggle/Toggle";

const Nav = () => {
  const styles = {
    nav: {
      height: "10vh",
      borderBottom: "0.5px grey solid",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
    },
  };

  return (
    <nav style={styles.nav}>
      <Toggle />
    </nav>
  );
};

export default Nav;
