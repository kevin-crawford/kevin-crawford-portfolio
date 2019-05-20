import React from "react";
import "./styles/app.css";

// Components
import Navigation from "./components/Navigation";
import Splash from "./components/Splash";
import About from "./components/About";
import Projects from "./components/Projects";
import Volunteer from "./components/VolunteerWork";

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <Splash />
        <About />
        <Projects />
        <Volunteer />
      </main>
    </div>
  );
}

export default App;
