import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

/* LOGO */
import logo from "../assets/logo.png";

function Navbar() {

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* SCROLL EFFECT */
  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (

    <nav
      className={`
      fixed top-0 left-0 w-full z-50 transition-all duration-500
      ${
        scrolled
          ? "bg-[#020617]/90 backdrop-blur-xl shadow-2xl py-3"
          : "bg-transparent py-5"
      }
      `}
    >

      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

        {/* LOGO */}
        <Link
          to="/"
          className="flex items-center gap-3 group "
        >

          <img
            src={logo}
            alt="MLT Logo"
            className="w-16 h-16 object-contain
            group-hover:scale-110 transition duration-500 rounded-[60px]"
          />

          <div>

            <h1 className="text-2xl font-black tracking-wide text-white">
              MLT
            </h1>

            <p className="text-[11px] text-cyan-300 tracking-[3px] uppercase">
              Maintenance Logistic Technology
            </p>

          </div>

        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-10 text-white font-medium">

          <li>
            <Link
              to="/"
              className="hover:text-cyan-400 transition duration-300 relative group"
            >
              Home

              <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>

            </Link>
          </li>
    {/*
          <li>
            <Link
              to="/about"
              className="hover:text-cyan-400 transition duration-300 relative group"
            >
              About

              <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>

            </Link>
          </li>
      */}
          <li>
            <Link
              to="/activities"
              className="hover:text-cyan-400 transition duration-300 relative group"
            >
              Activities

              <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>

            </Link>
          </li>

          <li>
            <Link
              to="/Contact"
              className="hover:text-cyan-400 transition duration-300 relative group"
            >
              Contact

              <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>

            </Link>
          </li>

        </ul>

        {/* BUTTON CONTACT */}
        <div className="hidden md:block">

          <Link
            to="/Contact"
            className="bg-gradient-to-r from-cyan-500 to-blue-700
            px-6 py-3 rounded-full text-white font-semibold
            shadow-xl hover:scale-105 transition duration-300"
          >
            Get Started
          </Link>

        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>

        {open && (

          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.4 }}
            className="md:hidden bg-[#020617]/95 backdrop-blur-2xl border-t border-white/10 mt-4"
          >

            <ul className="flex flex-col items-center gap-8 py-10 text-white text-lg">

              <li>
                <Link to="/" onClick={() => setOpen(false)}>
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about" onClick={() => setOpen(false)}>
                  About
                </Link>
              </li>

              <li>
                <Link to="/activities" onClick={() => setOpen(false)}>
                  Activities
                </Link>
              </li>

              <li>
                <Link to="/Contact" onClick={() => setOpen(false)}>
                  Contact
                </Link>
              </li>

              <Link
                to="/Contact"
                onClick={() => setOpen(false)}
                className="bg-gradient-to-r from-cyan-500 to-blue-700
                px-6 py-3 rounded-full text-white font-semibold"
              >
                Get Started
              </Link>

            </ul>

          </motion.div>

        )}

      </AnimatePresence>

    </nav>
  );
}

export default Navbar;