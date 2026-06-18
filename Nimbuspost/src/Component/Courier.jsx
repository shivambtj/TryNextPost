const couriers = [
  {
    name: "Delhivery",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Delhivery_Logo.png",
  },
  {
    name: "Shadowfax",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Shadowfax_logo.svg/512px-Shadowfax_logo.svg.png",
  },
  {
    name: "XpressBees",
    logo: "https://www.xpressbees.com/images/logo.png",
  },
  {
    name: "Trackon",
    logo: "https://trackon.in/images/logo.png",
  },
  {
    name: "Shree Maruti",
    logo: "https://shreemaruti.com/images/logo.png",
  },
  {
    name: "Pickrr",
    logo: "https://pickrr.com/assets/images/logo.svg",
  },
];

const CourierPartners = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-[#F3F5F9] to-[#E8D9F4] overflow-hidden">

      <div className="max-w-7xl mx-auto px-8 text-center">

        <h2 className="text-6xl font-bold leading-tight">
          <span className="text-[#D9044F]">
            Managing 25+ eCommerce Couriers
          </span>
          <br />
          <span className="text-[#00247D]">
            So You Don't Have To
          </span>
        </h2>

        {/* ROW 1 */}

        <div className="overflow-hidden mt-16">
          <div className="flex gap-10 animate-courier">

            {[...couriers, ...couriers].map((item, index) => (
              <div
                key={index}
                className="min-w-[220px] h-[90px] bg-white rounded-xl shadow-md flex items-center justify-center"
              >
                <img
                  src={item.logo}
                  alt={item.name}
                  className="h-10 object-contain"
                />
              </div>
            ))}

          </div>
        </div>

        {/* ROW 2 */}

        <div className="overflow-hidden mt-8">
          <div className="flex gap-10 animate-courier-reverse">

            {[...couriers, ...couriers].map((item, index) => (
              <div
                key={index}
                className="min-w-[220px] h-[90px] bg-white rounded-xl shadow-md flex items-center justify-center"
              >
                <img
                  src={item.logo}
                  alt={item.name}
                  className="h-10 object-contain"
                />
              </div>
            ))}

          </div>
        </div>

        <button className="mt-16 bg-[#D9044F] hover:bg-[#b80343] text-white px-12 py-4 rounded-full text-xl font-semibold">
          Know More
        </button>

      </div>

    </section>
  );
};

export default CourierPartners;