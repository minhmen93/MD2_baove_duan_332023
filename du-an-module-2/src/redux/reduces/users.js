import { USER_SUCCESS } from "../constans/actionTypes";

const initialState = [];
export const user = (state=initialState,action) =>{
    switch (action.tyle){
        case USER_SUCCESS:
            return[...action.payload];
        default:
            return state;
    }
}