import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#001D72] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Column 1 */}
          <div>
            <img
              src="/logo.png"
              alt="logo"
              className="h-12 mb-6"
            />

            <p className="text-gray-200 leading-relaxed text-[17px]">
              NimbusPost is a leading eCommerce logistics enabler for
              India’s new-age online businesses. Offering easy-to-use
              and scalable logistics and fulfillment solutions.
            </p>

            <h3 className="text-3xl font-bold mt-10 mb-5">
              Follow Us
            </h3>

            <div className="flex items-center gap-5 text-2xl">
              <FaFacebook className="hover:text-pink-500 cursor-pointer transition" />
              <FaXTwitter className="hover:text-pink-500 cursor-pointer transition" />
              <FaYoutube className="hover:text-pink-500 cursor-pointer transition" />
              <FaInstagram className="hover:text-pink-500 cursor-pointer transition" />
              <FaLinkedin className="hover:text-pink-500 cursor-pointer transition" />
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-4xl font-bold mb-6">
              Services
            </h3>

            <ul className="space-y-2 text-lg text-gray-200">
              <li className="hover:text-white cursor-pointer">
                Domestic Shipping
              </li>

              <li className="hover:text-white cursor-pointer">
                Warehouse & Fulfillment
              </li>
            </ul>

            <h3 className="text-4xl font-bold mt-12 mb-6">
              Quick Links
            </h3>

            <ul className="space-y-2 text-lg text-gray-200">
              <li>About Us</li>
              <li>Media</li>
              <li>Blogs</li>
              <li>Contact Us</li>
              <li>Careers</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-4xl font-bold mb-6">
              Features
            </h3>

            <ul className="space-y-2 text-lg text-gray-200">
              <li>Branded Tracking Page</li>
              <li>NDR Management</li>
              <li>Early Payout</li>
              <li>COD Order Confirmation</li>
              <li>Serviceable Pin Codes</li>
              <li>Multiple Pickup Locations</li>
              <li>Print Shipping Labels</li>
              <li>Email & SMS Notifications</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-4xl font-bold mb-6">
              Contact Us
            </h3>

            <div className="flex gap-4 mb-8">
              <FaMapMarkerAlt className="text-pink-500 text-2xl mt-1" />

              <p className="text-lg text-gray-200 leading-relaxed">
                8th Floor, Splendor Spectrum One,
                Golf Course Ext Rd, Sector 58,
                Gurugram, Haryana 122011
              </p>
            </div>

            <div className="flex gap-4 mb-10">
              <FaEnvelope className="text-purple-400 text-2xl mt-1" />

              <p className="text-lg text-gray-200">
                care@nimbuspost.com
              </p>
            </div>

            <h3 className="text-4xl font-bold mb-6">
              Download App
            </h3>

            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-black px-5 py-3 rounded-lg font-semibold">
                Google Play
              </button>

              <button className="bg-white text-black px-5 py-3 rounded-lg font-semibold">
                App Store
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-5">

            <p className="text-gray-300">
              © 2026 NimbusPost. All rights reserved.
            </p>

            <div className="flex gap-8 text-gray-300">
              <a href="#">Terms and Conditions</a>
              <a href="#">Privacy Policy</a>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;