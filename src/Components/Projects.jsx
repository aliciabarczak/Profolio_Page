import "./../Styling/Projects.css";
import "./../Styling/ScrollButton.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import DooDuelsDemo from "./DooDuelsDemo";
import { MdVideoLibrary } from "react-icons/md";

export default function () {
  const [selectProject1, setSelectProject1] = useState(true);
  const [selectProject2, setSelectProject2] = useState(false);
  const [selectProject3, setSelectProject3] = useState(false);
  const [videoPlay, setVideoPlay] = useState(false);
  console.log(videoPlay);

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
          NC News
        </div>
        <div
          className={selectProject2 ? "default" : ""}
          onMouseEnter={() => {
            setSelectProject1(false);
            setSelectProject3(false);
            setSelectProject2(true);
          }}>
          DooDuels
        </div>
        {/* <div
          className={selectProject3 ? "default" : ""}
          onMouseEnter={() => {
            setSelectProject1(false);
            setSelectProject2(false);
            setSelectProject3(true);
          }}>
          React App
        </div> */}
      </div>
      <div className="projects">
        {selectProject1 ? (
          <div id="Project1">
            <img
              className="fadedImg"
              src="https://i.ibb.co/9sJP8Vn/Screenshot-2022-07-13-at-14-07-08.png"
            />

            <div id="backgroundBox">
              <div
                class="contents"
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom">
                <p>
                  NC News is a news aggregation app I built using full-stack
                  Javascript as part of the
                  <a
                    href="https://northcoders.com/our-courses/coding-bootcamp"
                    className="NC-link"
                    target="_blank">
                    Northcoders' Full Stack Developer Course.
                  </a>
                  <p>
                    I built the front end in <b>React.js</b> during week nine of
                    the course which demonstrates some of the skills I've learnt
                    in three weeks of front end study, mostly dedicated to React
                    subjects including:
                  </p>
                  <ul className="NC-News-list">
                    <li>
                      <b>React DOM</b>{" "}
                    </li>
                    <li>
                      <b>React Lifecycle</b>
                    </li>
                    <li>
                      <b>React Routing</b>
                    </li>
                    <li>
                      <b>Optimistic Rendering</b>
                    </li>
                    <li>
                      <b>Error Handling </b>
                    </li>
                  </ul>
                  <p>
                    This front end application interacts with the back end
                    RESTful API I created during week six of the course. Details
                    of the API may be found on{" "}
                    <a
                      href="https://github.com/aliciabarczak/NC-News-BE"
                      className="GH-link"
                      target="_blank">
                      Github
                    </a>
                    . This API is further{" "}
                    <a
                      href="https://nc-news-alicia.herokuapp.com/api"
                      className="GH-link"
                      target="_blank">
                      hosted on Heroku
                    </a>
                    . .
                  </p>
                </p>
              </div>

              <div className="tech">
                <p>React.js</p>
                <p>Express</p>
                <p>Axios</p>
                <p>Node.js </p>
                <p>Heroku</p>
              </div>
              <div className="bottomIcons">
                <a
                  data-aos="fade-right"
                  href="https://github.com/aliciabarczak/NC-News-FE"
                  target="_blank"
                  className="GH-icon">
                  <BsGithub />
                </a>
                <a
                  data-aos="fade-left"
                  href="https://nc-news-practice-site.netlify.app/"
                  target="_blank"
                  className="GH-icon">
                  <FiExternalLink />
                </a>
              </div>
            </div>
          </div>
        ) : null}
        {selectProject2 ? (
          <div id="Project1">
            <img
              className="fadedImg2"
              src="https://i.ibb.co/Ry5kszN/Screenshot-2022-07-13-at-14-30-43.png"
              alt="Screenshot-2022-07-13-at-14-30-43"
            />

            <div id="backgroundBox">
              <div
                class="contents"
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom">
                <p>
                  Dooduels is a guessing and drawing game which I have built as
                  part of a team of four during the Final Project phase (weeks
                  12-13) of the{" "}
                  <a
                    href="https://northcoders.com/our-courses/coding-bootcamp"
                    className="DD-link1"
                    target="_blank">
                    Northcoders' Full Stack Developer Course.
                  </a>
                  <p>
                    I was responsible for intergrating the <b>Firebase</b>{" "}
                    database with our <b>React</b>-based desktop app in order to
                    build and/or style various components and features of the
                    app including the interactive homepage, live chat, and the
                    gamepage.
                    <p>
                      The gamepage features a canvas which enables the user to
                      produce live drawings using mouse movements or AR/hand
                      gestures (made possible by Google's open-source
                      machine-learning library,{" "}
                      <a
                        className="DD-link2"
                        href="https://google.github.io/mediapipe/ "
                        target="_blank">
                        MediaPipe
                      </a>
                      ).
                    </p>
                    A demo of the app can be found by clicking on the bottom
                    icon below.
                  </p>
                </p>
              </div>

              <div className="tech">
                <p>React.js</p>
                <p>Firebase</p>
                <p>MediaPipe</p>
                <p>Filestack</p>
              </div>
              <div className="bottomIcons">
                <a
                  data-aos="fade-right"
                  href="https://github.com/aliciabarczak/Dooduels"
                  target="_blank"
                  className="GH-icon">
                  <BsGithub />
                </a>
                <a data-aos="fade-left" className="video-icon">
                  <p onClick={() => setVideoPlay(true)}>
                    <MdVideoLibrary />
                  </p>
                </a>
              </div>
            </div>
          </div>
        ) : null}
        {/* {selectProject3 ? (
          <div id="Project1">
            <img
              className="fadedImg"
              src="https://i.ibb.co/sHnRfNL/Screenshot-2022-06-26-at-19-13-38.png"
            />
            <div id="backgroundBox">
              <div
                class="contents"
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom">
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
          </div>
        ) : null} */}
      </div>
      {videoPlay ? <DooDuelsDemo setVideoPlay={setVideoPlay} /> : null}
      <div id="scrollButton2" className="ScrollButtons">
        <a href="#BlogPage">
          <span></span>
        </a>
      </div>
    </div>
  );
}
