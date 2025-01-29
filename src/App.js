import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Newsletter from "./components/Newsletter";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";


function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Newsletter/>
      <Projects/>
      <Contacts/>
    </div>
  );
}

export default App;
