import SliderSections from "../slider/SliderSections";
import HeaderLinks from "./header-links/HeaderLinks";
import SpanLinks from "./span-links/SpanLinks";

export default function Header(){
    return(
        <div className="hero_area">
        <header className="header_section">
  <div className="header_top">
    <div className="container-fluid">
      <div className="contact_nav">
       <SpanLinks className={"fa fa-phone"} spanLabel={"Call : +01 123455678990"}/>
       <SpanLinks className={"fa fa-envelope"} spanLabel={"Email : demo@gmail.com"}/>

      </div>
    </div>
  </div>
  <div className="header_bottom">
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg custom_nav-container ">
        <a className="navbar-brand" href="index.html">
          <span>Inance</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className=""> </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ">
            <HeaderLinks link={"/"} label={"Home"}/>
            <HeaderLinks link={"/about"} label={"About"}/>
            <HeaderLinks link={"/services"} label={"Services"}/>
            <HeaderLinks link={"/contact-us"} label={"Contact Us"}/>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</header>
<SliderSections />
</div>
    )
}