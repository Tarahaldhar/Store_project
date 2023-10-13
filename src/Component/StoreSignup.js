import React, { useState } from 'react';
import './StoreSignup.css';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { actionCreators } from '../Store/Token/TokenAction'
import StoreSignupDashbord from './StoreSignupDashbord';

const StoreSignup = () => {
    const navigate = useNavigate()
    const [apiResData, setApiResData] = useState([])
    const getMasterdetails = useSelector(state => state?.masterLogin?.masterLogin)
    console.log('tokenget', getMasterdetails?.tokens?.access);

    const dispatch = useDispatch()
    const [storesign, setStoreSign] = useState({
        email: "", password: "", cpassword: "", storename: "", address: "", number: ""
    })
    const handleInput = (e) => {
        e.preventDefault()
        setStoreSign({
            ...storesign, [e.target.name]: e.target.value
        })
        console.log('store', storesign);
    }
    const handleSingup = async (e) => {
        e.preventDefault();
        try {
            // Get the access token from the Redux store
            const accessToken = getMasterdetails?.tokens?.access;
            // Check if the access token exists
            if (!accessToken) {
                alert("Access token not available. Please log in.");
                return;
            }
            const response = await axios.post(
                'http://127.0.0.1:8000/master-admin/store-owners/',
                {
                    email: storesign.email,
                    password: storesign.password,
                    confirm_password: storesign.cpassword,
                    store_name: storesign.storename,
                    address: storesign.address,
                    phone_number: storesign.number
                },
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                }
            );
            console.log('response', response.data);
            setApiResData(response.data)
            
            // const { token } = response?.data;
            // console.log('token', token);
            // const tokens = {
            //     access: token?.access?.access,
            //     refresh: token.refresh
            // };

            // console.log('tokens', tokens);
            // dispatch(actionCreators.masterLogin());
            alert("successfully signup")
            navigate('/storedashboard')
        } catch (error) {
            alert("Failed to sign up");
            console.log('error', error);
        }
    };


    // const handleSingup = (e) => {
    //     e.preventDefault()
    //     axios({
    //         url: 'http://127.0.0.1:8000/master-admin/store-owners/',
    //         data: {
    //             "email": storesign.email,
    //             "password": storesign.password,
    //             "confirm_password": storesign.cpassword,
    //             "store_name": storesign.storename,
    //             "address": storesign.address,
    //             "phone_number": storesign.number
    //         },
    //         headers:{
    //             "Authorization": "Bearer ${getMasterdetails?.tokens?.access}"
    //         },
    //         method: "post"
    //     }).then((res) => {
    //         let token = res.data.token
    //         const tokens = {
    //             'access': token.access,
    //             'refresh': token.refresh
    //         }

    //         console.log('tokens', tokens);
    //         console.log('tokkkn',res.data.tokens);

    //         dispatch(actionCreators.masterLogin())

    //     }).catch((error) => {
    //         alert("fail signup")
    //         console.log('error', error);
    //     })
    // }
    return (
        <div>

            {/* <!-- Button trigger modal --> */}
            {/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button> */}

            {/* <!-- Modal --> */}
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            {/* <h5 class="modal-title" id="exampleModalLabel">Modal title</h5> */}
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div className="container z22">
                                <div className="wrapper-card ">
                                    <div className="card_title">
                                        <h1>Create Account</h1>
                                        <span>Already have an account? <a href="login">Sign In</a></span>
                                    </div>
                                    <div className="form">
                                        <form action="/register" method="post">
                                            <input type="text" name="email" id="email" placeholder="Email" onChange={(e) => handleInput(e)} />
                                            <input type="text" name="password" id="password" placeholder="Password" onChange={(e) => handleInput(e)} />
                                            <input type="text" name="cpassword" id="cpassword" placeholder="Confirm Password" onChange={(e) => handleInput(e)} />
                                            <input type="text" name="storename" placeholder="Store Name" id="store" onChange={(e) => handleInput(e)} />
                                            <input type="text" name="address" placeholder="Addresh" id="address" onChange={(e) => handleInput(e)} />
                                            <input type="text" name="number" placeholder="Number" id="number" onChange={(e) => handleInput(e)} />
                                            <button onClick={(e) => handleSingup(e)}>Sign Up</button>
                                        </form>
                                    </div>
                                    <div className="card_terms">
                                        <input type="checkbox" name="" id="terms" /> <span>I have read and agree to the <a href="">Terms of Service</a></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            {/* <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button> */}
                        </div>
                    </div>
                </div>
            </div>

            <StoreSignupDashbord apiData={apiResData} />




        </div>
    )
}

export default StoreSignup