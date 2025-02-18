import { Router } from 'express'
const router = Router();

// Sample API Route
router.get("/", (req, res) => {
    res.send("🚀 Tax Calculation Backend Running!");
  });

  
export default router;
