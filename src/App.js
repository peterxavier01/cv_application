import './App.css';
import Cert from './components/Cert';
import Edu from './components/Edu';
import Experience from './components/Experience';
import Info from './components/Info';
import Languages from './components/Languages';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Info />
      <Edu />
      <Experience />
      <Skills />
      <Cert />
      <Languages />
    </div>
  );
}

export default App;
