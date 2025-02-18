import ServiceBox from "./service-box/ServiceBox";

export default function Service() {
  return (
    <>
      <section class="service_section layout_padding">
        <div class="container ">
          <div class="heading_container heading_center">
            <h2> Our Services </h2>
          </div>
          <div class="row">
            <ServiceBox
              img={"images/s1.png"}
              description={
                "when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal"
              }
              name={"Maintenance"}
            />

            <ServiceBox
              img={"images/s2.png"}
              description={
                "when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal"
              }
              name={"Electrical"}
            />

            <ServiceBox
              img={"images/s3.png"}
              description={
                " when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal"
              }
              name={"Plumbing"}
            />
          </div>
          <div class="btn-box">
            <a href="">View More</a>
          </div>
        </div>
      </section>
    </>
  );
}
