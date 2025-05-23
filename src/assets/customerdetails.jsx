import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function CustomerDetails({ customers, services, deleteCustomer }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const customer = customers.find((c) => c.id === id);
  const customerServices = services.filter((s) => s.customerId === id);

  if (!customer) return <div>Customer not found.</div>;

  return (
    <section>
      <h2>Customer Details</h2>
      <p><b>ID:</b> {customer.id}</p>
      <p><b>Name:</b> {customer.name}</p>
      <p><b>Phone:</b> {customer.phone}</p>
      <p><b>Car Model:</b> {customer.carModel}</p>
      <p><b>Car Plate:</b> {customer.carPlate}</p>
      <button
        style={{ background: "#e74c3c", marginBottom: 16 }}
        onClick={() => {
          if (window.confirm("Delete this customer?")) {
            deleteCustomer(customer.id);
            navigate("/");
          }
        }}
      >
        Delete Customer
      </button>
      <h3>Service Visits</h3>
      <table border="1" cellPadding="6" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Date/Time</th>
            <th>Service</th>
            <th>Amount</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {customerServices.map((s) => (
            <tr key={s.id}>
              <td>{new Date(s.date).toLocaleString()}</td>
              <td>{s.serviceTaken}</td>
              <td>{s.amount}</td>
              <td>{s.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}