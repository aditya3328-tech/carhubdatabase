import React from 'react';

const ServiceList = ({ services }) => {
    return (
        <div>
            <h2>Service List</h2>
            <ul>
                {services.map(service => (
                    <li key={service.id}>
                        <strong>Service:</strong> {service.name} <br />
                        <strong>Customer ID:</strong> {service.customerId} <br />
                        <strong>Date:</strong> {service.date} <br />
                        <strong>Description:</strong> {service.description}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ServiceList;