import React from 'react';

const Footer = () => {
    return (
        <div>
            <div class="container-fluid bg-dark text-light footer mt-5 py-5 wow fadeIn" data-wow-delay="0.1s">
                <div class="container py-5">
                    <div class="row g-5">
                        <div class="col-lg-3 col-md-6">
                            <h4 class="text-white mb-4">Our Office</h4>
                            <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>10790 Dabney Drive, San Diego, USA</p>
                            <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+1 857 260 3372</p>
                            <p class="mb-2"><i class="fa fa-envelope me-3"></i>loreninvestmentgroup@gmail.com</p>
                            <div class="d-flex pt-2">
                                <a class="btn btn-square btn-outline-light rounded-circle me-2" href=""><i
                                    class="fab fa-twitter"></i></a>
                                <a class="btn btn-square btn-outline-light rounded-circle me-2" href=""><i
                                    class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-square btn-outline-light rounded-circle me-2" href=""><i
                                    class="fab fa-youtube"></i></a>
                                <a class="btn btn-square btn-outline-light rounded-circle me-2" href=""><i
                                    class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <h4 class="text-white mb-4">Services</h4>
                            <a class="btn btn-link" href="">Investment Advice</a>
                            <a class="btn btn-link" href="">Investment Fund</a>
                            <a class="btn btn-link" href="">Credit Union</a>
                            <a class="btn btn-link" href="">Educational Services</a>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <h4 class="text-white mb-4">Quick Links</h4>
                            <a class="btn btn-link" href="">About Us</a>
                            <a class="btn btn-link" href="">Contact Us</a>
                            <a class="btn btn-link" href="">Our Services</a>
                            <a class="btn btn-link" href="">Terms & Condition</a>
                            <a class="btn btn-link" href="">Support</a>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <h4 class="text-white mb-4">Newsletter</h4>
                            <p>Our newsletter provides clients with insights into the latest market trends and investment opportunities. We also share our thoughts on the economy and other factors that can affect the markets. 
                                Our newsletter is a valuable resource for clients who want to stay informed about the markets and make informed investment decisions..</p>
                            <div class="position-relative w-100">
                                <input class="form-control bg-white border-0 w-100 py-3 ps-4 pe-5" type="text"
                                    placeholder="Your email" />
                                <button type="button"
                                    class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;