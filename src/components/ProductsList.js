import React, { useEffect, useState } from "react";
import api from "../api/axiosConfig";
import ProductCard from "./ProductCard"; // ✅ Import komponen kartu produk

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Daftar Produk Light Stick</h2>
      <div style={styles.grid}>
        {products.length > 0 ? (
          products.map((product) => <ProductCard key={product._id} product={product} />)
        ) : (
          <p>Loading produk...</p>
        )}
      </div>
    </div>
  );
};

// CSS Styling
const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
  },
  title: {
    fontSize: "24px",
    marginBottom: "20px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "20px",
    justifyContent: "center",
  },
};

export default ProductList;
