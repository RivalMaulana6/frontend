import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.name} style={styles.image} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p><strong>Harga: Rp{(product.price || 0).toLocaleString()}</strong></p>
      <p>Stock: {product.stock}</p>
      <button style={styles.button}>Beli Sekarang</button>
    </div>
  );
};

// CSS Inline Styling
const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "15px",
    boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "10px",
  },
  button: {
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    padding: "10px",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
    transition: "background-color 0.3s",
  }
};

export default ProductCard;
