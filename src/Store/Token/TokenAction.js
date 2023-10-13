import {tokenSave} from './TokenConstant'
export const actionCreators={
    saveToken:(token)=>async(dispatch, getState)=>{
        console.log('getState',getState());
        dispatch({type:tokenSave, payload:token})
    }
}