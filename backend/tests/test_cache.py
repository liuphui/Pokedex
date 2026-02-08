from app.services.pokeapi_client import get_pokemon

print("First call - get_pokemon")
data = get_pokemon("pikachu")
print(data["name"], data["id"], data["types"][0]["type"]["name"], "\n")

print("Second call - get_pokemon")
data = get_pokemon("pikachu")
print(data["name"], data["id"], data["types"][0]["type"]["name"], "\n")
