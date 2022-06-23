import "./../Styling/Projects.css";
export default function () {
  return (
    <>
      <div id="miniNav">
        <div>Balance Book</div>
        <div>NC News</div>
        <div>React App</div>
      </div>
      <div className="projects">
        <div id="Project1">
          <div id="filter"></div>
          <img
            className="fadedImg"
            src="https://i.ibb.co/484Mqv3/Screenshot-2022-06-23-at-15-51-46.png"
          />
          <div id="backgroundBox">
            <div class="contents">
              <p>
                Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
                quis iuvaret expetendis his, te elit voluptua dignissim per,
                habeo iusto primis ea eam. Lorem ipsum dolor sit amet, quo ei
                simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea
                mazim fierent detracto. Ea quis iuvaret expetendis his, te elit
                voluptua dignissim per, habeo iusto primis ea eam.
              </p>
            </div>
          </div>
        </div>
        <div id="Project2"></div>
        <div id="Project3"></div>
      </div>
    </>
  );
}
