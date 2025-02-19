import axios from "axios";

const API_URL = "http://localhost:5000/api/tax";

// Tax Calculation API Call
export const calculateTax = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/calculate`, data);
    console.log("Tax Calculated:", response.data);
    return response;
  } catch (error) {
    console.error("Error calculating tax:", error);
    throw error;
  }
};

// Fetch Previous Tax Calculations (History)
export const fetchTaxHistory = async () => {
  try {
    const response = await axios.get(`${API_URL}/history`);
    console.log("Fetched History:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching tax history:", error);
    throw error;
  }
};
