import { useState } from "react";

const Experience = () => {
    const [works] = useState([
        { title: "Frontend Developer", company: "Smartians", date: "March 2022 to April 2022",
         tasks: ["Web Optimization", "Website Redesign", "Hosting Migration"]},
         { title: "WordPress Developer", company: "Daeru Global Farms", date: "April 2022 to May 2022",
         tasks: ["WooCommerce Integration", "Website Optimization"]}
    ]);
    return ( 
        <div className="experience">
            {works.map((work) => (
                <div className="work-container">
                    <h3>{work.title}</h3>
                    <p>{work.company}</p>
                    <p>{work.date}</p>
                    <ul>
                        {work.tasks.map((task) => (
                            <li>{task}</li>  
                        ))}
                    </ul>
                </div>
            ))}
        </div>
     );
}
 
export default Experience;