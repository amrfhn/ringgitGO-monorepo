# ringgitGO Backend

FastAPI backend managed with uv. Requires Python 3.12 or newer and
[uv](https://docs.astral.sh/uv/getting-started/installation/).

## Setup

Run these commands from this directory:

```bash
uv sync --locked
```

uv creates or updates the local `.venv`. No manual activation is required.
Commit `pyproject.toml` and `uv.lock` to keep dependencies reproducible.
Do not commit `.venv` or local environment files.

## Development

```bash
uv run fastapi dev app/main.py
```

The API runs at <http://127.0.0.1:8000>. Interactive API documentation is
available at <http://127.0.0.1:8000/docs>.

```bash
curl --fail http://127.0.0.1:8000/health
```

Expected response: `{"status":"ok"}`.

## Tests

```bash
uv run python -m pytest
```

## Production

```bash
uv run fastapi run app/main.py
```
