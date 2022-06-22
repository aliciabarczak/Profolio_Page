export default function HomePageButtons() {
  return (
    <div id="HomePageButtons">
      <div className="twoSmallBTS">
        <div className="button_slide slide_down" id="see_my_work">
          See my work
        </div>
        <br /> <br />
        <br />
        <div to={"/aboutme"} className="button_slide slide_right" id="about_me">
          About mey
        </div>
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
