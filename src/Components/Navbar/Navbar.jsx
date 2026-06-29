// import React, { useState } from "react";
import "./Navbar.css";
import Ashish_Mishra_Resume from "../../assets/Ashish_Mishra_Resume.pdf";
// import {
//   AiFillHome,
//   AiFillProject,
//   AiOutlineDownload,
//   AiFillContacts,
// } from "react-icons/ai";
// import { FaUserAlt } from "react-icons/fa";
// import { BsFillBookFill } from "react-icons/bs";

// export const Navbar = () => {
//   const [activeNav, setActiveNav] = useState("#");

//   const handleResume = () => {
//     window.open(resumeLink);
//   };
//   return (
//     <div id="nav-menu">
//       <nav  className="navbar">
//         <a
//           href="#"
//           onClick={() => setActiveNav("#")}
//            className={activeNav === "#" ? "active" : ""}
//           className="nav-link home"
//         >
//           {" "}
//           <span>
//             <AiFillHome />
//           </span>{" "}
//           Home
//         </a>
//         <a
//           href="#about"
//           onClick={() => setActiveNav("#about")}
//            className={activeNav === "#about" ? "active" : ""}
//           className="nav-link about"
//         >
//           {" "}
//           <span>
//             <FaUserAlt />
//           </span>{" "}
//           About
//         </a>
//         <a
//           href="#skills"
//           onClick={() => setActiveNav("#skills")}
//            className={activeNav === "#skills" ? "active" : ""}
//           className="nav-link skills"
//         >
//           {" "}
//           <span>
//             <BsFillBookFill />
//           </span>{" "}
//           Skills
//         </a>
//         <a
//           href="#projects"
//           onClick={() => setActiveNav("#projects")}
//            className={activeNav === "#projects" ? "active" : ""}
//           className="nav-link projects"
//         >
//           {" "}
//           <span>
//             <AiFillProject />
//           </span>{" "}
//           Project
//         </a>
//         <a
//           href="#contact"
//           onClick={() => setActiveNav("#contact")}
//            className={activeNav === "#contact" ? "active" : ""}
//           className="nav-link contact"
//         >
//           {" "}
//           <span>
//             <AiFillContacts />
//           </span>{" "}
//           Contact
//         </a>
//         <button id="resume-button-1" onClick={handleResume}>
//           <a
//             id="resume-link-1"
//             href={Ashish_Mishra_Resume}
//             download="Ashish_Mishra_Resume"
//             target="_blank"
//              className="nav-link resume"
//             rel="noreferrer"
//           >
//             {" "}
//             <span>
//               <AiOutlineDownload />
//             </span>{" "}
//             Resume
//           </a>
//         </button>
//       </nav>
//     </div>
//   );
// };

import { Link } from "react-scroll";
import { AiOutlineDownload } from "react-icons/ai";

import { RxHamburgerMenu } from "react-icons/rx";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import { useState } from "react";

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [isSmallerScreen] = useMediaQuery("(max-width: 768px)");
  const [, setBodyVisible] = useState(!isSmallerScreen);

  const handleMenuClick = () => {
    if (isSmallerScreen) {
      setBodyVisible(false);
      onOpen();
    }
  };

  const handleDrawerClose = () => {
    setBodyVisible(true);
    onClose();
  };

  return (
    <div id="nav-menu" className="navbar">
      <div className="wrapper">
        <div className="wrapperLeft">
          <Link to="home" smooth={true} offset={-50} duration={0}>
            <h2>Ashish Mishra</h2>
          </Link>
        </div>
        <div className="wrapperRight">
          <div>
            <Link
              to="home"
              smooth={true}
              offset={-80}
              duration={0}
              className="nav-link home"
            >
              Home
            </Link>
          </div>
          <div>
            <Link
              to="about"
              smooth={true}
              offset={-80}
              duration={0}
              className="nav-link about"
            >
              About
            </Link>
          </div>
          <div>
            <Link
              to="skills"
              smooth={true}
              offset={-80}
              duration={0}
              className="nav-link skills"
            >
              Skills
            </Link>
          </div>
          <div>
            <Link
              to="projects"
              smooth={true}
              offset={-80}
              duration={0}
              className="nav-link projects"
            >
              Projects
            </Link>
          </div>
          <div>
            <Link
              to="contact"
              smooth={true}
              offset={-80}
              duration={0}
              className="nav-link contact"
            >
              Contact
            </Link>
          </div>
          <div>
            <a
              id="resume-link-1"
              href={Ashish_Mishra_Resume}
              download="Ashish_Mishra_Resume.pdf"
              className="nav-link resume"
            >
              {" "}
              <span>
                <AiOutlineDownload />
              </span>{" "}
              Resume
            </a>
          </div>
        </div>
        <div className="responce">
          <RxHamburgerMenu onClick={handleMenuClick} />
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={handleDrawerClose}
            backgroundColor="black"
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerBody marginTop={"30px"}>
                <div className="drawerbody">
                  <div>
                    <Link
                      to="home"
                      smooth={true}
                      offset={-80}
                      duration={0}
                      onClick={handleDrawerClose}
                    >
                      Home
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="about"
                      smooth={true}
                      offset={-80}
                      duration={0}
                      onClick={handleDrawerClose}
                    >
                      About
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="skills"
                      smooth={true}
                      offset={-80}
                      duration={0}
                      onClick={handleDrawerClose}
                    >
                      Skills
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="projects"
                      smooth={true}
                      offset={-80}
                      duration={0}
                      onClick={handleDrawerClose}
                    >
                      Projects
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="contact"
                      smooth={true}
                      offset={-80}
                      duration={0}
                      onClick={handleDrawerClose}
                    >
                      Contact
                    </Link>
                  </div>
                  <div>
                    <a
                      id="resume-link-1"
                      href={Ashish_Mishra_Resume}
                      download="Ashish_Mishra_Resume.pdf"
                      className="nav-link resume"
                    >
                      {" "}
                      <span>
                        <AiOutlineDownload />
                      </span>{" "}
                      Resume
                    </a>
                  </div>
                </div>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export { Navbar };
