import  {CreateMasterLogin} from './MasterLoginConstant';
let initialState={
masterLogin:[],
}

export const reducer=(state, action)=>{
    state = state||initialState
    if(action.type===CreateMasterLogin){
        return{
            ...state, masterLogin:action.payload
        }
    }
    return state
}