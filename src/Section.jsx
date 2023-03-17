import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export const Section = () => {
    const location = useLocation();
  
    useEffect(() => {
      const { hash } = location;
      const element = hash ? document.querySelector(hash) : null;
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, [location]);
  return (
    <div>
    <section id="section1">
      <h2>Section 1</h2>
      <p>This is the content of section 1.</p>
    </section>
    <section id="section2">
      <h2>Section 2</h2>
      <p>This is the content of section 2.</p>
    </section>
    <section id="section3">
      <h2>Section 3</h2>
      <p>This is the content of section 3.</p>
    </section>
  </div>
  )
}