import { useState } from 'react'
import { getPokemon, type Pokemon } from "./api/pokemon";
import { calculateTotalStats, formatStatName } from './utils/stats';
import PokeBallBackground from "./components/PokeBallBackground";

function App() {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [query, setQuery] = useState("");

  async function handleSearch() {
    try {
      const data = await getPokemon(query);
      setPokemon(data);
    } catch (error) {
      console.error("Pokemon not found");
    }
  }

  return (
    <div className="w-screen">
      <PokeBallBackground></PokeBallBackground>

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

      <div className="max-w-5xl mx-auto p-8">
        <div className="flex justify-start bg-amber-50 gap-8">
          <input
            type="text"
            placeholder="Enter Pokémon name..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="px-4 py-2 flex-1"
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xs" onClick={handleSearch}>Submit</button>
        </div>
      </div>

      <div className="flex justify-center space-x-20">
        <div className="text-center">
          <div className="relative w-full max-w-md mx-auto">
            {/* Base pokedex image */}
            <img
              src="/pokedex.png"
              alt="pokedex-img"
              className="w-full h-auto block"
            />
            {/* Screen area (fixed zone) */}
            <div className="absolute top-[30%] left-[5%] w-[45%] h-[32%] flex items-center justify-center overflow-hidden">
              {pokemon && (
                <img
                  src={pokemon.sprite ?? ""}
                  alt={pokemon.name}
                  className="max-w-full max-h-full object-contain"
                />
              )}
            </div>
          </div>
        </div>

        {pokemon && (
          <div className="bg-white rounded-lg p-3 border-2 border-orange-300 w-full max-w-xl">
            <div className="text-l font-semibold">
              <h4 className="mb-4">Base Stats</h4>

              {Object.entries(pokemon.stats).map(([key, value]) => (
                <div key={key} className="flex items-center gap-3">
                  <div className="w-full mb-3">
                    <div className="flex justify-between">
                      <span>{formatStatName(key)}</span>
                      <span className="w-10 text-right">{value}</span>
                    </div>

                    <div className="h-3 bg-gray-200 rounded">
                      <div
                        className="h-3 bg-black rounded"
                        style={{ width: `${(value / 255) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App
