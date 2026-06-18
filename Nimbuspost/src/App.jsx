import { Route, Routes } from "react-router-dom";
import SameDay from "./Pages/SameDay";

import Home from "./Pages/Home";
import DomesticShipping from "./Pages/DomesticShipping";
import Navbar from "./Component/Navbar";
import Features from "./Pages/Features";
import NDM from "./Pages/NDM";
import All from "./Pages/All";
import COD from "./Pages/COD";
import BB from "./Pages/BB";
import Warehouse from "./Pages/Warehouse";
import Footer from "./Component/DomesticShipping/Footer";

function App() {
  return (
    <>
     <Navbar />
     
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/solutions/b2c/domestic-shipping"
          element={<DomesticShipping />}
        />
        <Route
          path="/solutions/b2c/Same-Day-Delivery"
          element={<SameDay />}
        />
        <Route
          path="/solutions/b2b"
          element={<BB />}
        />
        <Route
          path="/solutions/warehousing"
          element={<Warehouse />}
        />
         <Route
          path="/solutions/Features/Branded-Tracking-Page"
          element={<Features />}
        />
        <Route
          path="/solutions/Features/NDR-Management"
          element={<NDM />}
        />
        <Route
          path="/solutions/Features/Early-COD-Remmittance"
          element={<COD />}
        />
        <Route
          path="/solutions/Features/All-Features"
          element={<All />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;