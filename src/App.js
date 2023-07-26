import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [pokemon, setPokemon] = useState(null);
  const [moves, setMoves] = useState(null);

  const getPokemon = async () => {
    try {
      let item = await fetch("https://pokeapi.co/api/v2/pokemon/charmander");
      let data = await item.json();
      console.log(data);
      setPokemon(data);
      //getMove();
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
          pokemon.moves[Math.floor(Math.random() * (100 - 1 + 1) + 1)].move.url
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
    // getMove();
  }, []);

  return (
    <div className="App">
      test
      {pokemon && (
        <div>
          <h1>{pokemon.name}</h1>
          <h1>Experience: {pokemon.base_experience}</h1>
          <h1>Pics</h1>
          <img src={pokemon.sprites.front_default} alt="" />
          <img src={pokemon.sprites.back_default} alt="" />
          <h2>Access a move: {pokemon.moves[5].move.name}</h2>
          {}

          {moves ? (
            moves.map((item) => {
              console.log(item.name);
              return <h3>Move ID: {item.name}</h3>;
            })
          ) : (
            <h3>Loading</h3>
          )}

          <button onClick={getMove}>Load moves</button>
        </div>
      )}
    </div>
  );
}

export default App;
