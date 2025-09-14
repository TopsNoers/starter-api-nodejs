import { Request, Response } from "express";
import { makeResponse } from "../libs/helper";
import { httpStatusCode, responseMessage } from "../libs/enum";
import { Transaction, CreateTransactionRequest, UpdateTransactionRequest, TransactionQueryParams, PaginatedResponse } from "../libs/types";

// Mock data - replace with actual database operations
let transactions: Transaction[] = [
    { 
        id: 1, 
        amount: 1000, 
        description: "Sample transaction", 
        type: "expense",
        date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
    }
];

export const addTransaction = async (req: Request<{}, any, CreateTransactionRequest>, res: Response): Promise<void> => {
    try {
        const { amount, description, type } = req.body;

        // Basic validation
        if (!amount || !description) {
            res.status(httpStatusCode.badRequest).json(
                makeResponse(false, responseMessage.missingFields, null)
            );
            return;
        }

        const newTransaction: Transaction = {
            id: transactions.length + 1,
            amount: typeof amount === 'string' ? parseFloat(amount) : amount,
            description,
            type: (type as 'income' | 'expense') || "expense",
            date: new Date(),
            createdAt: new Date(),
            updatedAt: new Date()
        };

        transactions.push(newTransaction);

        res.status(httpStatusCode.created).json(
            makeResponse(true, responseMessage.created, newTransaction)
        );
    } catch (error) {
        console.error("Error adding transaction:", error);
        res.status(httpStatusCode.internalServerError).json(
            makeResponse(false, responseMessage.internalServerError, null)
        );
    }
};

export const getTransactions = async (req: Request<{}, any, any, TransactionQueryParams>, res: Response): Promise<void> => {
    try {
        const { page = 1, limit = 10, type, sortBy = "date", sortOrder = "desc" } = req.query;
        
        let filteredTransactions = [...transactions];
        
        // Filter by type if provided
        if (type) {
            filteredTransactions = filteredTransactions.filter(t => t.type === type);
        }
        
        // Sort transactions
        filteredTransactions.sort((a, b) => {
            let aValue: any;
            let bValue: any;
            
            switch (sortBy) {
                case 'date':
                    aValue = new Date(a.date);
                    bValue = new Date(b.date);
                    break;
                case 'amount':
                    aValue = a.amount;
                    bValue = b.amount;
                    break;
                case 'createdAt':
                    aValue = new Date(a.createdAt);
                    bValue = new Date(b.createdAt);
                    break;
                default:
                    aValue = new Date(a.date);
                    bValue = new Date(b.date);
            }
            
            if (sortOrder === "desc") {
                return bValue > aValue ? 1 : -1;
            } else {
                return aValue > bValue ? 1 : -1;
            }
        });
        
        // Pagination
        const startIndex = (Number(page) - 1) * Number(limit);
        const endIndex = startIndex + Number(limit);
        const paginatedTransactions = filteredTransactions.slice(startIndex, endIndex);
        
        const result = {
            data: paginatedTransactions,
            pagination: {
                currentPage: Number(page),
                totalPages: Math.ceil(filteredTransactions.length / Number(limit)),
                totalItems: filteredTransactions.length,
                itemsPerPage: Number(limit)
            }
        };

        res.status(httpStatusCode.ok).json(
            makeResponse(true, responseMessage.retrievedData, result)
        );
    } catch (error) {
        console.error("Error getting transactions:", error);
        res.status(httpStatusCode.internalServerError).json(
            makeResponse(false, responseMessage.internalServerError, null)
        );
    }
};

export const getTransactionById = async (req: Request<{ id: string }>, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const transactionId = parseInt(id);

        if (isNaN(transactionId)) {
            res.status(httpStatusCode.badRequest).json(
                makeResponse(false, responseMessage.invalidId, null)
            );
            return;
        }

        const transaction = transactions.find(t => t.id === transactionId);

        if (!transaction) {
            res.status(httpStatusCode.notFound).json(
                makeResponse(false, responseMessage.notFound, null)
            );
            return;
        }

        res.status(httpStatusCode.ok).json(
            makeResponse(true, responseMessage.retrievedData, transaction)
        );
    } catch (error) {
        console.error("Error getting transaction by ID:", error);
        res.status(httpStatusCode.internalServerError).json(
            makeResponse(false, responseMessage.internalServerError, null)
        );
    }
};

export const updateTransaction = async (req: Request<{ id: string }, any, UpdateTransactionRequest>, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const transactionId = parseInt(id);
        const { amount, description, type } = req.body;

        if (isNaN(transactionId)) {
            res.status(httpStatusCode.badRequest).json(
                makeResponse(false, responseMessage.invalidId, null)
            );
            return;
        }

        const transactionIndex = transactions.findIndex(t => t.id === transactionId);

        if (transactionIndex === -1) {
            res.status(httpStatusCode.notFound).json(
                makeResponse(false, responseMessage.notFound, null)
            );
            return;
        }

        // Update transaction
        const updatedTransaction: Transaction = {
            ...transactions[transactionIndex],
            ...(amount && { amount: typeof amount === 'string' ? parseFloat(amount) : amount }),
            ...(description && { description }),
            ...(type && { type: type as 'income' | 'expense' }),
            updatedAt: new Date()
        };

        transactions[transactionIndex] = updatedTransaction;

        res.status(httpStatusCode.ok).json(
            makeResponse(true, responseMessage.updated, updatedTransaction)
        );
    } catch (error) {
        console.error("Error updating transaction:", error);
        res.status(httpStatusCode.internalServerError).json(
            makeResponse(false, responseMessage.internalServerError, null)
        );
    }
};

export const deleteTransaction = async (req: Request<{ id: string }>, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const transactionId = parseInt(id);

        if (isNaN(transactionId)) {
            res.status(httpStatusCode.badRequest).json(
                makeResponse(false, responseMessage.invalidId, null)
            );
            return;
        }

        const transactionIndex = transactions.findIndex(t => t.id === transactionId);

        if (transactionIndex === -1) {
            res.status(httpStatusCode.notFound).json(
                makeResponse(false, responseMessage.notFound, null)
            );
            return;
        }

        const deletedTransaction = transactions.splice(transactionIndex, 1)[0];

        res.status(httpStatusCode.ok).json(
            makeResponse(true, responseMessage.deleted, deletedTransaction)
        );
    } catch (error) {
        console.error("Error deleting transaction:", error);
        res.status(httpStatusCode.internalServerError).json(
            makeResponse(false, responseMessage.internalServerError, null)
        );
    }
};