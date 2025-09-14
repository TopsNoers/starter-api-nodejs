import { Router } from "express";
import { transactions } from "../routes/transactions";

const router = Router();

router.get("/", (req, res) => {
    res.send("Api is running");
});

router.use("/api/transactions", transactions);

export default router;