const Features = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">

          {/* Card 1 */}
          <div className="overflow-hidden rounded-[24px] lg:rounded-[30px] bg-[#F7F8FA]">

            {/* Image */}
            <div className="h-[280px] md:h-[350px] lg:h-[420px] bg-white">
              <img
                src="/images/play-smart.png"
                alt="Play Smart"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="bg-[#EEF1F5] px-6 md:px-8 lg:px-10 py-8 lg:py-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#00247D]">
                Play it Smart
              </h2>

              <p className="mt-4 text-base md:text-lg text-[#00247D] leading-relaxed">
                AI-backed courier allocation so your shipments don't slow
                down or cost more than they should.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="overflow-hidden rounded-[24px] lg:rounded-[30px] bg-[#F7F8FA]">

            {/* Image */}
            <div className="h-[280px] md:h-[350px] lg:h-[420px] bg-white">
              <img
                src="/images/keep-simple.png"
                alt="Keep it Simple"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="bg-[#EEF1F5] px-6 md:px-8 lg:px-10 py-8 lg:py-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#00247D]">
                Keep it Simple
              </h2>

              <p className="mt-4 text-base md:text-lg text-[#00247D] leading-relaxed">
                Handle eCommerce deliveries anytime and anywhere —
                even through a mobile app.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Features;