import React, { useState } from 'react';

const ServiceForm = ({ onAddService }) => {
    const [serviceName, setServiceName] = useState('');
    const [serviceDate, setServiceDate] = useState('');
    const [serviceDetails, setServiceDetails] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newService = {
            id: Date.now(), // This can be replaced with a unique ID generator
            name: serviceName,
            date: serviceDate,
            details: serviceDetails,
        };
        onAddService(newService);
        setServiceName('');
        setServiceDate('');
        setServiceDetails('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Service Name:</label>
                <input
                    type="text"
                    value={serviceName}
                    onChange={(e) => setServiceName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Service Date:</label>
                <input
                    type="date"
                    value={serviceDate}
                    onChange={(e) => setServiceDate(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Service Details:</label>
                <textarea
                    value={serviceDetails}
                    onChange={(e) => setServiceDetails(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Add Service</button>
        </form>
    );
};

export default ServiceForm;