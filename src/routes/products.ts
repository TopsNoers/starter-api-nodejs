import { addProduct, getProducts } from "../handlers/products";
export const products = (req: any, res: any) => {
    // check if the request is a GET request
    if (req.method === "GET") {
        getProducts(req, res);
    }
    if (req.method === "POST") {
        addProduct(req, res);
    }
};

