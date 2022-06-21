import { Link } from "react-router-dom";
export default function HomePageButtons() {
  return (
    <div id="outer">
      <div className="twoSmallBTS">
        <div className="button_slide slide_down" id="see_my_work">
          See my work
        </div>
        <br /> <br />
        <br />
        <Link
          to={"/aboutme"}
          className="button_slide slide_right"
          id="about_me">
          About me
        </Link>
        <br /> <br />
        <br />
      </div>
      <div className="bigBT">
        <div className="button_slide slide_left" id="contact_me">
          <div>Contact me!</div>
          <br /> <br />
          <br />
        </div>
      </div>
    </div>
  );
}
