import mongoose from "mongoose";

const TaxRecordSchema = new mongoose.Schema(
  {
    annualIncome: { type: Number, required: true },
    investments: { type: Number, required: true },
    deductions: { type: Number, required: true },
    otherSources: { type: Number, required: true },
    taxableIncome: { type: Number, required: true },
    taxPayable: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

const TaxRecord = mongoose.model("TaxRecord", TaxRecordSchema);

export default TaxRecord;
