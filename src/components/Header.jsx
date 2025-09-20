// Header.jsx
// Site Header and info

import { useState } from 'react';
import './Header.scss';

export default function Header(){
  const [cursor, setCursor] = useState({ x: 0, y: 0, visible: false });

  const handleMouseMove = (e) => {
    setCursor({ x: e.clientX, y: e.clientY, visible: true });
  };

  const handleMouseLeave = () => {
    setCursor((prev) => ({ ...prev, visible: false }));
  };

  return(
    <div className="header-container" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>

      {/* <!-- External links & contact buttons --> */}
      <div className="contact">
        <a className="fa fa-square-envelope" href="mailto:kennymmase@gmail.com"></a>
        <a className="fa fa-github-square" href="https://github.com/kennymason"></a>
        <a className="fa fa-linkedin-square" href="https://www.linkedin.com/in/masonkenneth/"></a>
      </div>

      {/* Heading */}
      <h1 className="header-name">Kenny Mason</h1>

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
