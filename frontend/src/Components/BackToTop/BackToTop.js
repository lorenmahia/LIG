import $ from 'jquery';
import React, { useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';

const BackToTop = () => {

    const handleScroll = () => {

        if ($(window).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }

    };
    useEffect(() => {

        $(window).on('scroll', handleScroll);
    }, []);
    const handleClick = () => {
        scroll.scrollToTop({
            duration: 1000,
            smooth: 'easeInOutExpo'
        });
    };
    return (
        <a href="#" class="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top" style={{ display: 'none' }} onClick={handleClick}><i
            class="bi bi-arrow-up"></i></a>
    );
};

export default BackToTop;