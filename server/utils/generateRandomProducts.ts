import faker from "faker";

function generateProducts(limit: number = 100) {
    let products = [];

    for (let i = 0; i < limit; i++) {
        const productName = faker.commerce.productName();

        products.push({
            id: faker.random.uuid(),
            image: faker.image.fashion(),
            isAvailable: faker.random.boolean(),
            name: productName,
            price: parseInt(faker.commerce.price()),
            slug: faker.helpers.slugify(productName)
        });
    }

    return products;
}

export default generateProducts;
