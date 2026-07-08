import { FaExternalLinkAlt } from "react-icons/fa";

const Project = () => {
  const projects = [
    {
      title: "Attendance System For Employees",
      description:
        "Face recognition-based system with real-time tracking, and reporting dashboard.",
      tech: ["Node.js", "Express", "MySQL (SP)", "React"],
      live: "https://attendance.skyvisionitsolutions.in/",
      playStore: "https://play.google.com/store/apps/details?id=com.attendanceproject.skyApplication",

    },
    {
      title: "Logistics & Transload Platform",
      description:
        "Secure backend system to manage shipments, company data, and API-driven operations.",
      tech: ["Node.js", "Express", "MySQL (SP)", "React+Vite"],
      live: "https://transload.skyvisionitsolutions.in/",
    },
    {
      title: "Turf Booking System",
      description:
        "Slot-based booking system with availability tracking and admin control for turf owners.",
      tech: ["Node.js", "Express", "MySQL (SP)", "React+Vite"],
      live: "https://altamashali903.github.io/turfmanagement/",
    },
    {
      title: "Aptitude Test Platform",
      description:
        "Online platform for conducting aptitude tests with real-time evaluation and reporting.",
      tech: ["Node.js", "Express", "MySQL (SP)", "React+Vite"],
      live: "https://examadmin.skyvisionitsolutions.in/",
    },
     {
      title: "Invoice Mobile Application",
      description:
        "A mobile app for generating invoices, managing clients, and tracking payments on the go.",
      tech: ["Flutter", "Node.js", "Express", "MySQL", "Firebase"],
      playStore: "https://play.google.com/store/apps/details?id=com.skyvision.invoiceapp",
    },
    {
      title: "Daily Collection Mobile Application",
      description:
        "An Application for daily collection management, tracking payments, and generating reports",
      tech: ["Flutter", "Node.js", "Express", "MySQL", "Firebase"],
      playStore: "https://play.google.com/store/apps/details?id=com.skyvision.dailycollection",
    },
  ];

  return (
    <section id="projects" className="bg-[#f9fafb] py-10 px-6 pt-20 pb-16 border border-gray-700 shadow-sm hover:shadow-md transition">
      <div className="max-w-6xl mx-auto">

        {/* HEADING */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-gray-900">Projects</h2>
          <p className="text-gray-500 mt-2 text-sm">
            Real-world systems I’ve built and worked on
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-white border border-emerald-400 rounded-2xl p-6 shadow-lg 
                         transition duration-300 flex flex-col justify-between
                         hover:-translate-y-1 hover:shadow-xl"
            >

              {/* TOP */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-sm mt-3 leading-6">
                  {project.description}
                </p>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((t, index) => (
                    <span
                      key={index}
                      className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* BUTTON */}
              <div className="mt-4">
                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full bg-emerald-600 text-white text-sm py-2.5 rounded-lg hover:bg-emerald-700 transition"
                  >
                    View Live <FaExternalLinkAlt />
                  </a>
                ) : project.playStore ? (
                  <a
                    href={project.playStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full bg-emerald-600 text-white text-sm py-2.5 rounded-lg hover:bg-emerald-700 transition"
                  >
                    View on Play Store <FaExternalLinkAlt />
                  </a>
                ) : (
                  <button
                    disabled
                    className="w-full text-sm py-2.5 rounded-lg bg-gray-200 text-gray-500 cursor-not-allowed"
                  >
                    Coming Soon
                  </button>
                )}
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Project;