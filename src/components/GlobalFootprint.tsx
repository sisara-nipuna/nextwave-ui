const GlobalFootprint = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-foreground">
          Expanding Our Global
          <br />
          Footprint
        </h2>

        <p className="text-center text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
          We are proudly headquartered in Melbourne, a vibrant city that fuels our creativity and drives our commitment to
          innovation. Beyond our home base, we have established a strong presence in key locations, including Australia,
          Singapore, and Colombo. These strategic locations enable us to stay at the forefront of technological
          advancements, collaborate seamlessly across borders, and deliver exceptional solutions to clients worldwide. Our
          global reach empowers us to adapt to diverse market needs, foster innovation, and create a lasting impact in the
          industries we serve.
        </p>

        {/* City Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="aspect-[4/3] bg-gradient-to-br from-amber-900/20 to-amber-600/10 rounded-lg overflow-hidden">
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-muted-foreground text-sm">Melbourne</span>
            </div>
          </div>
          <div className="aspect-[4/3] bg-gradient-to-br from-blue-900/20 to-purple-600/10 rounded-lg overflow-hidden">
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-muted-foreground text-sm">Singapore</span>
            </div>
          </div>
          <div className="aspect-[4/3] bg-gradient-to-br from-cyan-900/20 to-blue-600/10 rounded-lg overflow-hidden">
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-muted-foreground text-sm">Colombo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalFootprint;
