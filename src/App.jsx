import { useState } from 'react';
import { projects } from './data/projects';
import { tinkering } from './data/tinkering';
import { art } from './data/art';
import Header from './components/Header';
import ProjectRow from './components/ProjectRow';
import Modal from './components/Modal';
import Footer from './components/Footer';
import './App.scss';

function App() {
  const [count, setCount] = useState(0);
  const [selected, setSelected] = useState(null);

  return (
    <>
      <Header/>

      <div className="projects-container">

        <ProjectRow
          id="project-row-1"
          title="All Projects"
          projects={projects}
          onSelect={setSelected}
        />
        {selected && (
          <Modal project={selected} onClose={() => setSelected(null)}/>
        )}

        <ProjectRow
          id="project-row-2"
          title="AI / Machine Learning"
          projects={projects}
          onSelect={setSelected}
        />

        <ProjectRow
          id="project-row-3"
          title="Desktop & Mobile Apps"
          projects={projects}
          onSelect={setSelected}
        />

        <ProjectRow
          id="project-row-4"
          title="Plugins & Themes"
          projects={projects}
          onSelect={setSelected}
        />

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
