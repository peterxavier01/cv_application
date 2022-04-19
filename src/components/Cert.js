import { useState } from "react";

const Cert = () => {
    const [certs] = useState([
        { title: "edX", year: "April 2020 to July 2020", id: 1, course: ["Programming with Python and JavaScript - David Malan."]},
        { title: "Freecodecamp.org", year: "January 2022 to February 2022", id: 2, course: ["Responsive Web Design."]},
        { title: "Freecodecamp.org", year: "February 2022 to April 2022", id: 3, course: ["JavaScript Data Strutures and Algorithms."]}
    ]);
    return ( 
        <div className="cert mb-5" id="cert">
            <h1>Certifications and Licenses</h1>
            <hr />
            {certs.map((cert) => (
                <div className="cert-list pb-4" key={cert.id}>
                    <h4>{cert.title}</h4>
                    <p>{cert.year}</p>
                    <p>{cert.course}</p>
                </div>
            ))}
        </div>
     );
}
 
export default Cert;