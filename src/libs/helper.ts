
// make helper to standar response message
export const makeResponse = (status: number, message: string, data: any) => {
    return {
        "status": status,
        "message": message,
        "data": data
    }
}