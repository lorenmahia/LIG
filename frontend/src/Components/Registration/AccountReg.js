import React, { useState } from 'react';

import { Link, Navigate } from "react-router-dom";


import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { create_account } from '../../actions/auth';
import Spinner from '../Spinner/Spinner';

const AccountReg = ({ create_account, isAuthenticated, isLoading, token, account }) =>{
    const [accountData, setAccountData] = useState({
        accounttype:'',
        risklevel:'',
        investmentgoal:'',
        exputility:'',
        riskaversion:'',
        lossaversion:'',
        reflection:'',
        solvrisk:''
    })
    const handleChange = (e) => setAccountData({
        ...accountData,
        [e.target.name]: e.target.value
    });
    const {accounttype,risklevel,investmentgoal,exputility,riskaversion,lossaversion,reflection,solvrisk} = accountData;
    const handleSubmit = (e) => {
        e.preventDefault();
        create_account({ accounttype,risklevel,investmentgoal,exputility,riskaversion,lossaversion,reflection,solvrisk });
    };
    if (account) {
        <Navigate to='/transactions'/>
    }
    else{
        return  (
            <div class="login-page bg-light animated slideInDown">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-10 offset-lg-1">
                            <h3 class="mb-3">Enter Account Details</h3>
                            <div class="bg-white shadow rounded">
                                <div class="row">

                                    <div class="col-md-5 ps-0 d-none d-md-block">
                                        <div class="form-right h-100 bg-primary text-white text-center" style={{ display: 'grid', placeItems: 'center' }}>
                                            <div >
                                                <i class="bi bi-bootstrap"></i>
                                                <h2 class="fs-1" style={{ color: 'white' }}> Additional Account Information</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-7 pe-0">
                                        <div class="form-left h-100 py-5 px-5">
                                            {isLoading ? <Spinner /> :
                                                <form class="row g-4" onSubmit={(e) => handleSubmit(e)}>
                                                    <div class="col-12">
                                                        <label> Account Type<span class="text-danger">*</span></label>
                                                        <div class="input-group">
                                                            <div class="input-group-text"><i class="bi bi-person-fill"></i></div>
                                                            <select name="accounttype" value={accounttype} onChange={(e) => handleChange(e)}>
                                                                <option value="inv">Investment</option>
                                                                <option value="ret">Retirement</option>
                                                                <option value="fut">Futures</option>
                                                                <option value="psdo">Pseudo</option>
                                                                <option value="frx">Forex</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <label>Risk Level<span class="text-danger">*</span></label>
                                                        <div class="input-group">
                                                            <div class="input-group-text"><i class="bi bi-lock-fill"></i></div>
                                                            <select name="risklevel" value={risklevel} onChange={(e) => handleChange(e)}>
                                                                <option value="l1">Low Risk : less than 10% of Portfolio</option>
                                                                <option value="l2">Little Risk :10 - 20% of Portfolio</option>
                                                                <option value="mid">Medium Risk :20 - 40% of Portfolio</option>
                                                                <option value="high">High Risk :More than 50% of Portfolio</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <label>Investment Goal<span class="text-danger">*</span></label>
                                                        <div class="input-group">
                                                            <div class="input-group-text"><i class="bi bi-lock-fill"></i></div>
                                                            <select name="investmentgoal" value={investmentgoal} onChange={(e) => handleChange(e)}>
                                                                <option value="wealth">Wealth Accumulation</option>
                                                                <option value="pi">Passive Income</option>
                                                                <option value="ret">Retirement</option>
                                                                <option value="house">To Buy a house</option>
                                                                <option value="edu">Invest in your child's future Education</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <label>In how long will you need your money: Enter number in months<span class="text-danger">*</span></label>
                                                        <div class="input-group">
                                                            <div class="input-group-text"><i class="bi bi-lock-fill"></i></div>
                                                            <input type="number" pattern="[0-9]*" class="form-control" placeholder="Enter in months"
                                                                name='exputility'
                                                                value={exputility}
                                                                onChange={(e) => handleChange(e)}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <label>Risk Aversion: How satisfied are you when you gain money<span class="text-danger">*</span></label>
                                                        <div class="input-group">
                                                            <div class="input-group-text"><i class="bi bi-lock-fill"></i></div>
                                                            <input type="number" pattern="[0-9]*" class="form-control" placeholder="From 1 - 10: (1 is least satisfied)"
                                                                name='riskaversion'
                                                                value={riskaversion}
                                                                onChange={(e) => handleChange(e)}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <label>Loss Aversion: How sad are you when you lose money<span class="text-danger">*</span></label>
                                                        <div class="input-group">
                                                            <div class="input-group-text"><i class="bi bi-lock-fill"></i></div>
                                                            <input type="number" pattern="[0-9]*" class="form-control" placeholder="From 1 - 10: (1 is least saddened)"
                                                                name='lossaversion'
                                                                value={lossaversion}
                                                                onChange={(e) => handleChange(e)}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <label>Please Select the Strategies Most Appealing to you <span class="text-danger">*</span></label>
                                                        <div class="input-group">
                                                            <div class="input-group-text"><i class="bi bi-lock-fill"></i></div>
                                                            <select name="reflection" value={reflection} onChange={(e) => handleChange(e)}>
                                                                <option value="esg">ESG Investing</option>
                                                                <option value="value">Value Investing</option>
                                                                <option value="growth">Growth Investing</option>
                                                                <option value="index">Index Investing</option>
                                                                <option value="long">Buy and hold</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <label>What is your net worth(in $USD)<span class="text-danger">*</span></label>
                                                        <div class="input-group">
                                                            <div class="input-group-text"><i class="bi bi-lock-fill"></i></div>
                                                            <select type='number' name="solvrisk" value={solvrisk} onChange={(e) => handleChange(e)}>
                                                                <option value="1k">Below 1,000</option>
                                                                <option value="5k">1,000 - 5,000</option>
                                                                <option value="10k">5,000 - 20,000</option>
                                                                <option value="20k">20,000 - 50,000</option>
                                                                <option value="50k">50,000 - 100,000</option>
                                                                <option value="100k">100,000 - 500,000</option>
                                                                <option value="500k">500,000 - 1M</option>
                                                                <option value="raf">Above 1M</option>
                                                            </select>
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

        )
    }
}
AccountReg.propTypes = {
    create_account: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    token: PropTypes.string,
    account: PropTypes.object
};
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    isLoading: state.auth.isLoading,
    token: state.auth.token,
    account: state.auth.account
});

export default connect(mapStateToProps, { create_account })(AccountReg);
