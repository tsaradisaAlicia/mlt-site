import { motion } from "framer-motion";
import { FaCarSide, FaClock, FaMapMarkedAlt, FaShieldAlt } from "react-icons/fa";

/* EXPORT */
import exp1 from "../assets/export/export1.jpg";
import exp2 from "../assets/export/export2.png";
import exp3 from "../assets/export/export3.png";
import exp4 from "../assets/export/export4.png";

/* CLIM */
import clim1 from "../assets/clim/clim.jpg";
import clim2 from "../assets/clim/clim2.jpeg";
import clim3 from "../assets/clim/clim3.png";
import clim4 from "../assets/clim/clim4.png";

/* BATIMENT */
import bat1 from "../assets/batiment/bat1.png";
import bat2 from "../assets/batiment/bat2.png";
//import bat3 from "../assets/batiment/bat3.jpg";
import bat4 from "../assets/batiment/bat4.jpg";

/* COMMERCE DES MATERIAUX DE CONSTRUCTION */
import mat1 from "../assets/materiaux/mat1.avif";
import mat2 from "../assets/materiaux/mat2.jpg";
import mat3 from "../assets/materiaux/mat3.jpeg";
import mat4 from "../assets/materiaux/mat4.png";

/*================================================*/
function Activites() {
  return (
    
    <div className="bg-[#f7f9fc] overflow-hidden">

      {/* ================= SECTION TITLE ================= */}
<section className="pt-32 pb-10 relative overflow-hidden">

  {/* Background Glow */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-200/20 blur-3xl rounded-full"></div>

  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
    className="max-w-7xl mx-auto px-6 text-center relative z-10"
  >

    <span className="uppercase tracking-[6px] text-[#1E3A8A] font-semibold">
      What We Do
    </span>

    <h1 className="text-6xl md:text-8xl font-black text-[#0A1F44] mt-6 leading-tight">
      OUR
      <span className="bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">
        {" "}ACTIVITIES
      </span>
    </h1>

    <p className="text-gray-500 max-w-2xl mx-auto mt-8 text-lg leading-relaxed">
      Discover our wide range of professional services in exportation,
      maintenance, technology, logistics, construction, and mobility solutions.
    </p>

  </motion.div>

</section>

      {/* ================= EXPORTATION ================= */}
      <section className="py-24 relative">

        {/* Background blur */}
        <div className="absolute top-0 right-0 w-[550px] h-[700px] bg-blue-500/30 blur-3xl rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">

          {/* TEXT */}
          <motion.div 
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >

            <div className="flex items-center gap-4 mb-6">

              <div className="w-12 h-[2px] bg-[#1E3A8A]"></div>

              <span className="uppercase tracking-[4px] text-sm text-[#1E3A8A] font-semibold">
                Our Activities
              </span>

            </div>

          <span className="text-[#1E3A8A] uppercase tracking-[5px] font-semibold">
            International Trade
          </span>

            <h1 className="text-5xl md:text-7xl font-bold text-[#0A1F44] mt-4 mb-8 leading-tight">
              EXPORTATION
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              We specialize in the exportation of local products and
              general merchandise with reliable international logistics
              and professional supply chain solutions.
            </p>
        {/* On va faire juste commentaire le bouton 
            <button className="bg-gradient-to-r from-[#0A1F44] to-[#1E3A8A] text-white px-8 py-4 rounded-xl shadow-xl hover:scale-105 transition duration-300">
              Explore More
            </button>
        */}
          </motion.div>

          {/* IMAGES */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative h-[700px] flex items-center justify-center"
          >

            {/* IMAGE 1 */}
            <div
              className="absolute top-0 left-20 w-[260px] h-[320px]
              rounded-[40px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.25)]
               hover:rotate-0 hover:scale-105
              transition duration-700 z-10"
            >
              <img
                src={exp1}
                alt=""
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/10"></div>
            </div>

            {/* IMAGE 2 */}
            <div
              className="absolute top-10 right-[-20px] w-[220px] h-[260px]
              rounded-[30px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.25)]
               hover:rotate-0 hover:scale-105
              transition duration-700 z-20"
            >
              <img
                src={exp2}
                alt=""
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* IMAGE 3 */}
            <div
              className="absolute bottom-0 left-10 w-[260px] h-[280px]
              rounded-[35px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.25)]
               hover:rotate-0 hover:scale-105
              transition duration-700 z-30"
            >
              <img
                src={exp3}
                alt=""
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* IMAGE 4 */}
            <div
              className="absolute bottom-10 right-0 w-[240px] h-[320px]
              rounded-[40px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.25)]
               hover:rotate-0 hover:scale-105
              transition duration-700 z-40"
            >
              <img
                src={exp4}
                alt=""
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/10"></div>
            </div>

            {/* GLOW */}
            <div className="absolute w-96 h-96 bg-blue-300/20 blur-3xl rounded-full"></div>

          </motion.div>

        </div>
      </section>

      {/* ================= CLIMATISATION ================= */}
      <section className="py-24 bg-white relative overflow-hidden">

        {/* Background glow */}
        <div className="absolute bottom-0 left-0 w-[550px] h-[700px] bg-cyan-200/30 blur-3xl rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">

          {/* IMAGES GRID */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative h-[700px] w-[650px] flex items-center justify-center"
          >

            {/* IMAGE 2 */}
            <div
              className="absolute top-0 left-0 w-[300px] h-[250px]
              rounded-[35px] overflow-hidden
              shadow-[0_20px_60px_rgba(0,180,255,0.25)]
              
              hover:rotate-0 hover:scale-105
              transition duration-700 z-10"
            >
              <img
                src={clim2}
                alt=""
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/30 to-transparent"></div>
            </div>

            {/* IMAGE 1 */}
            <div
              className="absolute top-16 right-0 w-[300px] h-[260px]
              rounded-[30px] overflow-hidden
              shadow-[0_20px_60px_rgba(0,180,255,0.25)]
              
              hover:rotate-0 hover:scale-105
              transition duration-700 z-20"
            >
              <img
                src={clim1}
                alt=""
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/10"></div>
            </div>

            {/* IMAGE 3 */}
            <div
              className="absolute bottom-0 left-10 w-[300px] h-[260px]
              rounded-[30px] overflow-hidden
              shadow-[0_20px_60px_rgba(0,180,255,0.25)]
             
              hover:rotate-0 hover:scale-105
              transition duration-700 z-30"
            >
              <img
                src={clim3}
                alt=""
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/20 to-transparent"></div>
            </div>

            {/* IMAGE 4 */}
            <div
              className="absolute bottom-10 right-10 w-[260px] h-[320px]
              rounded-[35px] overflow-hidden
              shadow-[0_20px_60px_rgba(0,180,255,0.25)]
             
              hover:rotate-0 hover:scale-105
              transition duration-700 z-40"
            >
              <img
                src={clim4}
                alt=""
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/10"></div>
            </div>

            {/* CYAN GLOW */}
            <div className="absolute w-[450px] h-[450px] bg-cyan-300/20 blur-3xl rounded-full"></div>

          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 40 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            
          >

            <div className="flex items-center gap-4 mb-6">

              <div className="w-12 h-[2px] bg-cyan-500"></div>

              <span className="uppercase tracking-[4px] text-sm text-cyan-600 font-semibold">
                Our Activities
              </span>

            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-[#0A1F44] mt-4 mb-6 leading-tight">
              AIR CONDITIONING
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Professional air conditioning installation, maintenance, and climate control solutions for residential and industrial environments.
            </p>

            {/* TAGS */}
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm">Installation</span>
              <span className="bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm">Maintenance</span>
              <span className="bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm">Repair</span>
            </div>
          {/* On va faire juste commentaire le bouton
            <button className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white px-8 py-4 rounded-xl shadow-xl hover:scale-105 transition duration-300">
              Explore more
            </button>
          */}
          </motion.div>

        </div>
      </section>

      {/* ================= BÂTIMENT ================= */}
<section className="py-24 relative overflow-hidden bg-gradient-to-br from-[#0f172a] to-[#1e293b]">

  {/* GLOW */}
  <div className="absolute top-0 right-0 w-[550px] h-[700px] bg-orange-500/30 blur-3xl rounded-full"></div>

  <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">

    {/* TEXT */}
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >

      <div className="flex items-center gap-4 mb-6">

        <div className="w-12 h-[2px] bg-yellow-400"></div>

        <span className="uppercase tracking-[4px] text-sm text-yellow-300 font-semibold">
          Our Activities
        </span>

      </div>

      <h1 className="text-5xl md:text-7xl font-bold text-white mt-4 mb-6 leading-tight">
        BUILDING
        <br />
        MAINTENANCE
      </h1>

      <p className="text-gray-300 text-lg leading-relaxed mb-8">
        Professional building maintenance, repair, and technical support
        services for residential, commercial, and industrial infrastructures.
      </p>

      {/* TAGS */}
      <div className="flex flex-wrap gap-3 mb-8">

        <span className="bg-white/10 border border-white/10 text-white px-4 py-2 rounded-full text-sm backdrop-blur-xl">
          Repair
        </span>

        <span className="bg-white/10 border border-white/10 text-white px-4 py-2 rounded-full text-sm backdrop-blur-xl">
          Maintenance
        </span>

        <span className="bg-white/10 border border-white/10 text-white px-4 py-2 rounded-full text-sm backdrop-blur-xl">
          Construction
        </span>

      </div>
    {/* On va faire juste commentaire le bouton        
      <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-xl shadow-2xl hover:scale-105 transition duration-300">
        Explore More
      </button>
    */}
    </motion.div>

    {/* IMAGES */}
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="relative h-[700px] w-[650px] flex items-center justify-center"
    >

      {/* IMAGE 1 */}
      <div className="absolute top-0 left-0 w-[300px] h-[220px] rounded-[30px] overflow-hidden shadow-2xl">
        <img
          src={bat1}
          alt=""
          className="w-full h-full object-cover hover:scale-110 transition duration-700"
        />
      </div>

      {/* IMAGE 2 */}
      <div className="absolute top-32 right-0 w-[260px] h-[340px] rounded-[35px] overflow-hidden shadow-2xl">
        <img
          src={bat2}
          alt=""
          className="w-full h-full object-cover hover:scale-110 transition duration-700"
        />
      </div>

      {/* IMAGE 4 */}
      <div className="absolute bottom-0 left-10 w-[400px] h-[260px] rounded-[35px] overflow-hidden shadow-2xl">
        <img
          src={bat4}
          alt=""
          className="w-full h-full object-cover hover:scale-110 transition duration-700"
        />
      </div>

      
    </motion.div>

  </div>
</section>

{/* ================= CONSTRUCTION MATERIALS ================= */}
<section className="py-24 bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] relative overflow-hidden">

  {/* BACKGROUND GLOW */}
  <div className="absolute top-20 left-0 w-[550px] h-[700px] bg-yellow-200/60 blur-3xl rounded-full"></div>

  <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">

    {/* IMAGES */}
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="relative h-[700px] flex items-center justify-center"
    >

      {/* IMAGE 1 */}
    <div
      className="absolute top-0 left-0 w-[240px] h-[240px]
      rotate-45 rounded-[45px]
      overflow-hidden border-[6px] border-white
      shadow-[0_25px_60px_rgba(0,0,0,0.20)]
      hover:scale-110 hover:-translate-y-2
      transition duration-700 bg-white"
    >
      <img
        src={mat1}
        alt=""
        className="w-full h-full object-contain -rotate-45 p-2"
      />
    </div>

{/* IMAGE 2 */}
    <div
      className="absolute top-0 right-10 w-[240px] h-[240px]
      rotate-45 rounded-[45px]
      overflow-hidden border-[6px] border-white
      shadow-[0_25px_60px_rgba(0,0,0,0.20)]
      hover:scale-110 hover:-translate-y-2
      transition duration-700 bg-white"
    >
      <img
        src={mat2}
        alt=""
        className="w-full h-full object-contain -rotate-45 p-2"
      />
    </div>

{/* IMAGE 3 */}
    <div
      className="absolute bottom-0 left-0 w-[240px] h-[240px]
      rotate-45 rounded-[45px]
      overflow-hidden border-[6px] border-white
      shadow-[0_25px_60px_rgba(0,0,0,0.20)]
      hover:scale-110 hover:-translate-y-2
      transition duration-700 bg-white"
    >
      <img
        src={mat3}
        alt=""
        className="w-full h-full object-contain -rotate-45 p-2"
      />
    </div>

{/* IMAGE 4 */}
    <div
      className="absolute bottom-0 right-10 w-[240px] h-[240px]
      rotate-45 rounded-[45px]
      overflow-hidden border-[6px] border-white
      shadow-[0_25px_60px_rgba(0,0,0,0.20)]
      hover:scale-110 hover:-translate-y-2
      transition duration-700 bg-white"
    >
      <img
        src={mat4}
        alt=""
        className="w-full h-full object-contain -rotate-45 p-2"
      />
    </div>

     

    </motion.div>

    {/* TEXT */}
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >

      <div className="flex items-center gap-4 mb-6">

        <div className="w-12 h-[2px] bg-yellow-500"></div>

        <span className="uppercase tracking-[4px] text-sm text-yellow-700 font-semibold">
          Our Activities
        </span>

      </div>

      <h1 className="text-5xl md:text-7xl font-bold text-[#0A1F44] mt-4 mb-6 leading-tight">
        CONSTRUCTION
        <br />
        MATERIALS
      </h1>

      <p className="text-gray-600 text-lg leading-relaxed mb-8">
        Supply and retail of high-quality construction materials,
        industrial equipment, and building solutions for residential
        and commercial projects.
      </p>

      {/* TAGS */}
      <div className="flex flex-wrap gap-3 mb-8">

        <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm">
          Cement
        </span>

        <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm">
          Steel
        </span>

        <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm">
          Equipment
        </span>

      </div>

    </motion.div>

  </div>
</section>

{/* ================= CAR RENTAL ================= */}
<section className="py-28 bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#111827] relative overflow-hidden">

  {/* GLOW EFFECTS */}
  <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-500/10 blur-3xl rounded-full"></div>

  <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 blur-3xl rounded-full"></div>

  <div className="max-w-7xl mx-auto px-6 relative z-10">

    {/* HEADER */}
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="text-center mb-20"
    >

      <div className="flex items-center justify-center gap-4 mb-6">

        <div className="w-12 h-[2px] bg-cyan-400"></div>

        <span className="uppercase tracking-[4px] text-sm text-cyan-400 font-semibold">
          Our Activities
        </span>

        <div className="w-12 h-[2px] bg-cyan-400"></div>

      </div>
      
      <h1 className="text-5xl md:text-7xl font-bold text-white mt-4 mb-6">
        CAR RENTAL
      </h1>

      <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
        Reliable and flexible vehicle rental services for business,
        logistics, and professional transportation solutions.
      </p>

    </motion.div>

    {/* CARDS */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {/* CARD 1 */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[30px] p-8 hover:-translate-y-3 transition duration-500"
      >

        <FaCarSide className="text-cyan-400 text-5xl mb-6" />

        <h3 className="text-white text-2xl font-semibold mb-4">
          Modern Fleet
        </h3>

        <p className="text-gray-400">
          Comfortable and reliable vehicles adapted for all professional needs.
        </p>

      </motion.div>

      {/* CARD 2 */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[30px] p-8 hover:-translate-y-3 transition duration-500"
      >

        <FaClock className="text-cyan-400 text-5xl mb-6" />

        <h3 className="text-white text-2xl font-semibold mb-4">
          Flexible Rental
        </h3>

        <p className="text-gray-400">
          Daily, weekly, and long-term rental options available.
        </p>

      </motion.div>

      {/* CARD 3 */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[30px] p-8 hover:-translate-y-3 transition duration-500"
      >

        <FaMapMarkedAlt className="text-cyan-400 text-5xl mb-6" />

        <h3 className="text-white text-2xl font-semibold mb-4">
          Nationwide Service
        </h3>

        <p className="text-gray-400">
          Transportation solutions available across multiple regions.
        </p>

      </motion.div>

      {/* CARD 4 */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1 }}
        viewport={{ once: true }}
        className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[30px] p-8 hover:-translate-y-3 transition duration-500"
      >

        <FaShieldAlt className="text-cyan-400 text-5xl mb-6" />

        <h3 className="text-white text-2xl font-semibold mb-4">
          Secure Service
        </h3>

        <p className="text-gray-400">
          Safe, insured, and professionally maintained vehicles.
        </p>

      </motion.div>

    </div>

  </div>
</section>

    </div>
  );
}

export default Activites;