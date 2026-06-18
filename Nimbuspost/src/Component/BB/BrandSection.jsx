const brands = [
  "Amazon",
  "Flipkart",
  "Myntra",
  "Meesho",
  "Nykaa",
  "Ajio",
  "FirstCry",
  "Reliance",
];

const BrandSection = () => {
  return (
    <section className="bg-[#001f75] py-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-center text-white text-2xl font-bold mb-5">
          Trusted By Leading Brands
        </h2>

        <div className="overflow-hidden">
          <div className="flex animate-marquee gap-6 w-max">

            {[...brands, ...brands].map((brand, index) => (
              <div
                key={index}
                className="
                  min-w-[220px]
                  h-[50px]
                  bg-[#042a8f]
                  border border-[#1f459e]
                  rounded-2xl
                  flex
                  items-center
                  justify-center
                  text-white
                  text-xl
                  font-bold
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

export default BrandSection;