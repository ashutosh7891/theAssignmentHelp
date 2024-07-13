import React from 'react';
import Form from './Form';

const Order = () => {
    return (
        <>

            <div className="row">
                <div id='formleft' className="col-5 flex-column d-flex gap-3">
                    <h3 className='text-center'>Let's get in touch</h3>
                    <div className='ps-3'>
                        <div className='d-flex align-items-center gap-3 pb-3'>
                            <div><i className="fa-solid fa-location-dot" style={{ color: "#a99d19" }}></i></div>
                            <div>26 Quantum, 4 Chapeltown St, Manchester M1 2BH, United Kingdom</div>
                        </div>
                        <div className='d-flex align-items-center gap-3'>
                            <div><i className="fa-solid fa-location-dot" style={{ color: "#a99d19" }}></i></div>
                            <div>16 Miami Dr, Point Cook VIC 3030, Austria</div>
                        </div>
                        <div className='py-3 d-flex gap-3 align-items-center'>
                            <i className="fa-regular fa-envelope fa-beat-fade fa-lg" style={{ color: "#39d20f" }}></i>
                            <a className='text-decoration-none' href="mailto:help@assignmentwriter.io">help@assignmentwriter.io</a></div>
                        <div className='d-flex align-items-center gap-3'>
                            <i className="fa-solid fa-phone fa-beat-fade"></i>
                            <a className='text-decoration-none' href="tel:+61485977755">+61485977755</a></div>
                    </div>
                    <div className='ps-3 fs-1'>
                        <div className='pb-3 fw-bolder'>Connect with us:</div>
                        <div className='d-flex align-items-center gap-5'>
                            <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                            <a href="#"> <i className="fa-brands fa-instagram"></i></a>
                            <a href="#"> <i className="fa-brands fa-facebook"></i></a>

                        </div>

                    </div>
                </div>
                <div id='order-form' className="col-5 bg-gradient  py-3">
                    <Form />
                </div>
            </div>

        </>
    );
}

export default Order;
