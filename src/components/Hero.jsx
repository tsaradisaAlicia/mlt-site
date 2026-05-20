import fond from "../assets/fond.jpg";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      className="relative min-h-[90vh] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${fond})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0A1F44]/70"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl">

        {/* Titre animé */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
        >
          <ReactTyped
            strings={[
              "Maintenance",
              "Maintenance • Logistic",
              "Maintenance • Logistic • Technology",
            ]}
            typeSpeed={60}
            backSpeed={30}
            backDelay={1500}
            loop
          />
        </motion.h1>

        {/* Texte animé */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg md:text-2xl mb-8 text-gray-200"
        >
          Your multi-service partner for reliable and professional solutions
        </motion.p>

        {/* Bouton animé */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-[#0A1F44] px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          <Link to="/Contact">Contact us</Link>
        </motion.button>

      </div>
    </section>
  );
}

export default Hero;