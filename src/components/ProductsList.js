import React, { useEffect, useState } from "react";
import api from "../config/axiosapi"; // ✅ Pastikan konfigurasi API benar
import ProductCard from "./ProductCard"; // ✅ Pastikan file ini ada di folder yang sesuai

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // ✅ Tambahkan state loading

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/products");
        console.log("Fetched Products:", response.data); // ✅ Cek apakah data diterima
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false); // ✅ Pastikan loading selesai
      }
    };

    fetchProducts();
  }, []);

  const styles = React.useMemo(
    () => ({
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
    }),
    []
  );

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Daftar Produk Light Stick</h2>

      {loading ? ( // ✅ Tampilkan loading jika masih fetching data
        <p>Loading produk...</p>
      ) : (
        <div style={styles.grid}>
          {products.length > 0 ? (
            products.map((product) => <ProductCard key={product._id} product={product} />)
          ) : (
            <p>Produk tidak tersedia.</p>
          )}
        </div>
      )}
    </div>
  );
};



export default ProductList;
