import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Menangani perubahan input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // Reset error saat mengetik
  };

  // Validasi email sederhana
  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  // Menangani pengiriman formulir
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError("Semua kolom wajib diisi!");
      return;
    }
    if (!validateEmail(formData.email)) {
      setError("Email tidak valid!");
      return;
    }

    // Simulasi pengiriman pesan (bisa diganti dengan API)
    setSuccess("Pesan berhasil dikirim! Kami akan segera menghubungi Anda.");
    setFormData({ name: "", email: "", message: "" }); // Reset formulir
  };

  return (
    <div style={styles.container}>
      <h2>Kontak Kami</h2>
      <p>Jika Anda memiliki pertanyaan, silakan hubungi kami melalui:</p>

      <div style={styles.info}>
        <p><strong>Email:</strong> support@lightstickshop.com</p>
        <p><strong>Telepon:</strong> +62 812-3456-7890</p>
        <p><strong>Alamat:</strong> Jl. Raya K-Pop No. 123, Jakarta</p>
      </div>

      <h3>Ikuti Kami</h3>
      <div style={styles.socialIcons}>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>📘 Facebook</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>🐦 Twitter</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>📸 Instagram</a>
      </div>

      <h3>Kirim Pesan</h3>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Nama Anda"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="Email Anda"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
        />
        <textarea
          name="message"
          placeholder="Tulis pesan Anda..."
          value={formData.message}
          onChange={handleChange}
          style={styles.textarea}
        ></textarea>
        {error && <p style={styles.error}>{error}</p>}
        {success && <p style={styles.success}>{success}</p>}
        <button type="submit" style={styles.button}>Kirim</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
  },
  info: {
    margin: "20px 0",
    lineHeight: "1.6",
  },
  socialIcons: {
    marginTop: "10px",
    display: "flex",
    justifyContent: "center",
    gap: "15px",
  },
  icon: {
    textDecoration: "none",
    color: "#007bff",
    fontSize: "18px",
    transition: "color 0.3s",
  },
  form: {
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
  },
  input: {
    width: "80%",
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  textarea: {
    width: "80%",
    height: "100px",
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  button: {
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    padding: "10px 15px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
  },
  error: {
    color: "red",
    fontSize: "14px",
  },
  success: {
    color: "green",
    fontSize: "14px",
  },
};

export default Contact;
