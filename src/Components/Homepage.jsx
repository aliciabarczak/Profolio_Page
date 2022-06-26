import Image from "./Image";
import MainText from "./MainText";
import HomePageButtons from "./HomePageButtons";
import "./../Styling/ScrollButton.css";

export default function Homepage() {
  return (
    <>
      <Image />
      <MainText />
      <div id="scrollButton" className="ScrollButtons">
        <a href="#AboutMePage">
          <span></span>
        </a>
      </div>
      {/* <HomePageButtons /> */}
    </>
  );
}
