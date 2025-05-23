import React, { useState } from 'react';
import CustomerForm from './components/CustomerForm';
import CustomerList from './components/CustomerList';
import ServiceForm from './components/ServiceForm';
import ServiceList from './components/ServiceList';

const App = () => {
    const [customers, setCustomers] = useState([]);
    const [services, setServices] = useState([]);

    const addCustomer = (customer) => {
        setCustomers([...customers, customer]);
    };

    const addService = (service) => {
        setServices([...services, service]);
    };

    return (
        <div className="app">
            <h1>Customer Service App</h1>
            <CustomerForm addCustomer={addCustomer} />
            <CustomerList customers={customers} />
            <ServiceForm addService={addService} />
            <ServiceList services={services} />
        </div>
    );
};

export default App;