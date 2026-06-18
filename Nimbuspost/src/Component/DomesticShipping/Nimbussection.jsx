const testimonials = [
  {
    company: "SparkUp",
    text: "NimbusPost has been a game-changer for our brand. Faster deliveries and fewer disputes.",
    name: "Chintan",
  },
  {
    company: "Clapjoy",
    text: "Our RTO percentage is at an all-time low and customers are happier.",
    name: "Neha Agarwal",
  },
  {
    company: "Candor Foods",
    text: "Advanced analytics and smart pricing helped us scale faster.",
    name: "Shreesh Gawdi",
  },
];

const blogs = [
  {
    title: "Shopify App Ranks in Top Logistics Apps",
    category: "Announcements",
  },
  {
    title: "10 Business Ideas in Kolkata",
    category: "Growth",
  },
  {
    title: "Best Reseller Apps in India",
    category: "eCommerce",
  },
];

const NimbusSections = () => {
  return (
    <>
      {/* MOBILE APP SECTION */}

      <section className="bg-gradient-to-r from-[#f4f7fd] to-[#f8e8f4] py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>
              <h2 className="text-5xl font-bold leading-tight">
                <span className="text-[#00247D]">
                  Run it All,
                </span>
                <br />
                <span className="text-[#d9044f]">
                  Wherever You Are
                </span>
              </h2>

              <p className="mt-8 text-xl text-[#00247D] max-w-lg">
                Process, ship and track orders instantly
                from your mobile device.
              </p>

              <div className="mt-10 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white shadow"></div>
                  <h3 className="text-3xl font-bold text-[#00247D]">
                    Instant Processing
                  </h3>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white shadow"></div>
                  <h3 className="text-3xl font-bold text-[#00247D]">
                    Effortless Tracking
                  </h3>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white shadow"></div>
                  <h3 className="text-3xl font-bold text-[#00247D]">
                    Real-Time Insights
                  </h3>
                </div>
              </div>

              <div className="flex gap-4 mt-10">
                <div className="bg-black text-white px-8 py-4 rounded-xl">
                  Google Play
                </div>

                <div className="bg-black text-white px-8 py-4 rounded-xl">
                  App Store
                </div>
              </div>
            </div>

            <div className="relative flex justify-center">

              <div className="w-[280px] h-[560px] rounded-[50px] bg-white shadow-2xl animate-float z-20"></div>

              <div className="absolute right-0 top-20 w-[260px] h-[520px] rounded-[50px] bg-white shadow-xl animate-float-slow"></div>

            </div>

          </div>

        </div>
      </section>

      {/* TESTIMONIALS */}

      <section className="py-24 bg-gradient-to-r from-[#00247D] via-[#4a146c] to-[#d9044f] overflow-hidden">

        <h2 className="text-center text-white text-6xl font-bold mb-16">
          We Win When You Do
        </h2>

        <div className="flex gap-8 animate-scroll">

          {[...testimonials, ...testimonials].map((item, index) => (
            <div
              key={index}
              className="min-w-[380px] bg-white rounded-3xl p-8"
            >
              <div className="w-40 h-14 bg-gray-100 rounded-xl mb-8"></div>

              <p className="text-[#00247D] text-xl leading-relaxed">
                {item.text}
              </p>

              <div className="mt-10">
                <h4 className="font-bold text-2xl text-[#00247D]">
                  {item.name}
                </h4>

                <p>{item.company}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MORE SOLUTIONS */}

      <section className="bg-[#f5f7fb] py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-center text-6xl font-bold mb-20">
            <span className="text-[#00247D]">
              More Solutions Related to
            </span>
            <br />
            <span className="text-[#d9044f]">
              eCommerce Shipping
            </span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div className="space-y-10">

              {[
                "B2B Cargo Shipping",
                "Storage & Fulfillment",
                "Value-Added Services",
              ].map((item) => (
                <div key={item}>
                  <h3 className="text-4xl font-bold text-[#00247D]">
                    {item}
                  </h3>

                  <p className="text-xl mt-3 text-gray-600">
                    Add description here
                  </p>

                  <button className="mt-4 text-[#d9044f] font-bold">
                    Explore →
                  </button>
                </div>
              ))}

            </div>

            <div className="relative">
              <div className="h-[420px] rounded-[40px] bg-white shadow-xl"></div>
            </div>

          </div>

        </div>

      </section>

      {/* BLOGS */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-center text-6xl font-bold mb-4">
            <span className="text-[#00247D]">
              Dive Deeper into
            </span>{" "}
            <span className="text-[#d9044f]">
              eCommerce Logistics
            </span>
          </h2>

          <p className="text-center text-xl text-[#00247D] mb-16">
            Insights, ideas, and strategies
          </p>

          <div className="grid lg:grid-cols-3 gap-8">

            {blogs.map((blog) => (
              <div key={blog.title}>

                <div className="h-64 rounded-3xl bg-gradient-to-r from-[#5b1cff] to-[#d9044f]"></div>

                <p className="mt-6 text-gray-500">
                  {blog.category}
                </p>

                <h3 className="text-3xl font-bold text-[#00247D] mt-2">
                  {blog.title}
                </h3>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="bg-[#f5f7fb] rounded-[40px] p-12">

            <div className="grid lg:grid-cols-2 gap-16 items-center">

              <div>

                <h2 className="text-6xl font-bold leading-tight">
                  <span className="text-[#00247D]">
                    Ready to
                  </span>{" "}
                  <span className="text-[#d9044f]">
                    Deliver Excellence?
                  </span>
                </h2>

                <p className="text-xl mt-8 text-[#00247D]">
                  Scale faster with smarter shipping.
                </p>

                <button className="mt-10 bg-[#d9044f] text-white px-10 py-4 rounded-full text-xl font-semibold hover:scale-105 transition">
                  Sign Up
                </button>

              </div>

              <div>
                <div className="h-[350px] bg-white rounded-3xl shadow"></div>
              </div>

            </div>

          </div>

        </div>

      </section>
    </>
  );
};

export default NimbusSections;