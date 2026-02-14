import { useState } from 'react'
import { getPokemon, type Pokemon } from "./api/pokemon";

function App() {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [query, setQuery] = useState("");

  async function handleSearch() {
    const data = await getPokemon(query)
    setPokemon(data)
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
        </div>
      ) : (
        <p>No Pokemon name entered</p>
      )}
    </div>
  );
}

export default App
