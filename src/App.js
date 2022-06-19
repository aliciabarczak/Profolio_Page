import "./App.css";
import Image from "./Components/Image";
import MainText from "./Components/MainText";

function App() {
  return (
    <div className="App">
      <Image />
      <MainText />
      <div id="outer">
        <div className="twoSmallBTS">
          <div className="button_slide slide_down" id="see_my_work">
            See my work
          </div>
          <br /> <br />
          <br />
          <div className="button_slide slide_right" id="about_me">
            About me
          </div>
          <br /> <br />
          <br />
        </div>
        <div className="bigBT">
          <div className="button_slide slide_left" id="contact_me">
            <div>Contact me!</div>
            <br /> <br />
            <br />
          </div>
        </div>
      </div>
      <footer>
        <p id="contact_details">Find me on GitHub and LinkedIn</p>
        <p id="CV">Download my CV (PDF size)</p>
      </footer>
    </div>
  );
}

export default App;
