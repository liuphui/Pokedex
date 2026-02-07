from app.cache.redis_cache import cached_get

BASE_URL = "https://pokeapi.co/api/v2/"

def get_pokemon(name_or_id):
    url = f"{BASE_URL}/pokemon/{name_or_id}"
    return cached_get(url)

def get_type(type):
    url = f"{BASE_URL}/type/{type}"
    return cached_get(url)