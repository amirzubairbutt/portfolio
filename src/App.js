import React, { useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useState, useRef } from 'react';

import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

//import "./global.css";
import { Navbar } from './Components/Navbar/Navbar';
import { Home } from './Components/Home/Home.jsx';
import { Services } from './Components/Services/Services';
import { About } from './Components/About/About';
import { Projects } from './Components/Projects/Projects';
import { Contact } from './Components/Contact/Contact';
import { Footer } from './Footer/Footer';
import { ContextProvider, ThemeContext } from './context.js/ContextProvider';


function App() {

  function getInitialColorScheme() {

    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    console.log(isDark ? 'dark' : 'light')

    return isDark ? 'dark' : 'light';
  }
  
const [theme,setTheme] = useState(getInitialColorScheme);
const rootRef = useRef(null);


  const handleTheme = () =>{

    setTheme (theme === "light" ? "dark" : "light")

  }

// const {theme,handleTheme} = useContext(ThemeContext)


  return (
    <ContextProvider>
      <div className= {`App ${theme}`}>
      <BrowserRouter>
      <div className="container-xxl" ref={rootRef}>
        <Navbar handleTheme={handleTheme} theme = {theme}/>
        <Home />
        <About />
        <Services/>
        <Projects />
        <Contact />
        <Footer/>
        </div>
      </BrowserRouter>
      </div>
    </ContextProvider>
  );
}

export default App;
