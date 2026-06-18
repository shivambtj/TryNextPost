import { useEffect, useState } from "react";

const Counter = ({ end, suffix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const timer = setInterval(() => {
      start += Math.ceil(end / 60);

      if (start >= end) {
        start = end;
        clearInterval(timer);
      }

      setCount(start);
    }, 30);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const CapabilitiesSection = () => {
  return (
    <section className="bg-gradient-to-r from-[#21105A] via-[#54186D] to-[#C3195D] py-24 overflow-hidden">

      <div className="max-w-7xl mx-auto px-8">

        <div className="grid md:grid-cols-2 gap-20 items-center">

          {/* LEFT */}

          <div>
            <h1 className="text-white text-4xl font-bold leading-tight">
              Turning Capabilities
              <br />
              into Possibilities
            </h1>

            <div className="flex items-center gap-4 mt-10">

              <div className="flex -space-x-3">
                <img
                  src="https://randomuser.me/api/portraits/women/32.jpg"
                  className="w-14 h-14 rounded-full border-4 border-white"
                />
                <img
                  src="https://randomuser.me/api/portraits/women/65.jpg"
                  className="w-14 h-14 rounded-full border-4 border-white"
                />
                <img
                  src="https://randomuser.me/api/portraits/men/21.jpg"
                  className="w-14 h-14 rounded-full border-4 border-white"
                />
              </div>

              <div>
                <h3 className="text-white font-bold text-xl">
                  4.3/5
                </h3>

                <div className="text-yellow-400">
                  ★★★★★
                </div>

                <p className="text-white/70 text-sm">
                  Based on iOS Rating
                </p>
              </div>

            </div>

            <button className="mt-12 bg-[#E40057] hover:bg-pink-700 transition px-10 py-4 rounded-full text-white font-semibold text-lg">
              Get Started
            </button>
          </div>

          {/* RIGHT */}

          <div className="grid grid-cols-1 gap-6">

            <div className="animate-float bg-gradient-to-br from-[#001F7A] to-[#D0135A] rounded-3xl p-8 shadow-2xl hover:scale-105 transition">

              <div className="text-cyan-400 text-5xl mb-4">
                📦
              </div>

              <h2 className="text-cyan-400 text-5xl font-bold">
                <Counter end={150} suffix="M+" />
              </h2>

              <p className="text-white text-2xl mt-2">
                Shipments
              </p>

            </div>

            <div className="grid grid-cols-2 gap-6">

              <div className="animate-float bg-white/10 backdrop-blur-md rounded-3xl p-6 text-white hover:scale-105 transition">
                <h3 className="text-4xl font-bold text-cyan-300">
                  <Counter end={1} suffix="L+" />
                </h3>

                <p className="mt-2">
                  Happy Clients
                </p>
              </div>

              <div className="animate-float bg-white/10 backdrop-blur-md rounded-3xl p-6 text-white hover:scale-105 transition">
                <h3 className="text-4xl font-bold text-cyan-300">
                  <Counter end={750} suffix="M+" />
                </h3>

                <p className="mt-2">
                  Transactions
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default CapabilitiesSection;