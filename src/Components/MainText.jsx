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
      <h1 id="Junior-txt"> I‘m a junior front-end </h1>
      <h1 id="SD-txt">Software Developer.</h1>
      <h2 id="description-txt">
        Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum
        perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret
        expetendis his.
      </h2>
    </header>
  );
}
