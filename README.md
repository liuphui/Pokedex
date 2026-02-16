# Pokedex
A pokedex application

## Requisites
- Python 3.10+
- Docker

## Start the application
Run the backend and redis:
`docker compose up -d --build`

Run the frontend:
`cd frontend`

Then

`npm run dev`

## For Development
Make sure you are in a virtual environment. To create one in python, run the command:
`python -m venv venv`

Then activate venv (Windows):
`venv/Scripts/activate`

Run:
`pip install -r requirements.txt`