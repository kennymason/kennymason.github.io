// Header.jsx
// Site Header and info

import { useState, useEffect } from 'react';
import './Header.scss';

const titles = [
  "Software Engineer",
  // "Machine Teacher",
  "Tinkerer",
  "Pencil Artist",
  "Chess Player",
  "Puzzle Solver",
  // "boardgamer",
  // "Card Enthusiast",
  // "Amateur Thinker",
  "Eagle Scout",
  // "arbiter of code quality",
  "Code Artifex"
];

export default function Header(){
  const [titleIndex, setTitleIndex] = useState(0);
  const [currentTitle, setCurrentTitle] = useState("");
  const [cursor, setCursor] = useState({ x: 0, y: 0, visible: false });

  const handleMouseMove = (e) => {
    setCursor({ x: e.clientX, y: e.clientY, visible: true });
  };

  const handleMouseLeave = () => {
    setCursor((prev) => ({ ...prev, visible: false }));
  };

  
  let timer,
  charDelay = 100,
  wordDelay = 1000,
  part,
  i = 0,
  offset = 0,
  forwards = true,
  skipCount = 0;
  const skipDelay = 20;

  useEffect(() => {
    const typerwriterCycle = () => {
      let delay = charDelay;

      if (forwards) {
        if (offset >= titles[i].length) {
          ++skipCount;
          if (skipCount == skipDelay) {
            forwards = false;
            skipCount = 0;
          }
        }
      }
      else {
        if (offset == 0) {
          forwards = true;
          i++;
          offset = 0;
          if (i >= titles.length) {
            i = 0;
          }
          delay = wordDelay;
        }
      }
      part = titles[i].substring(0, offset);
      if (skipCount == 0) {
        if (forwards) {
          offset++;
        }
        else {
          offset--;
        }
      }

      setCurrentTitle(part);

      timer = setTimeout(typerwriterCycle, delay);
    }

    // const interval = setInterval(() => {
    //   setTitleIndex(prevIndex => (prevIndex + 1) % titles.length);
    // }, 4000);

    // return () => clearInterval(interval);
    typerwriterCycle();

    return () => clearTimeout(timer);
  }, [titles]);

  return(
    <div className="header-container" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>

      {/* Nav Bar */}
      <div className='nav-bar'>
        <div className='nav-links'>
          <img src="../../files/images/chess-cards/king-piece.png" className='nav-icon'/>
          <a href="#about" className='nav-link'>About</a>
          <a href="#skills" className='nav-link'>Skills</a>
          <a href="#education" className='nav-link'>Education</a>
          <a href="#projects" className='nav-link'>Projects</a>
        </div>

        {/* External links & contact buttons */}
        <div className="contact">
          <a className="fa fa-square-envelope contact-icon" href="mailto:kennymmase@gmail.com"></a>
          <a className="fa fa-github-square contact-icon" href="https://github.com/kennymason"></a>
          <a className="fa fa-linkedin-square contact-icon" href="https://www.linkedin.com/in/masonkenneth/"></a>
        </div>
      </div>

      {/* Heading */}
      <h1 className="header-title">Kenny Mason</h1>
      <h2 className="header-title-2">{currentTitle}</h2>

      <div
        className="cursor-glow"
        style={{
          left: cursor.x,
          top: cursor.y,
          opacity: cursor.visible ? 1 : 0,
        }}
      />
    </div>
  );
}
