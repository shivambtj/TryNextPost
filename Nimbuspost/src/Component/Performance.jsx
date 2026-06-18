const PerformanceSection = () => {
  return (
    <section className="bg-[#f7f7f7] py-20">
      <div className="max-w-7xl mx-auto px-8">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left Image */}
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1000"
              alt="Performance"
              className="w-full max-w-[550px] rounded-2xl shadow-lg"
            />
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-[#00247D] text-2xl font-bold leading-tight">
              Performance You Can Trust
            </h2>

            <p className="mt-4 text-[#00247D] text-xl leading-relaxed max-w-xl">
              98%+ successful pickups, 95%+ successful deliveries,
              and weight freezing to reduce disputes.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default PerformanceSection;