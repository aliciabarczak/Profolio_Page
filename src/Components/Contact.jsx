import "./../Styling/Contact.css"
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function Contact() {
    useEffect(() => {
        Aos.init({ duration: 500 });
      }, []);
    return (<div id="ContactPage">
         <header>
        <h1 class="decorated">
          <span>Get in touch</span>
        </h1>
      </header>
        <div className="contactBox">
        <img data-aos="zoom-in" src="https://i.ibb.co/4KM38Bk/linkedin-3-128.png"/>
        <p data-aos="fade-right">Alicia Barczak</p>
        </div>
        <div className="contactBox">
        <img data-aos="zoom-in" src="https://i.ibb.co/XJq5vb6/github-11-128.png"/>
        <p data-aos="fade-right">aliciabarczak</p>
        </div>
        <div className="contactBox">
        <img data-aos="zoom-in" src="https://i.ibb.co/z4G8Bcq/email-14-128.png"/>
        <p data-aos="fade-right">aliciabarczak1@gmail.com</p>
        </div>
        <div className="CVButton">
        <div className="button_slide slide_left" id="CVBtn">
          <p data-aos="zoom-in">Download my CV</p>
          <br /> <br />
          <br />
        </div>
      </div>
    </div>)
}

