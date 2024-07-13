
import { useState } from "react";
import "./Style.css";

function Review() {




    return (
        <>
            <section style={{ background: "#f3f3f3" }} id="review">
                <div className="container-fluid">
                    <div className="container ps-lg-5 ps-md-0 py-md-4 py-lg-0">
                        <div className="fw-bold fs-2 py-lg-5 fs-4 ps-lg-5 ps-md-0"><h2 className="text-center">Have A Look On What The Clients Say About Us!</h2></div>
                        <div className="row ps-md-2 pt-md-3 ps-lg-0 pt-lg-0">
                            <div className="col-lg col-md-8 ps-lg-5 ms-lg-5 ps-md-0 ">


                                <div id="testimonials" >
                                    <div>
                                        <div>
                                            <hr />
                                            <div><span className="d-inline-flex gap-1"><i className="fa-solid fa-star" style={{color: 'orange'}}></i><i className="fa-solid fa-star" style={{color: 'orange'}}></i><i className="fa-solid fa-star" style={{color: 'orange'}}></i><i className="fa-solid fa-star" style={{color: 'orange'}}></i><i className="fa-solid fa-star" style={{color: 'orange'}}></i></span> <span className="fst-italic">Penelope</span></div>
                                            <div>"The assignment experts at <strong>UniversityAssignmentHelp.uk</strong> are outstanding! They greatly simplified my work by offering excellent assignment help. Their expertise guaranteed I could turn in excellent work on time."</div>
                                            <div className="fw-bold">University of Manchester, UK</div>
                                        </div>
                                        <div>
                                            <hr />
                                            <div><span className="d-inline-flex gap-1"><i className="fa-solid fa-star" style={{color: 'orange'}}></i><i className="fa-solid fa-star" style={{color: 'orange'}}></i><i className="fa-solid fa-star" style={{color: 'orange'}}></i><i className="fa-solid fa-star" style={{color: 'orange'}}></i><i className="fa-solid fa-star" style={{color: 'orange'}}></i></span> <span className="fst-italic">Edward</span></div>
                                            <div>"Their <strong>university assignment help </strong>is excellent. Although I struggled with my programming projects, their assignment experts guided me in turning in outstanding work on time. They conveyed difficult ideas in an understandable manner."</div>
                                            <div className="fw-bold">University of Southampton, England</div>
                                        </div>
                                        <div>
                                            <hr />
                                            <div><span className="d-inline-flex gap-1"><i className="fa-solid fa-star" style={{color: 'orange'}}></i><i className="fa-solid fa-star"style={{color: 'orange'}}></i><i className="fa-solid fa-star"style={{color: 'orange'}}></i><i className="fa-solid fa-star"style={{color: 'orange'}}></i><i className="fa-solid fa-star"style={{color: 'orange'}}></i></span> <span className="fst-italic">Conor</span></div>
                                            <div>
                                            "UniversityAssignmentHelp.uk's <strong>law assignment help</strong> is top-notch. Their assignment experts provided detailed and well-researched assignments that really helped me. They explained legal concepts clearly, which improved my understanding."</div>
                                            <div className="fw-bold">Trinity College, Ireland</div>
                                        </div>
                                        <div>
                                            <hr />
                                            <div><span className="d-inline-flex gap-1"><i className="fa-solid fa-star"style={{color: 'orange'}}></i><i className="fa-solid fa-star"style={{color: 'orange'}}></i><i className="fa-solid fa-star"style={{color: 'orange'}}></i><i className="fa-solid fa-star"style={{color: 'orange'}}></i><i className="fa-solid fa-star"style={{color: 'orange'}}></i></span> <span className="fst-italic">Harvey</span></div>
                                            <div>"Thanks to their <strong>coursework help</strong>, I was able to manage my workload without stress. Their <strong>assignment experts</strong> made everything so much easier. They ensured all my coursework requirements were met effectively."</div>
                                            <div className="fw-bold">Univetsity of Liverpool, England</div>
                                            <br />
                                        </div>
                                        

                                    </div>
                                </div>

                            </div>

                            <div id="card-container" className="col-lg-4 col-md-4">
                                <div className="my-lg-5 my-xl-0">
                                    <div className="card px-lg-4 py-lg-5">
                                        <div className="row flex-lg-row flex-md-column text-lg-center text-md-start p-lg-0 p-md-3">
                                            <div className="col">
                                                <img className="w-100" src="https://www.theassignmenthelp.co.nz/wp-content/uploads/2021/06/sitejabber.png" alt="" />
                                                <div className="text-center pt-lg-1 pb-lg-5">
                                                    <i className="fa-solid fa-star" style={{ fontSize: "1.5rem", color: "#FFD43B" }}></i>
                                                    <i className="fa-solid fa-star" style={{ fontSize: "1.5rem", color: "#FFD43B" }}></i>
                                                    <i className="fa-solid fa-star" style={{ fontSize: "1.5rem", color: "#FFD43B" }}></i>
                                                    <i className="fa-solid fa-star" style={{ fontSize: "1.5rem", color: "#FFD43B" }}></i>
                                                    <i className="fa-solid fa-star" style={{ fontSize: "1.5rem", color: "#FFD43B" }}></i>
                                                </div>
                                                <p><span className="text-uppercase">Excellent </span>| Trust Score 5</p>
                                            </div>
                                            <div className="col">
                                                <img className="w-100" src="https://www.theassignmenthelp.co.nz/wp-content/uploads/2021/05/review-io-logo.png" alt="" />
                                                <div className="text-center pt-lg-1 pb-lg-5">
                                                    <i className="fa-solid fa-star " style={{ fontSize: "1.5rem", color: "#FFD43B" }}></i>
                                                    <i className="fa-solid fa-star " style={{ fontSize: "1.5rem", color: "#FFD43B" }}></i>
                                                    <i className="fa-solid fa-star " style={{ fontSize: "1.5rem", color: "#FFD43B" }}></i>
                                                    <i className="fa-solid fa-star " style={{ fontSize: "1.5rem", color: "#FFD43B" }}></i>
                                                    <i className="fa-solid fa-star " style={{ fontSize: "1.5rem", color: "#FFD43B" }}></i>
                                                </div>
                                                <p><span className="text-uppercase">Excellent </span>| Trust Score 5</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}
export default Review;