import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Light Stick Shop. All rights reserved.</p>
      <div style={styles.socialIcons}>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>📘</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>🐦</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>📸</a>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#f1f1f1",
    padding: "15px",
    textAlign: "center",
    marginTop: "20px",
    borderTop: "2px solid #ddd",
    boxShadow: "0px -2px 5px rgba(0,0,0,0.1)",
  },
  socialIcons: {
    marginTop: "10px",
  },
  icon: {
    fontSize: "20px",
    margin: "0 10px",
    textDecoration: "none",
    cursor: "pointer",
  },
};

export default Footer;
