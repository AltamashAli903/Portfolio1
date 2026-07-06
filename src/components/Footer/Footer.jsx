import { FaInstagram, FaWhatsapp, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-100 to-slate-50 border-t border-black ">
      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* TOP SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* LEFT - NAME */}
          <div className="text-center md:text-left">
            <h2 className="text-lg font-semibold text-gray-900">
              Altamash Ali
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              MERN Stack Developer <br /> Mainly Focused As A Backend Developer
            </p>
          </div>

          {/* RIGHT - SOCIAL LINKS */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">

            <a
              href="https://instagram.com/altamash_ali_26"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-pink-500 transition"
            >
              <FaInstagram /> Instagram
            </a>

            <a
              href="https://wa.me/919834588923"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition"
            >
              <FaWhatsapp /> WhatsApp
            </a>

            <a
              href="https://github.com/altamashali903"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition"
            >
              <FaGithub /> GitHub
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=sayyadaltamash26@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-emerald-600 transition"
            >
              <MdEmail /> Email
            </a>

          </div>
        </div>

        {/* DIVIDER */}
        <hr className="border-gray-200 my-8" />

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">

          <p className="text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} Altamash Ali. All rights reserved.
          </p>

          <p className="text-gray-600 font-medium text-center md:text-right">
            Designed & Built by{" "}
            <br className="block md:hidden" />
            <span className="text-gray-600 font-semibold">
              ALTAMASH ALI SAYYAD
            </span>
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;