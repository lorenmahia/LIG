import React from 'react';
import advice from '../../Assets/img/lig2.webp';
import fund from '../../Assets/img/lig5.jpeg';
import union from '../../Assets/img/lig27.webp';
import edu_services from '../../Assets/img/lig28.jpeg';
import esg from '../../Assets/img/esg.jpg'
import books from '../../Assets/img/books.jpg'
import nai from '../../Assets/img/nai.jpeg'
import green from '../../Assets/img/green.webp'

const Services = () => {
    return (
        <div id="services-page-new">
        <h1>Latest News</h1>
        <div class='news-outer'>
            <div class='news-inner'>
                <img src={esg}></img>
                <h4>Loren Investment Group Launches ESG Investing Initiative</h4>
            </div>
            <div class='news-inner'>
                <img src={books}></img>
                <h4>Loren Investment Group Launches New Investment Education Branch</h4>
            </div>
            <div class='news-inner'>
                <img src={nai}></img>
                <h4>Loren Investment Group Launches Clean up in Nairobi</h4>
            </div>
            <div class='news-inner'>
                <img src={green}></img>
                <h4>Loren Investment Group Reports Record Earnings</h4>
            </div>
        </div>
        <div class="container-xxl service py-5">
            <div class="container">
                <div class="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
                    <p class="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">Our Services</p>
                    <h1 class="display-5 mb-5"> Financial Services For You </h1>
                </div>
                <div class="row g-4 wow fadeInUp" data-wow-delay="0.3s">
                    <div class="col-lg-4">
                        <div class="nav nav-pills d-flex justify-content-between w-100 h-100 me-4">
                            <button class="nav-link w-100 d-flex align-items-center text-start border p-4 mb-4 active"
                                data-bs-toggle="pill" data-bs-target="#tab-pane-1" type="button">
                                <h5 class="m-0"><i class="fa fa-bars text-primary me-3"></i>Investment Advice</h5>
                            </button>
                            <button class="nav-link w-100 d-flex align-items-center text-start border p-4 mb-4"
                                data-bs-toggle="pill" data-bs-target="#tab-pane-2" type="button">
                                <h5 class="m-0"><i class="fa fa-bars text-primary me-3"></i>Investment Fund</h5>
                            </button>
                            <button class="nav-link w-100 d-flex align-items-center text-start border p-4 mb-4"
                                data-bs-toggle="pill" data-bs-target="#tab-pane-3" type="button">
                                <h5 class="m-0"><i class="fa fa-bars text-primary me-3"></i>Credit Union</h5>
                            </button>
                            <button class="nav-link w-100 d-flex align-items-center text-start border p-4 mb-0"
                                data-bs-toggle="pill" data-bs-target="#tab-pane-4" type="button">
                                <h5 class="m-0"><i class="fa fa-bars text-primary me-3"></i>Education Services</h5>
                            </button>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <div class="tab-content w-100">
                            <div class="tab-pane fade show active" id="tab-pane-1">
                                <div class="row g-4">
                                    <div class="col-md-6" style={{ maxWidth: '350px' }}>
                                        <div class="position-relative h-100">
                                            <img class="position-absolute rounded w-100 h-100" src={advice}
                                                style={{ objectFit: 'cover' }} alt="service not found" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <h3 class="mb-4">Investment Advice</h3>
                                        <p class="mb-4">We offer investment advice to individuals and businesses. We have a team of experienced investment professionals who can help you develop a customized investment strategy that meets your specific needs..</p>
                                        <p><i class="fa fa-check text-primary me-3"></i>24/7 Availability</p>
                                        <p><i class="fa fa-check text-primary me-3"></i>Strategy Experts</p>
                                        <p><i class="fa fa-check text-primary me-3"></i>One time fee</p>
                                        <a href="" class="btn btn-primary py-3 px-5 mt-3">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="tab-pane-2">
                                <div class="row g-4">
                                    <div class="col-md-6" style={{ maxWidth: '350px' }}>
                                        <div class="position-relative h-100">
                                            <img class="position-absolute rounded w-100 h-100" src={fund}
                                                style={{ objectFit: 'cover' }} alt="service not found" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <h3 class="mb-4">Investment Fund</h3>
                                        <p class="mb-4">Our investment fund is a pooled investment vehicle that allows you to invest in a diversified portfolio of assets.
                                         The fund is managed by our team of experienced investment professionals, and we offer a variety of investment options to meet your individual needs.</p>
                                        <p><i class="fa fa-check text-primary me-3"></i>Your Profit is our Goal</p>
                                        <p><i class="fa fa-check text-primary me-3"></i>20% Fee only on Profits</p>
                                        <p><i class="fa fa-check text-primary me-3"></i>Custom Strategy just for you</p>
                                        <a href="" class="btn btn-primary py-3 px-5 mt-3">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="tab-pane-3">
                                <div class="row g-4">
                                    <div class="col-md-6" style={{ maxWidth: '350px' }}>
                                        <div class="position-relative h-100">
                                            <img class="position-absolute rounded w-100 h-100" src={union}
                                                style={{ objectFit: 'cover' }} alt="service not found" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <h3 class="mb-4">Credit Union</h3>
                                        <p class="mb-4">Our credit union offers a variety of financial products and services to our members,
                                         including loans, savings accounts, and checking accounts. We offer competitive rates and fees, and we are committed to providing our members with excellent customer service..</p>
                                        <p><i class="fa fa-check text-primary me-3"></i>Secured Loans</p>
                                        <p><i class="fa fa-check text-primary me-3"></i>Credit Facilities</p>
                                        <p><i class="fa fa-check text-primary me-3"></i>Cash Advanced</p>
                                        <a href="" class="btn btn-primary py-3 px-5 mt-3">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="tab-pane-4">
                                <div class="row g-4">
                                    <div class="col-md-6" style={{ maxWidth: '350px' }}>
                                        <div class="position-relative h-100">
                                            <img class="position-absolute rounded w-100 h-100" src={edu_services}
                                                style={{ objectFit: 'cover' }} alt="service not found" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <h3 class="mb-4">Education Services</h3>
                                        <p class="mb-4">Our educational services provide clients with the knowledge and tools they need to make informed investment decisions. 
                                        We offer a variety of educational resources, including webinars, workshops, and one-on-one consultations.</p>
                                        <p><i class="fa fa-check text-primary me-3"></i>We cater to everyone</p>
                                        <p><i class="fa fa-check text-primary me-3"></i>Services offered in a variety of formats</p>
                                        <p><i class="fa fa-check text-primary me-3"></i>Staffed by knowledgeable professionals</p>
                                        <a href="" class="btn btn-primary py-3 px-5 mt-3">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Services;