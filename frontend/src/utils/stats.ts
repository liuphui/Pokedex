import { type Pokemon } from "../api/pokemon";

export function calculateTotalStats(pokemon: Pokemon | null): number {
  if (!pokemon) return 0;
  
  return Object.values(pokemon.stats).reduce((sum, stat) => sum + stat, 0);
}
