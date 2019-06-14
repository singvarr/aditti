import faker from "faker";
import { ProductInterface } from "models/Product";

function createRandomProducts(limit: number = 100): ProductInterface[] {
    let products = [];
    for (let i = 0; i < limit; i++) {
        products.push({
            id: faker.random.uuid(),
            image: faker.image.fashion(),
            isAvailable: faker.random.boolean(),
            name: faker.commerce.productName(),
            price: parseInt(faker.commerce.price()),
            slug: faker.random.uuid()
        });
    }

    return products;
}

export default createRandomProducts;
