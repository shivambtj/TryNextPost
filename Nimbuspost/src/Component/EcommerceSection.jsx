const EcommerceSection = () => {
  return (
    <section className="bg-[#f7f7f7] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-5xl font-bold text-[#00247D]">
            Fast & Friction-Free
          </h2>

          <h2 className="text-5xl font-bold text-pink-600">
            eCommerce Deliveries
          </h2>

          <p className="mt-3 text-xl text-[#00247D]">
            Timely pickups. Fairer weights. Faster deliveries.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left Image */}
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=900"
              alt="ecommerce"
              className="w-full max-w-[550px] rounded-2xl"
            />
          </div>

          {/* Right Content */}
          <div>
            <h3 className="text-2xl font-bold text-[#00247D] leading-tight">
              Simpler, Smarter Workflows
            </h3>

            <p className="mt-4 text-xl text-[#00247D] leading-relaxed">
              Create shipments within minutes, auto-generate labels,
              and allocate the best-performing courier using AI.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EcommerceSection;