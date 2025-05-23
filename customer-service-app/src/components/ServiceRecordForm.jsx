import React, { useState } from 'react';
import { generateUniqueId } from '../utils/idGenerator';
import { getCurrentTimestamp } from '../utils/timestamp';

const ServiceRecordForm = ({ customers, onAddServiceRecord }) => {
    const [customerId, setCustomerId] = useState('');
    const [serviceTaken, setServiceTaken] = useState('');
    const [amountPaid, setAmountPaid] = useState('');
    const [notes, setNotes] = useState('');
    const [date, setDate] = useState(getCurrentTimestamp());

    const handleSubmit = (e) => {
        e.preventDefault();
        const newServiceRecord = {
            id: generateUniqueId(),
            customerId,
            serviceTaken,
            amountPaid,
            date,
            notes,
        };
        onAddServiceRecord(newServiceRecord);
        resetForm();
    };

    const resetForm = () => {
        setCustomerId('');
        setServiceTaken('');
        setAmountPaid('');
        setNotes('');
        setDate(getCurrentTimestamp());
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Customer ID or Phone:</label>
                <input
                    type="text"
                    value={customerId}
                    onChange={(e) => setCustomerId(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Service Taken:</label>
                <input
                    type="text"
                    value={serviceTaken}
                    onChange={(e) => setServiceTaken(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Amount Paid:</label>
                <input
                    type="number"
                    value={amountPaid}
                    onChange={(e) => setAmountPaid(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Date:</label>
                <input
                    type="text"
                    value={date}
                    readOnly
                />
            </div>
            <div>
                <label>Notes:</label>
                <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                />
            </div>
            <button type="submit">Add Service Record</button>
        </form>
    );
};

export default ServiceRecordForm;