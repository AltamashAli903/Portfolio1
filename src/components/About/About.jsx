import profileImg from '../../assets/Altamash.jpg';
const About = () => {
  return (
    <section className="bg-[#f9fafb] py-5 px-6 pt-20 pb-20">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

    {/* RIGHT SIDE CARD FIRST (will appear first everywhere) */}
    <div className="flex justify-center">
      <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 max-w-sm w-full">

        <div className="relative mb-4">
          <img
            src={profileImg}
            alt="Altamash Ali"
            className="w-full h-90 object-cover rounded-xl"
          />

          <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>

        <h3 className="text-xl font-semibold text-gray-900">
          Altamash Ali
        </h3>

        <p className="text-gray-500 mt-2 text-sm">
          Backend-focused MERN Developer specializing in API design,
          database architecture, and scalable systems.
        </p>

        <div className="mt-4 border-t pt-4 text-sm text-gray-600">
          📍 Nagpur, Maharashtra <br />
          💼 MERN Stack Developer <br />
          🚀 Open to opportunities
        </div>

      </div>
    </div>

    {/* LEFT CONTENT SECOND (About section) */}
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-2">
        About Me
      </h2>

      <p className="text-gray-600 leading-7">
        I'm a <span className="font-semibold text-emerald-600"> MERN Stack Developer </span> 
        focused on building scalable backend systems and real-world applications.
        I specialize in designing REST APIs, managing databases, and ensuring 
        performance optimization.
      </p>

      <p className="mt-4 text-gray-600 leading-7">
        With hands-on experience in <span className="font-medium"> Node.js, Express, and MySQL</span>, 
        I’ve developed systems like attendance management and logistics platforms,
        handling authentication, data processing, and real-time notifications.
      </p>

      {/* SKILLS GRID */}
      <div className="mt-8 grid grid-cols-2 gap-4">
        {["Node.js","Express.js","MySQL","REST APIs","JWT Auth","Firebase"].map((skill, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm text-gray-700 shadow-sm"
          >
            {skill}
          </div>
        ))}
      </div>
      <div className="mt-6 flex gap-3">
  <a
    href="/PortFolio/resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-emerald-600 text-white px-5 py-2 rounded-lg hover:bg-emerald-800"
  >
    View Resume
  </a>

  <a
    href="/PortFolio/resume.pdf"
    download
    className="bg-gray-800 hover:bg-gray-600 text-white px-5 py-2 rounded-lg"
  >
    Download Resume 
  </a>
</div>
    </div>

  </div>
</section>
  );
};

export default About;