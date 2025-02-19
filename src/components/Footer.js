import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2025 Light Stick Shop. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#f1f1f1",
    padding: "10px",
    textAlign: "center",
    marginTop: "20px",
  },
};

export default Footer;
