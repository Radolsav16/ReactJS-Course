export default function LinkText({text,className}){
    return(
        <>
         <div className="col-md-4">
              <a href="">
                <div className="item ">
                  <div className="img-box">
                    <i className={className} aria-hidden="true" />
                  </div>
                  <p>{text}</p>
                </div>
              </a>
            </div>
        </>
    )
}