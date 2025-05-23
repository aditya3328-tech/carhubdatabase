import React from 'react';

const VisitHistory = ({ visits }) => {
    const [filter, setFilter] = React.useState({
        date: '',
        amount: '',
        serviceType: ''
    });

    const filteredVisits = visits.filter(visit => {
        return (
            (filter.date ? visit.date.includes(filter.date) : true) &&
            (filter.amount ? visit.amount.toString() === filter.amount : true) &&
            (filter.serviceType ? visit.serviceType.includes(filter.serviceType) : true)
        );
    });

    return (
        <div>
            <h2>Visit History</h2>
            <div>
                <input
                    type="text"
                    placeholder="Filter by date"
                    value={filter.date}
                    onChange={(e) => setFilter({ ...filter, date: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Filter by amount"
                    value={filter.amount}
                    onChange={(e) => setFilter({ ...filter, amount: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Filter by service type"
                    value={filter.serviceType}
                    onChange={(e) => setFilter({ ...filter, serviceType: e.target.value })}
                />
            </div>
            <ul>
                {filteredVisits.map((visit, index) => (
                    <li key={index}>
                        <p>Date: {visit.date}</p>
                        <p>Service Type: {visit.serviceType}</p>
                        <p>Amount: {visit.amount}</p>
                        <p>Notes: {visit.notes}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default VisitHistory;