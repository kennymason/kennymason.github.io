import { useState } from 'react';
import { projects } from './data/projects';
import { degrees } from './data/degrees';
import { tinkering } from './data/tinkering';
import { art } from './data/art';
import './App.css';
import Header from './components/Header';
import Projects from './components/Projects';
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
              <div className="about-contact">
                <a className="about-icon fa fa-square-envelope" href="mailto:kennymmase@gmail.com"></a>
                <a className="about-icon fa fa-github-square" href="https://github.com/kennymason"></a>
                <a className="about-icon fa fa-linkedin-square" href="https://www.linkedin.com/in/masonkenneth/"></a>
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
            <Projects
              id="project-row-1"
              title="All Projects"
              projects={projects}
              category={"all"}
              onSelect={setSelectedProject}
            />
          }

          { selectedTab === "ai-tab" &&
            <Projects
              id="project-row-2"
              title="AI / Machine Learning"
              projects={projects}
              category={"ai"}
              onSelect={setSelectedProject}
            />
          }

          { selectedTab === "apps-tab" &&
            <Projects
              id="project-row-3"
              title="Desktop & Mobile Apps"
              projects={projects}
              category={"app"}
              onSelect={setSelectedProject}
            />
          }

          { selectedTab === "plugins-tab" &&
            <Projects
              id="project-row-4"
              title="Plugins & Themes"
              projects={projects}
              category={"plugin"}
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
