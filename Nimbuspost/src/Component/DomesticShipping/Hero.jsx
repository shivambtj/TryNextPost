const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-gray-50 to-purple-50 min-h-screen flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 py-20 w-full">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <div>

            <h1 className="text-4xl font-extrabold leading-tight">
              <span className="text-[#00247D]">
                eCommerce Shipping for
              </span>

              <br />

              <span className="text-[#D9044F]">
                Fast-Growing Businesses
              </span>
            </h1>

            <p className="mt-6 text-xl text-[#00247D] max-w-xl leading-relaxed">
              Intelligent eCommerce shipping technology,
              made to match your momentum — from first
              order to full scale.
            </p>

            <div className="mt-10 inline-block bg-white rounded-2xl px-4 py-2 shadow-lg">
              <span className="text-xl  text-[#D9044F]">
                Starts at just₹19/500g*
              </span>
            </div>

            <div>
              <button className="mt-6 bg-[#D9044F] hover:bg-pink-700 text-white px-4 py-2 rounded-full text-xl font-semibold transition">
                Try for FREE
              </button>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="relative flex justify-center">

            {/* Dashboard Card */}
            <div className="absolute top-0 left-8 bg-white rounded-2xl shadow-xl p-4 w-52 animate-bounce">
              <div className="h-2 bg-gray-200 rounded mb-3"></div>
              <div className="h-2 bg-gray-200 rounded w-3/4 mb-4"></div>

              <div className="flex items-end gap-2 h-20">
                <div className="bg-green-400 w-4 h-10 rounded"></div>
                <div className="bg-green-500 w-4 h-16 rounded"></div>
                <div className="bg-green-600 w-4 h-12 rounded"></div>
                <div className="bg-green-700 w-4 h-20 rounded"></div>
              </div>
            </div>

            {/* Success Card */}
            <div className="absolute top-10 right-0 bg-white rounded-2xl shadow-xl p-4 w-56 animate-pulse">
              <h3 className="font-bold text-[#00247D]">
                Delivery Success Rate
              </h3>

              <div className="flex justify-center mt-4">
                <div className="w-24 h-24 rounded-full border-[10px] border-green-500 flex items-center justify-center">
                  <span className="font-bold text-green-600">
                    95%+
                  </span>
                </div>
              </div>
            </div>

            {/* Main Person Image */}
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900"
              alt="seller"
              className="w-[500px] rounded-3xl shadow-2xl"
            />

            {/* Lower RTO Badge */}
            <div className="absolute bottom-40 left-0 bg-white px-5 py-3 rounded-xl shadow-lg">
              <p className="font-semibold text-[#00247D]">
                Up to 30% Lower RTO
              </p>
            </div>

            {/* Shipping Badge */}
            <div className="absolute bottom-56 right-0 bg-white px-5 py-3 rounded-xl shadow-lg">
              <p className="font-semibold text-[#00247D]">
                Same Day Delivery
              </p>
            </div>

            {/* Product Boxes */}
            <div className="absolute bottom-0 right-0 flex gap-3">
              <div className="w-24 h-24 bg-amber-200 rounded-lg shadow-md"></div>
              <div className="w-28 h-28 bg-amber-300 rounded-lg shadow-md"></div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;