import video from "./Resources/DemoVid.mp4";
import { AiOutlineClose } from "react-icons/ai";

export default function DooDuelsDemo({ setVideoPlay }) {
  return (
    <div className="DooDuelsDemo">
      <a onClick={() => setVideoPlay(false)}>
        <AiOutlineClose className="closeIcon2" />
      </a>
      <video width="390" height="310" controls>
        <source src={video} type="video/mp4"></source>
      </video>
    </div>
  );
}
