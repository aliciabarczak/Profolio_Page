import "./Styling/App.css";
import Footer from "./Components/Footer";
import AboutMePage from "./Components/AboutMePage";
import Homepage from "./Components/Homepage";
import Nav from "./Components/Nav";
import Projects from "./Components/Projects";
import Blogs from "./Components/Blogs";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      {/* <Nav /> */}
      <main>
        <section id="homepage">
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
