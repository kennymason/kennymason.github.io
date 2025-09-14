import { useState } from 'react';
import { projects } from './data/projects';
import { tinkering } from './data/tinkering';
import { art } from './data/art';
import Header from './components/Header';
import ProjectRow from './components/ProjectRow';
import Modal from './components/Modal';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [selected, setSelected] = useState(null);

  return (
    <>
      <Header/>

      <div className="projects-container">

        <ProjectRow
          id="project-row-1"
          title="Projects"
          projects={projects}
          onSelect={setSelected}
        />
        {selected && (
          <Modal project={selected} onClose={() => setSelected(null)}/>
        )}

        <ProjectRow
          id="tinkering-row-1"
          title="Tinkering"
          projects={tinkering}
        />

        <ProjectRow
          id="art-row-1"
          title="Art"
          projects={art}
        />

      </div>

      <Footer/>





      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
};

export default App;
