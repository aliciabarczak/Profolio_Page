import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function () {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <header id="mainText" data-aos="fade-right">
      <h1 id="Hello-txt">Hello.</h1>
      <h1 id="Junior-txt"> I‘m a junior </h1>
      <h1 id="SD-txt">Software Developer.</h1>
      <h2 id="description-txt">
        I used to work with law but now I work with code. I am an adopted
        Mancunian with a passion for tech, diversity and innovation.
      </h2>
    </header>
  );
}
