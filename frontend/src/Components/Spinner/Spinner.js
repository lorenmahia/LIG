import $ from 'jquery';
import React, { useEffect } from 'react';


const Spinner = () => {
    useEffect(() => {
        // Spinner
        var spinner = function () {
            setTimeout(function () {
                if ($('#spinner').length > 0) {
                    $('#spinner').removeClass('show');
                }
            }, 500);
        };
        spinner();

        // Initiate the wowjs
        // Rest of your JavaScript code...
    }, []);
    return (
        <div id="spinner"
            class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center show">
            <div class="spinner-border text-primary" role="status" style={{ width: '3rem', height: '3rem', }}></div>
        </div>
    );
};

export default Spinner;