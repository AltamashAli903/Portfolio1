const Skills = () => {
  const skills = [
    {
      title: "React",
      img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      desc: "Build dynamic UI using component-based architecture, hooks, and routing.",
    },
    {
      title: "HTML & CSS",
      img: "https://www.kindpng.com/picc/m/72-726511_html5css3badges-html-css-logo-png-transparent-png.png",
      desc: "Create responsive layouts using semantic HTML, Flexbox, Grid, and modern CSS.",
    },
    {
      title: "JavaScript",
      img: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
      desc: "Write clean ES6+ code with async handling, events, and modular structure.",
    },
    {
      title: "Node.js",
      img: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
      desc: "Build scalable backend systems and REST APIs with Express.",
    },
    {
      title: "MySQL",
      img: "https://www.mysql.com/common/logos/logo-mysql-170x115.png",
      desc: "Design efficient schemas, queries, and stored procedures.",
    },
    {
      title: "JWT & Auth",
      img: "https://cdn-icons-png.flaticon.com/512/3064/3064197.png",
      desc: "Implement secure authentication and authorization systems.",
    },
  ];

  return (
    <section className="bg-[#f9fafb] py-8 pb-20 px-4 sm:px-6 border border-gray-700 shadow-sm hover:shadow-md transition">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-10">
          Skills
        </h2>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {skills.map((skill, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition p-5 flex flex-col"
            >
              {/* Image */}
              <img
                src={skill.img}
                alt={skill.title}
                className="w-full h-32 object-contain mb-4"
              />

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 text-center">
                {skill.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 mt-3 text-center">
                {skill.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Skills;