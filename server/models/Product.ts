import { Document, model, Model, Schema } from "mongoose";

export interface ProductInterface {
    id: string;
    image: string;
    isAvailable: boolean;
    name: string;
    price: number;
    slug: string;
}

const ProductSchema: Schema<ProductInterface> = new Schema({
    id: String,
    image: String,
    isAvailable: Boolean,
    name: String,
    price: Number,
    slug: {
        type: String,
        required: true,
        unique: true
    }
});

const Product: Model<Document & ProductInterface> = model(
    "Product",
    ProductSchema
);

export default Product;
