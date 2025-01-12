import { useEffect, useState } from "react"
import { gamesApi } from "../../service/games";
import { useParams } from "react-router-dom";
import { api } from "../../service/requster";

export default function Details(){
    const [data,setData] = useState({});

    const params = useParams();

    const id = params.id;



    useEffect(()=>{
      (async () => {
        const result = await api.get(`http://localhost:3030/jsonstore/games/${id}`);
        setData(result);
      })()
    },[])


  
    

    

    return(
        <>
            <section id="game-details">
  <h1>Game Details</h1>
  <div className="info-section">
    <div className="game-header">
      <img className="game-img" src={data.imageUrl} />
      <h1>{data.title}</h1>
      <span className="levels">MaxLevel: {data.maxLevel}</span>
      <p className="type">{data.category}</p>
    </div>
    <p className="text">
     {data.summary}
    </p>
    </div>
</section>
        </>
    )
}