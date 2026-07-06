const Education = () => {
  const educationData = [
    {
      title: "Bachelor of Vocation (B.Voc) - Software Development (Graduation)",
      college: "Kamla Nehru Mahavidyalaya, Nagpur",
      duration: "2023 – 2026"
    },
    {
      title: "Higher Secondary Education (12th Grade)",
      college: "Mathuradas Mohota College of Science, Nagpur",
      duration: "Completed in 2023 (2021 – 2023)",
    },
    {
      title: "Secondary School (10th Grade)",
      college: "Janki Gyan Ganga Convent, Nagpur",
      duration: "Completed in 2021",
    },
  ];

  return (
    <section className="bg-[#f9fafb] py-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10 text-center">
          Education
        </h2>

        {/* Timeline */}
        <div className="relative border-l-2 border-gray-200 ml-3 sm:ml-4">

          {educationData.map((item, i) => (
            <div key={i} className="mb-8 sm:mb-10 ml-5 sm:ml-6">

              {/* Dot */}
              <span className="absolute -left-[9px] sm:-left-3 flex items-center justify-center w-4 h-4 sm:w-6 sm:h-6 bg-emerald-500 rounded-full ring-2 sm:ring-4 ring-white"></span>

              {/* Card */}
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 sm:p-6 hover:shadow-md transition">

                <h3 className="text-base sm:text-lg font-semibold text-gray-900 leading-snug">
                  {item.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-600 mt-1">
                  {item.college}
                </p>

                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  {item.duration}
                </p>

                {item.extra && (
                  <p className="text-xs sm:text-sm text-emerald-600 mt-2 font-medium">
                    {item.extra}
                  </p>
                )}

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Education;