import sys
import json
import urllib.request

genre = sys.argv[1]

url = "http://localhost:3000/movies"

with urllib.request.urlopen(url) as response:
    movies = json.loads(response.read().decode("utf-8"))

recommendations = [
    movie for movie in movies
    if movie["genre"].lower() == genre.lower()
]

print(json.dumps(recommendations, ensure_ascii=False))