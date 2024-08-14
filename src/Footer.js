import React from 'react';

function Footer() {
    return (
        <footer className="p-5" style={{ backgroundColor: 'whitesmoke' }}>
            <div className="row">
                <div className="col-md-4 mt-5">
                    <p className="text-muted">Contact us and we'll get back to you within 24 hours.</p>
                    <p><i className="bi bi-geo-alt-fill text-muted"></i> Chicago, US</p>
                    <p><i className="bi bi-phone text-muted"></i> +00 1515151515</p>
                    <p><i className="bi bi-envelope-fill text-muted"></i> myemail@something.com</p>
                </div>
                <div className="col-md-8">
                    <h2>Contact</h2>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="exampleFormControlInput2" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleFormControlInput2" placeholder="" />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div>
                        <button className="btn btn-outline-light float-end text-dark" style={{ border: '1px solid black' }}>
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;