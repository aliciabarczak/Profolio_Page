import "./../Styling/Projects.css";
import "./../Styling/ScrollButton.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
export default function () {
  const [selectProject1, setSelectProject1] = useState(true);
  const [selectProject2, setSelectProject2] = useState(false);
  const [selectProject3, setSelectProject3] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 1000 });
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
          className={selectProject1 ? "default" : ""}
          onMouseEnter={() => {
            setSelectProject2(false);
            setSelectProject3(false);
            setSelectProject1(true);
          }}>
          Balance Book
        </div>
        <div
          className={selectProject2 ? "default" : ""}
          onMouseEnter={() => {
            setSelectProject1(false);
            setSelectProject3(false);
            setSelectProject2(true);
          }}>
          NC News
        </div>
        <div
          className={selectProject3 ? "default" : ""}
          onMouseEnter={() => {
            setSelectProject1(false);
            setSelectProject2(false);
            setSelectProject3(true);
          }}>
          React App
        </div>
      </div>
      <div className="projects">
        {selectProject1 ? (
          <div id="Project1">
            <div id="filter"></div>
            <img
              className="fadedImg"
              src="https://i.ibb.co/sHnRfNL/Screenshot-2022-06-26-at-19-13-38.png"
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
            <div className="tech">
              <p>React</p>
              <p>Express</p>
              <p>Heroku </p>
            </div>
            <div className="bottomIcons">
              <a data-aos="fade-right">
                <BsGithub />
              </a>
              <a data-aos="fade-left">
                <FiExternalLink />
              </a>
            </div>
          </div>
        ) : null}
        {selectProject2 ? (
          <div id="Project2">
            <div id="filter"></div>
            <img
              className="fadedImg"
              src="https://i.ibb.co/sHnRfNL/Screenshot-2022-06-26-at-19-13-38.png"
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
            <div className="tech">
              <p>React</p>
              <p>Express</p>
              <p>Heroku </p>
            </div>
            <div className="bottomIcons">
              <a data-aos="fade-right">
                <BsGithub />
              </a>
              <a data-aos="fade-left">
                <FiExternalLink />
              </a>
            </div>
          </div>
        ) : null}
        {selectProject3 ? (
          <div id="Project3">
            <div id="filter"></div>
            <img
              className="fadedImg"
              src="https://i.ibb.co/sHnRfNL/Screenshot-2022-06-26-at-19-13-38.png"
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
            <div className="tech">
              <p>React</p>
              <p>Express</p>
              <p>Heroku </p>
            </div>
            <div className="bottomIcons">
              <a data-aos="fade-right">
                <BsGithub />
              </a>
              <a data-aos="fade-left">
                <FiExternalLink />
              </a>
            </div>
          </div>
        ) : null}
      </div>
      <div id="scrollButton2" className="ScrollButtons">
        <a href="#BlogPage">
          <span></span>
        </a>
      </div>
    </div>
  );
}
