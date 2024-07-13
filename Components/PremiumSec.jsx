import Data from "./Data";

// function PremiumSec(props) {
const PremiumSec = (props) => {
   
    return (
        <>
            <section className="container-fluid bg-red-600" style={{ marginTop: props?.mainPage && window.innerWidth <= 768 ? "8rem" : "" }} id="about">
                <div className="container pb-5 pt-0 mt-md-5 ">
                    <h2 className="text-center">Various University Assignment Help UK Services Provided By The Professionals</h2>
                    <h6 className="text-center" style={{"paddingBottom": '3rem'}}>A wide range of university <strong>assignment help UK services</strong> are provided by <strong>UniversityAssignmentHelp.uk</strong> to meet the various needs of students. Our team of assignment writers is adept in managing several forms of academic writing, therefore guaranteeing that students get excellent help catered to their particular needs. <strong>Online assignment help UK</strong> aims to provide top-notch support enabling students to succeed in their academic endeavours.</h6>
                    <div className="map">

                        {/* {
                            Data.map((item,index) =>
                                <div className="mapinner" key={item.id}  >
                                    <div id="card" className="row position-relative justify-content-center border-1  pt-5 w-auto">
                                        <div id="imgcol" className="col-2 col-md-4 position-absolute">
                                            <img className={`${index<2 ? '-mt-5': ''}`} src={item.img} alt="" />
                                        </div>
                                        <div className="col ps-4 position-relative overflow:y-auto">
                                            <h3 className="fw-bold text-size text-start text-center">{item.head}</h3>
                                            <hr className="border border-danger opacity-75" />
                                            <p className="text-start">
                                                {item.para} </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        } */}

                        {
                            Data.map((item) => {
                                return (
                                    <div key={item.id} className="">
                                        <div className="card card-side bg-gray-700 shadow-xl">
                                            <figure className="flex items-center pt-3 px-2 justify-center w-full h-full">
                                                <img
                                                    src={item.img}
                                                    alt="Movie"
                                                    className="w-auto h-auto"
                                                />
                                            </figure>
                                            <div className="card-body">
                                                <h2 className="card-title text-center">{item.head}</h2>
                                                <p>{item.para}</p>
                                                <div className="card-actions justify-center">
                                                    <button className="btn btn-primary px-3 rounded-lg ">Learn more</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                )
                            })
                        }
                    </div>
                </div>

            </section>


        </>
    )
}

export default PremiumSec;