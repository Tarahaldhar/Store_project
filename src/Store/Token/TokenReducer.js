import {tokenSave} from './TokenConstant';
const initialState={
    token:[],
}
export const reducer=(state, action)=>{
    state=state||initialState
    if(action.type===tokenSave){
        return{
            ...state, token:action.payload
        }
    }
    return state
}