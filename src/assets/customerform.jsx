import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CustomerForm({ addCustomer, customers }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    carModel: "",
    carPlate: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check for duplicate phone or carPlate
    const exists = customers.some(
      (c) =>
        c.phone.trim() === form.phone.trim() ||
        c.carPlate.trim().toLowerCase() === form.carPlate.trim().toLowerCase()
    );
    if (exists) {
      setError("Customer with this mobile number or car number plate already exists.");
      return;
    }
    addCustomer(form);
    setForm({ name: "", phone: "", carModel: "", carPlate: "" });
    setError("");
    navigate("/");
  };

  return (
    <section>
      <h2>Register Customer</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", gap: 10 }}>
        <input
          placeholder="Name"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          placeholder="Phone"
          value={form.phone}
          onChange={e => setForm({ ...form, phone: e.target.value })}
          required
        />
        <input
          placeholder="Car Model"
          value={form.carModel}
          onChange={e => setForm({ ...form, carModel: e.target.value })}
          required
        />
        <input
          placeholder="Car Number Plate"
          value={form.carPlate}
          onChange={e => setForm({ ...form, carPlate: e.target.value })}
          required
        />
        <button type="submit">Register</button>
      </form>
      {error && <div style={{ color: "red", marginTop: 8 }}>{error}</div>}
    </section>
  );
}