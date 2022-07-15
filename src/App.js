import "./Styling/App.css";
import Footer from "./Components/Footer";
import AboutMePage from "./Components/AboutMePage";
import Homepage from "./Components/Homepage";
import Projects from "./Components/Projects";
import Blogs from "./Components/Blogs";
import Contact from "./Components/Contact";
import BurgerNav from "./Components/BurgerNav.jsx";
import { useState } from "react";
import useScreenSize from "./Hooks/useScreenSize";
import Nav from "./Components/Nav";

function App() {
  const [sidebar, setSidebar] = useState(false);
  const [videoPlay, setVideoPlay] = useState(false);
  const { desktopView, width } = useScreenSize();
  return (
    <div className="App">
      {width > 1000 ? <Nav /> : null}
      <main>
        {width < 1000 ? (
          <BurgerNav sidebar={sidebar} setSidebar={setSidebar} />
        ) : null}
        <section id="homepage" className={sidebar ? "blur" : ""}>
          <Homepage />
        </section>
        <section id="about">
          <AboutMePage />
        </section>
        <section id="experience">
          <Projects videoPlay={videoPlay} setVideoPlay={setVideoPlay} />
        </section>
        {/* <section id="blogs">
          <Blogs />
        </section> */}
        <section id="contact">
          <Contact />
        </section>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
