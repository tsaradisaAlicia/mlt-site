import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  
} from "react-icons/fa";

function Contact() {
  return (

    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#0A1F44] to-[#111827] relative overflow-hidden pt-32 pb-20">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

      {/* BACK BUTTON */}
      <div className="mb-10">
        <Link
          to="/"
          className="inline-flex items-center gap-3 bg-white/10 border border-white/10 backdrop-blur-xl px-6 py-3 rounded-2xl text-white hover:bg-cyan-500/20 hover:border-cyan-400 transition duration-300 shadow-xl"
        >
          ← Back to Home
        </Link>
      </div>

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <span className="text-cyan-400 uppercase tracking-[5px] font-semibold">
            MLT (MAINTENANCE - LOGISTIC - TECHNOLOGY)
          </span>

          <h1 className="text-5xl md:text-7xl font-bold text-white mt-4 mb-6">
            GET IN TOUCH
          </h1>

          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Contact our team for professional services, partnerships,
            logistics, exportation, and technical solutions.
          </p>

        </motion.div>

        {/* CONTENT */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >

            {/* CARD */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[30px] p-8 hover:-translate-y-2 transition duration-500">

              <div className="flex items-center gap-5">

                <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 flex items-center justify-center">
                  <FaPhoneAlt className="text-cyan-400 text-2xl" />
                </div>

                <div>
                  <h3 className="text-white text-2xl font-semibold">
                    Phone
                  </h3>

                  <p className="text-gray-400 mt-2">
                    +971 XX XXX XX
                  </p>
                </div>

              </div>

            </div>

            {/* CARD */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[30px] p-8 hover:-translate-y-2 transition duration-500">

              <div className="flex items-center gap-5">

                <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 flex items-center justify-center">
                  <FaEnvelope className="text-cyan-400 text-2xl" />
                </div>

                <div>
                  <h3 className="text-white text-2xl font-semibold">
                    Email
                  </h3>

                  <p className="text-gray-400 mt-2">
                    staff1_mlt@mlt-rw.com
                  </p>
                </div>

              </div>

            </div>

            {/* CARD */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[30px] p-8 hover:-translate-y-2 transition duration-500">

              <div className="flex items-center gap-5">

                <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 flex items-center justify-center">
                  <FaMapMarkerAlt className="text-cyan-400 text-2xl" />
                </div>

                <div>
                  <h3 className="text-white text-2xl font-semibold">
                    Address
                  </h3>

                  <p className="text-gray-400 mt-2">
                    Dubai
                  </p>
                </div>

              </div>

            </div>


          </motion.div>

          {/* CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[40px] p-10 shadow-2xl"
          >

            <h2 className="text-4xl font-bold text-white mb-10">
              Send Message
            </h2>

            <form className="space-y-6">

              {/* NAME */}
              <div>

                <label className="text-gray-300 mb-3 block">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-white/10 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-cyan-400 transition duration-300"
                />

              </div>

              {/* EMAIL */}
              <div>

                <label className="text-gray-300 mb-3 block">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full bg-white/10 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-cyan-400 transition duration-300"
                />

              </div>

              {/* SUBJECT */}
              <div>

                <label className="text-gray-300 mb-3 block">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full bg-white/10 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-cyan-400 transition duration-300"
                />

              </div>

              {/* MESSAGE */}
              <div>

                <label className="text-gray-300 mb-3 block">
                  Message
                </label>

                <textarea
                  rows="6"
                  placeholder="Write your message..."
                  className="w-full bg-white/10 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-cyan-400 transition duration-300 resize-none"
                ></textarea>

              </div>

              {/* BUTTON */}
              <button
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-700 text-white py-5 rounded-2xl font-semibold text-lg shadow-2xl hover:scale-[1.02] transition duration-300"
              >
                Send Message
              </button>

            </form>

          </motion.div>

        </div>

      </div>

    </div>
  );
}

export default Contact;