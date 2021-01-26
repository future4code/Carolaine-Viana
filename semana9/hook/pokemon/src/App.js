import React, { useState, useEffect } from "react";
import axios from "axios";
import PokeCard from "./components/PokeCard";


export default function App(){

    const [pokelist, setpokelist] = useState([])
    const [pokename, setpokename] = useState("")


  useEffect(() =>{
    if(pokelist === ""){
      getAllPokemons()
    }
  })  

  const getAllPokemons = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then(response => {
        setpokelist(response.data.results)
      })
      .catch(err => {
        console.log(err);
      });
  };


  const changePokeName = (event) => {
    setpokename(event.target.value)
  };


    return (
      <div className="App">
        <select onChange={changePokeName}>
          <option value={""}>Nenhum</option>
          {pokelist.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
        
              </option>
            );
          })}
        </select>       
        {pokename && <PokeCard pokemon={pokename} />}
      </div>
    );
}

