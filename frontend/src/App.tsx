import { useState } from 'react'
import { getPokemon, type Pokemon } from "./api/pokemon";
import { calculateTotalStats } from './utils/stats';

function App() {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [query, setQuery] = useState("");

  async function handleSearch() {
    const data = await getPokemon(query)
    setPokemon(data)
  }

  return (
    <div className="w-screen">
      <div className="w-full overflow-x-hidden">
        <header className="m-0 bg-red-400 text-white text-xl font-bold px-6 py-6">
          <div className="flex justify-between w-auto h-16">
            <img
              src="pokedex_header.png"
            />
            <img 
              src="ash_pikachu_walking.gif"
            />
          </div>
        </header>
      </div>

      <div className="text-center">
        <div className="max-w-5xl mx-auto p-8">

          <div className="">
            <input
              type="text"
              placeholder="Enter Pokémon name..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={handleSearch}>Submit</button>
          </div>
          {!pokemon && <p>No Pokémon name entered</p>}
        </div>
      </div>

      <div className="relative w-full max-w-md">
        {/* Base pokedex image */}
        <img
          src="/pokedex.png"
          alt="pokedex-img"
          className="w-full h-auto block"
        />

        {/* Screen area (fixed zone) */}
        <div className="absolute top-[13%] left-[5%] w-[45%] h-[32%] flex items-center justify-center">
          {pokemon && (
            <img
              src={pokemon.sprite ?? ""}
              alt={pokemon.name}
              className="max-w-full max-h-full object-contain"
            />
          )}
        </div>

        {pokemon && (
          <div className="font-medium">
            <div>HP: {pokemon.stats["hp"]}</div>
            <div>Attack: {pokemon.stats["attack"]}</div>
            <div>Defense: {pokemon.stats["defense"]}</div>
            <div>SpAtk: {pokemon.stats["special-attack"]}</div>
            <div>SpDef: {pokemon.stats["special-defense"]}</div>
            <div>Speed: {pokemon.stats["speed"]}</div>
            <div>Total Base Stats: {calculateTotalStats(pokemon)}</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App
