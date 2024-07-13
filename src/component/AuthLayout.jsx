import { Fragment } from "react"
import Footer from "../../Components/Footer"
import Header from "../../Components/Header"
import Whatsapp from "./Whatsapp"

const AuthLayout = ({ body }) => {
    return (
        <Fragment>
            <Header />
            {body}
            <Whatsapp />
            <Footer />
        </Fragment>
    )
}

export default AuthLayout;