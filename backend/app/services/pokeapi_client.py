from app.cache.redis_cache import cached_get

BASE_URL = "https://pokeapi.co/api/v2"

def get_pokemon(name_or_id):
    url = f"{BASE_URL}/pokemon/{name_or_id}"
    data = cached_get(url)
    
    return {
        "id": data["id"],
        "name": data["name"],
        "types": [t["type"]["name"] for t in data["types"]],
        "sprite": data["sprites"]["front_default"],
        "stats": {
            t["stat"]["name"]: t["base_stat"] 
            for t in data["stats"]
        }
    }
