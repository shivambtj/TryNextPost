const EcommerceFeatures = () => {
  return (
    <section className="bg-[#f5f6f8] py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-8">

          {/* Card 1 */}
          <div className="bg-[#eef1f4] rounded-[30px] overflow-hidden group hover:shadow-xl transition-all duration-500">

            <div className="relative h-[420px] flex items-center justify-center">

              {/* Courier Cards */}
              <div className="absolute top-10 left-10 grid grid-cols-2 gap-3">

                <div className="bg-white px-5 py-3 rounded-lg shadow">
                  XPRESSBEES
                </div>

                <div className="bg-white px-5 py-3 rounded-lg shadow">
                  BLUEDART
                </div>

                <div className="bg-white px-5 py-3 rounded-lg shadow">
                  DELHIVERY
                </div>

                <div className="bg-white px-5 py-3 rounded-lg shadow">
                  SHADOWFAX
                </div>

              </div>

              {/* Laptop */}
              <div className="absolute bottom-12 left-14 w-[250px] h-[150px] bg-white rounded-xl shadow-2xl rotate-[-8deg] group-hover:rotate-[-12deg] transition-all duration-700">
              </div>

              {/* Person */}
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800"
                alt=""
                className="h-[320px] object-contain z-10"
              />

            </div>

            <div className="bg-[#dfe4e9] p-10">
              <h2 className="text-[#00247D] text-5xl font-bold mb-4">
                Play it Smart
              </h2>

              <p className="text-[#00247D] text-2xl leading-relaxed">
                AI-backed courier allocation so your shipments don't slow
                down or cost more than they should
              </p>
            </div>

          </div>

          {/* Card 2 */}
          <div className="bg-[#eef1f4] rounded-[30px] overflow-hidden group hover:shadow-xl transition-all duration-500">

            <div className="relative h-[420px] flex items-center justify-center">

              {/* Mobile Mockup */}
              <div className="absolute top-8 left-16 w-[200px] h-[360px] bg-white rounded-[30px] shadow-xl overflow-hidden">

                <div className="bg-[#d9044f] h-28 m-4 rounded-xl"></div>

                <div className="space-y-3 px-4">
                  <div className="bg-gray-100 h-6 rounded"></div>
                  <div className="bg-gray-100 h-6 rounded"></div>
                  <div className="bg-gray-100 h-6 rounded"></div>
                  <div className="bg-gray-100 h-6 rounded"></div>
                </div>

              </div>

              {/* Person */}
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800"
                alt=""
                className="h-[320px] object-contain absolute bottom-0 right-10 z-10"
              />

              {/* Floating Badge */}
              <div className="absolute top-20 right-10 bg-white px-5 py-3 rounded-xl shadow-lg animate-bounce">
                📦 Pickup Done
              </div>

              {/* Plant */}
              <div className="absolute bottom-6 right-0 text-8xl">
                🌿
              </div>

            </div>

            <div className="bg-[#dfe4e9] p-10">
              <h2 className="text-[#00247D] text-5xl font-bold mb-4">
                Keep it Simple
              </h2>

              <p className="text-[#00247D] text-2xl leading-relaxed">
                Handle eCommerce deliveries anytime and anywhere —
                even through a mobile app
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default EcommerceFeatures;