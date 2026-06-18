const MovePackages = () => {
  return (
    <section className="bg-[#f5f6fa] py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold text-[#d9044f]">
            Move Packages
          </h2>

          <h3 className="text-5xl font-bold text-[#00247d] mt-2">
            Without Having to Move Mountains
          </h3>

          <p className="mt-2 text-xl font-medium text-[#00247d]">
            95%+ assured pickups & deliveries, minus the operational headaches
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-6">

          {/* LEFT CARD */}
          <div className="bg-white rounded-3xl p-8 relative overflow-hidden min-h-[500px]">

            {/* Concentric circles */}
            <div className="absolute left-8 top-12">
              <div className="w-72 h-72 rounded-full bg-slate-100 flex items-center justify-center">
                <div className="w-56 h-56 rounded-full bg-slate-200 flex items-center justify-center">
                  <div className="w-40 h-40 rounded-full bg-slate-300 flex items-center justify-center">
                    <div className="text-4xl">⚙️</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating logos */}
            <div className="absolute left-16 top-16 bg-white p-3 rounded-xl shadow-lg animate-bounce">
              🛒
            </div>

            <div className="absolute left-64 top-28 bg-white p-3 rounded-xl shadow-lg animate-pulse">
              🟢
            </div>

            <div className="absolute left-14 top-52 bg-white p-3 rounded-xl shadow-lg animate-pulse">
              🅰️
            </div>

            <div className="absolute left-60 bottom-14 bg-white p-3 rounded-xl shadow-lg animate-bounce">
              ⬆️
            </div>

            {/* Person */}
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43"
              alt=""
              className="absolute bottom-0 right-8 h-[380px] object-cover"
            />
          </div>

          {/* RIGHT CARD */}
          <div className="bg-white rounded-3xl p-8 relative overflow-hidden min-h-[500px]">

            {/* Tracking Icon */}
            <div className="absolute top-12 left-12 w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center text-5xl">
              📦
            </div>

            {/* Whatsapp Card */}
            <div className="absolute left-6 top-44 bg-green-50 rounded-xl shadow-lg p-4 w-64">
              <div className="font-bold text-green-700">
                WhatsApp Update
              </div>

              <p className="text-sm mt-2">
                Hey your order is out for delivery 🚚
              </p>

              <button className="mt-3 text-green-700 font-semibold">
                TRACK NOW
              </button>
            </div>

            {/* Order Details */}
            <div className="absolute right-6 top-10 bg-white shadow-lg rounded-xl p-5 w-64">
              <h4 className="font-bold mb-4">
                Order Details
              </h4>

              <div className="space-y-2 text-sm text-gray-600">
                <p>Order ID: AO12345</p>
                <p>Order Date: 18 June</p>
                <p>Buyer: Mohit</p>
                <p>Phone: +91 9876543210</p>
                <p>Cost: ₹2599</p>
              </div>

              <div className="mt-3 inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
                PREPAID
              </div>
            </div>

            {/* Customer */}
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
              alt=""
              className="absolute bottom-0 right-10 h-[280px] object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default MovePackages;