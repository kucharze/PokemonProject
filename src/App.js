import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [pokemon, setPokemon] = useState(null);
  const [opp, setOpp] = useState(null);
  const [moves, setMoves] = useState(null);

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
    getOpp();
    // getMove();
  }, []);

  return (
    <div className="App">
      test
      {pokemon && opp && (
        <div>
          <h1>{pokemon.name}</h1>
          <h1>Experience: {pokemon.base_experience}</h1>
          <h1>Pics</h1>

          <img src={pokemon.sprites.back_default} alt="" className="back" />
          <img src={opp.sprites.front_default} alt="" className="front" />
          <h2>Access a move: {pokemon.moves[5].move.name}</h2>
          <h1>Player Stats:</h1>
          {pokemon.stats.map((item) => {
            return (
              <h1 key={item.stat.name}>
                {item.stat.name}:{item.base_stat}
              </h1>
            );
          })}
          <h2>Opp Stats</h2>
          {opp.stats.map((item) => {
            return (
              <h1 key={item.stat.name}>
                {item.stat.name}:{item.base_stat}
              </h1>
            );
          })}
          <h2>We will not Include null accuracy moves</h2>
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
      )}
    </div>
  );
}

export default App;
