import axios from 'axios';
import {getStoreOwner} from './StoreContant';
import {editStore} from './StoreContant'
export const actionCreators={

    storeOwner:(owner)=>async(dispatch, getState) =>{
        console.log('getsatate', getState());
        dispatch({type:getStoreOwner, payload:owner})
    },
    storeEditData:(editstore)=>async(dispatch, getState)=>{
        axios({
            url:'http://127.0.0.1:8000/master-admin/store-owners/',
            data:{
                "id": editstore.id,
                "email": editstore.email,
                "password": editstore.password,
                "confirm_password": editstore.confirm_password,
                "store_name": editstore.store_name,
                "address": editstore.address,
                "phone_number": editstore.phone_number
            },
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
            method:'put'
        }).then((res)=>{
            dispatch({type:editStore, payload:res.data})
        })
    }

}