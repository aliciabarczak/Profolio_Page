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
            <span>About </span>
          </h1>
        </header>
        <section className="timeline">
          <div className="container left">
            <div className="content" data-aos="fade-right">
              <h2>2014 - 2018</h2>
              <p>
                Attended undergard law school at Lancaster University. I really
                enjoyed studying law and the challenge of navigating through
                highly technical information to solve problems. I was quite good
                at it too - I graduated with several academic awards.
              </p>
            </div>
          </div>
          <div className="container right">
            <div className="content" data-aos="fade-right">
              <h2>2018 - 2019</h2>
              <p>
                Obtained a scholarship and attended postgard law school. This
                was the most academically intense year of my educational life
                which really strengthed my ability to absorb new technical
                information very quickly. I graduated with a strong Distinction
                and several legal internships.
              </p>
            </div>
          </div>
          <div className="container left">
            <div className="content" data-aos="fade-right">
              <h2>2020 </h2>
              <p>
                Began to practice law in the middle of the COVID pandemic. I
                gradually realised that career in law was not meeting my
                expectations and my strengths and passions were not being put to
                regular use. Nonetheless I enjoyed developing new skills such as
                strong attention to detail, teamworking and communication
                skills.
              </p>
            </div>
          </div>
          <div className="container right">
            <div className="content" data-aos="fade-right">
              <h2>January 2022</h2>
              <p>
                I began to explore careers in tech after realising that this
                field perfectly suits my skill set. After a couple of weeks of
                preperation I obtained a place and a scholarship at{" "}
                <a
                  href="https://northcoders.com/our-courses/skills-bootcamp-in-coding?utm_term=northcoders&utm_campaign=Brand&utm_source=adwords&utm_medium=ppc&hsa_acc=5738903014&hsa_net=adwords&hsa_cam=14960254281&hsa_ad=553476276203&hsa_kw=northcoders&hsa_grp=135291806144&hsa_mt=p&hsa_ver=3&hsa_src=g&hsa_tgt=kwd-399711163914&gclid=CjwKCAjwoMSWBhAdEiwAVJ2ndpWrINY3yI4qew4edbUTbAs0DvmS4fcRRmH2oh4byurafi1GioxmyRoCUuQQAvD_BwE"
                  className="DD-link1"
                  target="_blank">
                  Northcoders
                </a>
                . I quit law in March to focus all of my attention on coding.
              </p>
            </div>
          </div>
          <div className="container left">
            <div className="content" data-aos="fade-right">
              <h2>July 2022</h2>
              <p>
                I graduated from Northcoders! I went from a complete coding
                newbie to being able to build websites and full-stack web and
                mobile apps! Scroll down for examples of some of the things that
                I have built.
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
