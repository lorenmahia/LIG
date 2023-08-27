import React, {useState, useEffect} from 'react';
import Plot from 'react-plotly.js';
import { useSelector } from 'react-redux';
import './Transactions.css';

const Transactions = () => {
    const user = useSelector(state => state.auth.user);
    const [accountData,setAccountData] = useState([]);
    const [balance, setBalance] = useState([120, 140, 180, 135, 190, 200, 200, 200, 200, 200, 200, 200]);
    const [timePeriod, setTimePeriod] = useState("TIME_SERIES_DAILY_ADJUSTED");
    const [mainChartXvalues, setmainChartXvalues] = useState();
    const [mainChartYvalues, setmainChartYvalues] = useState();
    const [symbols, setsymbols] = useState('BLDR');
    const API_KEY = 'EMN8RAOB4VMCVJIS';
    let API_endpoint = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbols}&outputsize=full&apikey=${API_KEY}`;
    let singleStockXValues = [];
    let singleStockYValues = [];
        
    useEffect(() => {
        getUserData()
        getAccountPerformanceData()
    }, []);

    const getUserData = () =>{
        var responseClone;
        fetch("http://127.0.0.1:8000/admin/base/accountdata/35418159")
        .then(response => {
            console.log("Pesponce is here ")
            console.log(response)
            responseClone = response.clone()
            return response.json()
        })
        .then(data => {
            console.log(data)
            setAccountData(data)
        },(rejectionReason => { // 3
            console.log('Error parsing JSON from response:', rejectionReason, responseClone); // 4
            responseClone.text() // 5
            .then(bodyText => {
                console.log('Received the following instead of valid JSON:', bodyText); // 6
            });
        }))
    }

    const getAccountPerformanceData = () =>{
        fetch(API_endpoint)
        .then(response => {
            return response.json();
            }   
            )
            .then(data =>{
                    const date = new Date();
                    let year = date.getFullYear();
                    let month = String(date.getMonth()+1).padStart(2,"0");
                    let day = date.getDate();
                    let currentdate = `${year}-${month}-${day}`;

                    for(var key in data["Time Series (Daily)"]){
                        if(key.includes(`${year}`) || key.includes("2022")){
                            singleStockXValues.push(key);
                            singleStockYValues.push(data["Time Series (Daily)"][key]['1. open']);
                        }
                    }
                    setmainChartXvalues(singleStockXValues);
                    setmainChartYvalues(singleStockYValues);
                    }
        
            )
  
    }
    

    return (
        <div class="container" style={{ marginTop: '100px' }}>
            <div class="row">
                <div class="col-xs-10">
                    <div class="panel panel-primary">
                        <div class="Transaction-history-graph">
                            <h2>
                                Account Information 
                            </h2>
                            <h3>
                                {user ? user.fullname : null}
                            </h3>
                            <h3>
                                Balance:{accountData ? accountData.cashbalance : null}
                            </h3>

                            <Plot
                                data={[ {
                                    x: mainChartXvalues,
                                    y: mainChartYvalues,
                                    type: 'scatter',
                                    mode: 'lines',
                                    marker: {color: 'blue'},
                                },
                                ]}

                                layout={ {width: 1020, height: 740, title: 'Your Investment Performance'} }
                            />
                        </div>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <div style={{ flex: 1, backgroundColor: "#6F38C5", height: "3px" }} />
                        
                            <p style={{ margin: "0 10px" }}>Account OverView</p>
                        
                            <div style={{ flex: 1, backgroundColor: "#6F38C5", height: "3px" }} />
                        </div>
                        <div class="panel-heading">
                            <h2 class="panel-title">
                                Account Report
                            </h2>
                        </div>
                        <div class="panel-body">
                            <h3>
                                {user ? user.fullname : null}
                            </h3>
                        </div>
                        <ul class="list-group">
                            <li class="list-group-item">
                                <h4>Deposits and Withdrawals</h4>
                                <table class="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>Operation date</th>
                                            <th>Remitter</th>
                                            <th>Beneficiary</th>
                                            <th>Amount</th>
                                            <th>Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    </tbody>
                                </table>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Transactions;