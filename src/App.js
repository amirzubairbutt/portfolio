import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useState, useRef } from 'react';

import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

//import "./global.css";
import { Navbar } from './Components/Navbar/Navbar';
import { Home } from './Components/Home/Home';
import { Services } from './Components/Services/Services';
import { About } from './Components/About/About';
import { Projects } from './Components/Projects/Projects';
import { Contact } from './Components/Contact/Contact';
import { Footer } from './Footer/Footer';



function App() {

  
const [theme,setTheme] = useState("light");
const rootRef = useRef(null);

  const handleTheme = () =>{

    setTheme (theme === "light" ? "dark" : "light")

  }

  return (
    <div className= {`App ${theme}`}>
    <BrowserRouter>
    <div class="container-xxl" ref={rootRef}>
      <Navbar handleTheme={handleTheme}/>
      <Home />
      <About />
      <Services/>
      <Projects />
      <Contact />
      <Footer/>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
