import React, { useState } from "react";

export default function VisitHistory({ customers, services }) {
  const [filter, setFilter] = useState({
    date: "",
    amount: "",
    serviceType: "",
  });

  const filtered = services.filter((s) => {
    const matchDate = filter.date
      ? s.date.slice(0, 10) === filter.date
      : true;
    const matchAmount = filter.amount
      ? String(s.amount) === filter.amount
      : true;
    const matchService = filter.serviceType
      ? s.serviceTaken.toLowerCase().includes(filter.serviceType.toLowerCase())
      : true;
    return matchDate && matchAmount && matchService;
  });

  // Fix: Match by both id and phone
  const getCustomer = (id) => customers.find((c) => c.id === id || c.phone === id);

  return (
    <section>
      <h2>All Service Visits</h2>
      <div style={{ marginBottom: 10 }}>
        <input
          type="date"
          value={filter.date}
          onChange={e => setFilter({ ...filter, date: e.target.value })}
          style={{ marginRight: 8 }}
        />
        <input
          type="text"
          placeholder="Amount"
          value={filter.amount}
          onChange={e => setFilter({ ...filter, amount: e.target.value })}
          style={{ marginRight: 8 }}
        />
        <input
          type="text"
          placeholder="Service Type"
          value={filter.serviceType}
          onChange={e => setFilter({ ...filter, serviceType: e.target.value })}
        />
      </div>
      <div style={{ overflowX: "auto" }}>
        <table border="1" cellPadding="6" style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>Date/Time</th>
              <th>Customer</th>
              <th>Service</th>
              <th>Amount</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={5} style={{ textAlign: "center", color: "#888" }}>
                  No service records found.
                </td>
              </tr>
            ) : (
              filtered
                .sort((a, b) => new Date(b.date) - new Date(a.date))
                .map((s) => {
                  const cust = getCustomer(s.customerId);
                  return (
                    <tr key={s.id}>
                      <td>{new Date(s.date).toLocaleString()}</td>
                      <td>
                        {cust
                          ? `${cust.name} (${cust.id})`
                          : s.customerId}
                      </td>
                      <td>{s.serviceTaken}</td>
                      <td>{s.amount}</td>
                      <td>{s.notes}</td>
                    </tr>
                  );
                })
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}