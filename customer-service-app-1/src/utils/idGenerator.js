export const generateUniqueId = () => {
    return 'id-' + Math.random().toString(36).substr(2, 9);
};