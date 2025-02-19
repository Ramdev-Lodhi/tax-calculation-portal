/* eslint-disable react/prop-types */

const TaxHistory = ({ history }) => {
  return (
    <div className="mt-10 w-full">
      <div className="bg-white p-6 rounded-lg shadow-lg overflow-x-auto">
        <h2 className="text-2xl font-bold text-center mb-4 text-blue-600">
          Previous Calculations
        </h2>
        {history.length > 0 ? (
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="border border-gray-300 px-4 py-2 text-left">
                  S.No.
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Annual Income
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Investments
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Deductions
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Other Sources
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left bg-yellow-200 text-black">
                  Taxable Income
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left bg-green-200 text-black">
                  Total Tax
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              {history.map((item, index) => (
                <tr
                  key={index}
                  className="border border-gray-300 hover:bg-gray-100"
                >
                  <td className="border border-gray-300 px-4 py-2">
                    {index + 1}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    ₹{item.annualIncome}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    ₹{item.investments}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    ₹{item.deductions}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    ₹{item.otherSources}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 font-bold bg-yellow-100">
                    ₹{item.taxableIncome}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 font-bold bg-green-100">
                    ₹{item.taxPayable}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {new Date(item.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-500 text-center">
            No previous calculations found.
          </p>
        )}
      </div>
    </div>
  );
};

export default TaxHistory;
