import React from 'react'
import Ashish_Mishra_Resume from "../../assets/Ashish_Mishra_Resume.pdf";
const CTA = () => {
    return (
        <div className="cta">
            <div  id="resume-link-2">
            <a  id="resume-button-2" href={Ashish_Mishra_Resume} download className='btn' target="_blank">Resume</a>
            </div>
            <div>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
            </div>
        </div>
    )
}

export default CTA;
