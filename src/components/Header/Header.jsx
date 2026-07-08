// import { useState } from "react";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const navItems = [
//     { name: "Home", href: "#home" },
//     { name: "About", href: "#about" },
//     { name: "Projects", href: "#projects" },
//     { name: "Skills", href: "#skills" },
//     { name: "Education", href: "#education" },
//     { name: "Contact", href: "#contact" },
//   ];

//   return (
//     <nav className="bg-white border-b border-gray-200 h-16 sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

//         {/* Logo */}
//         <a href="#home" className="flex items-center gap-3">
//           <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-emerald-500 text-white font-bold">
//             AA
//           </div>

//           <div>
//             <p className="text-xs text-gray-500">PORTFOLIO</p>
//             <h1 className="text-sm font-semibold text-gray-900">
//               Altamash Ali
//             </h1>
//           </div>
//         </a>

//         {/* Hamburger */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="md:hidden p-2 text-gray-600"
//         >
//           ☰
//         </button>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex items-center gap-8">
//           {navItems.map((item, i) => (
//             <li key={i}>
//               <a
//                 href={item.href}
//                 className="text-gray-600 hover:text-emerald-600 font-medium"
//               >
//                 {item.name}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-white border-t shadow">
//           <ul
//             className="flex flex-col p-4 gap-2"
//             onClick={() => setIsOpen(false)}
//           >
//             {navItems.map((item, i) => (
//               <li key={i}>
//                 <a
//                   href={item.href}
//                   className="block py-2 text-gray-700 hover:text-emerald-600"
//                 >
//                   {item.name}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Header;

import { useEffect, useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  const navItems = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Education", href: "#education", id: "education" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sticky top-0 z-50 h-16 border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500 font-bold text-white">
            AA
          </div>

          <div>
            <p className="text-xs text-gray-500">PORTFOLIO</p>
            <h1 className="text-sm font-semibold text-gray-900">
              Altamash Ali
            </h1>
          </div>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                onClick={() => setActive(item.id)}
                className={`group relative pb-2 font-medium transition-colors duration-300 ${
                  active === item.id
                    ? "text-black"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                {item.name}

                {/* Underline */}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-emerald-500 transition-all duration-300 ease-in-out ${
                    active === item.id
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl md:hidden"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t bg-white shadow md:hidden">
          <ul className="space-y-2 p-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={() => {
                    setActive(item.id);
                    setIsOpen(false);
                  }}
                  className={`block py-2 ${
                    active === item.id
                      ? "text-emerald-600"
                      : "text-gray-700"
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;