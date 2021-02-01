import React, { useState, useEffect } from "react";
import axios from "axios";

export default function PokeCard(props) {

  const [pokemon, setpokemon] = useState({})

//   useEffect(() => {
//     pegaPokemon(props.pokemon);
//   }, [pokemon]);


  // useEffect(() => {
  //   pegaPokemon(props.pokemon);
  // }, [pokemon]);

  useEffect(() =>{
    if(pokemon.name !== props.poke){
      pegaPokemon(props.poke)
    }
  })

  const pegaPokemon = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${props.poke}`)
      .then(response => {
        // guarda as infos do pokemon no estado
        setpokemon(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  };



    return (
      <div>
        <p>{pokemon.name}</p>
        <p>{pokemon.weight} Kg</p>
        {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
        {pokemon.sprites && (
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        )}
      </div>
    );
  
}

