export default function ServiceBox({img,name,description}){
    return(
        <>
        <div class="col-sm-6 col-md-4 mx-auto">
          <div class="box ">
            <div class="img-box">
              <img src={img} alt={name} />
            </div>
            <div class="detail-box">
              <h5>
                {name}
              </h5>
              <p>
                {description}
              </p>
            </div>
          </div>
          </div>
        </>
    )
}