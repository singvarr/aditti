import { Router } from "express";
import mongoose from "mongoose";
import ProductModel from "models/Product";
import generateRandomProducts from "utils/generateRandomProducts";

const router = Router();

router.post(
    "/",
    (req, res): void => {
        const products = generateRandomProducts(10);

        ProductModel.insertMany(
            products,
            (error): void => {
                if (error) {
                    res.status(500).send("Failed to load documents in db");
                }

                res.status(200).send("Successfully stored");
            }
        );
    }
);

router.delete(
    "/",
    (req, res): void => {
        mongoose.connection.db.dropCollection(
            "products",
            (error): void => {
                if (error) {
                    res.status(500).send("Failed to delete documents in db");
                }

                res.status(200).send("Successfully deleted");
            }
        );
    }
);

export default router;
