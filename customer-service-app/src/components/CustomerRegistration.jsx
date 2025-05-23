import React, { useState } from 'react';
import { generateUniqueId } from '../utils/idGenerator';
import { getCurrentTimestamp } from '../utils/timestamp';

const CustomerRegistration = () => {
    const [customerName, setCustomerName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [carModel, setCarModel] = useState('');
    const [carNumberPlate, setCarNumberPlate] = useState('');
    const [customerId, setCustomerId] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        const newCustomerId = generateUniqueId();
        setCustomerId(newCustomerId);

        const newCustomer = {
            id: newCustomerId,
            name: customerName,
            phone: phoneNumber,
            car: {
                model: carModel,
                numberPlate: carNumberPlate,
            },
            registrationDate: getCurrentTimestamp(),
        };

        // Here you would typically send newCustomer to your backend or update your state
        console.log('New Customer Registered:', newCustomer);
        
        // Reset form fields
        setCustomerName('');
        setPhoneNumber('');
        setCarModel('');
        setCarNumberPlate('');
    };

    return (
        <div>
            <h2>Customer Registration</h2>
            <form onSubmit={handleRegister}>
                <div>
                    <label>Name:</label>
                    <input 
                        type="text" 
                        value={customerName} 
                        onChange={(e) => setCustomerName(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Phone Number:</label>
                    <input 
                        type="text" 
                        value={phoneNumber} 
                        onChange={(e) => setPhoneNumber(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Car Model:</label>
                    <input 
                        type="text" 
                        value={carModel} 
                        onChange={(e) => setCarModel(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Car Number Plate:</label>
                    <input 
                        type="text" 
                        value={carNumberPlate} 
                        onChange={(e) => setCarNumberPlate(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">Register Customer</button>
            </form>
            {customerId && <p>Customer ID: {customerId}</p>}
        </div>
    );
};

export default CustomerRegistration;