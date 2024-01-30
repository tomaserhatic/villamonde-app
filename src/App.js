import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Carousel from "./components/Gallery";
import Card1 from "./components/Card1";
import Card2 from "./components/Card2";
import "./index.css";

function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <Card1 />
      <Carousel />
      <Card2 />
      <Footer />
    </div>
  );
}
export default App;
