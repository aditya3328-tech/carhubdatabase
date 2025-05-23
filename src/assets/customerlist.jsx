import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function CustomerList({ customers }) {
  const [search, setSearch] = useState("");
  const filtered = customers.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.phone.includes(search) ||
      c.id.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <section>
      <h2>Customer List</h2>
      <input
        placeholder="Search by Name, Phone, or ID"
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{ width: 300, padding: 5, marginBottom: 10 }}
      />
      <table border="1" cellPadding="6" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Phone</th><th>Car Model</th><th>Car Plate</th><th>Details</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((c) => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.name}</td>
              <td>{c.phone}</td>
              <td>{c.carModel}</td>
              <td>{c.carPlate}</td>
              <td>
                <Link to={`/customer/${c.id}`}>View</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}