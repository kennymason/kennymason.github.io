import { useState } from 'react';
import { projects } from './data/projects';
import { tinkering } from './data/tinkering';
import { art } from './data/art';
import Header from './components/Header';
import ProjectRow from './components/ProjectRow';
import Modal from './components/Modal';
import Footer from './components/Footer';
import './App.scss';
import ChessCards from './components/ChessCards';

function App() {
  const tabs = [
    { id: "all-tab", label: "All Projects" },
    { id: "ai-tab", label: "AI & Machine Learning" },
    { id: "apps-tab", label: "Desktop & Mobile Apps" },
    { id: "plugins-tab", label: "Plugins & Themes" },
  ];
  const changeTab = (id) => setSelectedTab(id);
  const [count, setCount] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedTab, setSelectedTab] = useState(tabs[0].id);

  return (
    <>
      <Header/>

      <div className="projects-container">

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

        <ChessCards/>

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

      <Footer/>

    </>
  )
};

export default App;
