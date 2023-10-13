import {getStoreOwner} from './StoreContant'
import {editStore} from './StoreContant'

const initialState={
    storeOwner:[]
    
}

export const reducer=(state, action)=>{
    state=state||initialState
    if(action.type===getStoreOwner){
        return{
            ...state, storeOwner:action.payload
        }   
    }
    if(action.type===editStore){
        return{
            ...state, storeOwner:action.payload
        }
    }
    return state
}