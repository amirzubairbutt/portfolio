import React, { useEffect } from 'react';
import { BrowserRouter, Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./App.css"

function NavigationBar() {
  const location = useLocation();

  useEffect(() => {
    const element = document.getElementById(location.hash.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <nav>
      <ul>
        <li>
          <Link to="#home">Home</Link>
        </li>
        <li>
          <Link to="#about">About</Link>
        </li>
        <li>
          <Link to="#contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

function Ap() {
  return (
    <BrowserRouter>
    <div>
      <NavigationBar />
      <section id="home">
        <h2>Home</h2>
        <p>Welcome to the home page.</p>
      </section>
      <section id="about">
        <h2>About</h2>
        <p>Learn more about us here.</p>
      </section>
      <section id="contact">
        <h2>Contact</h2>
        <p>Get in touch with us here.</p>
      </section>
    </div>
    </BrowserRouter>
  );
}
