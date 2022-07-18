import "./../Styling/Contact.css";
import "./../Styling/AboutMe.css";
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
          <h1 className="decorated title" id="contact-title">
            <span></span>
          </h1>
        </header>
        <div className="contactBox">
          <img
            data-aos="zoom-in"
            src="https://i.ibb.co/Wkxjfd7/linkedin-6-48.png"
          />
          <p data-aos="fade-right">
            <a
              href="https://www.linkedin.com/in/alicia-barczak"
              className="default2"
              target="_blank">
              Click to connect!
            </a>
          </p>
        </div>
        <div className="contactBox">
          <img
            data-aos="zoom-in"
            src="https://i.ibb.co/z2QSFmT/github-10-48.png"
          />
          <p data-aos="fade-right">
            {" "}
            <a
              href="https://github.com/aliciabarczak"
              className="default2"
              target="_blank">
              aliciabarczak
            </a>
          </p>
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
        <div className="contactBox" id="CV-Download">
          <img
            data-aos="zoom-in"
            src="https://i.ibb.co/6R4MnVW/document-2-48.png"
          />
          <div className="button_slide slide_left" id="CVBtn">
            <a
              href="https://drive.google.com/u/0/uc?id=1B1KWfDZQjlXM7b5dvkmXuOizsgaqRfzZ&export=download"
              download="CV">
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
