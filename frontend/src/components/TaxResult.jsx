/* eslint-disable react/prop-types */
const TaxResult = ({ result }) => {
    return (
        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800">Tax Calculation Results</h3>
            <p className="mt-2">💰 <strong>Taxable Income:</strong> ₹{result.taxableIncome}</p>
            <p>🧾 <strong>Tax Payable:</strong> ₹{result.taxPayable}</p>
        </div>
    );
};

export default TaxResult;
