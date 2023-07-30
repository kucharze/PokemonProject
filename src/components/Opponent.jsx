import { useEffect, useState, useContext } from "react";
import { AppContext } from "../context/context";

function Opponent() {
      let { opp, setOpp, setMoves, moves } =
    useContext(AppContext);
  return (
    <div>
       <img src={opp.sprites.front_default} alt="" className="front" />
       {opp.stats.map((item) => {
            return (
              <h1 key={item.stat.name}>
                {item.stat.name}:{item.base_stat}
              </h1>
            );
          })}

          
    </div>
  )
}

export default Opponent
