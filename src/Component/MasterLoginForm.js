import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './MasterLoginForm.css';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators } from '../Store/MasterLogin/MasterLoginAction';
import axios from 'axios';

const MasterLoginForm = () => {
    const navigate=useNavigate()
    const tokenselector=useSelector(state=>state.token.token)
    console.log('token', tokenselector);
    const masterApi = useSelector(state => state.masterLogin.masterLogin)
    console.log('useSelector', masterApi);
    const dispatch = useDispatch()
    const [masterLogin, setMasterLogin] = useState({
        name: "", password: "",
    })

// token save using local storage
localStorage.setItem('token', tokenselector);

// Retrieve the token when needed (e.g., during authentication)
const token=localStorage.getItem('token')


    const handleInput = (e) => {
        e.preventDefault()
        setMasterLogin({
            ...masterLogin, [e.target.name]: e.target.value
        })
    }
    console.log('loginStateData', masterLogin);
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(actionCreators.masterLogin(masterLogin))
        axios({
            url: 'http://127.0.0.1:8000/master-admin/login/',
            data: {
                "username": masterLogin.name,
                "password": masterLogin.password
            },
            method: 'post',
        }).then((result) => {
            console.log(result.data);
            navigate('/dashboard')
        })
    
    }
    return (
        <div>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            {/* <h5 class="modal-title" id="exampleModalLabel">Modal title</h5> */}
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form className='login'>
                                <h3>Login with</h3>
                                <input type='text' name='name' value={masterLogin.name} onChange={(e) => handleInput(e)} placeholder='User Name' />
                                <input type='password' name='password' value={masterLogin.password} onChange={(e) => handleInput(e)} placeholder='Password' />
                                <input type='submit' onClick={(e) => handleSubmit(e)}  value="Log In" />
                                <div className="links">
                                    <Link >Forgot</Link>
                                    <Link >Register</Link>
                                </div>
                            </form>
                        </div>
                        {/* <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MasterLoginForm
