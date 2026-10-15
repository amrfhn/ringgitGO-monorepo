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

pytest and HTTPX are included in the default development dependency group.
Tests live in `tests/` and use FastAPI's `TestClient` without starting a server.

Live HTTP tests use the shared Playwright suite in the frontend directory:

```bash
cd ../ringgitgo-fe
npm ci
npm run test:e2e -- --project=backend
```

Playwright starts both services on dedicated ports (3100 and 8100) and stops
them after the run. Backend-only tests do not need browser binaries.
See the [frontend testing guide](../ringgitgo-fe/README.md#testing) for setup
and browser test commands.

## Production

```bash
uv run fastapi run app/main.py
```
