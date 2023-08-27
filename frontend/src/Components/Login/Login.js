import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

import './Login.css';

import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { login } from '../../actions/auth';
import Spinner from '../Spinner/Spinner';



const Login = ({ login, isAuthenticated, isLoading, token, user }) => {
    const [userFormDetails, setUserFormDetails] = useState({
        email: "",
        password: ""
    });
    const { email, password } = userFormDetails;

    const loginChange = (e) => {
        setUserFormDetails({
            ...userFormDetails,
            [e.target.name]: e.target.value
        });
    };
    const handleLoginSubmit = (e) => {
        e.preventDefault();

        login({ email, password });
    };
    if (isAuthenticated && user && user.isVerified) {
        return <Navigate to="/transactions" />;
    }
    else if (isAuthenticated && user && !user.isVerified) {
        return <Navigate to="/email-confirm" />;
    }
    return (
        <div div class="login-page bg-light animated slideInDown" >
            <div class="container">
                <div class="row">
                    <div class="col-lg-10 offset-lg-1">
                        <h3 class="mb-3">Login Now</h3>
                        <div class="bg-white shadow rounded">
                            <div class="row">

                                <div class="col-md-5 ps-0 d-none d-md-block">
                                    <div class="form-right h-100 bg-primary text-white text-center" style={{ display: 'grid', placeItems: 'center' }}>
                                        <div >
                                            <i class="bi bi-bootstrap"></i>
                                            <h2 class="fs-1" style={{ color: 'white' }}>Log In!!!</h2>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-7 pe-0">
                                    <div class="form-left h-100 py-5 px-5">
                                        {isLoading ? <Spinner /> :
                                            <form class="row g-4" onSubmit={(e) => handleLoginSubmit(e)} >
                                                <div class="col-12">
                                                    <label>Email<span class="text-danger">*</span></label>
                                                    <div class="input-group">
                                                        <div class="input-group-text"><i class="bi bi-envelope-at-fill"></i></div>
                                                        <input type="text" class="form-control"
                                                            onChange={e => loginChange(e)}
                                                            placeholder="Enter Email"
                                                            name="email"
                                                            value={email}
                                                        />
                                                    </div>
                                                </div>

                                                <div class="col-12">
                                                    <label>Password<span class="text-danger">*</span></label>
                                                    <div class="input-group">
                                                        <div class="input-group-text"><i class="bi bi-lock-fill"></i></div>
                                                        <input type="password" class="form-control"
                                                            onChange={e => loginChange(e)}
                                                            placeholder="Enter Password"
                                                            name="password"
                                                            value={password}
                                                        />
                                                    </div>
                                                </div>

                                                <div class="col-sm-6">
                                                    <span className=''>Don't have account?
                                                        <Link to="/registration" class="text-primary"> Create Now</Link>
                                                    </span>
                                                </div>

                                                <div class="col-sm-6">
                                                    <Link to="/password-change-start" class="float-end text-primary">Forgot Password?</Link>
                                                </div>

                                                <div class="col-12">
                                                    <button type="submit" class="btn btn-primary px-4 float-end mt-2">login</button>
                                                </div>
                                            </form>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    );
};

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    token: PropTypes.string,
    user: PropTypes.object
};
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    isLoading: state.auth.isLoading,
    token: state.auth.token,
    user: state.auth.user
});

export default connect(mapStateToProps, { login })(Login);