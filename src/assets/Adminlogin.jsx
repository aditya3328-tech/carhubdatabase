import React, { useState } from "react";

export default function AdminLogin({ onLogin }) {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      form.username === "carhubynradmin" &&
      form.password === "carhubynr@3328"
    ) {
      onLogin();
    } else {
      setError("Invalid username or password.");
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(120deg, #e0eafc 0%, #cfdef3 100%)"
    }}>
      <form
        onSubmit={handleSubmit}
        style={{
          background: "#fff",
          padding: 32,
          borderRadius: 12,
          boxShadow: "0 4px 24px rgba(44,62,80,0.08)",
          minWidth: 320,
          display: "flex",
          flexDirection: "column",
          gap: 16
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: 8 }}>Admin Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={form.username}
          onChange={e => setForm({ ...form, username: e.target.value })}
          autoComplete="username"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={e => setForm({ ...form, password: e.target.value })}
          autoComplete="current-password"
          required
        />
        {error && <div style={{ color: "red", textAlign: "center" }}>{error}</div>}
        <button type="submit" style={{ fontWeight: 600 }}>Login</button>
      </form>
    </div>
  );
}