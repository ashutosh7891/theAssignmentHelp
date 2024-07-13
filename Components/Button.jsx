import { useState } from "react";
import "./Style.css"

function Button() {

    const [btnState, setBtnState] = useState(false)
    function handleClick() {
        setBtnState(btnState => !btnState)
    }

    let toggleClassbtn = btnState ? ' active' : '';
    return (
        <>
            <button className={`btn${toggleClassbtn}`} onClick={handleClick}>Toggle class</button>
        </>
    )
}

export default Button;