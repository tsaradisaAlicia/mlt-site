import { motion } from "framer-motion";
import { Link } from "react-router-dom";
/* IMAGES */
import hero from "../assets/hero.png";
import service1 from "../assets/service1.jpg";
import service2 from "../assets/service2.jpg";
import service3 from "../assets/service3.jpg";
import service4 from "../assets/service4.jpg";
import service5 from "../assets/service5.jpg";


function Hero() {
  return (
     <div className="bg-[#ffffff] overflow-hidden">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[80vh] flex items-center overflow-hidden opacity-[9500]">

        {/* BACKGROUND IMAGE */}
        <img
          src={hero}
          alt=""
          className="absolute inset-0 w-full h-full object-fit object-center"
        />

         {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#071739]/95 via-[#071739]/35"></div>

          {/* OPTIONAL DARK EFFECT */}
          <div className="absolute inset-0 bg-black/20"></div>

          {/* CONTENT */}
          <div className="w-full px-10 lg:px-24 relative z-10">

            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="max-w-2xl ml-0 lg:ml-10"
            >


              {/* BIG TITLE */}
              <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mt-6">

                Your Experts in
                <br />

                Technical Services &
                
                <span className="block text-cyan-400">
                  Grai Exportation 
                </span>

              </h1>

              {/* DESCRIPTION */}
              <p className="text-gray-200 text-lg leading-relaxed mt-8 max-w-xl">

                Specializing in Refrigeration, HVAC,
                Commercial Kitchens, Plumbing &
                Grain Exportation Worldwide.

              </p>

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-5 mt-10">

                <Link to="/contact" className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-xl font-semibold shadow-2xl hover:scale-105 transition duration-300">
                  Contact Us
                </Link>
                
              </div>

            </motion.div>

          </div>

          {/* BOTTOM WAVE */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
            <svg
              className="relative block w-full h-[100px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
            >
              <path
                fill="#ffffff"
                fillOpacity="1"
                d="M0,224L80,224C160,224,320,224,480,213.3C640,203,800,181,960,186.7C1120,192,1280,224,1360,240L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
              ></path>
            </svg>
          </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-28">

        <div className="max-w-7xl mx-auto px-6">

          {/* TITLE */}
          <div className="mb-16">

            <span className="uppercase tracking-[4px] text-cyan-600 font-semibold">
              What We Do
            </span>

            <h1 className="text-5xl font-bold text-[#0A1F44] mt-4">
              Our Services
            </h1>

            <p className="text-gray-500 mt-4 text-lg">
              Comprehensive solutions for your business.
            </p>

          </div>

          {/* CARDS */}
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">

            {/* CARD */}
            <div className="bg-white rounded-[30px] overflow-hidden shadow-xl hover:-translate-y-3 transition duration-500">

              <div className="h-[220px] overflow-hidden">
                <img
                  src={service1}
                  alt=""
                  className="w-full h-full object-cover hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold text-[#0A1F44]">
                  Industrial Refrigeration
                </h3>

              </div>

            </div>

            {/* CARD */}
            <div className="bg-white rounded-[30px] overflow-hidden shadow-xl hover:-translate-y-3 transition duration-500">

              <div className="h-[220px] overflow-hidden">
                <img
                  src={service2}
                  alt=""
                  className="w-full h-full object-cover hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold text-[#0A1F44]">
                  HVAC
                </h3>

              </div>

            </div>

            {/* CARD */}
            <div className="bg-white rounded-[30px] overflow-hidden shadow-xl hover:-translate-y-3 transition duration-500">

              <div className="h-[220px] overflow-hidden">
                <img
                  src={service3}
                  alt=""
                  className="w-full h-full object-cover hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold text-[#0A1F44]">
                  Commercial Kitchens
                </h3>

              </div>

            </div>


            {/* CARD */}
            <div className="bg-white rounded-[30px] overflow-hidden shadow-xl hover:-translate-y-3 transition duration-500">

              <div className="h-[220px] overflow-hidden">
                <img src={service5} alt="" className="w-full h-full object-cover hover:scale-110 transition duration-700" />

              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold text-[#0A1F44]">
                  Plumbing & Water Systems
                </h3>

              </div>
            </div>

            {/* CARD */}
            <div className="bg-white rounded-[30px] overflow-hidden shadow-xl hover:-translate-y-3 transition duration-500">

              <div className="h-[220px] overflow-hidden">
                <img
                  src={service4}
                  alt=""
                  className="w-full h-full object-cover hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold text-[#0A1F44]">
                  Grain & Seed Export
                </h3>

              </div>

            </div>

            

          </div>

        </div>

      </section>
      </div>
  );
}

export default Hero;