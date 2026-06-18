const CODPayoutSection = () => {
  return (
    <section className="bg-[#f7f7f7] py-20">
      <div className="max-w-7xl mx-auto px-8">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>
            <h2 className="text-[#00247D] text-2xl font-bold leading-tight">
              Quicker Deliveries & COD Payouts
            </h2>

            <p className="mt-4 text-[#00247D] text-xl leading-relaxed max-w-lg">
              Keep your orders growing with same-day delivery, and your
              cash flowing with early COD payouts.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=1000"
              alt="Delivery"
              className="w-full max-w-[600px] rounded-2xl shadow-lg"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default CODPayoutSection;