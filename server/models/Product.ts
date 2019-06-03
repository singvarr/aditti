import { model, Schema } from "mongoose";

const ProductSchema = new Schema({
    id: String,
    isAvailable: Boolean,
    name: String,
    price: Number,
    image: String
});

const Product = model("Product", ProductSchema);

export default Product;
