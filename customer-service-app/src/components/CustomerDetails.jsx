import React from 'react';

const CustomerDetails = ({ customer, visits }) => {
    return (
        <div className="customer-details">
            <h2>Customer Details</h2>
            <div className="customer-info">
                <p><strong>Name:</strong> {customer.name}</p>
                <p><strong>Phone:</strong> {customer.phone}</p>
                <p><strong>Car Model:</strong> {customer.carModel}</p>
                <p><strong>Car Number Plate:</strong> {customer.carNumberPlate}</p>
                <p><strong>Customer ID:</strong> {customer.id}</p>
            </div>
            <h3>Visit History</h3>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Service</th>
                        <th>Amount Paid</th>
                        <th>Notes</th>
                    </tr>
                </thead>
                <tbody>
                    {visits.map((visit, index) => (
                        <tr key={index}>
                            <td>{visit.date}</td>
                            <td>{visit.service}</td>
                            <td>{visit.amount}</td>
                            <td>{visit.notes}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CustomerDetails;