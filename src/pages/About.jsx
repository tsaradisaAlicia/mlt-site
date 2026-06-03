import { motion } from "framer-motion";
import {
  FaHospital,
  FaHotel,
  FaStore,
  FaFlask,
  FaUtensils,
  FaHome,
  FaFire,
  FaSink,  
  FaSnowflake,
  FaTools,
  
  FaGlobeAfrica,
 
  FaIndustry,
  FaWind,
} from "react-icons/fa";
import aboutHero from "../assets/about/about-hero.png";

import beans from "../assets/export/export4.png";
import bambara from "../assets/export/bambara.jpg";
import blackeye from "../assets/export/blackeye.jpg";
import corn from "../assets/export/export1.jpg";
import soybeans from "../assets/export/soybeans.jpg";
import cap from "../assets/export/cap.jpg";

function About() {
  const topProducts = [
  {
    title: "Premium Beans",
    image: beans,
  },
  {
    title: "Yellow Corn",
    image: corn,
  },
  {
    title: "Black-eyed Peas",
    image: blackeye,
  },
];

const bottomProducts = [
  {
    title: "Soybeans",
    image: soybeans,
  },
  {
    title: "Butter Beans",
    image: cap,
  },
  {
    title: "Bambara Beans",
    image: bambara,
  },
];
  return (
    <div className="bg-[#f8fafc] overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-[30px] flex items-center overflow-hidden bg-gradient-to-r from-[#020617] via-[#0A1F44] to-[#1e3a8a]">

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

    {/* TEXTE */}
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >

      <span className="uppercase tracking-[6px] text-cyan-400 font-semibold">
        About Our Company
      </span>

      <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mt-6">
        PROFESSIONAL
        <br />
        TECHNICAL SOLUTIONS &
        <br />
        GRAIN EXPORTATION
      </h1>

      <p className="text-gray-300 text-lg leading-relaxed mt-8">
        Based in Madagascar since 2011, we provide professional
        and high-performance technical solutions for industrial,
        commercial, hospitality, healthcare, and residential sectors.
      </p>

    </motion.div>

    {/* IMAGE */}
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="relative"
    >

      <div className="relative rounded-[40px] overflow-hidden shadow-2xl">

        <img
          src={aboutHero}
          alt="About MLT"
          className="w-full h-[550px] object-cover"
        />

      </div>

      {/* décoration */}
      <div className="absolute -bottom-6 -left-6 w-32 h-32 border-4 border-cyan-400 rounded-[30px]"></div>

    </motion.div>

  </div>

</div>

      </section>

{/* ================= ON VA METTRE JUSTE EN COMMENTAIRE CETTE PARTIE POUR L'INSTANT =====================
      {/* ABOUT 
      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT 
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >

            <span className="uppercase tracking-[5px] text-cyan-600 font-semibold">
              Who We Are
            </span>

            <h2 className="text-5xl font-bold text-[#0A1F44] mt-6 mb-8">
              Engineering Reliable Solutions
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              We specialize in industrial refrigeration, air conditioning,
              heating, ventilation, commercial kitchen systems,
              plumbing, and water management solutions.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed">
              From engineering and installation to maintenance and
              technical support, our mission is to deliver efficient,
              durable, and energy-conscious solutions aligned with
              international quality and safety standards.
            </p>

          </motion.div>

          {/* RIGHT CARDS 
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >

            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <FaBuilding className="text-cyan-500 text-5xl mb-5" />
              <h3 className="text-2xl font-bold text-[#0A1F44]">
                14+
              </h3>
              <p className="text-gray-500 mt-2">
                Years Experience
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <FaGlobeAfrica className="text-cyan-500 text-5xl mb-5" />
              <h3 className="text-2xl font-bold text-[#0A1F44]">
                International
              </h3>
              <p className="text-gray-500 mt-2">
                Export Services
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <FaWarehouse className="text-cyan-500 text-5xl mb-5" />
              <h3 className="text-2xl font-bold text-[#0A1F44]">
                Industrial
              </h3>
              <p className="text-gray-500 mt-2">
                Technical Solutions
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <FaTools className="text-cyan-500 text-5xl mb-5" />
              <h3 className="text-2xl font-bold text-[#0A1F44]">
                Maintenance
              </h3>
              <p className="text-gray-500 mt-2">
                & Support
              </p>
            </div>

          </motion.div>

        </div>

      </section>
================= */}

     {/* EXPORT */}
<section className="py-24 bg-white">

  <div className="max-w-7xl mx-auto px-6">

    {/* TOP PRODUCTS */}
    <div className="grid md:grid-cols-3 gap-8 mb-16">

      {topProducts.map((product, index) => (
        <div
          key={index}
          className="
            bg-white
            rounded-[25px]
            overflow-hidden
            shadow-xl
            hover:-translate-y-2
            hover:shadow-2xl
            transition-all
            duration-500
          "
        >
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-[220px] object-cover"
          />

          <div className="p-5">
            <h3 className="font-bold text-[#0A1F44] text-xl">
              {product.title}
            </h3>
          </div>
        </div>
      ))}

    </div>

    {/* CENTER TEXT */}
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="text-center max-w-4xl mx-auto"
    >

      <span className="uppercase tracking-[5px] text-yellow-600 font-semibold">
        Premium Agricultural Export
      </span>

      <h2 className="text-5xl md:text-6xl font-bold text-[#0A1F44] mt-6 mb-8">
        Quality Products From Madagascar
      </h2>

      <p className="text-gray-600 text-xl leading-relaxed">
        We export carefully selected agricultural products
        that meet international quality standards and
        market requirements.
      </p>

    </motion.div>

    {/* BOTTOM PRODUCTS */}
    <div className="grid md:grid-cols-3 gap-8 mt-16">

      {bottomProducts.map((product, index) => (
        <div
          key={index}
          className="
            bg-white
            rounded-[25px]
            overflow-hidden
            shadow-xl
            hover:-translate-y-2
            hover:shadow-2xl
            transition-all
            duration-500
          "
        >
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-[220px] object-cover"
          />

          <div className="p-5">
            <h3 className="font-bold text-[#0A1F44] text-xl">
              {product.title}
            </h3>
          </div>
        </div>
      ))}

    </div>

  </div>

</section>


{/* ================= EXPERTISE ================= */}
<section className="py-28 bg-gradient-to-br from-[#020617] via-[#0A1F44] to-[#111827] relative overflow-hidden">

  {/* GLOW */}
  <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-3xl rounded-full"></div>

  <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-3xl rounded-full"></div>

  <div className="max-w-7xl mx-auto px-6 relative z-10">

    {/* TITLE */}
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="text-center mb-20"
    >

      <span className="uppercase tracking-[5px] text-cyan-400 font-semibold">
        PROFESSIONAL TECHNICAL SOLUTIONS
      </span>

      <h2 className="text-5xl md:text-6xl font-black text-white mt-6">
        Specialized Services
      </h2>

      <p className="text-gray-400 text-lg max-w-3xl mx-auto mt-6">
        High-performance technical solutions adapted to modern
        infrastructures and industrial requirements.
      </p>

    </motion.div>

    {/* SERVICES */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {[
        {
          icon: <FaSnowflake />,
          title: "Industrial Refrigeration",
        },
        {
          icon: <FaWind />,
          title: "Air Conditioning & Ventilation",
        },
        {
          icon: <FaFire />,
          title: "Heating Systems",
        },
        {
          icon: <FaUtensils />,
          title: "Commercial Kitchens",
        },
        {
          icon: <FaSink />,
          title: "Plumbing Systems",
        },
        {
          icon: <FaTools />,
          title: "Technical Maintenance",
        },
      ].map((item, index) => (

        <motion.div
          key={index}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 + index * 0.1 }}
          viewport={{ once: true }}
          className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-[35px] p-8 hover:-translate-y-3 hover:border-cyan-400/40 transition duration-500"
        >

          <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition duration-500">
            {item.icon}
          </div>

          <h3 className="text-white text-2xl font-bold mb-3">
            {item.title}
          </h3>

          <p className="text-gray-400">
            Professional solutions designed for efficiency,
            reliability and long-term performance.
          </p>

        </motion.div>

      ))}

    </div>

  </div>

</section>

 {/* ================= CLIENT SECTORS ================= */}
<section className="py-28 bg-gradient-to-b from-[#f8fafc] to-white relative overflow-hidden">

  {/* Background Glow */}
  <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-200/30 blur-3xl rounded-full"></div>
  <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-200/20 blur-3xl rounded-full"></div>

  <div className="max-w-7xl mx-auto px-6 relative z-10">

    {/* TITLE */}
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="text-center mb-20"
    >

      <span className="uppercase tracking-[5px] text-cyan-600 font-semibold">
        Industries We Serve
      </span>

      <h2 className="text-5xl md:text-6xl font-black text-[#0A1F44] mt-6">
        Diverse Client Sectors
      </h2>

      <p className="text-gray-500 text-lg max-w-3xl mx-auto mt-6">
        Delivering reliable solutions across multiple industries
        and professional sectors.
      </p>

    </motion.div>

    {/* CARDS */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {[
        {
          icon: <FaStore />,
          title: "Supermarkets & Retail Facilities",
        },
        {
          icon: <FaHotel />,
          title: "Hotels & Hospitality Establishments",
        },
        {
          icon: <FaFlask />,
          title: "Laboratories & Technical Facilities",
        },
        {
          icon: <FaHospital />,
          title: "Hospitals & Healthcare Institutions",
        },
        {
          icon: <FaUtensils />,
          title: "Restaurants & Commercial Kitchens",
        },
        {
          icon: <FaHome />,
          title: "Private Residences & Luxury Villas",
        },
        {
          icon: <FaIndustry />,
          title: "Industrial & Institutional Buildings",
        },
      ].map((item, index) => (

        <motion.div
          key={index}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 + index * 0.1 }}
          viewport={{ once: true }}
          className="group bg-white rounded-[35px] p-8 shadow-xl border border-slate-100 hover:-translate-y-3 hover:shadow-2xl transition duration-500"
        >

          <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-700 text-white flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition duration-500">
            {item.icon}
          </div>

          <h3 className="text-2xl font-bold text-[#0A1F44] leading-snug">
            {item.title}
          </h3>

        </motion.div>

      ))}

    </div>

  </div>

</section>

{/* ================= VISION ================= */}
<section className="py-28 bg-gradient-to-br from-[#020617] via-[#0A1F44] to-[#111827] relative overflow-hidden">

  <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>

  <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

  <div
  className="absolute inset-0 opacity-5"
  style={{
    backgroundImage:
      "repeating-linear-gradient(135deg, #22d3ee 0px, #22d3ee 1px, transparent 1px, transparent 40px)",
  }}
></div>
<div className="absolute top-20 right-20 text-white/5 text-[180px]">
  <FaSnowflake />
</div>

<div className="absolute top-20 left-20 text-white/5 text-[200px]">
  <FaGlobeAfrica />
</div>

<div className="absolute top-1/2 right-20 text-white/5 text-[140px]">
  <FaTools />
</div>

  {/* BACKGROUND EFFECTS */}
  <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 blur-3xl rounded-full"></div>

  <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-3xl rounded-full"></div>

  {/* BIG BACKGROUND TEXT */}
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
    <h1 className="text-[180px] font-black text-white/[0.03] uppercase">
      Vision
    </h1>
  </div>

  <div className="max-w-6xl mx-auto px-6 relative z-10">

    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="text-center"
    >

      <span className="uppercase tracking-[5px] text-cyan-400 font-semibold">
        Our Vision
      </span>

      <h2 className="text-5xl md:text-6xl font-black text-white leading-tight mt-6">
        Building Long-Term
        <br />
        Trust & Excellence
      </h2>

      {/* DECORATIVE LINE */}
      <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-8 rounded-full"></div>

      <p className="text-gray-300 text-xl leading-relaxed mt-10 max-w-4xl mx-auto">
        To be recognized as a trusted partner in specialized
        technical services and premium agricultural exports by
        delivering excellence, reliability, and sustainable value.
      </p>

      {/* VALUES */}
      <div className="grid md:grid-cols-3 gap-6 mt-14">

        <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8">

          <h3 className="text-cyan-400 text-2xl font-bold mb-3">
            Excellence
          </h3>

          <p className="text-gray-300">
            Delivering high-quality solutions with precision,
            professionalism, and international standards.
          </p>

        </div>

        <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8">

          <h3 className="text-cyan-400 text-2xl font-bold mb-3">
            Reliability
          </h3>

          <p className="text-gray-300">
            Building long-term partnerships through dependable                                                
            services and consistent performance.
          </p>

        </div>

        <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8">

          <h3 className="text-cyan-400 text-2xl font-bold mb-3">
            Sustainability
          </h3>

          <p className="text-gray-300">
            Creating lasting value through responsible practices,
            innovation, and continuous improvement.
          </p>

        </div>

      </div>

      {/* COMMITMENT CARD */}
      <div className="mt-14 bg-white/5 border border-cyan-500/20 rounded-[30px] p-10 backdrop-blur-xl max-w-5xl mx-auto">

        <h3 className="text-cyan-400 text-2xl font-bold mb-4">
          Our Commitment
        </h3>

        <p className="text-gray-300 text-lg leading-relaxed">
          We continuously strive to deliver innovative technical
          solutions and premium export services while maintaining
          the highest standards of quality, safety, efficiency,
          and customer satisfaction.
        </p>

      </div>

      {/* QUOTE */}
      <div className="mt-12 border-l-4 border-cyan-400 max-w-4xl mx-auto pl-6 text-left">

        <p className="text-xl italic text-gray-300">
          "Delivering technical excellence and premium agricultural
          exports with integrity, innovation, and long-term value."
        </p>

      </div>

    </motion.div>

  </div>

</section>

     


      

     

    </div>
  );
}

export default About;