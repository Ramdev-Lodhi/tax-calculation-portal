import { Router } from "express";
import { calculateTax, getTaxHistory } from "../controllers/taxController.js";
const router = Router();

// Sample API Route
router.get("/", (req, res) => {
  res.send("Tax Calculation Backend Running!");
});

router.post("/calculate", calculateTax);
router.get("/history", getTaxHistory);

export default router;
