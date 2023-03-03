import { all, takeLatest } from "redux-saga/effects";
import * as actionTypes from "../redux/constans/actionTypes";
import * as productSagas from "./productSaga";
import * as userSaga from "./userSaga";

export const rootSaga = function* () {
    yield all([
        takeLatest(actionTypes.PRODUCT_GET, productSagas.PRODUCT_SAGA_GET),
        takeLatest(actionTypes.PRODUCT_POST, productSagas.PRODUCT_SAGA_POST),
        takeLatest(actionTypes.PRODUCT_PATCH, productSagas.PRODUCT_SAGA_PATCH),
        takeLatest(actionTypes.PRODUCT_DELETE, productSagas.PRODUCT_SAGA_DELETE),

        takeLatest(actionTypes.USER_GET, userSaga.USER_SAGA_GET),
        takeLatest(actionTypes.USER_POST, userSaga.USER_SAGA_POST)

    ])
}