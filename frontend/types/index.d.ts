import { AuthState } from "./auth";
import { CarouselState } from "./carousel";
import { CartState } from "./cart";
import { CategoriesState } from "./categories";
import { ProductsState } from "./products";

export type State = {
    auth: AuthState;
    carousel: CarouselState;
    cart: CartState;
    categoties: CategoriesState;
    products: ProductsState;
};
