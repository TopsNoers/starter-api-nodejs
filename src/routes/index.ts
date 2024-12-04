import { Router } from "express";
import { products } from "./products";


const router = Router();

router.get("/", (req, res) => {
    res.send("Api is running");
});

router.use("/api/v1/products", products);

export default router;