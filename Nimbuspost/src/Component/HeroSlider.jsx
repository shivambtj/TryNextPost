import { useState, useEffect } from "react";

const slides = [
  {
    title: "B2B Cargo Shipping",
    highlight: "Loaded with Efficiency",
    description:
      "Move bulky shipments with unmatched reliability — light on your pocket, as well as your mind.",
    price: "Starts at just ₹140/10kg*",
    image:
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=1200",
    button: "Talk to an Expert",
  },
  {
    title: "B2C Shipping Solutions",
    highlight: "Designed to Deliver",
    description:
      "Take your brand to thousands of pin codes with reliable deliveries.",
    price: "Starts at just ₹19/500g*",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200",
    button: "Get Started",
  },
  {
    title: "Warehousing & Fulfillment",
    highlight: "That Helps You Scale",
    description:
      "Storage, processing, packaging and delivery handled by experts.",
    price: "Starts at just ₹16/order*",
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200",
    button: "Explore",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <section className="bg-gradient-to-r from-slate-100 to-purple-100 min-h-[650px] flex items-center">
      <div className="max-w-7xl mx-auto px-8 w-full">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left Content */}
          <div>
            <h1 className="text-6xl font-bold text-blue-950 leading-tight">
              {slides[current].title}
            </h1>

            <h2 className="text-6xl font-bold text-pink-600 mt-2">
              {slides[current].highlight}
            </h2>

            <p className="mt-8 text-xl text-slate-700 max-w-lg">
              {slides[current].description}
            </p>

            <div className="mt-8 inline-block bg-white rounded-xl px-8 py-4 shadow">
              <span className="text-2xl font-semibold text-pink-600">
                {slides[current].price}
              </span>
            </div>

            <div>
              <button className="mt-8 bg-pink-600 hover:bg-pink-700 text-white px-10 py-4 rounded-full text-lg font-semibold">
                {slides[current].button}
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div>
  <img
    src="data:image/jpeg;base64,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"
    alt="Shipping"
    className="w-full max-w-[500px]"
  />
</div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4 mt-10">
          <button
            onClick={prevSlide}
            className="w-12 h-12 bg-white rounded-full shadow"
          >
            ❮
          </button>

          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-1 w-10 rounded-full ${
                current === index
                  ? "bg-green-500"
                  : "bg-gray-300"
              }`}
            />
          ))}

          <button
            onClick={nextSlide}
            className="w-12 h-12 bg-white rounded-full shadow"
          >
            ❯
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;