import React  from 'react';
import { toast } from 'react-toastify';

const handleSubmit = (e) => {
    toast.success("Your Message has been received")
}

const ContactUs = () => {
    return (
        <div class="container-fluid callback mt_50 pt-5">
            <div class="container pt-5">
                <div class="row justify-content-center">
                    <div class="col-lg-7">
                        <div class="bg-white border rounded p-4 p-sm-5 wow fadeInUp" data-wow-delay="0.5s">
                            <div class="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
                                <p class="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">Get In Touch
                                </p>
                                <h1 class="display-5 mb-5">If you have any query then let us know</h1>
                            </div>
                            <div class="row g-3">
                            <form  class='row g-4' onSubmit={(e) => handleSubmit(e)}>
                            <div class="col-sm-6">
                                    <div class="form-floating">
                                        <input type="text" class="form-control" id="name" placeholder="Your Name" />
                                        <label for="name">Your Name</label>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-floating">
                                        <input type="email" class="form-control" id="mail" placeholder="Your Email" />
                                        <label for="mail">Your Email</label>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-floating">
                                        <input type="text" class="form-control" id="mobile" placeholder="Your Mobile"  />
                                        <label for="mobile">Your Mobile</label>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-floating">
                                        <input type="text" class="form-control" id="subject" placeholder="Subject" />
                                        <label for="subject">Subject</label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-floating">
                                        <input class="form-control" placeholder="Leave a message here" id="message"
                                            style={{ height: '100px' }}/>
                                        <label for="message">Message</label>
                                    </div>
                                </div>
                                <div class="col-12 text-center">
                                    <button class="btn btn-primary w-100 py-3" type="submit">Submit Now</button>
                                </div>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;