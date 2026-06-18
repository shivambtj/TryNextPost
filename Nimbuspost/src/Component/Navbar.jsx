import { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showSolutions, setShowSolutions] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");

  const solutionRef = useRef(null);
  const featureRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        solutionRef.current &&
        !solutionRef.current.contains(event.target)
      ) {
        setShowSolutions(false);
        setActiveMenu("");
      }

      if (
        featureRef.current &&
        !featureRef.current.contains(event.target)
      ) {
        setShowFeatures(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  return (
    <nav className="bg-white shadow-sm px-8 py-5 flex items-center justify-between">

      {/* Logo */}
      <div>
        <h1 className="text-3xl font-bold text-[#00247D] leading-none">
          Nimbus
          <span className="text-[#D9044F] text-lg block">
            Post
          </span>
        </h1>
      </div>

      {/* Navigation */}
      <div className="hidden md:flex items-center gap-8">

        {/* Solutions */}
        <div className="relative" ref={solutionRef}>
          <button
            onClick={() => {
              setShowSolutions(!showSolutions);
              setShowFeatures(false);
            }}
            className="flex items-center gap-1 text-[#00247D] font-medium"
          >
            Solutions
            <ChevronDown size={16} />
          </button>

          {showSolutions && (
            <div className="absolute top-10 left-0 bg-white shadow-xl rounded-xl w-72 py-3 z-50">

              {/* B2C Shipping */}
              <div
                className="relative px-4 py-2 hover:bg-gray-50 flex justify-between items-center cursor-pointer"
                onMouseEnter={() => setActiveMenu("b2c")}
              >
                B2C Shipping
                <ChevronRight size={16} />

                {activeMenu === "b2c" && (
                  <div className="absolute left-full top-0 ml-2 w-64 bg-white shadow-xl rounded-xl p-3">

                    <Link
                      to="/solutions/b2c/domestic-shipping"
                      className="block p-2 hover:bg-gray-100 rounded"
                    >
                      Domestic Shipping
                    </Link>

                    <Link
                      to="/solutions/b2c/Same-Day-Delivery"
                      className="block p-2 hover:bg-gray-100 rounded"
                    >
                      Same-Day Delivery
                    </Link>

                    <Link
                      to="/solutions/b2c/Next-Day-Delivery"
                      className="block p-2 hover:bg-gray-100 rounded"
                    >
                      Next-Day Delivery
                    </Link>

                    <Link
                      to="/solutions/b2c/RTO-Suite"
                      className="block p-2 hover:bg-gray-100 rounded"
                    >
                      RTO Suite
                    </Link>

                  </div>
                )}
              </div>

              {/* B2B */}
              <Link
                      to="/solutions/b2b"
                      className="block px-4 p-2 hover:bg-gray-100 rounded"
                    >
                     B2B Shipping
                    </Link>

              {/* Warehousing */}
              <Link
                      to="/solutions/warehousing"
                      className="block px-4 p-2 hover:bg-gray-100 rounded"
                    >
                      Warehousing and Fulfillment
                      
                    </Link>

            </div>
          )}
        </div>

        {/* Features */}
        <div className="relative" ref={featureRef}>
          <button
            onClick={() => {
              setShowFeatures(!showFeatures);
              setShowSolutions(false);
            }}
            className="flex items-center gap-1 text-[#00247D] font-medium"
          >
            Features
            <ChevronDown size={16} />
          </button>

          {showFeatures && (
            <div className="absolute top-10 left-0 bg-white shadow-xl rounded-xl w-72 py-3 z-50">

              <Link
                      to="/solutions/Features/Branded-Tracking-Page"
                      className="block px-4 py-2 hover:bg-gray-100 rounded"
                    >
                      Branded Tracking Page
                    </Link>

              <Link
                      to="/solutions/Features/NDR-Management"
                      className="block px-4 py-2 hover:bg-gray-100 rounded"
                    >
                      NDR Management
                    </Link>

              <Link
                      to="/solutions/Features/Early-COD-Remmittance"
                      className="block px-4 py-2 hover:bg-gray-100 rounded"
                    >
                      Early COD Remittance
                    </Link>

              <Link
                      to="/solutions/Features/All-Features"
                      className="block px-4 py-2 hover:bg-gray-100 rounded"
                    >
                      All Features
                    </Link>

            </div>
          )}
        </div>

        <a href="#" className="text-[#00247D] font-medium">
          Partners
        </a>

        <a href="#" className="text-[#00247D] font-medium">
          Pricing
        </a>

        <a href="#" className="text-[#00247D] font-medium">
          Resources
        </a>

        <a href="#" className="text-[#00247D] font-medium">
          Track Order
        </a>
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg">
          Login
        </button>

        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg">
          Sign Up
        </button>
      </div>

    </nav>
  );
};

export default Navbar;