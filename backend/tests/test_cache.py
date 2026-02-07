from app.services.pokeapi_client import get_pokemon

print("First call")
data = get_pokemon("pikachu")
print(data["name"], data["id"])

print("Second call")
data = get_pokemon("pikachu")
print(data["name"], data["id"])
