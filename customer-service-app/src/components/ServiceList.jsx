import React from 'react';

const ServiceList = ({ services }) => {
    return (
        <div>
            <h2>Service List</h2>
            {services.length === 0 ? (
                <p>No services available.</p>
            ) : (
                <ul>
                    {services.map((service, index) => (
                        <li key={index}>
                            <strong>Service:</strong> {service.name} <br />
                            <strong>Amount Paid:</strong> ${service.amount} <br />
                            <strong>Date:</strong> {service.date} <br />
                            <strong>Notes:</strong> {service.notes}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ServiceList;