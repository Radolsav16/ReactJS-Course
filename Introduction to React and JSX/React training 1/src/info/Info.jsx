import Links from "./links/Links";
import LinkText from "./links/LinkText";

export default function Info(){
    return(
        <>
        <section className="info_section ">
  <div className="container">
    <h4>Get In Touch</h4>
    <div className="row">
      <div className="col-lg-10 mx-auto">
        <div className="info_items">
          <div className="row">
            <LinkText  text={"Lorem Ipsum is simply dummy text"} className={"fa fa-map-marker"}/>
            <LinkText  text={"+02 123949482"} className={"fa fa-phone"}/>
            <LinkText  text={"demo@gmail.com"} className={"fa fa-envelope"}/>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="social-box">
    <h4>Follow Us</h4>
    <div className="box">
    <Links className={"fa fa-twitter"} link={"/"}/>
    <Links className={"fa fa-youtube"} link={"/"}/>
    <Links className={"fa fa-instagram"} link={"/"}/>
    <Links />
    </div>
  </div>
</section>
        </>
    )
}