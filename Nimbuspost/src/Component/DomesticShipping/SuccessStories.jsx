const brands = [
  "CRED",
  "Zapvi",
  "Evolve",
  "Baidyanath",
  "PL",
  "The Snack Company",
  "The Flavour Farm",
];

const SuccessStories = () => {
  return (
    <section className="bg-[#00247D] py-2 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <h2 className="text-center text-white text-4xl font-bold mb-4">
          100,000+ Success Stories
        </h2>

        <div className="overflow-hidden">
          <div className="flex animate-marquee gap-5 w-max">

            {[...brands, ...brands].map((brand, index) => (
              <div
                key={index}
                className="
                  min-w-[180px]
                  h-[40px]
                  border
                  border-white/20
                  rounded-xl
                  flex
                  items-center
                  justify-center
                  bg-[#012a8f]
                  text-white
                  font-bold
                  text-lg
                  shadow-lg
                "
              >
                {brand}
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default SuccessStories;