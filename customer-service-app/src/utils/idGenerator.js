function generateUniqueId(customers) {
    const prefix = 'CUST';
    const idCount = customers.length;
    const newId = `${prefix}${String(idCount + 1).padStart(3, '0')}`;
    return newId;
}

export default generateUniqueId;