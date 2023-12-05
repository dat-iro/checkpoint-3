import { useState } from "react";

export function Pokedex() {
  const [pokemon, setPokemon] = useState("")
  const [pokemonData, setPokemonData] = useState(null)
  const [error, setError] = useState(null)
  const [species, setSpecies] = useState(null)
  const [additional, setAdditional] = useState()

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

      const data = await response.json()
      console.log(data)

      if (response.ok) {
        setPokemonData(data)
      }

      const responseSpecies = await fetch(``)
   
    } catch (error) {
      setError("Questo Pokémon non esiste!")
    }

  }

  return (
    <>
      <input type="text" value={pokemon} onChange={(e) => setPokemon(e.target.value)}/>
      <button onClick={handleSearch}>Generate a Pokémon!</button>

      {error && <p>{error}</p>}
      {pokemonData && (
        <div>
          <h1>Nome: {pokemonData.name}</h1>
          <img src={pokemonData.sprites.front_default} alt="sprite pokemon"/>
          <p>Esperienza di base: {pokemonData.base_experience}</p>
          <p>Abilità: {pokemonData.abilities.map((ability) => ability.ability.name).join(", ")}</p>
        </div>
      )}
      
    </>
  )
}