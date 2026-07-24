import { useState } from "react";
import ProjectDetailModal from "./ProjectDetailModel";
import attendanceLogo from "../../assets/attendance.png";
import transloadLogo from "../../assets/transload.png";
import turfLogo from "../../assets/turf.png";
// import aptitudeLogo from "../../assets/projects/aptitude.png";
import invoiceLogo from "../../assets/unnamed (1).webp";
import collectionLogo from "../../assets/unnamed.webp";

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const projects = [
    //===============  Attendance Details =================//
    {
      id: "attendance",
      logo: attendanceLogo,
      description: "Face recognition-based system with real-time tracking, and reporting dashboard.",
      playStore: "https://play.google.com/store/apps/details?id=com.attendanceproject.skyApplication",
      title: "Attendance Management System",
      live: "https://attendance.skyvisionitsolutions.in/",
      subtitle: "A complete HRMS solution with Face Recognition, QR Attendance, Payroll, Leave Management and Employee Tracking.",
      overview: `The Attendance Management System is a complete HRMS solution that automates employee attendance, leave management, payroll, and workforce tracking.
      It replaces manual registers and traditional biometric systems by automatically calculating attendance, late arrivals, half-days, overtime, and payroll, while providing accurate reports through a centralized management dashboard.`,
      businessProblem: `Many businesses spend significant time managing attendance manually or using traditional punch machines that only record check-in and check-out times. HR teams still have to calculate late arrivals, half-days, overtime, leave balances, and payroll manually.
      This project automates the complete attendance workflow, reducing human effort while improving accuracy and transparency.`,

      users: [
        "Companies",
        "Corporate Offices",
        "Warehouses",
        "Factories",
        "Startups",
        "Business Owners",
        "HR Managers"
      ],

      authentication: [
        "JWT Authentication",
        "Company Code Login",
        "Email Login",
        "Role Based Access",
        "Multiple Admin Support"
      ],

      attendanceMethods: [
        "Face Recognition",
        "QR Attendance",
        "Employee QR ID Card",
        "Dynamic QR Scanner",
        "Work From Home Attendance"
      ],

      modules: [
        "Dashboard",
        "Payroll",
        "Employee Management",
        "Department Management",
        "Designation Management",
        "Shift Management",
        "Holiday Management",
        "Weekly Off Management",
        "Late Rule Configuration",
        "Grace Time Configuration",
        "Leave Management",
        "Attendance Management",
        "Reports",
        "Role Management"
      ],

      features: [
        "Multi Company Support",
        "Employee Registration",
        "Employee Deactivation",
        "Face Recognition Attendance",
        "QR Code Attendance",
        "Dynamic QR Validation",
        "Employee QR ID Cards",
        "Work From Home Attendance",
        "Automatic Late Calculation",
        "Half-Day Detection",
        "Present / Absent Calculation",
        "Attendance History",
        "Monthly Attendance Reports",
        "Employee Reports",
        "Leave Approval Workflow",
        "Pending Leave Requests",
        "Holiday Calendar",
        "Weekly Off Management",
        "Payroll Management",
        "Allowance Management",
        "Deduction Management",
        "Role Based Access",
        "Dashboard Analytics",
        "JWT Security"
      ],

      dashboard: [
        "Today's Attendance",
        "Present Employees",
        "Absent Employees",
        "Late Employees",
        "New Employees",
        "Weekly Attendance",
        "Pending Leaves",
        "Upcoming Holidays",
        "Attendance Graphs",
        "Calendar"
      ],

      mobileApp: [
        "Employee Login",
        "Attendance",
        "Attendance History",
        "Working Hours",
        "Leave Application",
        "Profile"
      ],

      technologyStack: {
        frontend: ["React", "Vite", "Tailwind CSS"],
        backend: ["Node.js", "Express.js"],
        database: ["MySQL", "Stored Procedures"],
        authentication: ["JWT", "Role-Based Access"],
      },
      payrollFeatures: [
        "Salary Structure Management",
        "Basic Salary Configuration",
        "Allowances Management",
        "Deduction Management",
        "PF Calculation",
        "ESI Calculation",
        "Automatic Payroll Generation",
        "Monthly Salary Slip",
        "Payroll Reports",
        "Employee-wise Payroll History"
      ],

      responsibilities: [

        "Developed REST APIs using Node.js and Express.",
        "Implemented complete business logic using MySQL Stored Procedures.",
        "Designed attendance calculation algorithms.",
        "Implemented payroll calculation logic including salary, allowances, deductions, PF, ESI and salary generation.",
        "Implemented JWT authentication and authorization.",
        "Developed role-based access control for multiple administrators.",
        "Optimized SQL queries and Stored Procedures for better performance.",
        "Managed backend architecture and coordinated with the development team."
      ],

      challenges: [
        "Achieving accurate Face Recognition attendance.",
        "Preventing duplicate attendance entries.",
        "Automating payroll calculations based on attendance and leave records.",
        "Managing role-based permissions across multiple administrators.",
      ],
    },
    //=================================================================================//


    //===============  Transload Details =================//
    {
      id: "transload",
      logo: transloadLogo,
      title: "Logistics & Transload Platform",
      description:"Secure backend system to manage shipments, company data, and API-driven operations.",
      live: "https://transload.skyvisionitsolutions.in/",
      playStore: "https://play.google.com/store/apps/details?id=com.skyvision.transload_app",
      subtitle:"A complete logistics ERP to manage Builties, truckloads, billing, invoicing, reports, and transportation operations.",
      overview: `The Logistics & Transload Platform is a web-based ERP solution developed for transport and logistics companies to manage the complete shipment lifecycle from booking to delivery.
                 The system streamlines Builty creation, truck loading, billing, and reporting while reducing manual work and improving operational efficiency through a centralized dashboard.`,
      businessProblem:`Many transport companies still maintain shipment records, billing, and truck operations manually, making it difficult to track deliveries and generate reports.
                       This platform digitizes logistics operations by automating shipment management, billing, truckload planning, and financial reporting.`,
      users: [
        "Transport Companies",
        "Logistics Businesses",
        "Warehouse Operators",
        "Branch Managers",
        "Accountants",
        "Dispatch Operators",
      ],

      authentication: [
        "JWT Authentication",
        "Role Based Access",
        "Company Login"
      ],
      
      modules: [
        "Dashboard",
        "Builty Management",
        "Truck Load Management",
        "Bill Management",
        "Consignor Management",
        "Consignee Management",
        "Article Management",
        "Rate Management",
        "Vehicle Management",
        "Builty Tracking",
        "Reports",
        "User Management"
      ],

      features: [
        "Builty Creation",
        "Truck Load Planning",
        "Vehicle Tracking",
        "Delivery Status",
        "Freight Calculation",
        "To Pay / Paid Billing",
        "Multi Branch Support",
        "Financial Year Management",
        "Search & Filters",
        "MIS Reports",
        "Dashboard Analytics",
        "Secure Authentication"
      ],

      dashboard: [
        "Total Builty",
        "Total Paid",
        "Total To Pay",
        "Total PF",
        "Revenue Analytics",
        "Truckload Monitoring",
        "Delivery Status",
        "Weekly Truckloads",
        "Shipment Tracking",
        "Recent Activities"
      ],

      technologyStack: {
        frontend: ["React", "Vite", "Tailwind CSS"],
        backend: ["Node.js", "Express.js"],
        database: ["MySQL", "Stored Procedures"],
        authentication: ["JWT", "Role-Based Access"],
      },
    },
    //=================================================================================//


    //===============  Turf Details =================//
    {
      id: "turf",
      logo:turfLogo,
      title: "Turf Booking Management",
      description: "Slot-based booking system with availability tracking and admin control for turf owners.",
      live: "https://altamashali903.github.io/turfmanagement/",
      subtitle: "An online booking platform connecting multiple turf owners and customers on a single system.",
      overview: `Turf Booking Management is an online platform where multiple turf owners can register and manage their sports turfs. Instead of searching individual websites or contacting owners manually, customers can browse available turfs, check live slot availability, and book instantly without creating an account.
                 The platform simplifies the booking process by bringing multiple turf owners and their available slots together in one centralized application.`,
      businessProblem: `Traditionally, customers need to search for individual turf websites or contact owners by phone to check slot availability before making a booking. This process is time-consuming and often leads to scheduling conflicts.
                        This platform eliminates those issues by allowing multiple turf owners to list their turfs while providing customers with a single place to browse, check availability, and book online.`,

      users: [
        "Turf Owners",
        "Customers",
        "Managers"
      ],

      modules: [
        "Dashboard",
        "Turf Management",
        "Turf Gallery",
        "Slot Management",
        "Booking Management"
      ],

      features: [
        "Online Turf Booking",
        "Multiple Turf Owners",
        "Live Slot Availability",
        "Booking Approval",
        "Payment Status",
        "Booking History",
        "Daily Reports",
        "Monthly Reports",
        "Time Slot Configuration"
      ],

      dashboard: [
        "Total Bookings",
        "Today's Bookings",
        "Available Slots",
        "Revenue",
        "Recent Bookings"
      ],

      technologyStack: {
        frontend: ["React", "Vite", "Tailwind CSS"],
        backend: ["Node.js", "Express.js"],
        database: ["MySQL", "Stored Procedures"],
        authentication: ["JWT Authentication", "Email Login", "Multiple Admin Support"]
      },

      responsibilities: [
        "Designed the complete UI/UX.",
        "Developed the React frontend.",
        "Built REST APIs using Node.js and Express.",
        "Designed the complete MySQL database.",
        "Implemented business logic using MySQL Stored Procedures.",
        "Developed the slot booking and availability management system.",
        "Implemented secure JWT authentication.",
        "Created the admin dashboard and reporting modules."
      ],

      challenges: [
        "Managing live slot availability.",
        "Designing a scalable multi-owner architecture.",
        "Handling booking approval and payment status.",
        "Optimizing booking and reporting performance."
      ]
    },
    //=================================================================================//

    //===============  Aptitude Details =================//
    {
      id: "aptitude",
      title: "Aptitude Test Platform",
      description: "Online platform for conducting aptitude tests with real-time evaluation and reporting.",
      live: "https://examadmin.skyvisionitsolutions.in/",
      subtitle: "A company recruitment platform for conducting secure aptitude tests with automated evaluation.",
      overview: `The Aptitude Test Platform is designed for my company where i perform internship to conduct secure online aptitude examinations during recruitment. Administrators create exam sessions, configure question distribution by technology, and generate QR codes that candidates scan to start the exam.
                 Each candidate receives a unique randomized set of questions, ensuring fairness while minimizing the possibility of cheating. `,
      businessProblem: `Conducting recruitment tests manually or through shared links often results in security issues, repeated question patterns, and difficult result management.
                        This platform automates the complete examination process by generating QR-based exams, randomizing question papers for every candidate, monitoring suspicious activities, and providing instant evaluation with centralized administration.`,

      users: [
        "HR Managers",
        "Recruiters",
        "Company Administrators",
        "Candidates"
      ],

      modules: [
        "Dashboard",
        "Question Bank",
        "Technology Management",
        "Exam Session",
        "QR Code Generator",
        "Candidate Examination",
        "Result Management",
        "Reports"
      ],

      features: [
        "QR Code Based Exam Access",
        "Random Question Generation",
        "Technology-wise Question Selection",
        "Multiple Question Categories",
        "Automatic Evaluation",
        "Candidate Result Management",
        "Pass / Fail Status",
        "Exam Reports",
        "Question Review",
        "Session Management",
        "Secure Authentication"
      ],

      dashboard: [
        "Total Exams",
        "Today's Exams",
        "Candidates Appeared",
        "Pass Candidates",
        "Failed Candidates",
        "Question Bank",
        "Exam Sessions",
        "Recent Results"
      ],

      technologyStack: {
        frontend: ["React", "Vite", "Tailwind CSS"],
        backend: ["Node.js", "Express.js"],
        database: ["MySQL", "Stored Procedures"],
        authentication: ["JWT Authentication"]
      },

      responsibilities: [
        "Designed the complete application architecture.",
        "Built REST APIs using Node.js and Express.",
        "Designed the complete MySQL database.",
        "Implemented business logic using MySQL Stored Procedures.",
        "Developed QR Code based exam generation.",
        "Implemented randomized question generation algorithms.",
        "Developed automatic result evaluation.",
        "Implemented secure authentication",
        "Designed reports and analytics dashboards.",
        "Tested the complete application."
      ],

      challenges: [
        "Generating unique randomized question papers for every candidate.",
        "Preventing cheating using browser tab monitoring.",
        "Managing automatic exam submission after multiple violations.",
        "Balancing question difficulty across technologies.",
        "Generating accurate results in real time.",
        "Maintaining exam security and data integrity."
      ]
    },
    //=================================================================================//

    //===============  Invoice Details =================//
    {
      id: "invoice",
      logo: invoiceLogo,
      title: "Invoice Mobile Application",
      description: "Mobile application for invoice generation, client management, and payment tracking.",
      subtitle: "A business invoicing application that enables companies to generate professional invoices and manage customers from mobile devices.",
      playStore: "https://play.google.com/store/apps/details?id=com.skyvision.invoiceapp",
      overview: `The Invoice Mobile Application allows businesses to create invoices, manage customers, monitor payments, and maintain invoice history directly from their mobile devices. The application simplifies invoice generation and helps small businesses digitize their billing process.`,
      businessProblem: `Many small businesses still create invoices manually using paper or spreadsheets, making record management difficult. This application provides a centralized digital invoicing solution with secure backend services and real-time data management and remove stedd of excel sheets.`,

      users: [
        "Business Owners",
        "Sales Executives",
        "Small Businesses",
        "Retail Shops",
        "Service Providers"
      ],

      modules: [
        "Dashboard",
        "Customer Management",
        "Invoice Management",
        "Payment Tracking",
        "Invoice History",
        "Reports"
      ],

      features: [
        "Invoice Generation",
        "Customer Management",
        "Payment Tracking",
        "Invoice History",
        "Business Reports",
        "Real-time Data Sync",
        "Secure Authentication"
      ],

      dashboard: [
        "Total Invoices",
        "Paid Invoices",
        "Pending Payments",
        "Recent Customers",
        "Sales Summary"
      ],

      technologyStack: {
        frontend: ["Flutter (Developed by Flutter Team)"],
        backend: ["Node.js", "Express.js"],
        database: ["MySQL", "Stored Procedures"],
        services: ["Firebase"],
      },

      responsibilities: [
        "Designed the complete MySQL database schema.",
        "Developed REST APIs using Node.js and Express.",
        "Implemented business logic using MySQL Stored Procedures.",
        "Integrated backend APIs with the mobile application.",
        "Designed secure authentication and authorization.",
        "Collaborated with the Flutter developer for API integration."
      ],

      challenges: [
        "Designing scalable backend APIs for mobile clients.",
        "Maintaining secure data flow between mobile app and server.",
        "Optimizing Stored Procedures for faster invoice operations.",
        "Handling invoice and payment data efficiently."
      ]
    },
    //=================================================================================//

    //===============  Daily Collection Details =================//
    {
      id: "dailycollection",
      logo:collectionLogo,
      title: "Daily Collection Mobile Application",
      description: "Mobile application for recording daily customer collections, payment history, and collection reports.",
      subtitle: "A collection management application that helps businesses track customer payments and daily collections efficiently.",
      playStore: "https://play.google.com/store/apps/details?id=com.skyvision.dailycollection",
      overview: `The Daily Collection Mobile Application enables businesses to record daily customer collections, maintain payment history, and generate collection reports. It simplifies collection management by digitizing daily transactions and providing centralized records accessible from mobile devices.`,
      businessProblem: `Many businesses manually maintain daily collection registers, making it difficult to track customer payments and generate reports. This application automates the collection process, ensuring accurate records, faster retrieval, and better payment tracking.`,

      users: [
        "Collection Agents",
        "Business Owners",
        "Distributors",
        "Sales Executives",
        "Small Businesses"
      ],

      modules: [
        "Customer Management",
        "Daily Collection",
        "Collection History",
        "Reports"
      ],

      features: [
        "Daily Collection Entry",
        "Customer-wise Collection History",
        "Duplicate Collection Prevention",
        "Collection Reports",
        "Date-wise Filtering",
        "Soft Delete Support",
        "Real-time Data Sync",
        "Secure Authentication"
      ],

      dashboard: [
        "Today's Collections",
        "Total Collections",
        "Customer Count",
        "Recent Collections",
        "Collection Summary"
      ],

      technologyStack: {
        frontend: ["Flutter (Developed by Flutter Team)"],
        backend: ["Node.js", "Express.js"],
        database: ["MySQL", "Stored Procedures"],
        services: ["Firebase"]
      },

      responsibilities: [
        "Designed the complete MySQL database schema.",
        "Developed REST APIs using Node.js and Express.",
        "Implemented all business logic using MySQL Stored Procedures.",
        "Developed customer and collection management APIs.",
        "Implemented duplicate collection validation.",
        "Optimized SQL queries and database performance.",
        "Integrated backend APIs with the Flutter application.",
        "Worked with the Flutter developer during API integration."
      ],

      challenges: [
        "Preventing duplicate collections for the same customer.",
        "Designing scalable Stored Procedures for collection management.",
        "Optimizing collection history retrieval.",
        "Maintaining data consistency across mobile and backend."
      ]
    }
    //=================================================================================//

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
                {/* <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((t, index) => (
                    <span
                      key={index}
                      className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div> */}
              </div>

              {/* BUTTON */}
              <div className="mt-5">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full bg-emerald-600 text-white py-2.5 rounded-lg hover:bg-emerald-700 transition"
                >
                  View Details
                </button>
              </div>

            </div>
          ))}

        </div>
      </div>
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Project;