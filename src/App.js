import React from "react";
import {Header} from "./Components/Header/Header"
import {Navbar} from "./Components/Navbar/Navbar"
import {About} from "./Components/About/About"
import {Skills} from "./Components/Skills/Skills"
import { Projects } from "./Components/Projects/Projects";
import { Footer } from "./Components/Footer/Footer";
import {Contact} from "./Components/Contact/Contact";

function App() {
  return (
    <div>
     <Navbar/>
     {/* <Header/>
     <About/>
     <Skills/>
     <Projects/>
     <Contact/>
     <Footer/> */}
    </div>
  );
}

export default App;
