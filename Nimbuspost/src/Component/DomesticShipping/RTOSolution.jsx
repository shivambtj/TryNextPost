const rtoCards = [
  {
    title: "Confirm COD Orders",
    desc: "Filter out fake or impulsive orders through automated WhatsApp & IVR—before you dispatch",
  },
  {
    title: "Validate Buyer Addresses",
    desc: "Catch address errors early — let buyers review and correct them before they cost you",
  },
  {
    title: "Notify in Real Time",
    desc: "Enable automated delivery notifications — fewer surprises mean fewer returns",
  },
  {
    title: "Follow Up Post NDR",
    desc: "Act fast on failed deliveries with auto follow-ups and reattempts to maximize success rate",
  },
];

const RTOSolution = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#54145F] via-[#8C175D] to-[#E01B63]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-white font-bold text-4xl md:text-5xl leading-tight">
            Kill RTOs
            <br />
            Before They Kill Your Profits
          </h2>

          <p className="text-white text-lg md:text-xl mt-4">
            Built-in eCommerce shipping tools trained to prevent RTO by up to 30%
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

          {rtoCards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-[24px] overflow-hidden flex flex-col shadow-lg hover:-translate-y-2 transition duration-300"
            >
              {/* Content */}
              <div className="p-8">
                <h3 className="text-[#00247D] font-bold text-3xl leading-tight">
                  {card.title}
                </h3>

                <p className="text-[#00247D] mt-6 text-lg leading-relaxed">
                  {card.desc}
                </p>
              </div>

              {/* Image Placeholder */}
              <div className="mt-auto">
                <div className="h-[260px] bg-[#F3F5F8] flex items-center justify-center">
                  <span className="text-gray-400">
                    Add Image Here
                  </span>
                </div>
              </div>
              

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default RTOSolution;