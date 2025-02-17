import axios from 'axios';

const API_URL = 'http://localhost:5000/api/tax';

export const calculateTax = async (data) => {
    try {
        const response = await axios.post(`${API_URL}/calculate`, data);
        return response.data;
    } catch (error) {
        console.error('Error calculating tax:', error);
        throw error;
    }
};
