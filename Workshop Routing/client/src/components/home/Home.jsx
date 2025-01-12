import { useEffect, useState } from "react"
import { gamesApi } from "../../service/games";
import Game from "./game/Game";

export default function Home(){

  const [lastThreeGames,setLastThreeGames] = useState([]);


  useEffect(()=>{
 
    
    (async () => {
      const data = Object.values(await gamesApi.getThreeLates());
      
      setLastThreeGames(data.reverse().slice(0,3));
      
    })();
  },[]);

    return(

        <>
           <section id="welcome-world">
  <div className="welcome-message">
    <h2>ALL new games are</h2>
    <h3>Only in GamesPlay</h3>
  </div>
  <img src="./images/four_slider_img01.png" alt="hero" />
  <div id="home-page">
    <h1>Latest Games</h1>
    
    {lastThreeGames.length < 0 ?
    <p className="no-articles">No games yet</p>
    : 
    lastThreeGames.map(game => <Game game ={game} key ={game._id}/>)}
   
    
  </div>
</section>
        </>
    )
}