import { Router } from "express";
import { addTransaction, getTransactions, getTransactionById, updateTransaction, deleteTransaction } from "../handlers/transactions";
import { validateCreateTransaction, validateUpdateTransaction, validateTransactionId } from "../middleware/validation";

const router = Router();

// Transaction routes
router.post("/", validateCreateTransaction, addTransaction);
router.get("/", getTransactions);
router.get("/:id", validateTransactionId, getTransactionById);
router.put("/:id", validateTransactionId, validateUpdateTransaction, updateTransaction);
router.delete("/:id", validateTransactionId, deleteTransaction);

export { router as transactions };