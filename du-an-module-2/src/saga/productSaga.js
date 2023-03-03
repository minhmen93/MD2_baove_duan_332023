import * as productServices from "../api/productService";
import { call, put } from "redux-saga/effects";
import { act_product_success } from "../redux/actions";
import { PRODUCT_SUCCESS } from "../redux/constans/actionTypes";

export const PRODUCT_SAGA_GET = function* () {
    try {
        let listProduct = yield call(productServices.PRODUCT_GET_SERVICE);
        yield put(act_product_success(PRODUCT_SUCCESS, listProduct));

    } catch (error) {
        console.log("error==>", error);
    }
};
export const PRODUCT_SAGA_POST = function* (action) {
    try {
        yield call(productServices.PRODUCT_POST_SERVICE, action.payload);
        yield PRODUCT_SAGA_GET();
    } catch (error) {
        console.log("error==>", error);
    }
};
export const PRODUCT_SAGA_PATCH = function* (action) {
    try {
        yield call(productServices.PRODUCT_PATCH_SERVICE, action.payload);
        yield PRODUCT_SAGA_GET();
    } catch (error) {
        console.log("error===>", error);
    }
};
export const PRODUCT_SAGA_DELETE = function* (action) {
    try {
        yield call(productServices.PRODUCT_DELETE_SERVICE, action.payload);
        yield PRODUCT_SAGA_GET();
    } catch (error) {
        console.log("error===>", error)
    }
};




