const Skills = () => {
  const skills = [
    { title: "HTML", id:1 },
    { title: "CSS", id:2},
    { title: "JavaScript", id:3 },
    { title: "React", id:4 },
    { title: "Node.js", id:5 },
    { title: "Bootstrap", id:6 },
    { title: "SASS", id:7 },
    { title: "jQuery", id:8 },
    { title: "Wordpress", id:9 },
    { title: "SEO", id:10 },
    { title: "Git", id:11 }
  ];
  return (
    <div className="skills mb-5">
      <h1>Skills</h1>
      <hr />
      <ul className="skills-container">
        {skills.map((skill) => (
          <li
            key={skill.id}
            className="skill text-left p-2"
            style={{ backgroundColor: "hsl(0, 0%, 71%" }}
          >
            {skill.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
