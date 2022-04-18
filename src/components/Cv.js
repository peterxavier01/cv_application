import "./styles.css";

import Cert from './Cert';
import Edu from './Edu';
import Experience from './Experience';
import Info from './Info';
import Languages from './Languages';
import Links from './Links';
import Skills from './Skills';

const Cv = () => {
  return (
    <div className="container mt-3">
      <div className="row w-100">
          <Info />
      </div>
      <div className="row">
        <div className="col-md-5">
          <Edu />
          <Skills />
          <Links />
        </div>
        <div className="col-md-7">
          <Experience />
          <Cert />
          <Languages />
        </div>
      </div>
    </div>
  );
};

export default Cv;
