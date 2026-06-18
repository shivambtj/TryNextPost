const PersonalizeSection = () => {
  return (
    <section className="bg-[#f7f7f7] py-20">
      <div className="max-w-7xl mx-auto px-8">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>
            <h2 className="text-[#00247D] text-2xl font-bold leading-tight">
              Power You Can Personalize
            </h2>

            <p className="mt-4 text-[#00247D] text-xl leading-relaxed max-w-lg">
              Access custom data insights, control EDD display,
              join our personalized growth program & more
            </p>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200"
              alt="Analytics Dashboard"
              className="w-full max-w-[600px] rounded-2xl shadow-lg"
            />
          </div>

        </div>

        {/* Button */}
        <div className="flex justify-center mt-20">
          <button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-1 rounded-full text-xl font-semibold transition">
            Explore Solutions
          </button>
        </div>

      </div>
    </section>
  );
};

export default PersonalizeSection;