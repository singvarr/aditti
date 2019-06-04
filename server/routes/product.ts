import { Router } from "express";
import mongoose from "mongoose";
import ProductModel from "models/Product";
import generateRandomProducts from "utils/generateRandomProducts";

const router = Router();

router.get(
    "/",
    (req, res): void => {
        const DEFAULT_PAGE = 1;
        const DEFAULT_OFFSET = 10;

        let { page = DEFAULT_PAGE, limit = DEFAULT_OFFSET } = req.query;

        if (page <= 0 || !Number.isInteger(page)) {
            res.status(400).send("provide correct page number");
        } else if (limit <= 0 || !Number.isInteger(limit)) {
            res.status(400).send("provide correct limit of products");
        }

        ProductModel.estimatedDocumentCount()
            .then(
                (total): void => {
                    const offset = limit * (page - 1);
                    ProductModel.find(
                        {},
                        null,
                        {
                            limit,
                            skip: offset
                        },
                        (error, products): void => {
                            if (error) {
                                res.status(500).send(
                                    "Failed to load data from DB"
                                );
                            }

                            res.json({
                                data: products,
                                meta: {
                                    offset,
                                    pages: Math.ceil(total / limit),
                                    total
                                }
                            });
                        }
                    );
                }
            )
            .catch(
                (): void => {
                    res.status(500).send("Cannot get data about product");
                }
            );
    }
);

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
