import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { forget_password_confirm } from '../../actions/auth';

import { Navigate } from "react-router-dom";
import Spinner from '../Spinner/Spinner';

const PasswordChangeConfirm = ({ forget_password_confirm, isAuthenticated, isLoading, user, passwordResetRequest }) => {
    const [userFormDetails, setUserFormDetails] = useState({
        token: "",
        password1: "",
        password2: "",
    });
    const { token, password1, password2 } = userFormDetails;

    const loginChange = (e) => {
        setUserFormDetails({
            ...userFormDetails,
            [e.target.name]: e.target.value
        });
    };
    const handlePasswordResetSubmit = (e) => {
        e.preventDefault();
        console.log('hello');
        forget_password_confirm({ token, password1, password2 });
    };
    if (isAuthenticated && user && user.isVerified) {
        return <Navigate to="/transactions" />;
    }
    else if (isAuthenticated && user && !user.isVerified) {
        return <Navigate to="/email-confirm" />;
    }
    else if (!isAuthenticated && passwordResetRequest === "reset done") {
        return <Navigate to="/login" />;
    }
    else {
        return (
            <div class="login-page bg-light animated slideInDown">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-10 offset-lg-1">
                            <h3 class="mb-3">Enter OTP & New Password</h3>
                            <div class="bg-white shadow rounded">
                                <div class="row">

                                    <div class="col-md-5 ps-0 d-none d-md-block">
                                        <div class="form-right h-100 bg-primary text-white text-center" style={{ display: 'grid', placeItems: 'center' }}>
                                            <div >
                                                <i class="bi bi-bootstrap"></i>
                                                <h2 class="fs-1" style={{ color: 'white' }}>Change Password!!!</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-7 pe-0">
                                        <div class="form-left h-100 py-5 px-5">
                                            {isLoading ? <Spinner /> :
                                                <form class="row g-4" onSubmit={(e) => handlePasswordResetSubmit(e)}>
                                                    <div class="col-12">
                                                        <label>OTP<span class="text-danger">*</span></label>
                                                        <div class="input-group">
                                                            <div class="input-group-text"><i class="bi bi-person-fill"></i></div>
                                                            <input type="text" class="form-control" placeholder="Enter OTP"
                                                                onChange={e => loginChange(e)}
                                                                name="token"
                                                                value={token}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div class="col-12">
                                                        <label>Password<span class="text-danger">*</span></label>
                                                        <div class="input-group">
                                                            <div class="input-group-text"><i class="bi bi-lock-fill"></i></div>
                                                            <input type="password" class="form-control" placeholder="New Password"
                                                                onChange={e => loginChange(e)}
                                                                name="password1" value={password1}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <label>Confirm Password<span class="text-danger">*</span></label>
                                                        <div class="input-group">
                                                            <div class="input-group-text"><i class="bi bi-lock-fill"></i></div>
                                                            <input type="password" class="form-control" placeholder="Confirm New Password"
                                                                onChange={e => loginChange(e)}
                                                                name="password2" value={password2}
                                                            />
                                                        </div>
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
PasswordChangeConfirm.propTypes = {
    forget_password_confirm: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    passwordResetRequest: PropTypes.string,
    user: PropTypes.object
};
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    passwordResetRequest: state.auth.passwordResetRequest,
    isLoading: state.auth.isLoading,
    user: state.auth.user
});

export default connect(mapStateToProps, { forget_password_confirm })(PasswordChangeConfirm);
