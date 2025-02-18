import Path from "./path/Path";

export default function FeatureBox({name ,paths,gId,dataName}){
    function generateKey (number){
        return number * Math.floor(Math.random() * 7);
    }
    return(
        <>
          <div className="box">
        <div className="img-box">
          <svg
            enableBackground="new 0 0 511.995 511.995"
            height={512}
            viewBox="0 0 511.995 511.995"
            width={512}
            xmlns="http://www.w3.org/2000/svg"
          >
          
              <g id={gId} data-name = {dataName}>
              {paths.map(el => <Path path={el} key={el + generateKey(10)}/>)}
              </g>
         
          </svg>
        </div>
        <h5 className="name">{name}</h5>
      </div>
        </>
    )
}