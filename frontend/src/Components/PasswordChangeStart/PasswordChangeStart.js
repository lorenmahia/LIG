import React, { useState } from 'react';

import { Link, Navigate } from "react-router-dom";

import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { forget_password } from '../../actions/auth';
import Spinner from '../Spinner/Spinner';

const PasswordChangeStart = ({ forget_password, isAuthenticated, isLoading, token, user, passwordResetRequest }) => {
    const [userFormDetails, setUserFormDetails] = useState({
        email: "",
    });
    const { email } = userFormDetails;

    const loginChange = (e) => {
        setUserFormDetails({
            ...userFormDetails,
            [e.target.name]: e.target.value
        });
    };
    const handlePasswordResetSubmit = (e) => {
        e.preventDefault();
        forget_password({ email });
    };
    if (isAuthenticated && user && user.isVerified) {
        return <Navigate to="/transactions" />;
    }
    else if (isAuthenticated && user && !user.isVerified) {
        return <Navigate to="/email-confirm" />;
    }
    else if (!isAuthenticated && passwordResetRequest === "email found") {
        return <Navigate to="/password-change-confirm" />;
    }
    else {

        return (
            <div class="login-page bg-light animated slideInDown">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-10 offset-lg-1">
                            <h3 class="mb-3">Reset Password</h3>
                            <div class="bg-white shadow rounded">
                                <div class="row">

                                    <div class="col-md-5 ps-0 d-none d-md-block">
                                        <div class="form-right h-100 bg-primary text-white text-center" style={{ display: 'grid', placeItems: 'center' }}>
                                            <div >
                                                <i class="bi bi-bootstrap"></i>
                                                <h2 class="fs-1" style={{ color: 'white' }}>Reset Password!!!</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-7 pe-0">
                                        <div class="form-left h-100 py-5 px-5">
                                            {isLoading ? <Spinner /> :
                                                <form class="row g-4" onSubmit={(e) => handlePasswordResetSubmit(e)}>
                                                    <div class="col-12">
                                                        <label>Email<span class="text-danger">*</span></label>
                                                        <div class="input-group">
                                                            <div class="input-group-text"><i class="bi bi-person-fill"></i></div>
                                                            <input type="text" class="form-control" placeholder="Enter Email"
                                                                onChange={e => loginChange(e)}
                                                                name="email"
                                                                value={email}

                                                            />
                                                        </div>
                                                    </div>



                                                    <div class="col-sm-6">
                                                        <span className=''>Don't have account?
                                                            <Link to="/registration" class="text-primary"> Create Now</Link>
                                                        </span>
                                                    </div>

                                                    <div class="col-sm-6">
                                                        <span className='float-end'>Already have account?
                                                            <Link to="/login" class="text-primary"> Log In</Link>
                                                        </span>
                                                    </div>

                                                    <div class="col-12">
                                                        <button type="submit" class="btn btn-primary px-4 float-end mt-2">Submit</button>
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
            </div>
        );
    }
};
PasswordChangeStart.propTypes = {
    forget_password: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    passwordResetRequest: PropTypes.string,
    token: PropTypes.string,
    user: PropTypes.object
};
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    passwordResetRequest: state.auth.passwordResetRequest,
    isLoading: state.auth.isLoading,
    token: state.auth.token,
    user: state.auth.user
});

export default connect(mapStateToProps, { forget_password })(PasswordChangeStart);
