import "./../Styling/Nav.css";

export default function Nav() {
  const navBarItems = [
    {
      title: "About",
      path: "#about",
      cName: "NavLink",
    },
    {
      title: "Profolio",
      path: "#experience",
      cName: "NavLink",
    },
    // {
    //   title: "Blogs",
    //   path: "#blogs",
    //   cName: "nav-text",
    // },
    {
      title: "Contact",
      path: "#contact",
      cName: "NavLink",
    },
  ];
  return (
    <div id="Nav">
      <ol id="NavTxt">
        {navBarItems.map((item, index) => {
          return (
            <li key={index} className={item.cName}>
              <a href={item.path}>
                <span>{item.title}</span>
              </a>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
