import { model, Schema } from "mongoose";

const ProductSchema = new Schema({
    id: String,
    image: String,
    isAvailable: Boolean,
    name: String,
    price: Number,
    slug: String
});

const Product = model("Product", ProductSchema);

export default Product;
