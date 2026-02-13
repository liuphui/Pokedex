export interface Pokemon {
    id: number;
    name: string;
    types: string[];
    sprite: string;
}

export async function getPokemon(name: string): Promise<Pokemon>{
    const response = await fetch(`/api/pokemon/${name}`);
    if (!response.ok){
        throw new Error("Pokemon not found")
    }
    const data = await response.json();
    return data
}