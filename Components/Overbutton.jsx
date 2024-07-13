import React from 'react';
import "./Style.css";
import { useState, useEffect } from 'react';
import Coveringdata from './Coveringdata'


const Overbutton = (props) => {
    const [activeButton, setActiveButton] = useState(null);
    const handleButtonClick = (id) => {
        setActiveButton(id);
    };
    const w = {
        backgroundColor: "yellow !important",
        position: "relative",
        width: "100vw !important",
        height: "auto",

    }

    return (
        <>
        
            {
                Coveringdata.map((item) =>
                    <div key={item.id} className="bg-white text-dark w-25 flex-row align-item-center gap-3 py-2 ps-2 position-relative">
                        <h3
                            onMouseOver={() => handleButtonClick(item.id)}
                            onTouchStart={() => handleButtonClick(item.id)}
                        >
                            {item.head}
                        </h3>

                        <div className={activeButton === item.id ? 'block' : 'none'} style={w}>
                            <p>{item.para}</p>
                        </div>

                    </div >

                )
            }
        </>
    );
}

export default Overbutton;