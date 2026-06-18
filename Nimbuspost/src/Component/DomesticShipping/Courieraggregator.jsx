const features = [
  {
    title: "Same/Next-Day Delivery",
    desc: "Turn browsers into buyers with delivery speeds that match their expectations.",
    imageSide: "left",
  },
  {
    title: "Data-Driven Decisions",
    desc: "Put data in the driver's seat with a diversified dashboard and custom reports.",
    imageSide: "right",
  },
  {
    title: "Lesser Weight Worries",
    desc: "Avoid surprise charges with weight freezing and dead weight billing.",
    imageSide: "left",
  },
  {
    title: "More Power to You",
    desc: "Control EDD display, block high-risk RTO pin codes, and access early COD payouts.",
    imageSide: "right",
  },
  {
    title: "Beyond Just Shipping",
    desc: "Streamlined reverse logistics backed by diligent quality checks.",
    imageSide: "left",
  },
  {
    title: "Seller Excellence Program",
    desc: "Grow faster with tailored insights on courier performance and shipping issues.",
    imageSide: "right",
  },
];

const Courieraggregator = () => {
  return (
    <section className="bg-[#f5f7fb] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-24">
          <h2 className="font-bold leading-tight">
            <span className="block text-[#00247D] text-4xl md:text-5xl">
              Courier Aggregator
            </span>

            <span className="block text-[#E5094F] text-4xl md:text-5xl mt-2">
              Turned into a Growth Engine
            </span>
          </h2>
        </div>

        {/* Features */}
        <div className="space-y-32">
          {features.map((item, index) => (
            <div
              key={index}
              className={`
                grid lg:grid-cols-2 gap-20 items-center
                ${
                  item.imageSide === "right"
                    ? "lg:[&>*:first-child]:order-1 lg:[&>*:last-child]:order-[-1]"
                    : ""
                }
              `}
            >
              {/* Image Placeholder */}
              <div className="group">
                <div
                  className="
                    bg-gradient-to-r
                    from-[#C30C58]
                    via-[#6A1B88]
                    to-[#1844D8]
                    rounded-[28px]
                    h-[380px]
                    flex items-center
                    justify-center
                    shadow-lg
                    transition-all
                    duration-500
                    group-hover:scale-[1.02]
                  "
                >
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl px-8 py-4 text-white font-semibold">
                    Add Your Image
                  </div>
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-[#00247D] text-3xl md:text-4xl font-bold mb-5">
                  {item.title}
                </h3>

                <p className="text-[#00247D] text-lg leading-relaxed max-w-lg">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-24">
          <button
            className="
              bg-[#E5094F]
              text-white
              px-10
              py-4
              rounded-full
              text-lg
              font-semibold
              hover:bg-[#c90746]
              hover:scale-105
              transition-all
              duration-300
            "
          >
            Start Now
          </button>
        </div>

      </div>
    </section>
  );
};

export default Courieraggregator;