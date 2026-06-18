const row1 = [
  "Shadowfax",
  "Trackon",
  "Xpressbees",
  "Professional",
  "Shree Maruti",
  "ElasticRun",
  "Bluedart",
];

const row2 = [
  "Delhivery",
  "Shree Maruti",
  "Trackon",
  "Allcargo",
  "Shadowfax",
  "Xpressbees",
  "Blue Dart",
];

const CourierSection = () => {
  return (
    <section className="relative overflow-hidden py-24 bg-[#f5f7fb]">

      {/* Background Glow */}
      <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-pink-200 rounded-full blur-[180px] opacity-30"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-[50px] font-bold leading-tight">
            <span className="text-[#E5094F]">
              Reach 99.9% of India
            </span>
            <br />
            <span className="text-[#00247D]">
              Through Our Courier Partner Network
            </span>
          </h2>
        </div>

        {/* Row 1 */}
        <div className="overflow-hidden mb-8">
          <div className="flex animate-marquee gap-10 w-max">

            {[...row1, ...row1].map((item, index) => (
              <div
                key={index}
                className="min-w-[180px] h-[80px] bg-white rounded-xl shadow-sm flex items-center justify-center"
              >
                <span className="font-semibold text-[#00247D]">
                  {item}
                </span>
              </div>
            ))}

          </div>
        </div>

        {/* Row 2 */}
        <div className="overflow-hidden">
          <div className="flex animate-marquee-reverse gap-10 w-max">

            {[...row2, ...row2].map((item, index) => (
              <div
                key={index}
                className="min-w-[180px] h-[80px] bg-white rounded-xl shadow-sm flex items-center justify-center"
              >
                <span className="font-semibold text-[#00247D]">
                  {item}
                </span>
              </div>
            ))}

          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-16">
          <button
            className="
              bg-[#E5094F]
              text-white
              px-10
              py-4
              rounded-full
              font-semibold
              text-lg
              hover:scale-105
              transition
            "
          >
            Explore Solutions
          </button>
        </div>

      </div>
    </section>
  );
};

export default CourierSection;