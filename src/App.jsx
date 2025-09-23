import { useState } from 'react';
import { projects } from './data/projects';
import { degrees } from './data/degrees';
import { tinkering } from './data/tinkering';
import { art } from './data/art';
import './App.scss';
import Header from './components/Header';
import ProjectRow from './components/ProjectRow';
import Modal from './components/Modal';
import Footer from './components/Footer';
import ChessCards from './components/ChessCards';
import Skills from './components/Skills';
import Timeline from './components/Timeline';

const tabs = [
  { id: "all-tab", label: "All Projects" },
  { id: "ai-tab", label: "AI & Machine Learning" },
  { id: "apps-tab", label: "Desktop & Mobile Apps" },
  { id: "plugins-tab", label: "Plugins & Themes" },
];

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedTab, setSelectedTab] = useState(tabs[0].id);
  const changeTab = (id) => setSelectedTab(id);

  return (
    <>
      <Header/>

      <div className='content'>

        {/* About Me */}
        <div id='about' className='section-container'>
          <h2 className="section-heading">About Me</h2>
          <div className='about-content'>
            <div className='about-left'>
              <img src="../../files/images/butterfly.jpeg" className='about-img'/>
              <div></div>
            </div>
            <div className='about-right'>
              <p>
                I'm not very good at talking about myself. Usually when I try I end up leaving out any genuinely impressive details, out of fear of bragging. Sometimes I swing the other way entirely, and self-describe with terms like 'Code Artifex' and 'Arbiter of Code Quality.' So instead, I decided to <b>show</b> you who I am the best way I know how — with code. So enjoy my site, and if you must read something, enjoy the <i>Lorem Ipsum</i> I have prepared for you below.
              </p>
              <p>
                Oh, before I forget: if you see something strange, why not give it a click? Something interesting might just happen...
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>

        {/* Education */}
        <div id='education' className='section-container'>
          <h2 className="section-heading">Education</h2>
          <Timeline data={degrees}/>
        </div>

        {/* Skills */}
        <div id='skills' className='section-container'>
          <h2 className="section-heading">Skills</h2>
          <Skills/>
        </div>

        {/* Projects */}
        <div id='projects' className="section-container">
          <h2 className="section-heading">Projects</h2>

          <div className='project-tabs'>
            {tabs.map((tab, i) => (
              <div
                key={i}
                id={tab.id}
                className={`p-tab ${selectedTab === tab.id ? 'active' : ''}`}
                onClick={ () => changeTab(tab.id) }
              >
                {tab.label}
              </div>
            ))}
          </div>

          { selectedTab === "all-tab" &&
            <ProjectRow
              id="project-row-1"
              title="All Projects"
              projects={projects}
              type={"All"}
              onSelect={setSelectedProject}
            />
          }

          { selectedTab === "ai-tab" &&
            <ProjectRow
              id="project-row-2"
              title="AI / Machine Learning"
              projects={projects}
              type={"AI"}
              onSelect={setSelectedProject}
            />
          }

          { selectedTab === "apps-tab" &&
            <ProjectRow
              id="project-row-3"
              title="Desktop & Mobile Apps"
              projects={projects}
              type={"App"}
              onSelect={setSelectedProject}
            />
          }

          { selectedTab === "plugins-tab" &&
            <ProjectRow
              id="project-row-4"
              title="Plugins & Themes"
              projects={projects}
              type={"Plugin"}
              onSelect={setSelectedProject}
            />
          }

          {selectedProject && (
            <Modal project={selectedProject} onClose={() => setSelectedProject(null)}/>
          )}

          {/* <ProjectRow
            id="tinkering-row-1"
            title="Tinkering"
            projects={tinkering}
          /> */}

          {/* <ProjectRow
            id="art-row-1"
            title="Art"
            projects={art}
          /> */}

        </div>

        {/* Chess Cards */}
        <ChessCards/>
        
      </div>

      <Footer/>

    </>
  )
};

export default App;
