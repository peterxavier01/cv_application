import "./styles.css";

import Cert from './Cert';
import Edu from './Edu';
import Experience from './Experience';
import Info from './Info';
import Languages from './Languages';
import Links from './Links';
import Skills from './Skills';
import Navbar from "./Navbar";

const Cv = () => {
  return (
    <div className="container mt-3 mb-3">
      <div className="row mb-3">
        <Navbar />
      </div>
      <div className="row w-100">
          <Info />
      </div>
      <div className="row">
        <div className="col-md-6">
          <Edu />
          <Skills />
          <Links />
        </div>
        <div className="col-md-6">
          <Experience />
          <Cert />
          <Languages />
        </div>
      </div>
    </div>
  );
};

export default Cv;
