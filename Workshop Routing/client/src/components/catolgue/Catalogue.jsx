import { useEffect, useState } from "react"
import { gamesApi } from "../../service/games";
import Game from "./game/Game";

export default function Catalogue(){

  const [data,setData] = useState([]);

  useEffect(()=>{
    (async ()=>{
      const result = Object.values(await gamesApi.getThreeLates());
      setData(result)
    })()
  },[]);

    return(
        <>
        <section id="catalog-page">

        <h1>All Games</h1>
      {data.length > 0 ? data.map(game => <Game game ={game} key ={game._id}/>) : 
    <h3 className="no-articles">No articles yet</h3> }

</section>
        </>
    )
}