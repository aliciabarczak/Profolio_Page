import "./Styling/App.css";
import Footer from "./Components/Footer";
import AboutMePage from "./Components/AboutMePage";
import Homepage from "./Components/Homepage";
import Projects from "./Components/Projects";
import Blogs from "./Components/Blogs";
import Contact from "./Components/Contact";
import BurgerNav from "./Components/BurgerNav.jsx";
import { useState } from "react";

function App() {
  const [sidebar, setSidebar] = useState(false);
  return (
    <div className="App">
      <main>
        <BurgerNav sidebar={sidebar} setSidebar={setSidebar} />
        <section id="homepage" className={sidebar ? "blur" : ""}>
          <Homepage />
        </section>
        <section id="about">
          <AboutMePage />
        </section>
        <section id="experience">
          <Projects />
        </section>
        <section id="blogs">
          <Blogs />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
