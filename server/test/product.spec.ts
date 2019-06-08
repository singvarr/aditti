import chai, { expect } from "chai";
import chaiHttp from "chai-http";

import app from "../";
import Product from "models/Product";
import generateProducts from "utils/generateRandomProducts";

chai.use(chaiHttp);

describe("/product", (): void => {
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

    it("GET: /", (done): void => {
        const productsCount = 150;
        const products = generateProducts(productsCount);

        Product.insertMany(products).then(
            (): void => {
                chai.request(app)
                    .get("/product")
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
});
