import chai, { expect } from "chai";
import chaiHttp from "chai-http";

import app from "../";
import Product from "models/Product";
import { DEFAULT_OFFSET } from "routes/product";
import generateProducts from "utils/generateRandomProducts";

chai.use(chaiHttp);

const PRODUCT_COUNT = 150;

beforeEach(
    (done): void => {
        Product.remove(
            {},
            (err): void => {
                err ? done(err) : done();
            }
        );
    }
);

describe("/product - list of products", (): void => {
    it("GET - without query params", (done): void => {
        const products = generateProducts(PRODUCT_COUNT);

        const EXPECTED_PAGES = 15;
        const EXPECTED_OFFSET = 0;

        Product.insertMany(products).then(
            (): void => {
                chai.request(app)
                    .get("/product")
                    .end(
                        (err, res): void => {
                            expect(err).to.be.null;
                            expect(res).to.have.status(200);
                            expect(res.body.data.length).to.equal(
                                DEFAULT_OFFSET
                            );
                            expect(res.body.meta.offset).to.equal(
                                EXPECTED_OFFSET
                            );
                            expect(res.body.meta.total).to.equal(PRODUCT_COUNT);
                            expect(res.body.meta.pages).to.equal(
                                EXPECTED_PAGES
                            );
                            done();
                        }
                    );
            }
        );
    });

    it("GET - with invalid query params", (done): void => {
        chai.request(app)
            .get("/product?page=random&limit=unknown")
            .end(
                (err, res): void => {
                    expect(err).to.be.null;
                    expect(res).to.have.status(400);
                    done();
                }
            );
    });

    it("GET - with correct query params", (done): void => {
        const products = generateProducts(PRODUCT_COUNT);
        const page = 3;
        const limit = 15;

        const EXPECTED_PAGES = 10;
        const EXPECTED_OFFSET = 30;

        Product.insertMany(products).then(
            (): void => {
                chai.request(app)
                    .get(`/product?page=${page}&limit=${limit}`)
                    .end(
                        (err, res): void => {
                            expect(err).to.be.null;
                            expect(res).to.have.status(200);
                            expect(res.body.data.length).to.equal(limit);
                            expect(res.body.meta.offset).to.equal(
                                EXPECTED_OFFSET
                            );
                            expect(res.body.meta.total).to.equal(PRODUCT_COUNT);
                            expect(res.body.meta.pages).to.equal(
                                EXPECTED_PAGES
                            );
                            done();
                        }
                    );
            }
        );
    });

    it("DELETE", (done): void => {
        const products = generateProducts(PRODUCT_COUNT);

        Product.insertMany(products, (err, documents) => {
            expect(documents.length).to.equal(PRODUCT_COUNT);

            chai.request(app)
                .delete("/product")
                .end(
                    (err, res): void => {
                        expect(err).to.be.null;
                        expect(res).to.have.status(200);
                        done();
                    }
                );
        });
    });
});

describe("/product/:slug - single product", (): void => {
    const [product] = generateProducts(1);
    const { slug } = product;

    it("GET - added product", (done): void => {
        const newProduct = new Product(product);
        newProduct.save(
            (err, result): void => {
                chai.request(app)
                    .get(`/product/${slug}`)
                    .end(
                        (err, res): void => {
                            expect(err).to.be.null;
                            expect(res).to.have.status(200);
                            expect(res.body.data).to.deep.equal(product);
                            done();
                        }
                    );
            }
        );
    });

    it("GET - lacking product", (done): void => {
        chai.request(app)
            .get(`/product/${slug}`)
            .end(
                (err, res): void => {
                    expect(err).to.be.null;
                    expect(res).to.have.status(404);
                    done();
                }
            );
    });

    it("PUT - with correct data", (done): void => {
        const [PRODUCT_REPLACEMENT] = generateProducts(1);

        const newProduct = new Product(product);
        newProduct.save(
            (err, result): void => {
                chai.request(app)
                    .put(`/product/${slug}`)
                    .send({ productData: PRODUCT_REPLACEMENT })
                    .end(
                        (err, res): void => {
                            expect(err).to.be.null;
                            expect(res).to.have.status(200);
                            done();
                        }
                    );
            }
        );
    });

    it("PUT - with incorrect data", (done): void => {
        const newProduct = new Product(product);
        newProduct.save(
            (err, result): void => {
                chai.request(app)
                    .put(`/product/${slug}`)
                    .send({ productData: { ololo: "random" } })
                    .end(
                        (err, res): void => {
                            expect(err).to.be.null;
                            expect(res).to.have.status(500);
                            done();
                        }
                    );
            }
        );
    });

    it("PUT - with empty body", (done): void => {
        const newProduct = new Product(product);
        newProduct.save(
            (err, result): void => {
                chai.request(app)
                    .put(`/product/${slug}`)
                    .end(
                        (err, res): void => {
                            expect(err).to.be.null;
                            expect(res).to.have.status(400);
                            done();
                        }
                    );
            }
        );
    });

    it("PUT - update lacking product with correct body", (done): void => {
        chai.request(app)
            .put(`/product/${slug}`)
            .send({ productData: product })
            .end(
                (err, res): void => {
                    expect(err).to.be.null;
                    expect(res).to.have.status(404);
                    done();
                }
            );
    });

    it("DELETE - added product", (done): void => {
        const newProduct = new Product(product);
        newProduct.save(
            (err, result): void => {
                chai.request(app)
                    .delete(`/product/${slug}`)
                    .end(
                        (err, res): void => {
                            expect(err).to.be.null;
                            expect(res).to.have.status(200);
                            done();
                        }
                    );
            }
        );
    });

    it("DELETE - lacking product", (done): void => {
        chai.request(app)
            .delete(`/product/${slug}`)
            .end(
                (err, res): void => {
                    expect(err).to.be.null;
                    expect(res).to.have.status(404);
                    done();
                }
            );
    });
});
