import React from 'react';

const CustomerList = ({ customers }) => {
    return (
        <div>
            <h2>Customer List</h2>
            <ul>
                {customers.map(customer => (
                    <li key={customer.id}>
                        <p>Name: {customer.name}</p>
                        <p>Email: {customer.email}</p>
                        <p>Phone: {customer.phone}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CustomerList;