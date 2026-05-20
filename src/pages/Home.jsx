import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
//import Services from "../components/Services";
import Activites from "../components/Activites";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      
      <Activites />
      <Footer />
    </>
  );
}

export default Home;