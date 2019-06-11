import { Router, Response } from "express";
import mongoose from "mongoose";
import Product from "models/Product";

const router = Router();

const DEFAULT_PAGE = 1;
export const DEFAULT_OFFSET = 10;

router.get(
    "/",
    (req, res): Response => {
        let { page = DEFAULT_PAGE, limit = DEFAULT_OFFSET } = req.query;

        page = parseInt(page);
        limit = parseInt(limit);

        if (page <= 0 || !Number.isInteger(page)) {
            return res.status(400).send("Provide correct page number");
        } else if (limit <= 0 || !Number.isInteger(limit)) {
            return res.status(400).send("Provide correct limit of products");
        }

        Product.estimatedDocumentCount(
            (error, total): Response => {
                if (error) {
                    return res
                        .status(500)
                        .send("Failed to calculate document count");
                }

                const offset = limit * (page - 1);

                Product.find(
                    {},
                    null,
                    {
                        limit,
                        skip: offset
                    },
                    (error, products): Response => {
                        if (error) {
                            return res
                                .status(500)
                                .send("Failed to load data from DB");
                        }

                        return res.json({
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
        );
    }
);

router.post(
    "/",
    (req, res): void => {
        const { products } = req.body;

        Product.insertMany(
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

        Product.findOne(
            { slug },
            (error, product): Response => {
                if (error) {
                    return res
                        .status(500)
                        .send("Cannot retrieve product from DB");
                }

                if (!product) return res.sendStatus(404);

                const { id, image, isAvailable, name, price, slug } = product;

                res.json({
                    data: {
                        id,
                        image,
                        isAvailable,
                        name,
                        price,
                        slug
                    }
                });
            }
        );
    }
);

router.put(
    "/:slug",
    (req, res): Response => {
        const { productData } = req.body;

        const hasBody = productData && Object.keys(productData).length >= 0;
        if (!hasBody) {
            return res
                .status(400)
                .send("Please, provide correct params to update product");
        }

        const { slug } = req.params;

        Product.findOneAndUpdate(
            { slug },
            null,
            { fields: productData, runValidators: true },
            (error, product): Response => {
                if (error) {
                    return res.status(500).send("Failed to update product");
                }

                if (!product) {
                    return res
                        .status(404)
                        .send("Cannot find product with this slug");
                }

                return res.send("Product updated");
            }
        );
    }
);

router.delete(
    "/:slug",
    (req, res): void => {
        const { slug } = req.params;

        Product.findOneAndRemove(
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
