import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./../Styling/BurgerNav.css";

function BurgerNav({ sidebar, setSidebar }) {
  const showSidebar = () => {
    setSidebar(!sidebar);
  };
  console.log(sidebar);
  const navBarItems = [
    {
      title: "About",
      path: "#about",
      cName: "nav-text",
    },
    {
      title: "Profolio",
      path: "#experience",
      cName: "nav-text",
    },
    {
      title: "Blogs",
      path: "#blogs",
      cName: "nav-text",
    },
    {
      title: "Contact",
      path: "#contact",
      cName: "nav-text",
    },
  ];

  return (
    <>
      <div className="BurgerNav">
        <Link to="#" className="menu-bars">
          <AiOutlineBars onClick={showSidebar} />
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu-active" : "nav-menu"}>
        <ul className="nav-menu-itmes" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <AiOutlineClose className="closeIcon" />
            </Link>
          </li>
          {navBarItems.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <a href={item.path}>
                  {" "}
                  <span>
                    <p>{index + 1}</p>
                    {item.title}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default BurgerNav;
