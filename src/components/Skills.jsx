// Skills.jsx
// List of skills, languages and technologies

import { useState } from 'react';
import './Skills.scss';
import { FaHtml5, FaJava, FaReact, FaCss3Alt, FaSass, FaPython, FaNodeJs, FaGitAlt, FaGoogle, FaSwift, FaDatabase, FaCode, FaCuttlefish, FaCloud } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiTailwindcss, 
  SiMongodb,
  SiExpress,
  SiCplusplus,
  SiErlang,
  SiOcaml,
  SiWebflow,
  SiLangchain, // may not exist, fallback to FaCode
  } from "react-icons/si";

const skills = [
  { name: "Python", icon: <FaPython className="text-yellow-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "Sass", icon: <FaSass className="text-blue-500" /> },
  // { name: "TailwindCSS", icon: <SiTailwindcss className="text-sky-400" /> },

  // { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "Java", icon: <FaJava className="text-red-600" /> },
  { name: "Groovy", icon: <FaCode className="text-green-400" /> }, // placeholder
  // { name: "Java", icon: <FaJava className="text-red-600" /> },
  // { name: "Python", icon: <FaPython className="text-blue-400" /> },
  { name: "Swift", icon: <FaSwift className="text-orange-400" /> },
  { name: "C++", icon: <SiCplusplus className="text-blue-600" /> },
  { name: "SQL", icon: <FaDatabase className="text-purple-400" /> },
  { name: "Velocity", icon: <FaCode className="text-gray-400" /> }, // placeholder
  { name: "OCaml", icon: <SiOcaml className="text-orange-500" /> },
  { name: "Erlang", icon: <SiErlang className="text-red-500" /> },

  // { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  // { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "LangChain", icon: <FaCode className="text-purple-500" /> }, // no icon yet

  { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "Google Cloud Platform", icon: <FaCloud className="text-blue-400" /> },
  { name: "Webflow", icon: <SiWebflow className="text-indigo-400" /> },
  { name: "Pinecone", icon: <FaCode className="text-teal-400" /> }, // placeholder
];

export default function Skills(){

  return(
    <div className="skill-list">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="skill"
        >
          <div className="skill-icon">{skill.icon}</div>
          <p className="skill-name">{skill.name}</p>
        </div>
      ))}
    </div>
  );
}
