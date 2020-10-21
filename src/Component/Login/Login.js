import React, { useContext, useState } from 'react';
import { Button, Form} from 'react-bootstrap';
import './Login.css'
import facebook from '../../Icon/fb.png';
import google from '../../Icon/google.png';
import {signinwithgoogle, initializeLoginFrameWork, CreateUserWithPassword, signInWithPassword, faceBookLogin} from '../auth'
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {

    const [loggedIn, setLoggedIn] = useContext(UserContext)
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const [newUser, setNewUser] =  useState(false)
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        firstname: '',
        lastname: '',
        password: '',
        confirmpasseword: '',
        error: '',
      })

    initializeLoginFrameWork()
    const signInGoogle = () => {
        signinwithgoogle()
        .then(res=>{
            setUser(res)
            setLoggedIn(res)
            history.replace(from);
        })
        .catch(error=> console.log(error))
    }
    const fbLogin = () =>{
        faceBookLogin()
        .then(res=>{
            setUser(res)
            setLoggedIn(res)
            history.replace(from);
        })
    }
    const handleChange = (e) => {
        let formValid = true;
        if(e.target.name === 'email'){
            formValid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e.target.value);
        }
        if(e.target.name === 'password'){
            const passwordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/.test(e.target.value);
            formValid = passwordValid;
        }
        if(formValid){
        const newUserInfo = {...user}
        newUserInfo[e.target.name] = e.target.value;
        setUser(newUserInfo)
        }
    }
    const handleSubmit = (e) =>{
        if(newUser && user.email && user.password){
            CreateUserWithPassword(user.email, user.password)
            .then(res=>{
                setUser(res)
                setLoggedIn(res)
                history.replace(from);
            })
            .catch(error=>{
                setUser(error)
            })
        }

        if(!newUser && user.email && user.password)
        signInWithPassword(user.email, user.password)
        .then(res=>{
            setUser(res)
            setLoggedIn(res)
            history.replace(from);
        })
        .catch(error=>{
            setUser(error)
        })

        e.preventDefault()
    }

    
    
    return (
        <div className="auth">
            <div className="login p-4 position-absolute">
                { !newUser &&
                    <Form onSubmit={handleSubmit}>
                    <h5>Login</h5>
                    <Form.Control className="mt-3 custom-form" placeholder="Email"  onBlur={handleChange} name="email"/>
                    <Form.Control className="mt-3 custom-form" placeholder="Password"  onBlur={handleChange} name="password"  type="password"/>
                    <Form.Row className="mt-1 d-flex justify-content-between">
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember Me" />
                    </Form.Group>
                    <u className="form-underline">Forgot Password</u>               
                    </Form.Row>
                    <Button className="log-in mt-1 w-100" variant="warning" type="submit"><b>Sign In</b></Button>
                    <Form.Row className="mt-1 small-text d-flex justify-content-between">
                    <p style={{cursor: 'pointer'}}>Don't Have a Account? </p> <u className="form-underline" onClick={()=> setNewUser(true)}>Create an Account</u>    
                    </Form.Row>
                    <p className="text-center or">or</p>
                    <Button className="signin-btn" onClick={fbLogin}>
                        <img className="icon" src={facebook}  alt="fb"/>Continue with Facebook
                    </Button>
                    <Button className="mt-1 signin-btn" onClick={signInGoogle}>
                        <img className="icon" src={google} alt="fb"/>Continue with Google
                    </Button>
                </Form>}

                { newUser && 
                    <Form onSubmit = {handleSubmit}>
                    <h5>Create an Account</h5>
                    <Form.Control className="mt-3 custom-form" onBlur={handleChange} name="firstname" placeholder="First Name"/>
                    <Form.Control className="mt-3 custom-form" onBlur={handleChange} name="lastname" placeholder="Last Name"/>
                    <Form.Control className="mt-3 custom-form" onBlur={handleChange} name="email" placeholder="Email"/>
                    <Form.Control className="mt-3 custom-form" onBlur={handleChange} name="password" placeholder="Password" type="password"/>
                    <Form.Control className="mt-3 custom-form" onBlur={handleChange} name="confirmpassword" placeholder="Confirm Password" type="password"/>
                    
                    <Button className="log-in mt-3 w-100" variant="warning" type="submit"><b>Sign Up</b></Button>

                    <Form.Row className="mt-1 small-text d-flex justify-content-center">
                    <p style={{cursor: 'pointer'}}>Already Have a Account? </p> <u className="form-underline" onClick={()=> setNewUser(false)}>Login</u>    
                    </Form.Row>
                    <p className="text-center or">or</p>
                    <Button className="signin-btn"  onClick={fbLogin}>
                        <img className="icon" src={facebook} alt="fb"/>Continue with Facebook
                        </Button>
                    <Button className="mt-1 signin-btn" onClick={signInGoogle}>
                        <img className="icon" src={google} alt="fb" />Continue with Google
                        </Button>
                </Form>}
            </div>
        </div>

        
    );
};

export default Login;