// Skills.jsx
// List of skills, languages and technologies

import { useState } from 'react';
import './Skills.scss';
import { FaHtml5, FaJava, FaReact, FaCss3Alt, FaSass, FaPython, FaNodeJs, FaGitAlt, FaGoogle, FaSwift, FaDatabase, FaCode, FaCuttlefish, FaCloud } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiTailwindcss, SiMongodb, SiExpress, SiCplusplus, SiErlang, SiOcaml, SiWebflow, SiApachegroovy, SiP5Dotjs, SiNumpy, SiScikitlearn, SiPandas, SiPytorch, SiTensorflow, SiDocker, SiGnubash } from "react-icons/si";

function LangChainIcon() {
  return(
    <svg width="1em" height="1em" viewBox="0 0 77 39" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M58.9834 10.5483C57.9647 10.5483 57.0109 10.9424 56.2916 11.657L53.3987 14.5423C52.6168 15.3215 52.2169 16.4012 52.2996 17.5077C52.3063 17.5678 52.3108 17.6301 52.3175 17.6903C52.4225 18.5407 52.7955 19.3065 53.3987 19.9076C53.8164 20.3239 54.3302 20.6401 54.8864 20.8226C54.9155 20.9896 54.9311 21.161 54.9311 21.3302C54.9311 22.0938 54.634 22.8107 54.0934 23.3495L53.9147 23.5276C52.9474 23.1981 52.0896 22.6638 51.3591 21.938C50.3919 20.974 49.753 19.7585 49.5117 18.4227L49.4782 18.2357L49.3308 18.3559C49.2325 18.4361 49.1364 18.5229 49.0493 18.6097L46.1542 21.495C44.6709 22.9732 44.6709 25.3798 46.1542 26.8603C46.8958 27.5994 47.872 27.969 48.846 27.969C49.82 27.969 50.7962 27.5994 51.5378 26.8603L54.433 23.975C55.9163 22.4968 55.9163 20.0902 54.433 18.6119C54.0376 18.2179 53.5662 17.9218 53.0323 17.7303C53.0033 17.5567 52.9876 17.383 52.9876 17.2138C52.9876 16.3834 53.3183 15.5953 53.9192 14.9942C54.8887 15.3237 55.7465 15.858 56.4725 16.5816C57.4375 17.5433 58.0764 18.7589 58.3199 20.0969L58.3534 20.2839L58.5009 20.1637C58.5992 20.0835 58.6952 19.9967 58.7846 19.9076L61.6797 17.0246C63.163 15.5463 63.163 13.1397 61.6797 11.6593C60.9626 10.9446 60.0065 10.5506 58.9879 10.5506L58.9834 10.5483Z" fill="currentColor"/>
      <path d="M57.4333 0H19.5667C8.77696 0 0 8.74706 0 19.5C0 30.2529 8.77696 39 19.5667 39H57.4333C68.223 39 77 30.2529 77 19.5C77 8.74706 68.223 0 57.4333 0ZM38.7558 30.5735C38.1303 30.7027 37.4288 30.7271 36.953 30.2285C36.7766 30.6314 36.3677 30.4199 36.0483 30.3665C36.0193 30.4489 35.9947 30.5201 35.9656 30.6025C34.9113 30.6737 34.1205 29.6006 33.6178 28.7903C32.6193 28.2537 31.4867 27.9243 30.468 27.361C30.4077 28.2894 30.6132 29.4381 29.7264 30.0392C29.6817 31.8225 32.4361 30.2485 32.6863 31.5798C32.4897 31.5998 32.273 31.5486 32.1167 31.7C31.3996 32.3969 30.573 31.1746 29.7465 31.6778C28.6363 32.2366 28.5223 32.6907 27.1485 32.8065C27.0725 32.6929 27.1038 32.615 27.1686 32.546C27.555 32.0985 27.5819 31.5687 28.2453 31.3772C27.564 31.2704 26.9943 31.6444 26.4225 31.9427C25.6763 32.2455 25.683 31.257 24.5348 31.9939C24.4075 31.8915 24.4678 31.798 24.5415 31.7178C24.8342 31.3639 25.2162 31.3104 25.6495 31.3305C23.5229 30.1483 22.5221 32.7753 21.5392 31.4707C21.2443 31.5486 21.1326 31.8136 20.9472 32.0028C20.7864 31.8269 20.9092 31.6154 20.9159 31.4084C20.7238 31.3193 20.4803 31.2748 20.5384 30.9698C20.1609 30.8429 19.9017 31.0655 19.6225 31.277C19.3701 31.0833 19.7923 30.7962 19.8705 30.5936C20.0961 30.2017 20.6076 30.5134 
        20.869 30.2329C21.6084 29.8144 22.6405 30.4956 23.4849 30.3798C24.1372 30.4622 24.9436 29.7943 24.6152 29.1309C23.9183 28.2448 24.0434 27.0849 24.0277 26.023C23.9406 25.4063 22.4528 24.6182 22.0217 23.9503C21.49 23.3492 21.0745 22.6546 20.6613 21.9689C19.1646 19.0815 19.6359 15.3702 17.7505 12.6876C16.8972 13.1573 15.7869 12.9347 15.0497 12.3047C14.6521 12.6653 14.6342 13.1373 14.6029 13.6382C13.6513 12.6898 13.7697 10.8954 14.5315 9.83794C14.842 9.4194 15.2128 9.07655 15.6305 8.776C15.7244 8.70921 15.7556 8.6402 15.7534 8.53556C16.5062 5.15829 21.6442 5.8106 23.2704 8.20162C24.4499 9.67319 24.8051 11.6212 26.141 12.9904C27.9393 14.9517 29.9878 16.6793 31.6475 18.7698C33.2157 20.6799 34.3394 22.9173 35.3156 25.1748C35.7155 25.9228 35.7177 26.8423 36.3097 27.4812C36.6023 27.8664 38.0253 28.9172 37.717 29.289C37.8957 29.6741 39.2249 30.2084 38.7647 30.5824L38.7558 30.5735ZM63.7128 19.0525L60.8199 21.9378C60.0492 22.7058 59.0954 23.2802 58.0633 23.5941L58.0119 23.6097L57.9918 23.6609C57.6545 24.547 57.1452 25.3351 56.4728 26.0052L53.5776 28.8905C52.3155 30.1483 50.6356 30.8407 48.8485 30.8407C47.0614 30.8407 45.3815 30.1483 44.1194 28.8927C41.5124 26.2946 41.5124 22.0647 44.1194 19.4666L47.0145 16.5813C47.7896 15.8088 48.7167 15.2545 49.7666 14.9317L49.818 14.9161L49.8381 14.8649C50.1732 13.9788 50.687 13.1885 51.3639 12.5139L54.2568 9.62867C55.5189 8.37082 57.1988 7.67845 58.9859 7.67845C60.773 7.67845 62.4551 8.37082 63.715 9.62867C64.975 10.8865 65.6719 12.5607 65.6697 14.3417C65.6697 16.125 64.975 17.7991 63.7128 19.0547V19.0525Z" fill="currentColor"/>
      <path d="M26.9835 27.0806C26.7288 28.0668 26.6462 29.7477 25.3594 29.7966C25.2545 30.3666 25.7548 30.5803 26.2128 30.3977C26.664 30.1907 26.8785 30.5602 27.0326 30.9298C27.7296 31.0322 28.7639 30.6983 28.8041 29.8723C27.7609 29.2735 27.4392 28.1336 26.9857 27.0806H26.9835Z" fill="currentColor"/>
    </svg>
  );
}
function ApacheVelocityIcon() {
  return (<img src="../../files/icons/velocity.png"/>);
}

//   // { name: "Pinecone", icon: <FaCode className="text-teal-400" /> }, // placeholder
//   // { name: "TailwindCSS", icon: <SiTailwindcss className="text-sky-400" /> },

const skills = [
  { name: "Python", icon: <FaPython/>, skillType: ["programming"] },
  { name: "Java", icon: <FaJava/>, skillType: ["programming"] },
  { name: "JavaScript", icon: <SiJavascript/>, skillType: ["programming", "web"] },
  { name: "TypeScript", icon: <SiTypescript/>, skillType: ["programming", "web"] },
  { name: "Swift", icon: <FaSwift/>, skillType: ["programming"] },
  { name: "C++", icon: <SiCplusplus/>, skillType: ["programming"] },
  { name: "Groovy", icon: <SiApachegroovy/>, skillType: ["programming"] },
  { name: "Velocity", icon: <ApacheVelocityIcon/>, skillType: ["programming"] },
  // { name: "OCaml", icon: <SiOcaml/>, skillType: ["programming"] },
  // { name: "Erlang", icon: <SiErlang/>, skillType: ["programming"] },
  { name: "PyTorch", icon: <SiPytorch/>, skillType: ["ai"] },
  { name: "TensorFlow", icon: <SiTensorflow/>, skillType: ["ai"] },
  { name: "NumPy", icon: <SiNumpy/>, skillType: ["ai"] },
  { name: "scikit-learn", icon: <SiScikitlearn/>, skillType: ["ai"] },
  { name: "pandas", icon: <SiPandas/>, skillType: ["ai"] },
  { name: "LangChain", icon: <LangChainIcon/>, skillType: ["ai"] },
  { name: "HTML", icon: <FaHtml5/>, skillType: ["web"] },
  { name: "CSS", icon: <FaCss3Alt/>, skillType: ["web"] },
  { name: "Sass", icon: <FaSass/>, skillType: ["web"] },
  { name: "React", icon: <FaReact/>, skillType: ["web"] },
  { name: "Node.js", icon: <FaNodeJs/>, skillType: ["web"] },
  { name: "Express.js", icon: <SiExpress/>, skillType: ["web"] },
  { name: "p5.js", icon: <SiP5Dotjs/>, skillType: ["web"] },
  { name: "Git", icon: <FaGitAlt/>, skillType: ["tool"] },
  { name: "Docker", icon: <SiDocker/>, skillType: ["tool"] },
  { name: "Bash", icon: <SiGnubash/>, skillType: ["tool"] },
  { name: "SQL", icon: <FaDatabase/>, skillType: ["tool"] },
  { name: "MongoDB", icon: <SiMongodb/>, skillType: ["tool"] },
  { name: "Google Cloud Platform", icon: <FaCloud/>, skillType: ["tool"] },
  // { name: "Webflow", icon: <SiWebflow/>, skillType: ["tool"] },
];
const tabs = [
  { id: "all", label: "All Skills" },
  { id: "programming", label: "Programming" },
  { id: "ai", label: "AI & Machine Learning" },
  { id: "web", label: "Web Development" },
  { id: "tool", label: "Tools & Environments" }
];

export default function Skills(){
  const [selectedTab, setSelectedTab] = useState(tabs[0].id);
  const changeTab = (id) => setSelectedTab(id);

  return(
    <>
      <div className='skill-tabs'>
        {tabs.map((tab, i) => (
          <div
            key={i}
            id={tab.id}
            className={`s-tab ${selectedTab === tab.id ? 'active' : ''}`}
            onClick={ () => changeTab(tab.id) }
          >
            {tab.label}
          </div>
        ))}
      </div>

      <div className="skill-list">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`skill ${(selectedTab === 'all') || skill.skillType.includes(selectedTab) ? 'active' : ''}`}
          >
            <div className="skill-icon">{skill.icon}</div>
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}
