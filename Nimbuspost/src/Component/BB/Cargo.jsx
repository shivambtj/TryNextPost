import BrandSection from "./BrandSection";

import { motion } from "framer-motion";

const logos = [
  "/images/logo1.webp",
  "/images/logo2.webp",
  "/images/logo3.webp",
  "/images/logo4.webp",
  "/images/logo5.webp",
  "/images/logo6.webp",
  "/images/logo7.webp",
  "/images/logo8.webp",
];

const features = [
  {
    title: "Compliance-Ready Deliveries",
    desc: "Meet distribution hub requirements with fully compliant operations.",
    image: "/images/compliance.webp",
    reverse: false,
  },
  {
    title: "Surface & Air Cargo Options",
    desc: "Pick the shipping mode that best fits your cost and speed priorities.",
    image: "/images/air-cargo.webp",
    reverse: true,
  },
  {
    title: "Monitor Performance Easily",
    desc: "Track delivery timelines, partner efficiency, and key trends in real time.",
    image: "/images/dashboard.webp",
    reverse: false,
  },
  {
    title: "White-Label Tracking Page",
    desc: "Create your own custom tracking page to drive better brand recall.",
    image: "/images/tracking.webp",
    reverse: true,
  },
];

const benefits = [
  {
    title: "Dedicated KAM",
    desc: "Have a single point of contact to manage all cargo requirements.",
    image: "/images/kam.webp",
  },
  {
    title: "ODA Reach up to 300 Km",
    desc: "Deliver to remote locations without service gaps.",
    image: "/images/oda.webp",
  },
  {
    title: "Instant POD",
    desc: "Get proof of delivery immediately.",
    image: "/images/pod.webp",
  },
  {
    title: "Cargo Insurance",
    desc: "Safeguard valuable consignments.",
    image: "/images/insurance.webp",
  },
];

export default function PTLCargoPage() {
  return (
    <div className="bg-[#f6f7fb] overflow-hidden">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Ship Heavy &{" "}
              <span className="text-pink-600">Bulk Cargo</span>
              <br />
              <span className="text-pink-600">
                with Confidence
              </span>
            </h1>

            <p className="mt-8 text-xl text-slate-600">
              From high-volume shipments to heavy consignments,
              we ensure fast, reliable, and stress-free cargo
              shipping at scale.
            </p>

            <div className="mt-8 flex gap-4 flex-wrap">
              <button className="bg-white text-pink-600 px-8 py-4 rounded-full shadow">
                Starts at just ₹6/kg*
              </button>

              <button className="bg-pink-600 text-white px-8 py-4 rounded-full">
                Start Shipping
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="h-[500px] rounded-3xl bg-gray-200"
          >
            <img
              src="/images/hero.webp"
              alt=""
              className="w-full h-full object-cover rounded-3xl"
            />
          </motion.div>

        </div>
      </section>

      {/* BRANDS */}
      <BrandSection />
      {/* EFFICIENT OPERATIONS */}
      <section className="max-w-7xl mx-auto py-24 px-6">
        <h2 className="text-center text-6xl font-bold mb-16">
          <span className="text-pink-600">
            Efficient Operations
          </span>{" "}
          Every Day
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
    title: "Appointment-Based Delivery",
    description:
      "Book exact delivery slots to ensure on-time handovers and avoid missed deliveries.",
    image: "/images/appointment.webp",
  },
  {
    title: "Multi-Packet AWB",
    description:
      "Ship multiple parcels under a single airway bill to cut paperwork, reduce errors, and speed up dispatches.",
    image: "/images/awb.webp",
  },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg"
            >
              <img src={item.image} alt="" />

              <div className="p-8">
                <h3 className="text-4xl font-bold text-[#031f73]">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-gradient-to-r from-[#031f73] to-pink-700 py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-center text-white text-6xl font-bold mb-16">
            Designed for Heavy Lifting
          </h2>

          <div className="grid lg:grid-cols-4 gap-8">
            {benefits.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-3xl p-6"
              >
                <h3 className="text-3xl font-bold text-[#031f73]">
                  {item.title}
                </h3>

                <p className="mt-4 text-slate-600">
                  {item.desc}
                </p>

                <img
                  src={item.image}
                  alt=""
                  className="rounded-2xl mt-8"
                />
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* FEATURES */}
      {features.map((item, index) => (
        <section
          key={index}
          className="max-w-7xl mx-auto py-24 px-6"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {item.reverse ? (
              <>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <h2 className="text-5xl font-bold text-[#031f73]">
                    {item.title}
                  </h2>

                  <p className="mt-6 text-xl text-slate-600">
                    {item.desc}
                  </p>
                </motion.div>

                <motion.img
                  src={item.image}
                  alt=""
                  className="rounded-3xl"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                />
              </>
            ) : (
              <>
                <motion.img
                  src={item.image}
                  alt=""
                  className="rounded-3xl"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                />

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <h2 className="text-5xl font-bold text-[#031f73]">
                    {item.title}
                  </h2>

                  <p className="mt-6 text-xl text-slate-600">
                    {item.desc}
                  </p>
                </motion.div>
              </>
            )}

          </div>
        </section>
      ))}

    </div>
  );
}