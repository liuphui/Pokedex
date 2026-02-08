from fastapi import FastAPI, HTTPException
from app.services.pokeapi_client import get_pokemon

app = FastAPI(title="Pokedex API")

@app.get("/health")
def health():
    return {"status: ok"}

@app.get("/api/pokemon/{name_or_id}")
def get_pokemon_endpoint(name_or_id):
    try:
        return get_pokemon(name_or_id)
    except Exception:
        raise HTTPException(status_code=404, detail="Pokemon not found")