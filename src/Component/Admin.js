import React, { useState } from 'react';
import './MasterLoginForm.css';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../Store/MasterLogin/MasterLoginAction';
import { google } from '../google_profile.svg'
import { logo } from '../img/wiseowl.png';
import { useNavigate } from 'react-router-dom';
const Admin = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [masterLogin, setMasterLogin] = useState({
        name: "", password: "",
    })
    const handleInput = (e) => {
        e.preventDefault()
        setMasterLogin({
            ...masterLogin, [e.target.name]: e.target.value
        })
        console.log('login', masterLogin);
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(actionCreators?.masterLogin(masterLogin))
        navigate('/dashboard')
    }
    return (
        <div>
            <form className='login'>
                <div className='logo-admin'>
                    <img className='logothe-wise-owl' src='img/wiseowl.png' />
                </div>
                <p style={{ textAlign: 'center', fontSize: '20px', color: '#71717A', marginBottom: '7px' }}>Login with</p>
                <div className='loginwith-parent'>
                    <div className='loginwithChild'>
                        <div className='google-parent'>
                            <img className='google' src='img/google_profile.svg' />&nbsp;
                            <span>GOOGLE</span>&nbsp;

                        </div>
                        &nbsp; &nbsp;
                        <div className='facebook-parent'>
                            <img className='google' src='img/facebook.svg' />&nbsp;
                            <span>FACEBOOK</span>&nbsp;
                        </div>
                    </div>

                </div>
                <br />
                <hr />
                <br />
                <div className='orLoginwithCredn'>
                    <p style={{ color: '#71717A', fontWeight: '500', marginBottom: '10px' }}>Or login with credential</p>
                </div>
                <input type='text' name='name' value={masterLogin.name} onChange={(e) => handleInput(e)} placeholder='User Name' />
                <input type='password' name='password' value={masterLogin.password} onChange={(e) => handleInput(e)} placeholder='Password' />

                {/* checkbox */}
                <div class="form-check form-check-inline checkbox-parent">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                    <label class="form-check-label" for="inlineCheckbox1" style={{fontSize:'14px'}}>Remember</label>
                </div>
                {/* end checkbox */}

                <input type='submit' onClick={(e) => handleSubmit(e)} value="Log In" />
                <div className="links">
                    <a >Forgot</a>
                    <a >Register</a>
                </div>


            </form>
        </div>
    )
}

export default Admin