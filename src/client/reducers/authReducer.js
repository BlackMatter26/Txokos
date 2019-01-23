import * as types from '../constants/actionTypes';
const initialState = {
}
export default function(state = initialState, action) {
    switch(action.type){
        case types.FETCH_USER:
            return{
                ...state,
                user: action.payload
            };
        default:
            return state;
    }
}