import faker from "faker";

function generateProducts(limit: number = 100) {
    let products = [];

    for (let i = 0; i < limit; i++) {
        products.push({
            id: faker.random.uuid(),
            isAvailable: faker.random.boolean(),
            name: faker.commerce.productName(),
            price: faker.commerce.price(),
            image: faker.image.fashion()
        });
    }

    return products;
}

export default generateProducts;
