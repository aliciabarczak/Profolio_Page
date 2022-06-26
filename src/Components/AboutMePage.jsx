import "./../Styling/AboutMe.css";
import "./../Styling/ScrollButton.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function AboutMePage() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div id="AboutMePage">
        <header>
          <h1 className="decorated">
            <span>About me</span>
          </h1>
        </header>
        <section className="timeline">
          <div className="container left">
            <div className="content" data-aos="fade-right">
              <h2>2017</h2>
              <p>
                Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
                quis iuvaret expetendis his, te elit voluptua dignissim per,
                habeo iusto primis ea eam.
              </p>
            </div>
          </div>
          <div className="container right">
            <div className="content" data-aos="fade-right">
              <h2>2016</h2>
              <p>
                Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
                quis iuvaret expetendis his, te elit voluptua dignissim per,
                habeo iusto primis ea eam.
              </p>
            </div>
          </div>
          <div className="container left">
            <div className="content" data-aos="fade-right">
              <h2>2015</h2>
              <p>
                Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
                quis iuvaret expetendis his, te elit voluptua dignissim per,
                habeo iusto primis ea eam.
              </p>
            </div>
          </div>
          <div className="container right">
            <div className="content" data-aos="fade-right">
              <h2>2012</h2>
              <p>
                Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
                quis iuvaret expetendis his, te elit voluptua dignissim per,
                habeo iusto primis ea eam.
              </p>
            </div>
          </div>
          <div className="container left">
            <div className="content" data-aos="fade-right">
              <h2>2011</h2>
              <p>
                Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
                quis iuvaret expetendis his, te elit voluptua dignissim per,
                habeo iusto primis ea eam.
              </p>
            </div>
          </div>
          <div className="container right">
            <div className="content" data-aos="fade-right">
              <h2>2007</h2>
              <p>
                Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
                quis iuvaret expetendis his, te elit voluptua dignissim per,
                habeo iusto primis ea eam.
              </p>
            </div>
          </div>
        </section>
      </div>
      <div id="scrollButton2" className="ScrollButtons">
        <a href="#ProjectsPage">
          <span></span>
        </a>
      </div>
    </>
  );
}
