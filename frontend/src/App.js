import React, { useEffect } from 'react';
import { Route, Routes } from "react-router-dom";

import WOW from 'wowjs';
import 'wowjs/css/libs/animate.css';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import './Assets/css/global.css';

import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { check_continuous_auth } from './actions/auth';

import AboutUs from './Components/AboutUs/AboutUs';
import BackToTop from './Components/BackToTop/BackToTop';
import ContactUs from './Components/ContactUs/ContactUs';
import Copyright from './Components/Copyright/Copyright';
import EmailConfirm from './Components/EmailConfirm/EmailConfirm';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import PasswordChangeConfirm from './Components/PasswordChangeConfirm/PasswordChangeConfirm';
import PasswordChangeStart from './Components/PasswordChangeStart/PasswordChangeStart';
import Registration from './Components/Registration/Registration';
import AccountReg from './Components/Registration/AccountReg';
import Spinner from './Components/Spinner/Spinner';
import Transactions from './Components/Transactions/Transactions';
import Home from './Pages/Home/Home';

function App({ check_continuous_auth }) {
  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
    check_continuous_auth();
  }, [check_continuous_auth]);
  return (
    <>
      <Spinner />
      <Navbar />
      <Routes>
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/transactions' element={<Transactions />} />
        <Route exact path='/password-change-start' element={<PasswordChangeStart />} />
        <Route exact path='/password-change-confirm' element={<PasswordChangeConfirm />} />
        <Route exact path='/registration' element={<Registration />} />
        <Route exact path='/accountreg' element={<AccountReg/>}/>
        <Route exact path='/email-confirm' element={<EmailConfirm />} />

        <Route exact path='/about' element={<AboutUs />} />
        <Route exact path='/contact' element={<ContactUs />} />
        <Route exact path='/' element={<Home />} />
      </Routes>
      <Footer />
      <Copyright />
      <BackToTop />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}
App.propTypes = {
  check_continuous_auth: PropTypes.func.isRequired,
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
export default connect(mapStateToProps, { check_continuous_auth })(App);
