import "./../Styling/Projects.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useState } from "react";
export default function () {
  const [selectProject1, setSelectProject1] = useState(true);
  const [selectProject2, setSelectProject2] = useState(false);
  const [selectProject3, setSelectProject3] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <div id="ProjectsPage">
      <header>
        <h1 class="decorated title">
          <span>Profolio</span>
        </h1>
      </header>
      <div id="miniNav">
        <div
          className={selectProject1 ? "miniNavLink default" : "miniNavLink" }
          onMouseEnter={() => setSelectProject1(true)}
          onMouseLeave={() => setSelectProject1(false)}>
          Balance Book
        </div>
        <div
          className="miniNavLink"
          onMouseEnter={() => {setSelectProject1(false); setSelectProject2(true)}}
          onMouseLeave={() => setSelectProject2(false)}>
          NC News
        </div>
        <div
          className="miniNavLink"
          onMouseEnter={() => {setSelectProject1(false); setSelectProject3(true); }}
          onMouseLeave={() => setSelectProject3(false)}>
          React App
        </div>
      </div>
      <div className="projects">
        {selectProject1 ? (
          <div id="Project1">
            <div id="filter"></div>
            <img
              className="fadedImg"
              src="https://i.ibb.co/484Mqv3/Screenshot-2022-06-23-at-15-51-46.png"
            />
            <div
              id="backgroundBox"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom">
              <div class="contents">
                <p>
                  Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                  admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
                  quis iuvaret expetendis his, te elit voluptua dignissim per,
                  habeo iusto primis ea eam. Lorem ipsum dolor sit amet, quo ei
                  simul congue exerci, ad nec admodum perfecto mnesarchum, vim
                  ea mazim fierent detracto. Ea quis iuvaret expetendis his, te
                  elit voluptua dignissim per, habeo iusto primis ea eam. Lorem
                  ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                  admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
                  quis iuvaret expetendis his, te elit voluptua dignissim per,
                </p>
              </div>
            </div>
          </div>
        ) : null}
        {selectProject2 ? (
          <div id="Project2">
            <div id="filter"></div>
            <img
              className="fadedImg"
              src="https://i.ibb.co/484Mqv3/Screenshot-2022-06-23-at-15-51-46.png"
            />
            <div
              id="backgroundBox"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom">
              <div class="contents">
                <p>
                  project 2 description, project 2 description, project 2
                  description, project 2 description, project 2 description,
                  project 2 description, project 2 description, project 2
                  description, project 2 description, project 2 description,
                  project 2 description, project 2 description, project 2
                  description, project 2 description, project 2 description,
                  project 2 description, project 2 description, project 2
                  description... Lorem ipsum dolor sit amet, quo ei simul congue
                  exerci, ad nec admodum perfecto mnesarchum, vim ea mazim
                  fierent detracto. Ea quis iuvaret expetendis his, te elit
                </p>
              </div>
            </div>
          </div>
        ) : null}
        {selectProject3 ? (
          <div id="Project3">
            <div id="filter"></div>
            <img
              className="fadedImg"
              src="https://i.ibb.co/484Mqv3/Screenshot-2022-06-23-at-15-51-46.png"
            />
            <div
              id="backgroundBox"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom">
              <div class="contents">
                <p>
                  project 3 description, project 3 description, project 3
                  description, project 3 description, project 3 description,
                  project 3 description, project 3 description, project 3
                  description, project 3 description, project 3 description,
                  project 3 description, project 3 description, project 3
                  description, project 3 description, project 3 description,
                  project 3 description, project 3 description, project 3
                  description, project 3 description, project 3 description,
                  Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                  admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
                  quis iuvaret expetendis his, te elit voluptua dignissim per,
                </p>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <div id="scrollButton3" class="ScrollButtons">
        <a href="#">
          <span></span>
        </a>
      </div>
    </div>
  );
}
