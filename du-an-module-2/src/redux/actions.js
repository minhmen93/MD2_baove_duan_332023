import * as actionTypes from "./constans/actionTypes";
//products
export const act_get_product = () => {
    return {
        type: actionTypes.PRODUCT_GET
    }
}
export const act_product_success = (actionType, list) => {
    return {
        type: actionType,
        payload: list
    }
}
export const act_create_product = (newProduct) => {
    console.log(newProduct);
    return {
        type: actionTypes.PRODUCT_POST,
        payload: newProduct
    }
}
export const act_update_product = (updateProduct) => {
    console.log(updateProduct);
    return {
        type: actionTypes.PRODUCT_PATCH,
        payload: updateProduct
    }
}
export const act_delete_product = (id) => {
    return {
        type: actionTypes.PRODUCT_DELETE,
        payload: id
    }
}
//users
export const act_get_user = () =>{
    return {
        type: actionTypes.USER_GET,
    }
}
export const act_post_user = (newUser)=>{
return {
    type: actionTypes.USER_POST,
    payload: newUser,
};
};
export const act_sucsess_user=(actionType,date)=>{
    return {
        type: actionType,
        payload: date,
    }
}