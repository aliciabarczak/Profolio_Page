import useScreenSize from "./../Hooks/useScreenSize";

export default function Image() {
  const { mobileView, width } = useScreenSize();
  const mobilePic = (
    <img
      id="background_img"
      src="https://i.ibb.co/4Mz732B/Mobile-Blue-Edge.jpg"
      alt="img"></img>
  );

  const tabletPic = (
    <img
      id="background_img"
      src="https://i.ibb.co/7GjccgV/F06-D0334-C013-4171-ABC0-B5273-D4-C6954-1.jpg"
      alt="img"></img>
  );
  const desktopPic = (
    <img
      id="background_img"
      src="https://i.ibb.co/zNBSctX/narrow.jpg"
      alt="img"></img>
  );

  const bigDesktopPic = (
    <img
      id="background_img"
      src="https://i.ibb.co/KGtgH20/F06-D0334-C013-4171-ABC0-B5273-D4-C6954-1.jpg"
      alt="img"></img>
  );

  return (
    <div>
      {width <= 700
        ? mobilePic
        : width < 1000
        ? tabletPic
        : width < 1400
        ? desktopPic
        : bigDesktopPic}
    </div>
  );
}
