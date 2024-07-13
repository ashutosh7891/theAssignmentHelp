import React from 'react';

import ReactWhatsapp from 'react-whatsapp';

const Whatsapp = () => (
  <>
    <ReactWhatsapp className='border-0' style={{background:"unset"}}  number="+44 7700 168833" message="Hello World!!!" ><i className="fa-brands fa-whatsapp fa-5x fa-fade" ></i></ReactWhatsapp>
  </>
);

export default Whatsapp;