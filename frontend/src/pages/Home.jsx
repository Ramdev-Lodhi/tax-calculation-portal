import { useState, useEffect } from "react";
import TaxForm from "../components/TaxForm";
import SummaryCard from "../components/SummaryCard";
import TaxHistory from "../components/TaxHistory";
import { fetchTaxHistory } from "../services/api";

const Home = () => {
  const [history, setHistory] = useState([]);
  const [formData, setFormData] = useState({
    annualIncome: "",
    investments: "",
    deductions: "",
    otherSources: "",
  });

  const [result, setResult] = useState(null);

  useEffect(() => {
    const getHistory = async () => {
      try {
        const data = await fetchTaxHistory();
        setHistory(data);
      } catch (error) {
        console.error("Error loading history:", error);
      }
    };

    getHistory();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      <div className="max-w-6xl w-full px-4 flex flex-col md:flex-row gap-8 justify-center">
        {/* Tax Form */}
        <TaxForm
          setHistory={setHistory}
          setResult={setResult}
          setFormData={setFormData}
          formData={formData}
        />

        {/* Summary Card (Real-Time Data) */}
        <SummaryCard formData={formData} result={result} />
      </div>

      {/* Tax History Table */}
      <TaxHistory history={history} />
    </div>
  );
};

export default Home;
