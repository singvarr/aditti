import { combineReducers } from "redux";

import auth, { AuthState } from "reducers/auth";
import carousel, { CarouselState } from "reducers/carousel";
import cart, { CartState } from "reducers/cart";
import categories, { CategoriesState } from "reducers/categories";
import products, { ProductsState } from "reducers/products";

const reducer = combineReducers({
    auth,
    carousel,
    cart,
    categories,
    products
});

export type State = {
    auth: AuthState;
    carousel: CarouselState;
    cart: CartState;
    categories: CategoriesState;
    products: ProductsState;
};

export default reducer;
