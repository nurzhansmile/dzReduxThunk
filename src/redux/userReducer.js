import { types } from "./types"

const initialState = {
    users: [],
    user: {}
}

export default function userReducer(state = initialState, action) {
    if(action.type === types.USERS){
        return {
            ...state, users:action.payload
        }
    }
    if(action.type === types.USER){
        return{...state, user: action.payload}
    }
    return state
}