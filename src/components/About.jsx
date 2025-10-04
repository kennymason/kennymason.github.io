// About.jsx
// About Me section

import { useRef, useEffect, useState } from 'react';
import './About.css';

export default function About() {
  const buttonsRef = useRef(null);
  const [buttonsVisible, setButtonsVisible] = useState(false);

  useEffect(() => {
    const buttonElem = buttonsRef.current;
    if (!buttonElem) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setButtonsVisible(true);
          observer.unobserve(entry.target); // Only do once
        }
      });
    }, { threshold: 1 });

    observer.observe(buttonElem);
    return () => observer.disconnect();
  }, []);

  return (
    <div className='about-content'>
      <div className='about-left'>
        <div
          ref={ buttonsRef }
          className="about-contact"
        >
          <a className={ `${buttonsVisible ? "pop-on-scroll" : "" } delay-1 about-icon fa fa-square-envelope` } href="mailto:kennymmase@gmail.com"></a>
          <a className={ `${buttonsVisible ? "pop-on-scroll" : "" } delay-2 about-icon fa fa-github-square` } href="https://github.com/kennymason"></a>
          <a className={ `${buttonsVisible ? "pop-on-scroll" : "" } delay-3 about-icon fa fa-linkedin-square` } href="https://www.linkedin.com/in/masonkenneth/"></a>
        </div>
        <img src="about/butterfly.jpeg" className='about-img'/>
      </div>
      <div className='about-right'>
        <p>
          I'm not very good at talking about myself. I try not to brag, but then I self-describe with terms like 'Code Artifex' and 'Arbiter of Code Quality.' So instead, I decided to <b>show</b> you who I am the best way I know how — with code. So enjoy my site, and if you must read something, enjoy the <i>Lorem Ipsum</i> I have prepared for you below.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p>
          Oh, before I forget: if you see something out of place, why not give it a click? Something interesting might just happen...
        </p>
      </div>
    </div>
  );
}
