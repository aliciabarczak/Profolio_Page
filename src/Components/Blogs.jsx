import "./../Styling/Blogs.css"
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function Contact(){
    useEffect(() => {
        Aos.init({ duration: 1000 });
      }, []);
    return (
    <div id="BlogPage">
    <header>
        <h2 className="decorated" id="BlogsHeader"><span>Blogs</span></h2>
        </header>
        <div className="blogBox" data-aos="fade-down">
        <div id="filter"></div>
        <img className="blogImg" src="https://i.ibb.co/82vfxBP/image-placeholder-icon-5.png"/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="blogBox" data-aos="fade-down">
        <div id="filter"></div>
        <img className="blogImg" src="https://i.ibb.co/82vfxBP/image-placeholder-icon-5.png"/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="blogBox" data-aos="fade-down">
        <div id="filter"></div>
        <img className="blogImg" src="https://i.ibb.co/82vfxBP/image-placeholder-icon-5.png"/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="blogBox" data-aos="fade-down">
        <div id="filter"></div>
        <img className="blogImg" src="https://i.ibb.co/82vfxBP/image-placeholder-icon-5.png"/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        </div>)
}

