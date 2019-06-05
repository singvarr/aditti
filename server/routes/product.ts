import { Router, Response } from "express";
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

router.get(
    "/:slug",
    (req, res): void => {
        const { slug } = req.params;

        ProductModel.findOne(
            { slug },
            (error, product): Response => {
                if (error) {
                    return res
                        .status(500)
                        .send("Cannot retrieve product from DB");
                }

                if (!product) return res.sendStatus(404);

                res.json(product);
            }
        );
    }
);

router.patch(
    "/:slug",
    (req, res): Response => {
        if (!req.body) {
            return res
                .status(400)
                .send("Please, provide correct params to update product");
        }

        const { slug } = req.params;

        ProductModel.findOne(
            { slug },
            (error, product): Response => {
                if (error) {
                    return res
                        .status(500)
                        .send("Cannot find product with this slug");
                }

                product = { ...product, ...req.body };

                product.save(
                    (error): Response => {
                        if (error) {
                            return res.sendStatus(500);
                        }

                        res.send("Product updated");
                    }
                );
            }
        );
    }
);

router.delete(
    "/:slug",
    (req, res): void => {
        const { slug } = req.params;

        ProductModel.findOneAndRemove(
            { slug },
            (error, product): Response => {
                if (error) {
                    return res
                        .status(500)
                        .send("Cannot delete product from DB");
                }

                if (!product) {
                    return res.status(404).send("Cannot find product");
                }

                res.send("Product was deleted successfully");
            }
        );
    }
);

export default router;
