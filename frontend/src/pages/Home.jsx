import { useState } from "react";
import InputField from "../components/InputField";
import TaxResult from "../components/TaxResult";
import { calculateTax } from "../services/api";

const Home = () => {
  const [formData, setFormData] = useState({
    annualIncome: "",
    investments: "",
    deductions: "",
    otherSources: "",
  });
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = calculateTax(formData);
      setResult(response.data);
    } catch (error) {
      console.error("Error calculating tax:", error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-bold text-center mb-4">Tax Calculator</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <InputField
          label="Annual Income"
          name="annualIncome"
          onChange={handleChange}
        />
        <InputField
          label="Investments (80C, 80D, etc.)"
          name="investments"
          onChange={handleChange}
        />
        <InputField
          label="Other Deductions (HRA, LTA, etc.)"
          name="deductions"
          onChange={handleChange}
        />
        <InputField
          label="Income from Other Sources"
          name="otherSources"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          Calculate Tax
        </button>
      </form>
      {result && <TaxResult result={result} />}
    </div>
  );
};

export default Home;
