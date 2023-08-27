import React from 'react';
import carousel1 from '../../Assets/img/lig29.webp';
import carousel2 from '../../Assets/img/lig2.webp';

const Carousel = () => {
    return (
        <div class="container-fluid p-0 mb-5 mt_50 wow fadeIn" data-wow-delay="0.1s">
            <div id="header-carousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="w-100" src={carousel2} alt="image1 missing" height={700}/>
                        <div class="carousel-caption">
                            <div class="container">
                                <div class="row justify-content-start">
                                    <div class="col-lg-8">
                                        <p
                                            class="d-inline-block border border-white rounded text-primary fw-semi-bold py-1 px-3 animated slideInDown">
                                            Welcome to Loren Investment Group</p>
                                        <h1 class="display-1 mb-4 animated slideInDown">Your Financial Status Is Our Goal
                                        </h1>
                                        <a href="" class="btn btn-primary py-3 px-5 animated slideInDown">Explore More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img class="w-100" src={carousel1} alt="image1 missing" height={600} />
                        <div class="carousel-caption">
                            <div class="container">
                                <div class="row justify-content-start">
                                    <div class="col-lg-7">
                                        <p
                                            class="d-inline-block border border-white rounded text-primary fw-semi-bold py-1 px-3 animated slideInDown">
                                            Welcome to Loren Investment Group</p>
                                        <h1 class="display-1 mb-4 animated slideInDown">True Financial Support For You</h1>
                                        <a href="" class="btn btn-primary py-3 px-5 animated slideInDown">Explore More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Carousel;