
import "./Style.css"
import Coveringdata from "./Coveringdata"
import { useEffect, useState } from "react";

function Covering(props) {

    const [activeButton, setActiveButton] = useState(null);
    const handleButtonClick = (id) => {
        setActiveButton(id);
    };


    useEffect(() => {

        // for by default show one card 
        if (Coveringdata.length > 0) {
            setActiveButton(Coveringdata[0].id)
        }

    }, [])

    // Style 
    const w = {
        backgroundColor: "yellow !important"
    }
    const backgroundImage = {
        background: 'url("https://images.pexels.com/photos/6281828/pexels-photo-6281828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1") no-repeat',
        backgroundSize: 'cover',
        height: "85vh"
    }
    // style={{ marginTop: props?.mainPage && window.innerWidth <= 768 ? "8rem" : "" }}
    // heights:  window.innerWidth <= 768 ? "100vh !important" : ""
    return (
        <>
            <section id="covering-container" className="container-fluid text-white ps-lg-5 ps-md-0  d-flex justify-content-start align-items-end "  style={backgroundImage } >
                <div id="covering" className="content col-lg-6 m-lg-4 col-md ms-md-3 me-md-2 text-center p-4 fw-bold" >
                    <h2 className="">COVERING MULTIPLE <span className="text-dark">ASSIGNMENT</span> DOMAINS</h2>
                    <p className="fs-4">Having ample years of experience & expertise in more than <span className="text-dark">40+</span> disciplines.</p>
                    <div className="items position-relative d-flex flex-wrap align-item-center justify-content-between gap-2 py-2">

                        {
                            Coveringdata.map((data) =>

                                <div key={data.id} className="bg-white text-dark w-25 flex-row align-item-center gap-3 py-2 ps-2">
                                    <h4
                                        className="hover-button"
                                        onMouseOver={() => handleButtonClick(data.id)}
                                        onTouchStart={() => handleButtonClick(data.id)}
                                    >
                                        {data.head}
                                    </h4>

                                    <div className={activeButton === data.id ? 'hover-block' : 'none'} >
                                        <h3 className="fw-bold text-center rounded-pill mb-4 text-white">{data.head}</h3>
                                        {/* <hr /> */}
                                        <p>{data.para}</p>
                                    </div>

                                </div >


                            )
                        }

                    </div>
                </div>
            </section>

        </>
    )
}

export default Covering