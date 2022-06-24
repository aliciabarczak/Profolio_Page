import "./../Styling/Contact.css"
export default function Contact() {
    return (<div id="ContactPage">
         <header>
        <h1 class="decorated">
          <span>Get in touch</span>
        </h1>
      </header>
        <div className="contactBox">
        <img src="https://i.ibb.co/4KM38Bk/linkedin-3-128.png"/>
        <p>Alicia Barczak</p>
        </div>
        <div className="contactBox">
        <img src="https://i.ibb.co/XJq5vb6/github-11-128.png"/>
        <p>aliciabarczak</p>
        </div>
        <div className="contactBox">
        <img src="https://i.ibb.co/z4G8Bcq/email-14-128.png"/>
        <p>aliciabarczak1@gmail.com</p>
        </div>
    </div>)
}

