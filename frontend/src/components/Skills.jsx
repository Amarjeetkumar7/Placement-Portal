const Skills = () => {
  const skillCategories = [
    {
      name: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React", "Vue.js", "Tailwind CSS"],
    },
    {
      name: "Backend",
      skills: ["Node.js", "Express", "Python", "Django", "SQL"],
    },
    {
      name: "Tools & Others",
      skills: ["Git", "Webpack", "Docker", "AWS", "Figma"],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4 text-center">My Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
