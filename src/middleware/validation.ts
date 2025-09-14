import { Request, Response, NextFunction } from "express";
import { httpStatusCode, responseMessage } from "../libs/enum";
import { makeResponse } from "../libs/helper";

// Transaction validation middleware
export const validateCreateTransaction = (req: Request, res: Response, next: NextFunction): void => {
    const { amount, description, type } = req.body;

    // Required fields validation
    if (!amount || !description) {
        res.status(httpStatusCode.badRequest).json(
            makeResponse(false, responseMessage.missingFields, null)
        );
        return;
    }

    // Amount validation
    if (isNaN(parseFloat(amount)) || parseFloat(amount) <= 0) {
        res.status(httpStatusCode.badRequest).json(
            makeResponse(false, responseMessage.invalidData, null)
        );
        return;
    }

    // Type validation
    if (type && !['income', 'expense'].includes(type)) {
        res.status(httpStatusCode.badRequest).json(
            makeResponse(false, responseMessage.invalidData, null)
        );
        return;
    }

    next();
};

export const validateUpdateTransaction = (req: Request, res: Response, next: NextFunction): void => {
    const { amount, type } = req.body;

    // Amount validation if provided
    if (amount !== undefined) {
        if (isNaN(parseFloat(amount)) || parseFloat(amount) <= 0) {
            res.status(httpStatusCode.badRequest).json(
                makeResponse(false, responseMessage.invalidData, null)
            );
            return;
        }
    }

    // Type validation if provided
    if (type && !['income', 'expense'].includes(type)) {
        res.status(httpStatusCode.badRequest).json(
            makeResponse(false, responseMessage.invalidData, null)
        );
        return;
    }

    next();
};

export const validateTransactionId = (req: Request, res: Response, next: NextFunction): void => {
    const { id } = req.params;
    const transactionId = parseInt(id);

    if (isNaN(transactionId) || transactionId <= 0) {
        res.status(httpStatusCode.badRequest).json(
            makeResponse(false, responseMessage.invalidId, null)
        );
        return;
    }

    next();
};
