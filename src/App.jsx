import { useState } from 'react';
import { projects } from './data/projects';
import { degrees } from './data/degrees';
import { roles } from './data/roles';
// import { tinkering } from './data/tinkering';
// import { art } from './data/art';
import Header from './components/Header';
import About from './components/About'
import Timeline from './components/Timeline';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ChessCards from './components/ChessCards';
import Footer from './components/Footer';
import './App.css';

const projectTabs = [
  { id: "all-tab", label: "All Projects" },
  { id: "ai-tab", label: "AI & Machine Learning" },
  { id: "apps-tab", label: "Applications" },
  { id: "plugins-tab", label: "Plugins & Themes" },
];

function App() {
  const [selectedTab, setSelectedTab] = useState(projectTabs[0].id);
  const changeTab = (id) => setSelectedTab(id);

  return (
    <>
      <Header/>

      <div className='content'>

        {/* About Me */}
        <div id='about' className='section-container'>
          <h2 className="section-heading">About Me</h2>
          <About/>
        </div>

        {/* Education */}
        <div id='education' className='section-container'>
          <h2 className="section-heading">Education</h2>
          <Timeline data={degrees}/>
        </div>

        {/* Experience */}
        <div id='experience' className='section-container'>
          <h2 className="section-heading">Experience</h2>
          <Experience data={roles}/>
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
            {projectTabs.map((tab, i) => (
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
            />
          }

          { selectedTab === "ai-tab" &&
            <Projects
              id="project-row-2"
              title="AI / Machine Learning"
              projects={projects}
              category={"ai"}
            />
          }

          { selectedTab === "apps-tab" &&
            <Projects
              id="project-row-3"
              title="Desktop & Mobile Apps"
              projects={projects}
              category={"app"}
            />
          }

          { selectedTab === "plugins-tab" &&
            <Projects
              id="project-row-4"
              title="Plugins & Themes"
              projects={projects}
              category={"plugin"}
            />
          }

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
