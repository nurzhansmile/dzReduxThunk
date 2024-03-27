import { types } from "./types"

const fetchAllUserDispatchAction = (users)=>{
    return {
        type:types.USERS,
        payload: users
    }
}

const fetchUserByIdDispatch = (user)=>{
    return{
        type:types.USER,
        payload:user
    }
}

export const fetchAllUsersAction = ()=>{
    return async function(dispatch){
        const res = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await res.json()
        dispatch(fetchAllUserDispatchAction(data))
    }
}


export function fetchUserByIdAction(id){
    return async function(dispatch){
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        const data = await res.json()
        dispatch(fetchUserByIdDispatch(data))
    }
}

