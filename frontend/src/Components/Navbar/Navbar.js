import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';

import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { logout } from '../../actions/auth';

const Navbar = ({ logout, isLoading, user, isAuthenticated, token, account }) => {
    const navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault();
        logout();
        navigate('/login');
    };

    return (
        <div class="container-fluid fixed-top px-0 wow fadeIn bg-white shadow" data-wow-delay="0.1s">
            <nav class="navbar navbar-expand-lg navbar-light py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
                <Link to="/" class="navbar-brand ms-4 ms-lg-0">
                    <h1 class="display-5 text-primary m-0">Loren Investment Group</h1>
                </Link>
                <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav ms-auto p-4 p-lg-0">
                        <NavLink to="/" exact className="nav-item nav-link" activeClassName="active">Home</NavLink>
                        <NavLink to="/about" exact className="nav-item nav-link" activeClassName="active">About</NavLink>
                        <NavLink to="/contact" exact className="nav-item nav-link" activeClassName="active">Contact</NavLink>
                        {
                            (isAuthenticated && !user.isVerified) &&
                            <><NavLink to="/confirm-email" exact className="nav-item nav-link" activeClassName="active">Contact</NavLink>
                                <NavLink to="/transactions" exact className="nav-item nav-link" activeClassName="active">Transactions</NavLink>
                                <NavLink to="" className="btn btn-primary nav_btn_wrapper animated__slideInDown" onClick={(e) => handleLogout(e)}>Log Out</NavLink>
                            </>
                        }
                        {
                            (!token && !isAuthenticated) &&
                            <NavLink to="/login" className="btn btn-primary nav_btn_wrapper animated__slideInDown">Log In</NavLink>
                        }
                        {(token && isAuthenticated && user.isVerified && account) &&
                            <>
                                <NavLink to="/transactions" exact className="nav-item nav-link" activeClassName="active">Transactions</NavLink>
                                <NavLink to="" className="btn btn-primary nav_btn_wrapper animated__slideInDown" onClick={(e) => handleLogout(e)}>Log Out</NavLink>
                            </>
                        }
                        {(token && isAuthenticated && user.isVerified && !account) &&
                            <>
                                <NavLink to="/transactions" exact className="nav-item nav-link" activeClassName="active">Transactions</NavLink>
                                <NavLink to="/accountreg" exact className="nav-item nav-link" activeClassName="active">Start Investing</NavLink>
                                <NavLink to="" className="btn btn-primary nav_btn_wrapper animated__slideInDown" onClick={(e) => handleLogout(e)}>Log Out</NavLink>
                            </>

                        }

                    </div>
                </div>
            </nav>
        </div>
    );
};
Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    isLoading: PropTypes.bool,
    user: PropTypes.object,
    isAuthenticated: PropTypes.bool,
    token: PropTypes.string,
};
const mapStateToProps = state => ({
    isLoading: state.auth.isLoading,
    user: state.auth.user,
    token: state.auth.token,
    isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { logout })(Navbar);