import React from "react";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <h1 style={styles.title}>Light Stick Shop</h1>
      <ul style={styles.navLinks}>
        <li><a href="/" style={styles.link}>Home</a></li>
        <li><a href="/products" style={styles.link}>Produk</a></li>
        <li><a href="/contact" style={styles.link}>Kontak</a></li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: "#007bff",
    padding: "15px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
    boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
  },
  title: {
    fontSize: "24px",
    margin: 0,
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
    margin: 0,
    padding: 0,
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
    transition: "color 0.3s ease",
  },
  linkHover: {
    color: "#ffdd57",
  },
};

export default Navbar;
