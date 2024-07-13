
import "./Style.css"

import Form from "./Form";
import bgimg from "./_uk/bgimag.webp";
import uk1 from "./_uk/u1.webp";
import uk2 from "./_uk/u2.webp";
import uk3 from "./_uk/u3.webp";
import uk4 from "./_uk/u4.webp";
import uk5 from "./_uk/u5.webp";
import uk6 from "./_uk/u6.webp";
import uk7 from "./_uk/u7.webp";
import uk8 from "./_uk/u8.jpg";
import uk9 from "./_uk/u9.jpg";
import uk10 from "./_uk/u10.jpg";
import uk11 from "./_uk/u11.jpg";
import uk12 from "./_uk/u12.jpg";
import uk13 from "./_uk/u13.jpg";
import uk14 from "./_uk/u14.jpg";
import Slider from "react-slick";


function Menu() {

    const myStyle = {
        backgroundImage: `url(${bgimg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        opacity: 0.9,
        minHeight: "90vh",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: 'column'
    }

    // for image slider 
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (


        <>
            <div id="menu" className="container-fluid mt-5 position-relative" style={myStyle}>
                <div className="container position-relative">
                    <div className="row position-relative pt-lg-5">
                        <div className="col d-flex flex-column justify-content-around gap-4 fw-bold " >
                            <h1 className="mt-lg-5 mt-md-0 text-white fw-bold">Best University Assignment Help in the UK</h1>
                            <br />
                            <p className="fs-5fw-semibold text-white">University Assignment Help is known for its premium assignment writing services catering especially to students aiming for top grades in the UK.</p>
                            <div className="menu-bottom row flex-lg-row">
                                <div className="col pb-md-3">
                                    <div className="row align-items-center text-white   ps-md-4">
                                        <div className="menu-icon"><img src="https://www.theassignmenthelp.co.nz/wp-content/uploads/2021/05/pay-icon.png" alt="" /></div>

                                        <div className="col">
                                            <p>Pay $16.50</p>
                                            <p>Only</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="col pb-md-3">
                                    <div className="row align-items-center text-white  ps-md-4">

                                        <div className="menu-icon">
                                            <i className="fa-solid fa-clock fa-3x"></i>
                                        </div>
                                        <div className="col">
                                            <p>12 Hours Instant</p>
                                            <p>Delivery Assurance</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="col pb-md-3">
                                    <div className="row align-items-center text-white  ps-md-4">

                                        <div className="menu-icon">
                                            <i className="fa-solid fa-user-graduate fa-3x"></i>
                                        </div>
                                        <div className="col ">
                                            <p>Ph.D Writers</p>
                                            <p>Avilable 24/7</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-5 text-white px-0  d-flex align-items-center" >
                            {/* import form component */}
                            <div className="card py-lg-5 py-3">
                                <h2 className="text-center">ENJOY UPTO 35% OFF</h2>
                                <Form />
                            </div>
                        </div>
                    </div >
                </div>

                {/* bottom menu with image slider  */}
                <div id="bottom_menu_slider" className="row pt-2 bg-dark align-items-center flex-nowrap pb-3 position-absolute bottom-0 w-100 text-white gap-3" style={{ height: '70px' }}>
                    <div className="col-lg-3 col-md-3">
                        <div className="d-flex align-items-center gap-3 fw-bold justify-content-end">
                            <div className="btn bg-info fw-bolder">Trusted By</div>
                            <div className="fs-5">500K+ <br className="brnone" /> Student's Of</div>
                        </div>
                    </div>
                    <div className="col-lg-9">

                        <div className="slider-container">
                            <Slider {...settings}>
                                <div style={{ height: "70px" }} >
                                    <img src={uk1} alt="" />
                                </div>
                                <div style={{ height: "70px" }} >
                                    <img src={uk2} alt="" />
                                </div>
                                <div style={{ height: "70px" }} >
                                    <img src={uk3} alt="" />
                                </div>
                                <div style={{ height: "70px" }} >
                                    <img src={uk4} alt="" />
                                </div>
                                <div style={{ height: "70px" }} >
                                    <img src={uk5} alt="" />
                                </div>
                                <div style={{ height: "70px" }} >
                                    <img src={uk6} alt="" />
                                </div>
                                <div style={{ height: "70px" }} >
                                    <img src={uk7} alt="" />
                                </div>
                                <div style={{ height: "70px" }} >  <img src={uk8} alt="" /> </div>
                                <div style={{ height: "70px" }} >  <img src={uk9} alt="" /> </div>
                                <div style={{ height: "70px" }} >  <img src={uk10} alt="" /> </div>
                                <div style={{ height: "70px" }} >  <img src={uk11} alt="" /> </div>
                                <div style={{ height: "70px" }} >  <img src={uk12} alt="" /> </div>
                                <div style={{ height: "70px" }} >  <img src={uk13} alt="" /> </div>
                                <div style={{ height: "70px" }} >  <img src={uk14} alt="" /> </div>


                            </Slider>
                        </div>
                    </div>
                </div>
            </div >
          
        </>
    )
}

export default Menu;




