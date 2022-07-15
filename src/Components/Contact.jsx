import "./../Styling/Contact.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function Contact() {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <>
      <div id="ContactPage">
        <header>
          <h1 class="decorated">
            <span>Contact</span>
          </h1>
        </header>
        <div className="contactBox">
          <img
            data-aos="zoom-in"
            src="https://i.ibb.co/Wkxjfd7/linkedin-6-48.png"
          />
          <p data-aos="fade-right">Alicia Barczak</p>
        </div>
        <div className="contactBox">
          <img
            data-aos="zoom-in"
            src="https://i.ibb.co/z2QSFmT/github-10-48.png"
          />
          <p data-aos="fade-right">aliciabarczak</p>
        </div>
        <div className="contactBox">
          <img
            data-aos="zoom-in"
            src="https://i.ibb.co/Lpfkcs8/email-14-48.png"
          />
          <p data-aos="fade-right" className="email">
            aliciabarczak1@gmail.com
          </p>
        </div>
        <div className="contactBox">
          <img
            data-aos="zoom-in"
            src="https://i.ibb.co/6R4MnVW/document-2-48.png"
          />
          <div className="button_slide slide_left" id="CVBtn">
            <a href="/Resources/test.pdf" download="CV">
              <span data-aos="zoom-in">Download my CV</span>
            </a>
            <br /> <br />
            <br />
          </div>
        </div>
      </div>
      <div id="back-to-top" className="BackScrollButton">
        <a href="#homepage">
          <span></span>
        </a>
      </div>
    </>
  );
}
