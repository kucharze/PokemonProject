import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { AppContext } from "./context/context";
import Player from "./components/Player";
import Opponent from "./components/Opponent";

function App() {
  let { pokemon, opp, setPokemon, setOpp, setMoves, moves } =
    useContext(AppContext);

  const getPokemon = async () => {
    try {
      let item = await fetch("https://pokeapi.co/api/v2/pokemon/zamazenta");
      let data = await item.json();
      console.log(data);
      setPokemon(data);
    } catch (err) {
      console.log("We did not find a valid pokemon");
    }
  };
  const getOpp = async () => {
    try {
      let item = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${Math.floor(
          Math.random() * (100 - 1 + 1) + 1
        )}`
      );
      let data = await item.json();
      console.log("opp:", data);
      setOpp(data);
    } catch (err) {
      console.log("We did not find a valid pokemon");
    }
  };

  const getMove = async () => {
    // let item = await fetch(`https://pokeapi.co/api/v2/move/851/`);
    let moveList = [];
    for (let i = 0; i < 4; i++) {
      let item = await fetch(
        `${
          pokemon.moves[Math.floor(Math.random() * (95 - 1 + 1) + 1)].move.url
        }`
      );
      let data = await item.json();
      console.log("move", data);
      moveList.push(data);
    }
    await setMoves(moveList);
  };

  useEffect(() => {
    getPokemon();
    getOpp();
    // getMove();
  }, []);

  return (
    <div className="App">
      test
      {pokemon && opp && (
        <div className="battle">
          <h1>Pics</h1>

          <h2>Access a move: {pokemon.moves[5].move.name}</h2>
          <h1>Player Stats:</h1>
          <Player />
          <h2>Opp Stats</h2>
          <Opponent />
          <h2>We will not Include null accuracy moves</h2>

          <button onClick={getMove}>Load moves</button>
        </div>
      )}
    </div>
  );
}

export default App;
