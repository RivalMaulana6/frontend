import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div style={styles.card}>
      <img 
        src={product.image || "https://via.placeholder.com/200"} // ✅ Gambar default
        alt={product.name}
        style={styles.image}
      />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p><strong>Harga: Rp{(product.price || 0).toLocaleString()}</strong></p>
      <p>Stock: {product.stock > 0 ? product.stock : "Habis"}</p>
      
      {/* Tombol hanya aktif jika stock masih tersedia */}
      <button
        style={{ 
          ...styles.button, 
          backgroundColor: product.stock > 0 ? "#007bff" : "#ccc",
          cursor: product.stock > 0 ? "pointer" : "not-allowed",
        }}
        disabled={product.stock === 0}
      >
        {product.stock > 0 ? "Beli Sekarang" : "Stok Habis"}
      </button>
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
    transition: "transform 0.2s ease-in-out",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "10px",
  },
  button: {
    color: "white",
    border: "none",
    padding: "10px 15px",
    borderRadius: "5px",
    marginTop: "10px",
    transition: "background-color 0.3s ease-in-out",
  },
};

export default ProductCard;
