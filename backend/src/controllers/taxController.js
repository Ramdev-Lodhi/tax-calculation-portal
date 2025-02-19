import TaxRecord from "../models/taxRecordModel.js";

export const calculateTax = async (req, res) => {
  try {
    console.log("Received Data:", req.body);

    let { annualIncome, investments, deductions, otherSources } = req.body;

    annualIncome = Number(annualIncome) || 0;
    investments = Number(investments) || 0;
    deductions = Number(deductions) || 0;
    otherSources = Number(otherSources) || 0;

    let taxableIncome = annualIncome - investments - deductions - otherSources;
    if (taxableIncome < 0) taxableIncome = 0;

    let taxPayable = 0;
    if (taxableIncome <= 250000) taxPayable = 0;
    else if (taxableIncome <= 500000)
      taxPayable = (taxableIncome - 250000) * 0.05;
    else if (taxableIncome <= 1000000)
      taxPayable = 12500 + (taxableIncome - 500000) * 0.2;
    else taxPayable = 112500 + (taxableIncome - 1000000) * 0.3;

    console.log("Taxable Income:", taxableIncome);
    console.log("Tax Payable:", taxPayable);

    const newRecord = new TaxRecord({
      annualIncome,
      investments,
      deductions,
      otherSources,
      taxableIncome,
      taxPayable,
    });

    await newRecord.save();
    console.log("Tax Record Saved:", newRecord);
    return res.status(200).json(newRecord);
  } catch (error) {
    console.error("Error in Tax Calculation:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// Fetch All Tax Records
export const getTaxHistory = async (req, res) => {
  try {
    const records = await TaxRecord.find().sort({ createdAt: -1 });
    console.log(
      "Fetched History:",
      records.map((record) => ({
        annualIncome: record.annualIncome,
        totalTax: record.taxPayable,
      }))
    );
    return res.status(200).json(records);
  } catch (error) {
    console.error("Error Fetching History:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
