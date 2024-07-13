
import "./Style.css"

import logo from "./logo.png"
import Modal from "./Modal";
import { Link, NavLink } from "react-router-dom";




function Header() {

    return (
        <>            
            <nav className="navbar navbar-expand-lg bg-body-tertiary position-fixed top-0 z-3 px-xl-5">
                <div className="container-fluid justify-content-around justify-content-md-between justify-content-lg-around px-md-5">
                    <Link className="navbar-brand" to="/">
                        <img style={{ height: "32px" }} src={logo} alt="" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className={` nav-link`}  aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={` nav-link`}  to='/about'>About Us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={` nav-link`}  to="/blog">Blog</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={` nav-link`}  to="/services">Services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={` nav-link`}  to="/subjects">Subjects</NavLink>
                            </li>
                        </ul>
                    </div>

                    {/* Order buttton */}
                    <div id="nav-contact" className="d-flex gap-2">
                        <Link to="tel:+447700168833" className="bg-success text-white rounded-1 px-2 p-1 text-decoration-none"><i className="fa-solid fa-phone fa-fade pe-1" style={{ color: "#ffd43b" }}></i>+44-7700168833</Link>
                        {/* for order now  */}
                        <Modal />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;