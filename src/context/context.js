import { createContext, useState } from "react";
import axios from "axios";

export const AppContext = createContext();

let AppContextProvider = (props) => {
  const [pokemon, setPokemon] = useState(null);
  const [opp, setOpp] = useState(null);
  const [moves, setMoves] = useState(null);

  const getMove = async () => {
    // let item = await fetch(`https://pokeapi.co/api/v2/move/851/`);
    let moveList = [];
    let i = 0;
    for (let i = 0; i < 4; i++) {
      // console.log(
      //   "Move url to pull"
      //   // pokemon.moves[Math.floor(Math.random() * ( - 1 + 1) + 1)].move.url
      // );
      let item = await axios.get(
        `${
          pokemon.moves[
            Math.floor(Math.random() * (pokemon.moves.length - 1) + 1)
          ].move.url
        }`
      );
      let data = await item.data;
      console.log("move", data);
      moveList.push(data);
    }
    await setMoves(moveList);
  };

  return (
    <AppContext.Provider
      value={{ pokemon, setPokemon, opp, setOpp, moves, setMoves, getMove }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
