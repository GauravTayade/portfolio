import React, {useEffect, useState} from 'react';
import GamesData from '../Data/Games.json';
import Game from "./Game";

const GameList =(props)=>{

    const [games,setGames] = useState();

    useEffect(()=>{
        setGames(GamesData);
    })

    return(
        <div className="row justify-content-around">
            {
                games?
                    games.gamesData.map(game=>{
                       return<Game title={game.title} image={game.image} desc={game.desc} category={game.category}/>
                    })
                    :
                    'NO data'
            }
        </div>
    )
}

export default GameList;
