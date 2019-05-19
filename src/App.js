import React from "react";

// Components
import Navigation from "./components/Navigation";
import Splash from "./components/Splash";
import Projects from "./components/Projects";
import Volunteer from "./components/VolunteerWork";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Splash />
      <Projects />
      <Volunteer />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
