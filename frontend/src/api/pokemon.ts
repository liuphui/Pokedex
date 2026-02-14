export interface Pokemon {
    id: number;
    name: string;
    types: string[];
    sprite: string;
    stats: {
        "hp": number;
        "attack": number;
        "defense": number;
        "special-attack": number;
        "special-defense": number;
        "speed": number;
    };
}

export async function getPokemon(name: string): Promise<Pokemon>{
    const response = await fetch(`/api/pokemon/${name}`);
    if (!response.ok){
        throw new Error("Pokemon not found")
    }
    const data = await response.json();
    return data
}