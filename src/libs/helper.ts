
// make helper to standard response message
export const makeResponse = (status: boolean, message: string, data: any) => {
    return {
        "status": status,
        "message": message,
        "data": data
    }
}