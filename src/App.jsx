import React from "react";
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {About} from "./Components/About/About";
import {Skills} from "./Components/Skills/Skills";
import { Projects } from "./Components/Projects/Projects";
import {Contact} from "./Components/Contact/Contact";
import { Footer } from "./Components/Footer/Footer";
import Calander from "./Components/Github/Calander";

function App() {
  return (
    <>
     <Navbar/>
     <Header/>
     <About/>
     <Skills/>
     <Projects/>
     <Calander/>
     <Contact/>
     <Footer/>
    </>
  );
}

export default App;
