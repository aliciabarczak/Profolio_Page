import "./Styling/App.css";
import Footer from "./Components/Footer";
import AboutMePage from "./Components/AboutMePage";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Components/Homepage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/aboutme" element={<AboutMePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
