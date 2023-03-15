import React from 'react';
import "./Navbar.css";
import Ashish_Mishra_Resume from "../../assets/Ashish_Mishra_Resume.pdf";
import {AiFillHome,AiFillProject,AiOutlineDownload,AiFillContacts} from "react-icons/ai"
import {FaUserAlt} from "react-icons/fa";
import {BsFillBookFill} from "react-icons/bs";




export const Navbar=()=>{
    return (
        <div  id="nav-menu">
            <nav className='navbar'>
                <a href="#" class="nav-link home"> <span><AiFillHome/></span> Home</a>
                <a href="#"  class="nav-link about"> <span><FaUserAlt/></span> About</a>
                <a href="#"  class="nav-link skills"> <span><BsFillBookFill/></span> Skills</a>
                <a href="#"  class="nav-link projects"> <span><AiFillProject/></span> Project</a>
                <a href="#"  class="nav-link contact"> <span><AiFillContacts/></span> Contact</a>
                <a href={Ashish_Mishra_Resume} download  class="nav-link resume"> <span><AiOutlineDownload/></span> Resume</a>
            </nav>
        </div>
    )
}








// export const Navbar = () => {

//     const styles = {
//         marginLeft: "500px",
//     }
//     return (
//         <div style={styles}>
//             <header >
//                 <div class="topnav" id="nav-menu">
//                     <nav class="navbar-container container">
//                         <ul class="nav_inner">
//                             <li><a href="#home" class="nav-link home">Home</a></li>
//                             <li><a href="#about" class="nav-link about">About</a></li>
//                             <li><a href="#skills" class="nav-link skills">Skills</a></li>
//                             <li><a href="#projects" class="nav-link projects">Projects</a></li>
//                             <li><a href="#contact" class="nav-link contact">Contact</a></li>
//                             <li>
//                         <a id='btn'
//                             class="nav-link resume"
//                             href={Ashish_Mishra_Resume} download>Resume</a>
//                             </li>
//                         </ul>
//                     </nav>


//                 </div>

//             </header>
//         </div>
//     )
// }

