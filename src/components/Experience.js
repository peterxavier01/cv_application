import { useState } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";

const Experience = () => {
  const [works] = useState([
    {
      title: "Frontend Developer",
      company: "Smartians",
      date: "March 2022 to April 2022",
      id: 1,
      tasks: ["Web Optimization", "Website Redesign", "Hosting Migration"],
    },
    {
      title: "WordPress Developer",
      id: 2,
      company: "Daeru Global Farms",
      date: "April 2022 to May 2022",
      tasks: ["WooCommerce Integration", "Website Optimization"],
    },
  ]);

  return (
    <div className="experience mb-5">
      <h1>Experience</h1>
      <hr />
      {works.map((work) => (
        <div className="work-container">
          <h5>{work.title}</h5>
          <p className="company">{work.company}</p>
          <p>{work.date}</p>
          <ul>
            {work.tasks.map((task) => (
              <div className="work-list d-flex">
                <span>{<AiOutlineCheckCircle />}</span>
                <li key={work.id}>{task}</li>
              </div>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Experience;
