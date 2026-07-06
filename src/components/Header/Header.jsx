import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 h-16 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-emerald-500 text-white font-bold">
            AA
          </div>

          <div>
            <p className="text-xs text-gray-500">PORTFOLIO</p>
            <h1 className="text-sm font-semibold text-gray-900">
              Altamash Ali
            </h1>
          </div>
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-600"
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item, i) => (
            <li key={i}>
              <a
                href={item.href}
                className="text-gray-600 hover:text-emerald-600 font-medium"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow">
          <ul
            className="flex flex-col p-4 gap-2"
            onClick={() => setIsOpen(false)}
          >
            {navItems.map((item, i) => (
              <li key={i}>
                <a
                  href={item.href}
                  className="block py-2 text-gray-700 hover:text-emerald-600"
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