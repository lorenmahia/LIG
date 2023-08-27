import React, { useState } from 'react';

import { Link, Navigate } from "react-router-dom";


import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { create_user } from '../../actions/auth';
import Spinner from '../Spinner/Spinner';

const Registration = ({ create_user, isAuthenticated, isLoading, token, user }) => {
    const [userDetails, setUserDetails] = useState({
        fullname: '',
        email: '',
        password: '',
        password2: ''
    });
    const handleChange = (e) => setUserDetails({
        ...userDetails,
        [e.target.name]: e.target.value
    });
    const { fullname, email, password, password2 } = userDetails;
    const handleSubmit = (e) => {
        e.preventDefault();
        create_user({ fullname, email, password, password2 });
    };
    if (user) {
        if (isAuthenticated && !user.isVerified) {
            return <Navigate to="/email-confirm" />;
        }
        else if (isAuthenticated && user.isVerified) {
            return <Navigate to="/transactions" />;
        }
    } else {
        return (
            <div class="login-page bg-light animated slideInDown">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-10 offset-lg-1">
                            <h3 class="mb-3">Register Now</h3>
                            <div class="bg-white shadow rounded">
                                <div class="row">

                                    <div class="col-md-5 ps-0 d-none d-md-block">
                                        <div class="form-right h-100 bg-primary text-white text-center" style={{ display: 'grid', placeItems: 'center' }}>
                                            <div >
                                                <i class="bi bi-bootstrap"></i>
                                                <h2 class="fs-1" style={{ color: 'white' }}>Create Account!!!</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-7 pe-0">
                                        <div class="form-left h-100 py-5 px-5">
                                            {isLoading ? <Spinner /> :
                                                <form class="row g-4" onSubmit={(e) => handleSubmit(e)}>
                                                    <div class="col-12">
                                                        <label>Full Name<span class="text-danger">*</span></label>
                                                        <div class="input-group">
                                                            <div class="input-group-text"><i class="bi bi-person-fill"></i></div>
                                                            <input type="text" class="form-control" placeholder="Enter Your Name"
                                                                name='fullname'
                                                                value={fullname}
                                                                onChange={(e) => handleChange(e)}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <label>Email<span class="text-danger">*</span></label>
                                                        <div class="input-group">
                                                            <div class="input-group-text"><i class="bi bi-envelope-at-fill"></i></div>
                                                            <input type="email" class="form-control" placeholder="Enter Your Email"
                                                                name='email'
                                                                value={email}
                                                                onChange={(e) => handleChange(e)}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <label>Password<span class="text-danger">*</span></label>
                                                        <div class="input-group">
                                                            <div class="input-group-text"><i class="bi bi-lock-fill"></i></div>
                                                            <input type="password" class="form-control" placeholder="Enter Password"
                                                                name='password'
                                                                value={password}
                                                                onChange={(e) => handleChange(e)}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <label>Confirm Password<span class="text-danger">*</span></label>
                                                        <div class="input-group">
                                                            <div class="input-group-text"><i class="bi bi-lock-fill"></i></div>
                                                            <input type="password" class="form-control" placeholder="Confirm Password"
                                                                name='password2'
                                                                value={password2}
                                                                onChange={(e) => handleChange(e)}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div class="col-sm-12">
                                                        <span className='float-end'>Already have an account?
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

Registration.propTypes = {
    create_student_user: PropTypes.func.isRequired,
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
export default connect(mapStateToProps, { create_user })(Registration);