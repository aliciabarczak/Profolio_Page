import "./Styling/App.css";
import Footer from "./Components/Footer";
import AboutMePage from "./Components/AboutMePage";
import Homepage from "./Components/Homepage";
import Nav from "./Components/Nav";

function App() {
  return (
    <div className="App">
      {/* <Nav /> */}
      <main>
        <section id="home">
          <Homepage />
        </section>
        <section id="about">
          <AboutMePage />
        </section>
      </main>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
