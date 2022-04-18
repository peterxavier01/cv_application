import { useState } from "react";

const Cert = () => {
    const [certs] = useState([
        { title: "edX", year: "April 2020 to July 2020", course: ["Programming with Python and JavaScript - David Malan."]},
        { title: "Freecodecamp.org", year: "January 2022 to February 2022", course: ["Responsive Web Design."]},
        { title: "Freecodecamp.org", year: "February 2022 to April 2022", course: ["JavaScript Data Strutures and Algorithms."]}
    ]);
    return ( 
        <div className="cert">
            <h1>Certifications and Licenses</h1>
            <hr />
            {certs.map((cert) => (
                <div>
                    <h3>{cert.title}</h3>
                    <p>{cert.year}</p>
                    <p>{cert.course}</p>
                </div>
            ))}
        </div>
     );
}
 
export default Cert;