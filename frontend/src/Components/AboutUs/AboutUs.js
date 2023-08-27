import React, {useState,useEffect} from 'react';
import Plot from 'react-plotly.js';
import loren from '../../Assets/img/loren.jpg';
const AboutUs = () => {
    const [mainChartXvalues, setmainChartXvalues] = useState();
    const [mainChartYvalues, setmainChartYvalues] = useState();
    const [symbols, setsymbols] = useState('BLDR');
    const API_KEY = 'QLV5O3LJABU0G9V8';
    let API_endpoint = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbols}&outputsize=full&apikey=${API_KEY}`;
    let singleStockXValues = [];
    let singleStockYValues = [];
        
    useEffect(() => {
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
                        if(key.includes(`${year}`) || key.includes("2022") || key.includes("2021")){
                            singleStockXValues.push(key);
                            singleStockYValues.push(data["Time Series (Daily)"][key]['1. open']);
                        }
                    }
                    setmainChartXvalues(singleStockXValues);
                    setmainChartYvalues(singleStockYValues);
                    }
        
            )
  
    }, []);

    

   

    return (
        <div class="container-xxl py-5 mt_50">
            <div class="container">
                <div class="row g-4 align-items-end mb-4">
                    <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                        <img class="img-fluid rounded" src={loren} alt='about not found' width='100%'/>
                    </div>
                    <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                        <p class="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">About Us</p>
                        <h1 class="display-5 mb-4">We Help Our Clients To Grow Their Money</h1>
                        <p class="mb-4">Loren Investment Group is a hedge fund that provides investment advice, a fund where you can invest your money with a
                         20% profit per quarter pay schedule, and a credit union where investors can request for loans at a subsidized rate and Educational Services where 
                         anyone can learn about money management and research investment opportunities. 
                        </p>
                        <div class="border rounded p-4">
                            <nav>
                                <div class="nav nav-tabs mb-3" id="nav-tab" role="tablist">
                                    <button class="nav-link fw-semi-bold active" id="nav-story-tab" data-bs-toggle="tab"
                                        data-bs-target="#nav-story" type="button" role="tab" aria-controls="nav-story"
                                        aria-selected="true">Story</button>
                                    <button class="nav-link fw-semi-bold" id="nav-mission-tab" data-bs-toggle="tab"
                                        data-bs-target="#nav-mission" type="button" role="tab" aria-controls="nav-mission"
                                        aria-selected="false">Mission</button>
                                    <button class="nav-link fw-semi-bold" id="nav-vision-tab" data-bs-toggle="tab"
                                        data-bs-target="#nav-vision" type="button" role="tab" aria-controls="nav-vision"
                                        aria-selected="false">Vision</button>
                                </div>
                            </nav>
                            <div class="tab-content" id="nav-tabContent">
                                <div class="tab-pane fade show active" id="nav-story" role="tabpanel"
                                    aria-labelledby="nav-story-tab">
                                    <p> Loren is a seasoned investment professional. He has a proven track record of success, having generated strong returns for his investors over the years..</p>
                                    <p class="mb-0"></p>
                                </div>
                                <div class="tab-pane fade" id="nav-mission" role="tabpanel"
                                    aria-labelledby="nav-mission-tab">
                                    <p>Loren Investment Group invests in a variety of assets, including stocks, bonds, and commodities. 
                                        The firm's investment philosophy is to identify undervalued assets and invest for the long term</p>
                                    <p class="mb-0">Loren Investment Group is committed to providing its investors with superior returns and peace of mind</p>
                                </div>
                                <div class="tab-pane fade" id="nav-vision" role="tabpanel" aria-labelledby="nav-vision-tab">
                                    <p> The firm has a long-term investment horizon. This means that Loren Investment Group is not looking to make quick profits. Instead, the firm is focused on finding undervalued assets that have the potential to generate strong returns over the long term.</p>
                                    <p class="mb-0">Loren Investment Group is a research-driven firm. The firm's investment team spends a significant amount of time researching potential investments. 
                                    This research helps the team to identify undervalued assets and to develop investment strategies that are likely to be successful.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="border rounded p-4 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="row g-4">
                        <div class="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                            <div class="h-100">
                                <div class="d-flex">
                                    <div class="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                                        <i class="fa fa-times text-white"></i>
                                    </div>
                                    <div class="ps-3">
                                        <h4>No Hidden Cost</h4>
                                        <span>Transparency</span>
                                    </div>
                                    <div class="border-end d-none d-lg-block"></div>
                                </div>
                                <div class="border-bottom mt-4 d-block d-lg-none"></div>
                            </div>
                        </div>
                        <div class="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                            <div class="h-100">
                                <div class="d-flex">
                                    <div class="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                                        <i class="fa fa-users text-white"></i>
                                    </div>
                                    <div class="ps-3">
                                        <h4>Dedicated Team</h4>
                                        <span>Availabile for questions</span>
                                    </div>
                                    <div class="border-end d-none d-lg-block"></div>
                                </div>
                                <div class="border-bottom mt-4 d-block d-lg-none"></div>
                            </div>
                        </div>
                        <div class="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                            <div class="h-100">
                                <div class="d-flex">
                                    <div class="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                                        <i class="fa fa-phone text-white"></i>
                                    </div>
                                    <div class="ps-3">
                                        <h4>24/7 Available</h4>
                                        <span>No time is a bad time</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        <div id='about-details'>
            <div>
            <h2>About Loren</h2>
            <p>Loren is the founder and CEO of Loren Investment Group. He is a financial professional with over 10 years of experience in the investment industry. He has a proven track record of success in generating impressive returns for his clients.</p>
            <p>Loren is passionate about helping people achieve their financial goals. He believes that everyone deserves to have access to quality financial advice, and he is committed to providing his clients with the best possible service.</p>
            <p>Loren is a frequent speaker at financial conferences and has been featured in several publications, including The Wall Street Journal, The New York Times, and Forbes.</p>
            </div>
            <section>
            <h2>About the Company</h2>
            <p>Loren Investment Group is a registered investment advisor with the Securities and Exchange Commission. We are headquartered in San Diego and have a team of experienced investment professionals.</p>
            <p>We offer a variety of investment strategies to meet the needs of our clients. Our investment process is based on fundamental analysis and we use a variety of investment tools to generate alpha.</p>
            <p>We are committed to providing our clients with superior investment returns through a disciplined investment process. We believe that our investment approach is the best way to generate long-term wealth for our clients.</p>
            </section>
            <section>
            <h2>Performance</h2>
            <p>Loren Investment Group has a strong track record of performance. Over the past three years, our fund has returned an average of 25% per year.</p>
            <p>We believe that our strong performance is due to our disciplined investment process and our experienced investment team. We are committed to continuing to generate superior investment returns for our clients.</p>
            <div id="performance-chart"></div>
            <p>The following chart shows the performance of Loren Investment Group over the last 3 years:</p>
                <table>
                <tr>
                    <th>Year: </th>
                    <th>Return</th>
                </tr>
                <tr>
                    <td>2020: </td>
                    <td>54%</td>
                </tr>
                <tr>
                    <td>2021: </td>
                    <td>43%</td>
                </tr>
                <tr>
                    <td>2022: </td>
                    <td>61%</td>
                </tr>
                <tr>
                    <td>2023: </td>
                    <td>40%</td>
                </tr>
                </table>
                <Plot
                                data={[ {
                                    x: mainChartXvalues,
                                    y: mainChartYvalues,
                                    type: 'scatter',
                                    mode: 'lines',
                                    marker: {color: 'blue'},
                                },
                                ]}

                                layout={ {width: 1020, height: 640, title: 'LIG Investment Performance'} }
                            />
                <p>As you can see, Loren Investment Group has consistently generated strong returns over the last 3 years. The firm's long-term investment philosophy has helped it to weather the ups and downs of the market and deliver superior returns for its investors.</p>
            </section>
            <section>
            <h2>Client Testimonials</h2>
            <ul>
            <li>"I have been a client of Loren Investment Group for over five years and I am very pleased with their performance. They have consistently outperformed the market and they have always been responsive to my needs." - John Smith</li>
            <li>"I was referred to Loren Investment Group by a friend and I am so glad that I was. They have helped me to achieve my financial goals and I am confident that they will continue to do so in the future." - Jane Doe</li>
            <li>"I am a very conservative investor and I was hesitant to invest with a hedge fund. However, I was very impressed with Loren Investment Group's investment process and I am confident that my money is safe with them." - Mary Jones</li>
            </ul>
            </section>
        </div>
        </div>
    );
};

export default AboutUs;