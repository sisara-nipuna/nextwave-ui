import { MapPin } from "lucide-react";

const GlobalFootprint = () => {
  const locations = [
    {
      city: "Melbourne",
      country: "Australia",
      gradient: "from-blue-500 via-purple-500 to-pink-500",
    },
    {
      city: "Singapore",
      country: "Singapore",
      gradient: "from-green-500 via-teal-500 to-blue-500",
    },
    {
      city: "Colombo",
      country: "Sri Lanka",
      gradient: "from-orange-500 via-red-500 to-pink-500",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-contact-accent-light/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Our Global Footprint
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Serving clients across multiple continents with local expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-contact-accent/20 transition-all duration-500 hover:-translate-y-2"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${location.gradient} opacity-90`}></div>
              <div className="absolute inset-0 bg-[url('/src/assets/dotted-pattern.png')] opacity-20"></div>
              
              <div className="relative p-8 h-64 flex flex-col justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <div className="text-white">
                  <h3 className="text-3xl font-bold mb-2">{location.city}</h3>
                  <p className="text-white/90 text-lg">{location.country}</p>
                </div>

                <div className="absolute top-4 right-4 w-32 h-32 rounded-full bg-white/10 blur-3xl"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalFootprint;
