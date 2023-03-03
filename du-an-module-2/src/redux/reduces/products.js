import { PRODUCT_SUCCESS } from "../constans/actionTypes";
const initiallState = [];
export const products = (state = initiallState, action) => {
    switch (action.type) {
        case PRODUCT_SUCCESS:
            return [...action.payload];
        default:
            return state;
    }
}