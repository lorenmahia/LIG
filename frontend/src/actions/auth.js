import { toast } from 'react-toastify';
import axios from "../helper/axios-helper/axios-helper";
import * as actionTypes from './types';

export const create_user = ({ fullname, email, password, password2 }) => (dispatch) => {
    dispatch({ type: actionTypes.LOADING_START });
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const body = JSON.stringify({ fullname, email, password, password2 });
    axios.post('/signup/user/', body, config)
        .then(res => {
            dispatch({
                type: actionTypes.REGISTER_USER_SUCCESS,
                payload: res.data
            });
            toast.success('Registration is successful! Please confrim you account through the email sent to you');
        }).catch(err => {
            dispatch({
                type: actionTypes.REGISTER_USER_FAILED
            });
            toast.error('Your Account could not be registered');
        });

};

export const create_account = ({accounttype,risklevel,investmentgoal,exputility,riskaversion,lossaversion,reflection,solvrisk}) =>(dispatch) => {
    dispatch({type: actionTypes.LOADING_START});
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const body = JSON.stringify({accounttype,risklevel,investmentgoal,exputility,riskaversion,lossaversion,reflection,solvrisk});
    console.log(body)
    axios.post('/accountreg/',body,config)
        .then(res => {
            dispatch({
                type: actionTypes.REGISTER_ACCOUNT_SUCCESS,
                payload: res.data
            });
            toast.success("Account Registration Successful")
        }).catch(err => {
            dispatch({
                type: actionTypes.REGISTER_ACCOUNT_FAILED
            });
            toast.error("Registration Failure")
        })
}

export const forget_password = ({ email }) => (dispatch) => {
    dispatch({ type: actionTypes.LOADING_START });
    localStorage.setItem('userEmail', email);
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    };
    const body = JSON.stringify({ email });
    axios.post('/password-change-request/', body, config)
        .then(response => {

            dispatch({
                type: actionTypes.PASSWORD_CHANGE_REQUEST_SUCCESS,
                payload: response.data
            });

            toast.success("Please enter the code sent to your email");

        }).catch(err => {

            dispatch({
                type: actionTypes.PASSWORD_CHANGE_REQUEST_FAILED
            });
            localStorage.removeItem('userEmail');
            toast.error("Please enter correct email address", err);
        });
};

export const forget_password_confirm = ({ token, password1, password2 }) => (dispatch) => {
    dispatch({ type: actionTypes.LOADING_START });
    const userEmail = localStorage.getItem('userEmail');
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    };
    const body = JSON.stringify({ 'email': userEmail, 'token': token, 'password1': password1, 'password2': password2 });
    axios.post('/password-change-confirm/', body, config)
        .then(response => {
            dispatch({
                type: actionTypes.PASSWORD_CHANGE_CONFIRM_REQUEST_SUCCESS,
                payload: response.data
            });
            localStorage.removeItem('userEmail');
            toast.success("Successfully changed the password");
        }).catch(err => {
            dispatch({
                type: actionTypes.PASSWORD_CHANGE_CONFIRM_REQUEST_FAILED
            });
            toast.error("Password could not be changed");
        });
};


export const login = ({ email, password }) => (dispatch) => {
    dispatch({ type: actionTypes.LOADING_START });
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    };
    const body = JSON.stringify({ email, password });
    console.log(body);
    axios.post('/login/', body, config)
        .then(response => {
            dispatch({
                type: actionTypes.LOGIN_SUCCESS,
                payload: response.data
            });
            toast.success("login success");
        }).catch(err => {
            dispatch({
                type: actionTypes.LOGIN_FAILED
            });
            toast.error("login failed");
        });

};

export const check_continuous_auth = () => (dispatch) => {
    const token = localStorage.getItem("token");
    if (!token) {
        dispatch(logout);
    }
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`
        }
    };
    axios.get('/checkauth/', config)
        .then(response => {
            dispatch({
                type: actionTypes.CONTINUOUS_USER_AUTH_SUCCESS,
                payload: response.data
            });
        }).catch(err => {
            dispatch({
                type: actionTypes.CONTINUOUS_USER_AUTH_FAILED
            });
        });
};

export const logout = () => (dispatch) => {
    dispatch({ type: actionTypes.LOADING_START });
    localStorage.removeItem("token");
    dispatch({ type: actionTypes.AUTH_LOGOUT });
    toast.success("logout success");
};