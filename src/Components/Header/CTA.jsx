import React from 'react'
import Ashish_Mishra_Resume from "../../assets/Ashish_Mishra_Resume.pdf";
const CTA = () => {
    return (
        <div className="cta">
            <a  id="resume-button-2" href={Ashish_Mishra_Resume} download className='btn'>Resume</a>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
    )
}

export default CTA;
