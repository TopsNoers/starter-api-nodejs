// Transaction related types
export interface Transaction {
    id: number;
    amount: number;
    description: string;
    type: 'income' | 'expense';
    date: Date;
    createdAt: Date;
    updatedAt: Date;
}

export interface CreateTransactionRequest {
    amount: number;
    description: string;
    type?: 'income' | 'expense';
}

export interface UpdateTransactionRequest {
    amount?: number;
    description?: string;
    type?: 'income' | 'expense';
}

export interface TransactionQueryParams {
    page?: number;
    limit?: number;
    type?: 'income' | 'expense';
    sortBy?: 'date' | 'amount' | 'createdAt';
    sortOrder?: 'asc' | 'desc';
}

export interface PaginationInfo {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
}

export interface PaginatedResponse<T> {
    data: T[];
    pagination: PaginationInfo;
}

// API Response types
export interface ApiResponse<T = any> {
    status: boolean;
    message: string;
    data: T | null;
}

// Error types
export interface ApiError {
    status: boolean;
    message: string;
    data: null;
    error?: string;
}
