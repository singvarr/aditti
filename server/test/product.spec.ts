import { connection } from "mongoose";
import connectToDB from "utils/connectToDB";
import Product from "models/Product";
import generateProducts from "utils/generateRandomProducts";

describe("/products", function(): void {
    before(function(): void {
        const { TEST_DB_URL, TEST_DB_USER, TEST_DB_PASSWORD } = process.env;

        connectToDB(TEST_DB_URL, TEST_DB_USER, TEST_DB_PASSWORD);
    });

    afterEach(function(): void {
        connection.db.dropCollection("products");
    });

    after(function(): void {
        connection.close();
    });

    it("GET products", function(): void {
        const products = generateProducts(100);
        Product.insertMany(products)
            .then(() => "ololo");
    });
});
