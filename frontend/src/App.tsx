import { useState } from 'react'
import { getPokemon, type Pokemon } from "./api/pokemon";
import { calculateTotalStats } from './utils/stats';

function App() {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [query, setQuery] = useState("");

  async function handleSearch() {
    const data = await getPokemon(query)
    setPokemon(data)
    console.log(data)
  }

  return (
    <div>
      <h1>Pokedex</h1>
      <input
        type="text"
        placeholder="Enter Pokemon name..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Submit</button>
      {pokemon ? (
        <div>
          <img src={pokemon.sprite ?? ""} alt={pokemon.name}></img>
          <div className="font-medium">
            <div>HP: {pokemon.stats["hp"]}</div>
            <div>Attack: {pokemon.stats["attack"]}</div>
            <div>Defense: {pokemon.stats["defense"]}</div>
            <div>SpAtk: {pokemon.stats["special-attack"]}</div>
            <div>SpDef: {pokemon.stats["special-defense"]}</div>
            <div>Speed: {pokemon.stats["speed"]}</div>
            <div>Total Base Stats: {calculateTotalStats(pokemon)}</div>
          </div>
        </div>
      ) : (
        <p>No Pokemon name entered</p>
      )}
    </div>
  );
}

export default App
