import axios from 'axios'
import { CreateMasterLogin } from './MasterLoginConstant';
export const actionCreators = {
    masterLogin: (login) => async (dispatch, getState) => {
        const getResultPost=getState().masterLogin.masterLogin
        console.log('getPost', getResultPost);
        axios({
            url: 'http://127.0.0.1:8000/master-admin/login/',
            data: {
                "username": login.name,
                "password":login.password
            },
            method: 'post'
        }).then((res) => {
            console.log('apipost',res?.data?.tokens);
            dispatch({ type: CreateMasterLogin, payload: res?.data })
        }).catch((error)=>{
            alert("connection fail")
            console.log('error',error);
        })
    }
}