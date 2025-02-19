/* eslint-disable react/prop-types */
import { useState } from "react";
import InputField from "../components/InputField";
import { calculateTax } from "../services/api";

const TaxForm = ({ setHistory, setResult, setFormData, formData }) => {
  const [form, setForm] = useState({
    annualIncome: "",
    investments: "",
    deductions: "",
    otherSources: "",
  });
  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "annualIncome") {
      setFormData({
        annualIncome: "",
        investments: "",
        deductions: "",
        otherSources: "",
      });
      setResult(null);
    }
    setForm((prev) => ({ ...prev, [name]: value }));
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await calculateTax(formData);
      console.log("API Response:", response.data);
      setResult(response.data);
      setHistory((prev) => [response.data, ...prev]);
      setForm({
        annualIncome: "",
        investments: "",
        deductions: "",
        otherSources: "",
      });
      console.log("Form Data:", form);
    } catch (error) {
      console.error("Error calculating tax:", error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md border border-gray-300 h-full">
      <h2 className="text-2xl font-bold text-center text-black-600 mb-4">
        Tax Calculation
      </h2>
      <hr className="my-3" />
      <form onSubmit={handleSubmit} className="space-y-4">
        <InputField
          label="Annual Income"
          name="annualIncome"
          value={form.annualIncome}
          onChange={handleChange}
        />
        <InputField
          label="Investments (80C, 80D, etc.)"
          name="investments"
          value={form.investments}
          onChange={handleChange}
        />
        <InputField
          label="Other Deductions (HRA, LTA, etc.)"
          name="deductions"
          value={form.deductions}
          onChange={handleChange}
        />
        <InputField
          label="Income from Other Sources"
          name="otherSources"
          value={form.otherSources}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          Calculate Tax
        </button>
      </form>
    </div>
  );
};

export default TaxForm;
