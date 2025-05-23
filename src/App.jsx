import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CustomerList from "./assets/customerlist";
import CustomerForm from "./assets/customerform";
import CustomerDetails from "./assets/customerdetails";
import ServiceForm from "./assets/serviceform";
import VisitHistory from "./assets/visithistory";
import AdminLogin from "./assets/AdminLogin";

// Utility to generate unique customer IDs
const generateCustomerId = (customers) => {
  const lastId = customers.length
    ? Math.max(...customers.map((c) => parseInt(c.id.replace("CUST", ""))))
    : 0;
  return `CUST${String(lastId + 1).padStart(3, "0")}`;
};

export default function App() {
  // State
  const [customers, setCustomers] = useState(() => {
    const data = localStorage.getItem("customers");
    return data ? JSON.parse(data) : [];
  });
  const [services, setServices] = useState(() => {
    const data = localStorage.getItem("services");
    return data ? JSON.parse(data) : [];
  });

  // Admin login state
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return sessionStorage.getItem("carhubynr_loggedin") === "true";
  });

  const handleLogin = () => {
    setIsLoggedIn(true);
    sessionStorage.setItem("carhubynr_loggedin", "true");
  };

  // Persist to localStorage
  useEffect(() => {
    localStorage.setItem("customers", JSON.stringify(customers));
  }, [customers]);
  useEffect(() => {
    localStorage.setItem("services", JSON.stringify(services));
  }, [services]);

  // Add customer
  const addCustomer = (customer) => {
    const id = generateCustomerId(customers);
    setCustomers([...customers, { ...customer, id }]);
  };

  // Delete customer and their services
  const deleteCustomer = (customerId) => {
    setCustomers(customers.filter((c) => c.id !== customerId));
    setServices(services.filter((s) => s.customerId !== customerId));
  };

  // Add service
  const addService = (service) => {
    setServices([
      ...services,
      {
        ...service,
        amount: parseFloat(service.amount),
        date: new Date().toISOString(),
        id: Date.now().toString(),
      },
    ]);
  };

  // Show login page if not logged in
  if (!isLoggedIn) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  return (
    <Router>
      <div style={{
        minHeight: "100vh",
        background: "linear-gradient(120deg, #e0eafc 0%, #cfdef3 100%)",
        padding: 0,
        margin: 0
      }}>
        <header style={{
          background: "#2c3e50",
          padding: "20px 0",
          marginBottom: 32,
          boxShadow: "0 2px 8px rgba(44,62,80,0.07)"
        }}>
          <nav style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 32
          }}>
            <span style={{
              fontFamily: "'Segoe UI', Arial, sans-serif",
              fontWeight: 700,
              fontSize: 28,
              color: "#fff",
              letterSpacing: "2px",
              marginRight: 32,
              textShadow: "0 2px 8px rgba(44,62,80,0.10)"
            }}>
              Car<span style={{ color: "red" }}>Hub</span>
            </span>
            <Link to="/" style={{ color: "#fff", textDecoration: "none", fontWeight: 500, fontSize: 18 }}>Customers</Link>
            <Link to="/add-customer" style={{ color: "#fff", textDecoration: "none", fontWeight: 500, fontSize: 18 }}>Register Customer</Link>
            <Link to="/add-service" style={{ color: "#fff", textDecoration: "none", fontWeight: 500, fontSize: 18 }}>Add Service</Link>
            <Link to="/visits" style={{ color: "#fff", textDecoration: "none", fontWeight: 500, fontSize: 18 }}>Visit History</Link>
          </nav>
        </header>
        <main style={{
          maxWidth: 1000,
          margin: "auto",
          background: "#fff",
          borderRadius: 12,
          boxShadow: "0 4px 24px rgba(44,62,80,0.08)",
          padding: 32,
          minHeight: 600
        }}>
          <Routes>
            <Route path="/" element={<CustomerList customers={customers} />} />
            <Route path="/add-customer" element={<CustomerForm addCustomer={addCustomer} customers={customers} />} />
            <Route path="/customer/:id" element={
              <CustomerDetails
                customers={customers}
                services={services}
                deleteCustomer={deleteCustomer}
              />
            } />
            <Route path="/add-service" element={
              <ServiceForm customers={customers} addService={addService} />
            } />
            <Route path="/visits" element={
              <VisitHistory customers={customers} services={services} />
            } />
          </Routes>
        </main>
        <footer style={{
          textAlign: "center",
          color: "#888",
          padding: 16,
          marginTop: 32,
          fontSize: 14
        }}>
          &copy; {new Date().getFullYear()} CarHub Service Tracker
        </footer>
      </div>
    </Router>
  );
}