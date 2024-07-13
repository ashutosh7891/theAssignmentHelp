import flogo from "./logo.png"
import "./Style.css"

function Footer() {

    return (
        <>
            <footer className="container-fluid " style={{ background: "#273348" }}>
                <div className="container px-5 px-md-0">
                    <div className="row py-5">
                        <div className="col-lg col-md-4 gap-md-3 d-flex flex-column gap-lg-2">
                            <div>
                                <img id="img-logo" src={flogo} alt="" />
                            </div>
                            <h2 className="fs-4 text-white mt-2">Contact Infomation</h2>

                            <div><a href="tel:+447700168833">+44 7700 168833</a></div>

                            <div >
                                <a href="mailto:abdul@clickinpedia.com">abd@gmail.com</a>
                            </div>
                            <div className="d-flex gap-3 align-items-center"><i className="fa-solid fa-location-dot fa-fade " style={{color: "#FFD43B"}}></i>26 Quantum, 4 Chapeltown St, Manchester M1 2BH, UK</div>
                            <div className="d-flex gap-5 gap-md-4 py-3">
                                <i className="fa-brands fa-facebook fa-fade fa-lg"></i>
                                <i className="fa-brands fa-linkedin-in fa-lg"></i>
                                <i className="fa-brands fa-pinterest fa-lg"></i>
                                <i className="fa-brands fa-instagram fa-lg"></i>
                            </div>

                        </div>

                        <div className="col-lg col-md-4">
                            <div className="fw-bold">Services</div>
                            <div ><a href="#">Assignment Writing Services</a></div>
                            <div ><a href="#">Buy Assignment</a></div>
                            <div ><a href="#">Online Class Services</a></div>
                            <div ><a href="#">Coursework Writing Services</a></div>
                            <div ><a href="#">Do my Homework</a></div>
                            <div ><a href="#">Do my Assignment</a></div>

                        </div>

                        <div className="col-lg col-md-4">
                            <div className="fw-bold ">Free References tool</div>
                            <div ><a href="#">APA Reference Generator</a></div>
                            <div ><a href="#">Chicago Reference Generator</a></div>
                            <div ><a href="#">Essay Tittle  Generator</a></div>
                            <div ><a href="#">Essay Typer</a></div>
                            <div ><a href="#">JMU GPA Calculator</a></div>


                        </div>

                    </div>
                </div>
                <div className="container">

                    <hr />
                    <div id="copyright" className="row py-2 text-center fs-5">
                        <div className="col-lg text-lg-center text-md-start">
                            Copyright © 2024 University Assignment Help | All Rights Reserved.
                        </div>
                        <div className="col-lg text-lg-center text-md-end">
                            Refund Terms & Conditions
                        </div>
                    </div>
                </div>

            </footer>

        </>
    )
}
export default Footer;