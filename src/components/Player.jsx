import React,{useContext} from 'react'
import { AppContext } from "../context/context";


function Player(props) {
    let { pokemon, setPokemon, setMoves, moves, getMove } =
    useContext(AppContext);
  return (
    <div className='player'>
        <h1>Player Stats:</h1>
        <h1>{pokemon.name}</h1>
          <h1>Experience: {pokemon.base_experience}</h1>
      <img src={pokemon.sprites.back_default} alt="" className='back'/>
      {pokemon.stats.map((item) => {
            return (
              <h1 key={item.stat.name}>
                {item.stat.name}:{item.base_stat}
              </h1>
            );
          })}
        {moves ? (
            moves.map((item) => {
              console.log(item.name);
              return <button key={item.name}>Move ID: {item.name}</button>;
            })
          ) : (
            <h3>Loading</h3>
          )}

          <button onClick={getMove}>Load moves</button>
    </div>
  )
}

export default Player
