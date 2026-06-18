const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-[#f4f5f9] to-[#eef0f9] min-h-screen">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div>
            <h1 className="text-2xl lg:text-4xl font-bold leading-tight">
              <span className="text-[#00247D]">
                eCommerce Shipping for
              </span>
              <br />
              <span className="text-[#D9044F]">
                Fast-Growing Businesses
              </span>
            </h1>

            <p className="mt-8 text-xl text-[#00247D] max-w-xl">
              Intelligent eCommerce shipping technology,
              made to match your momentum — from first
              order to full scale.
            </p>

            <div className="mt-8 inline-block bg-white rounded-2xl px-8 py-4 shadow-sm">
              <span className="text-[#00247D] text-xl">
                Starts at just
              </span>
              <span className="ml-2 text-[#D9044F] text-3xl font-semibold">
                ₹19/500g*
              </span>
            </div>

            <div className="mt-10">
              <button className="bg-[#D9044F] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#c10345] transition">
                Try for FREE
              </button>
            </div>
          </div>

          {/* Right Side Placeholder */}
          <div className="flex justify-center items-center">
            <div className="w-full h-[500px] rounded-3xl border-2 border-dashed border-gray-300 flex items-center justify-center bg-white/50">
              <p className="text-gray-500 text-lg">
                Add Hero Image Here
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;