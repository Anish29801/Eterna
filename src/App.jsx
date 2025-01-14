import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar.jsx"
import Main from "./components/main.jsx"
import AboutUs from "./components/AboutUs.jsx"
import Events from "./components/Events.jsx"
import BuyTicket from "./components/BuyTicket.jsx";
import Exhibits from "./components/exhibits.jsx";
import Footer from "./components/footer.jsx"

const App = () => {
  return (
    <div className="font-kumbh-sans">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/tickets" element={<BuyTicket />} />
        <Route path="/exhibits" element={<Exhibits />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
