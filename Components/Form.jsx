import React from 'react';
import { useState } from "react";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const Form = () => {

    const [verified, setVerified] = useState(false);
    // Recaptcha function
    function onChange(value) {
        setVerified(true);
    }

    const [formData, setFormData] = useState({
        email: '',
        contactno: '',
        country_code: '',
    })

    const handleChange = (e, value, name) => {
        console.log(value, "value");
        console.log(name, "name");
        if (name === 'contactno') {
            let splitMobile = e?.split(value?.dialCode);

            setFormData({
                ...formData,
                country_code: value?.dialCode,
                contactno: splitMobile?.[1] || "",
            });

        }
        else
            setFormData({
                ...formData, [e.target.name]: e.target.value
            });


    };

    // for submit form on backend server 
    const sendEmail = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://www.sop.work/abdul/index.php', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            // alert(response.data.message);
            // console.log(formData);
        } catch (error) {
            alert('Failed to send email');
        }
        setFormData({
            number: '',
            email: '',
        });
    };

   
    return (
        <>
            <form className="mx-5 text-start  mt-md-0" onSubmit={sendEmail}>
                <div className="mb-3">
                    <label className="form-label">Mobile No</label>

                    <PhoneInput
                        country={'us'}
                        name="contactno"
                        value={`${formData.country_code}${formData.contactno}`}
                        onChange={(e, phone) => handleChange(e, phone, "contactno")}

                    />

                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input placeholder='Please Enter your email' onChange={handleChange} value={formData.email} type="email" name="email" required className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                {/* <div className="mb-3 form-control d-lg-none">
                    <ReCAPTCHA name="recaptcha"
                        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                       
                        onChange={onChange}
                    />
                </div> */}
                 <ReCAPTCHA name="recaptcha" className='mb-3' 
                        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                       
                        onChange={onChange}
                    />
                <button type="submit" className="btn btn-primary form-control" disabled={!verified}>Submit</button>
            </form>

        </>
    );
}

export default Form;
