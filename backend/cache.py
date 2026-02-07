import json
import os
import requests
import redis

r = redis.Redis(host='localhost', port=6379, decode_responses=True)

# Default Time To Live (data persists for 7 days)
DEFAULT_TTL = 60 * 60 * 24 * 7

def cached_get(url):
    key = f"pokeapi:{url.lower()}"
    
    # 1) Check cache
    cached = r.get(key)
    if cached:
        print("Cache HIT:", url)
        return json.loads(cached)
    
    # 2) Fetch from API
    print(f"Cache MISS: {url}. Fetching from API...")
    response = requests.get(url, timeout=20)
    response.raise_for_status()
    data = response.json()
    
    # 3) Store in Redis with TTL
    r.setex(key, DEFAULT_TTL, json.dumps(data))
    
    return data