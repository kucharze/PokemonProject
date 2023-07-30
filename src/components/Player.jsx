import React,{useContext} from 'react'
import { AppContext } from "../context/context";


function Player(props) {
    let { pokemon, setPokemon, setMoves, moves } =
    useContext(AppContext);
  return (
    <div className='player'>
      <img src={pokemon.sprites.back_default} alt="" className='back'/>
      {pokemon.stats.map((item) => {
            return (
              <h1 key={item.stat.name}>
                {item.stat.name}:{item.base_stat}
              </h1>
            );
          })}
        
    </div>
  )
}

export default Player
