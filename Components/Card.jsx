import "./Style.css"
import Modal from "./Modal.jsx"

function Card() {


    return (
        <>
            <section className="w-100 position-relative" style={{ height: "580px" }}>

                <div id="card-container" className="container-fluid mt-5 position-absolute z-1">
                    <div id="card" className="container w-75 py-lg-5 py-md-2 text-white" style={{ background: "#01223b" }}>
                        <p className="text-center" style={{ color: "#00b679" }}>WANT HELP?</p>
                        <h3 className="text-center"> REFER TO OUR EXPERT CONSULTANCY ON ANY SUBJECT OF <br />
                            YOUR CHOICE FOR YOUR ASSIGNMENTS</h3>
                        <div className="contact d-flex gap-5 justify-content-center py-3">
                            {/* <div className="w-25"><Modal /></div> */}
                            <Modal width="w-25" />
                            <button className="btn w-25 bg-light"><a href="#" className="text-decoration-none text-dark fw-bold"><i
                                className="fa-regular fa-comments fa-flip-both me-2"></i>Talk to us</a></button>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Card;