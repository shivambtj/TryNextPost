const ChannelsSection = () => {
  return (
    <section className="bg-gradient-to-r from-[#5A145D] to-[#E01357] py-24">
      <div className="max-w-7xl mx-auto px-8">

        <div className="grid md:grid-cols-2 gap-20 items-center">

          {/* LEFT SIDE */}
          <div className="flex justify-center">

            <div className="relative w-[500px] h-[500px]">

              {/* Circles */}
              <div className="absolute inset-0 rounded-full bg-white/10"></div>

              <div className="absolute inset-[40px] rounded-full bg-white/15"></div>

              <div className="absolute inset-[80px] rounded-full bg-white/20"></div>

              <div className="absolute inset-[120px] rounded-full bg-white/30"></div>

              {/* Center Circle */}
              <div className="absolute inset-[170px] rounded-full bg-white flex items-center justify-center">
                <span className="text-5xl">⚙️</span>
              </div>

              {/* Floating Logos */}

              <div className="absolute top-20 left-28 w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl">
                🛒
              </div>

              <div className="absolute top-24 right-24 w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl">
                🛍️
              </div>

              <div className="absolute left-10 top-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center text-xl font-bold">
                Woo
              </div>

              <div className="absolute right-8 top-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center text-3xl font-bold">
                a
              </div>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl">
                ⬆️
              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div>

            <h2 className="text-white text-6xl font-bold leading-tight">
              12+ Channels,
              <br />
              Zero Tabs to Toggle
            </h2>

            <p className="text-white text-xl mt-8 max-w-xl leading-relaxed">
              Have one command center for all your orders —
              lesser the juggle, lesser the trouble.
            </p>

            {/* Logo Cards */}
            <div className="overflow-hidden mt-10">
  <div className="flex animate-marquee gap-6 w-max">

    {/* Set 1 */}
    <div className="w-24 h-24 bg-[#8B215F] rounded-xl flex items-center justify-center text-4xl text-white">
      a
    </div>

    <div className="w-24 h-24 bg-[#8B215F] rounded-xl flex items-center justify-center text-2xl text-white">
      Woo
    </div>

    <div className="w-24 h-24 bg-[#8B215F] rounded-xl flex items-center justify-center text-4xl">
      🛍️
    </div>

    <div className="w-24 h-24 bg-[#8B215F] rounded-xl flex items-center justify-center text-4xl">
      ⬆️
    </div>

    {/* Duplicate for infinite effect */}

    <div className="w-24 h-24 bg-[#8B215F] rounded-xl flex items-center justify-center text-4xl text-white">
      a
    </div>

    <div className="w-24 h-24 bg-[#8B215F] rounded-xl flex items-center justify-center text-2xl text-white">
      Woo
    </div>

    <div className="w-24 h-24 bg-[#8B215F] rounded-xl flex items-center justify-center text-4xl">
      🛍️
    </div>

    <div className="w-24 h-24 bg-[#8B215F] rounded-xl flex items-center justify-center text-4xl">
      ⬆️
    </div>

  </div>
</div>

            <button className="mt-10 bg-[#E4004F] hover:bg-[#c70045] text-white px-10 py-4 rounded-full text-lg font-semibold">
              Know More
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ChannelsSection;