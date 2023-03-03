
import { instances } from "./axios";

export const PRODUCT_GET_SERVICE = async () => {
    let response = await instances.get("products");
    return response.data;
}
export const PRODUCT_POST_SERVICE = async (newProduct) => {
    await instances.post("products", newProduct);
}

export const PRODUCT_PATCH_SERVICE = async (updateProduct) => {
    await instances.patch("products/" + updateProduct.id, updateProduct);
}

export const PRODUCT_DELETE_SERVICE = async (id) => {
    await instances.delete("products/" + id)
}   