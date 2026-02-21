import { type Pokemon } from "../api/pokemon";

export function formatStatName(name: string) {
  const map: Record<string, string> = {
    hp: "Hp",
    attack: "Atk",
    defense: "Def",
    "special-attack": "Sp.Atk",
    "special-defense": "Sp.Def",
    speed: "Spd"
  };

  return map[name] ?? name;
}

export function calculateTotalStats(pokemon: Pokemon | null): number {
  if (!pokemon) return 0;
  
  return Object.values(pokemon.stats).reduce((sum, stat) => sum + stat, 0);
}
