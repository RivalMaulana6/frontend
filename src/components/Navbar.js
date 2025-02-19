import React from "react";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <h1 style={styles.title}>Light Stick Shop</h1>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: "#007bff",
    padding: "15px",
    textAlign: "center",
    color: "white",
    fontSize: "24px",
  },
};

export default Navbar;
