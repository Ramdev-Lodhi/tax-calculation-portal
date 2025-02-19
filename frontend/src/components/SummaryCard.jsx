/* eslint-disable react/prop-types */
const SummaryCard = ({ formData = {}, result }) => {
  const {
    annualIncome = "0",
    investments = "0",
    deductions = "0",
    otherSources = "0",
  } = formData || {};

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md border border-gray-300 h-full">
      <h2 className="text-2xl font-bold text-center text-black-600 mb-4">
        Tax Calculation Summary
      </h2>
      <hr className="my-3" />

      {/* Live Form Data */}
      <div className="space-y-2 text-gray-700">
        <p>
          <strong>Annual Income:</strong> ₹{annualIncome}
        </p>
        <p>
          <strong>Investments:</strong> ₹{investments}
        </p>
        <p>
          <strong>Deductions:</strong> ₹{deductions}
        </p>
        <p>
          <strong>Other Sources:</strong> ₹{otherSources}
        </p>
      </div>

      {/* Divider */}
      <hr className="my-3" />

      {/* Tax Calculation Result */}
      {result ? (
        <div className="mt-3">
          <p className="text-lg font-bold text-yellow-600 bg-yellow-100 p-2 rounded">
            Taxable Income: ₹{result.taxableIncome ?? "0"}
          </p>
          <p className="text-lg font-bold text-green-600 bg-green-100 p-2 rounded mt-2">
            Total Tax: ₹{result.taxPayable ?? "0"}
          </p>
        </div>
      ) : (
        <p className="text-gray-500 text-center italic">
          Enter details and calculate tax to see results.
        </p>
      )}
    </div>
  );
};

export default SummaryCard;
