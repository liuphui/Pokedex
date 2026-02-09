import { useEffect, useState } from 'react' 
import { getPokemon, type Pokemon } from "./api/pokemon";

function App() {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  useEffect(() => {
    async function loadPokemon() {
      const data = await getPokemon("pikachu")
      setPokemon(data)
    }

    loadPokemon();
  }, []);

  return(
    <div>
      <h1>Pokedex</h1>
      {pokemon ? (
        <div>
          <h2>{pokemon.name}</h2>
          <img src={pokemon.sprite ?? ""} alt={pokemon.name}></img>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App
