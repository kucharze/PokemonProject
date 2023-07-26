import { createContext, useState } from "react";

export const AppContext = createContext();

let AppContextProvider = (props) => {
  const [pokemon, setPokemon] = useState(null);
  const [opp, setOpp] = useState(null);
  const [moves, setMoves] = useState(null);
  return (
    <AppContext.Provider
      value={{ pokemon, setPokemon, opp, setOpp, moves, setMoves }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
