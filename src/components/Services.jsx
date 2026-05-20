function Services() {
  const data = [
    { title: "Maintenance Bâtiment", desc: "Réparation et entretien professionnel" },
    { title: "Climatisation", desc: "Installation et maintenance AC" },
    { title: "Commerce", desc: "Matériaux et équipements" },
    { title: "Location", desc: "Véhicules et logistique" },
    { title: "Export", desc: "Produits locaux et marchandises" },
  ];

  return (
    <section className="p-10 bg-gray-100">
      <h2 className="text-2xl font-bold text-center mb-10">Our Services</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {data.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow hover:scale-105 transition">
            <h3 className="font-bold text-lg mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;