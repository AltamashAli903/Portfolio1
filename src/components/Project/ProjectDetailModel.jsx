import { FaExternalLinkAlt, FaGooglePlay } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const ProjectDetailModel = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/60 p-3 sm:p-5 flex items-center justify-center">
      <div className="relative w-full max-w-6xl max-h-[95vh] overflow-y-auto rounded-2xl bg-white shadow-2xl">

        {/* ================= HEADER ================= */}
        <div className="sticky top-0 z-20 bg-white border-b px-4 sm:px-8 py-4 flex justify-between items-start">

  {/* Left */}
  <div className="flex items-start gap-4 flex-1">

    {/* Project Logo */}
    {project.logo && (
      <div className="w-14 h-14 sm:w-16 sm:h-16 roundedxl border bg-white shadow-sm flex items-center justify-center overflow-hidden shrink-0">
        <img
          src={project.logo}
          alt={project.title}
          className="w-12 h-12 sm:w-14 sm:h-14 object-contain hover:scale-110 transition duration-300"
        />
      </div>
    )}

    {/* Project Details */}
    <div className="flex-1">

      <h2 className="text-lg sm:text-2xl font-bold text-gray-900">
        {project.title}
      </h2>

      {project.subtitle && (
        <p className="mt-1 text-sm text-gray-500">
          {project.subtitle}
        </p>
      )}

      <div className="flex flex-wrap gap-3 mt-4">

        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-emerald-500 px-4 py-2 text-sm font-medium text-emerald-600 hover:bg-emerald-50 hover:scale-105 transition-all duration-300"
          >
            <FaExternalLinkAlt className="text-xs" />
            Website
          </a>
        )}

        {project.playStore && (
          <a
            href={project.playStore}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:scale-105 transition-all duration-300"
          >
            <FaGooglePlay />
            Play Store
          </a>
        )}

      </div>

    </div>

  </div>

  {/* Close Button */}
  <button
    onClick={onClose}
    className="ml-4 text-3xl text-gray-500 hover:text-red-500 transition shrink-0"
  >
    <IoClose />
  </button>

</div>

        {/* ================= BODY ================= */}

        <div className="p-4 sm:p-8 space-y-8">

          {/* Overview + Business Problem */}
{(project.overview || project.businessProblem) && (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

    {/* Overview */}
    {project.overview && (
      <section
        className="border border-gray-200 rounded-2xl bg-gray-50 p-6
                   hover:scale-[1.02] hover:shadow-lg
                   transition-all duration-300"
      >
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Overview
        </h3>

        <p className="text-gray-700 leading-8 text-justify">
          {project.overview}
        </p>
      </section>
    )}

    {/* Business Problem */}
    {project.businessProblem && (
      <section
        className="border border-gray-200 rounded-2xl bg-gray-50 p-6
                   hover:scale-[1.02] hover:shadow-lg
                   transition-all duration-300"
      >
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
           Business Problem
        </h3>

        <p className="text-gray-700 leading-8 text-justify">
          {project.businessProblem}
        </p>
      </section>
    )}

  </div>
)}

          {/* Features */}

          {project.features && (
            <section>

              <h3 className="text-lg font-semibold mb-4">
                Key Features
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 ">

                {project.features.map((item, index) => (

                  <div
                    key={index}
                    className="border rounded-lg bg-gray-50 px-4 py-3 text-sm text-center hover:scale-[1.02]
hover:shadow-md
transition-all duration-300 ease-out"
                  >
                    {item}
                  </div>

                ))}

              </div>

            </section>
          )}

          {/* Technology */}

          {project.technologyStack && (

            <section>

              <h3 className="text-lg font-semibold mb-4">
                Technology Stack
              </h3>

              <div className="grid md:grid-cols-2 gap-4 ">

                {Object.entries(project.technologyStack).map(([key, value]) => (

                  <div
                    key={key}
                    className="border rounded-xl p-5 hover:scale-[1.02]
hover:shadow-md
transition-all duration-300 ease-out"
                  >

                    <h4 className="font-semibold capitalize border-b pb-2 mb-3">
                      {key}
                    </h4>

                    <div className="flex flex-wrap gap-2">

                      {value.map((tech, i) => (

                        <span
                          key={i}
                          className="px-3 py-1 rounded-md bg-gray-100 text-sm"
                        >
                          {tech}
                        </span>

                      ))}

                    </div>

                  </div>

                ))}

              </div>

            </section>

          )}

                    {/* Responsibilities */}
          {project.responsibilities && (
            <section>
              <h3 className="text-lg font-semibold mb-4">
                My Responsibilities
              </h3>

              <div className="grid md:grid-cols-2 gap-3 ">
                {project.responsibilities.map((item, index) => (
                  <div
                    key={index}
                    className="border rounded-xl p-4 bg-white flex gap-3 hover:scale-[1.02]
hover:shadow-md
transition-all duration-300 ease-out"
                  >
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center font-semibold shrink-0">
                      {index + 1}
                    </div>

                    <p className="text-sm text-gray-700 leading-6">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Challenges */}
          {project.challenges && (
            <section>
              <h3 className="text-lg font-semibold mb-4">
                Challenges Faced
              </h3>

              <div className="grid md:grid-cols-2 gap-3 ">
                {project.challenges.map((item, index) => (
                  <div
                    key={index}
                    className="border rounded-xl p-4 bg-white flex gap-3 hover:scale-[1.02]
hover:shadow-md
transition-all duration-300 ease-out"
                  >
                    <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold shrink-0">
                      !
                    </div>

                    <p className="text-sm text-gray-700 leading-6">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Modules */}
          {project.modules && (
            <section>
              <h3 className="text-lg font-semibold mb-4">
                Modules
              </h3>

              <div  className={`grid grid-cols-2 sm:grid-cols-3 ${
      project.id === "turf" ? "lg:grid-cols-5" : "lg:grid-cols-4"
    } gap-3`}>
                {project.modules.map((item, index) => (
                  <div
                    key={index}
                    className="border rounded-lg  p-3 text-center text-sm hover:scale-[1.02]
hover:shadow-md
transition-all duration-300 ease-out"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Dashboard */}
          {project.dashboard && (
            <section>
              <h3 className="text-lg font-semibold mb-4">
                Dashboard Highlights
              </h3>

              <div className="grid text-gray-700 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {project.dashboard.map((item, index) => (
                  <div
                    key={index}
                    className="border rounded-lg p-3 text-center bg-white hover:scale-[1.02]
hover:shadow-md
transition-all duration-300 ease-out"
                  >
                    <p className="text-sm text-gray-700 ">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Mobile App */}
          {project.mobileApp && (
            <section>
              <h3 className="text-lg font-semibold mb-4">
                Mobile Application
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {project.mobileApp.map((item, index) => (
                  <div
                    key={index}
                    className="border rounded-lg  p-3 text-center text-sm hover:scale-[1.02]
hover:shadow-md
transition-all duration-300 ease-out"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Payroll */}
          {project.payrollFeatures && (
            <section>
              <h3 className="text-lg font-semibold mb-4">
                Payroll Features
              </h3>

              <div className="grid md:grid-cols-2 gap-3">
                {project.payrollFeatures.map((item, index) => (
                  <div
                    key={index}
                    className="border rounded-l p-3 text-sm hover:scale-[1.02]
hover:shadow-md
transition-all duration-300 ease-out"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Authentication */}
          {project.authentication && (
            <section>
              <h3 className="text-lg font-semibold mb-4">
                Authentication
              </h3>

              <div className="flex flex-wrap gap-3">
                {project.authentication.map((item, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-lg border text-sm hover:scale-[1.02]
hover:shadow-md
transition-all duration-300 ease-out"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Attendance Methods */}
          {project.attendanceMethods && (
            <section>
              <h3 className="text-lg font-semibold mb-4">
                Attendance Methods
              </h3>

              <div className="flex flex-wrap gap-3">
                {project.attendanceMethods.map((item, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-lg border text-sm hover:scale-[1.02]
hover:shadow-md
transition-all duration-300 ease-out"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Target Users */}
          {project.users && (
            <section>
              <h3 className="text-lg font-semibold mb-4">
                Target Users
              </h3>

              <div className="flex flex-wrap gap-3">
                {project.users.map((item, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-lg border text-sm hover:scale-[1.02]
hover:shadow-md
transition-all duration-300 ease-out"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </section>
          )}

        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModel;