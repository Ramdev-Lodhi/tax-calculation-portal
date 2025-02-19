/* eslint-disable react/prop-types */

const InputField = ({ label, name, value, onChange }) => {
  return (
    <div>
      <label className="block text-gray-700 font-semibold">{label}</label>
      <input
        type="number"
        name={name}
        value={value}
        onChange={onChange}
        className="w-full p-2 border rounded-lg mt-1 focus:ring focus:ring-blue-300"
      />
    </div>
  );
};

export default InputField;
