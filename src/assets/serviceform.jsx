import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ServiceForm({ customers, addService }) {
  const [form, setForm] = useState({
    customerId: "",
    serviceTaken: "",
    amount: "",
    notes: "",
  });
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  // Filter customers based on search input
  const filteredCustomers = customers.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.phone.includes(search) ||
      c.carModel?.toLowerCase().includes(search.toLowerCase()) ||
      c.carPlate?.toLowerCase().includes(search.toLowerCase()) ||
      c.id.toLowerCase().includes(search.toLowerCase())
  );

  // Auto-select first filtered customer when searching
  useEffect(() => {
    if (filteredCustomers.length === 1) {
      setForm(f => ({ ...f, customerId: filteredCustomers[0].id }));
    } else if (
      filteredCustomers.length > 1 &&
      !filteredCustomers.some(c => c.id === form.customerId)
    ) {
      setForm(f => ({ ...f, customerId: filteredCustomers[0].id }));
    }
    // If search is cleared, don't auto-select
    if (search === "") {
      setForm(f => ({ ...f, customerId: "" }));
    }
    // eslint-disable-next-line
  }, [search, customers]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.customerId || !form.serviceTaken || !form.amount) return;
    addService({
      customerId: form.customerId,
      serviceTaken: form.serviceTaken,
      amount: form.amount,
      notes: form.notes,
    });
    setForm({ customerId: "", serviceTaken: "", amount: "", notes: "" });
    setSearch("");
    navigate("/visits");
  };

  return (
    <section>
      <h2>Add Service Record</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <input
            type="text"
            placeholder="Search Customer"
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{ marginBottom: 4, minWidth: 200 }}
          />
          <select
            value={form.customerId}
            onChange={e => setForm({ ...form, customerId: e.target.value })}
            required
            style={{ minWidth: 200 }}
          >
            <option value="">Select Customer</option>
            {filteredCustomers.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name} ({c.id})
              </option>
            ))}
          </select>
        </div>
        <input
          placeholder="Service Taken"
          value={form.serviceTaken}
          onChange={e => setForm({ ...form, serviceTaken: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Amount Paid"
          value={form.amount}
          onChange={e => setForm({ ...form, amount: e.target.value })}
          required
        />
        <input
          placeholder="Notes"
          value={form.notes}
          onChange={e => setForm({ ...form, notes: e.target.value })}
        />
        <button type="submit">Add Service</button>
      </form>
    </section>
  );
}