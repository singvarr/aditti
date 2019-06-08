import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import chai, { expect } from "chai";
import chaiHttp from "chai-http";

import app from "../";
import Product from "../models/Product";
import generateProducts from "../utils/generateRandomProducts";

chai.use(chaiHttp);

let mongoServer: MongoMemoryServer;

before(function(done): void {
    this.timeout(6000);
    mongoServer = new MongoMemoryServer();
    mongoServer
        .getConnectionString()
        .then(
            (mongoUri): Promise<typeof mongoose> => {
                return mongoose.connect(
                    mongoUri,
                    { useNewUrlParser: true },
                    (err): void => {
                        if (err) done(err);
                    }
                );
            }
        )
        .then((): void => done());
});

afterEach(
    (): void => {
        mongoose.connection.dropDatabase();
    }
);

after(
    (): void => {
        mongoose.disconnect();
        if (mongoServer) mongoServer.stop();
    }
);

describe("/product", (): void => {
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
