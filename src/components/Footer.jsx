import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#020617] via-[#0A1F44] to-[#111827] text-white relative overflow-hidden">

      {/* GLOW EFFECT */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">

        {/* TOP */}
        <div className="grid lg:grid-cols-4 gap-12 border-b border-white/10 pb-16">

          {/* COMPANY */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <h1 className="text-4xl font-black mb-6">
              MLT
            </h1>

            <p className="text-gray-400 leading-relaxed">
              Maintenance • Logistic • Technology
              <br /><br />
              Professional multi-service solutions including exportation,
              construction, air conditioning, logistics, and industrial services.
            </p>

          </motion.div>

          {/* QUICK LINKS */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >

            <h2 className="text-2xl font-bold mb-6">
              Quick Links
            </h2>

            <ul className="space-y-4 text-gray-400">

              <li className="hover:text-cyan-400 transition duration-300 cursor-pointer">
                Home
              </li>

              <li className="hover:text-cyan-400 transition duration-300 cursor-pointer">
                About
              </li>

              <li className="hover:text-cyan-400 transition duration-300 cursor-pointer">
                Activities
              </li>

              <li className="hover:text-cyan-400 transition duration-300 cursor-pointer">
                Contact
              </li>

            </ul>

          </motion.div>

          {/* CONTACT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
          >

            <h2 className="text-2xl font-bold mb-6">
              Contact
            </h2>

            <div className="space-y-6 text-gray-400">

              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-cyan-400 mt-1" />

                <p>
                  Dubai
                </p>
              </div>

              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-cyan-400" />

                <p>
                  +971 XX XXX XX
                </p>
              </div>

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-cyan-400" />

                <p>
                  staff1_mlt@mlt-rw.com
                </p>
              </div>

            </div>

          </motion.div>

          {/* NEWSLETTER */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4 }}
            viewport={{ once: true }}
          >

            <h2 className="text-2xl font-bold mb-6">
              Newsletter
            </h2>

            <p className="text-gray-400 mb-6">
              Subscribe to receive our latest updates and services.
            </p>

            <form className="space-y-4">

              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-4 outline-none focus:border-cyan-400"
              />

              <button
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-700 py-4 rounded-xl font-semibold hover:scale-105 transition duration-300"
              >
                Subscribe
              </button>

            </form>

          </motion.div>

        </div>

        {/* BOTTOM */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">

          <p>
            © 2026 MLT - All Rights Reserved
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;