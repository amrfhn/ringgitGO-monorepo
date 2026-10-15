# ringgitGO

ringgitGO is a personal finance application being built to help users manage
financial accounts and track income and expenses. This monorepo contains its
Next.js frontend and FastAPI backend.

The project is in early development: the frontend currently displays a starter
page, and the backend exposes a health endpoint. Finance and authentication
features are planned, not yet implemented.

## Tech stack

| Area | Tools |
| --- | --- |
| Frontend | Next.js, React, TypeScript, Tailwind CSS |
| Backend | Python, FastAPI, uv |
| Testing | Jest, React Testing Library, pytest, Playwright |

## Repository structure

```text
ringgitgo-fe/  Next.js frontend and shared Playwright suite
ringgitgo-be/  FastAPI backend and pytest tests
docs/         Project planning and backlog
```

See the [project backlog](docs/kanban-plan-ringgitgo.md) for planned work.

## Prerequisites

- Git
- Node.js 22 LTS or newer and npm
- Python 3.12 or newer
- [uv](https://docs.astral.sh/uv/getting-started/installation/) for Python
  dependencies and commands

## Getting started

Clone the repository:

```bash
git clone https://github.com/amrfhn/ringgitGO-monorepo.git
cd ringgitGO-monorepo
```

Run the frontend and backend in separate terminals. Start each set of commands
from the repository root.

### Frontend

```bash
cd ringgitgo-fe
npm ci
npm run dev
```

Open <http://localhost:3000>. The development server reloads as you edit the UI.

### Backend

```bash
cd ringgitgo-be
uv sync --locked
uv run fastapi dev app/main.py
```

uv manages the local virtual environment; manual activation is not required.

- API: <http://127.0.0.1:8000>
- Interactive API documentation: <http://127.0.0.1:8000/docs>
- Health check: <http://127.0.0.1:8000/health>

Check that the backend is running:

```bash
curl --fail http://127.0.0.1:8000/health
```

Expected response: `{"status":"ok"}`. The API root does not currently define
a route; use the health endpoint or API documentation instead.

The frontend does not yet call the backend. No database or application
environment variables are required for the current starter implementation.

## Testing and checks

After installing both services' dependencies, run these commands from the
repository root:

```bash
# Frontend unit and component tests
npm --prefix ringgitgo-fe test
npm --prefix ringgitgo-fe run test:coverage

# Backend tests
uv run --directory ringgitgo-be python -m pytest

# Frontend lint and TypeScript checks
npm --prefix ringgitgo-fe run lint
```

For TypeScript checking, run `npx tsc --noEmit` from `ringgitgo-fe/`.

### Playwright: browser and backend HTTP tests

Install Chromium from the frontend directory:

```bash
cd ringgitgo-fe
npx playwright install chromium
npm run test:e2e
```

On Linux, install missing browser system libraries with
`npx playwright install-deps chromium` (may require sudo). Alternatively,
`npx playwright install --with-deps chromium` installs both the browser and
its system dependencies.

Playwright starts and stops both services automatically on ports **3100**
(frontend) and **8100** (backend). Keep these ports free; there is no need to
start development servers manually for these tests.

Run a single project or open the interactive test UI from the frontend directory:

```bash
npm run test:e2e -- --project=frontend
npm run test:e2e -- --project=backend
npm run test:e2e:ui
```

The frontend project uses Chromium; the backend project sends real HTTP
requests without launching a browser. Both services start even when selecting
only one project.

## Production mode

Run these commands in separate terminals from the repository root:

```bash
# Frontend: build first, then serve on port 3000
npm --prefix ringgitgo-fe run build
npm --prefix ringgitgo-fe run start
```

```bash
# Backend: serve on port 8000 without development reload
uv run --directory ringgitgo-be fastapi run app/main.py
```

These commands start the application processes; deployment infrastructure and
hosting configuration are not included.

## Further documentation

- [Frontend setup and testing](ringgitgo-fe/README.md)
- [Backend setup and testing](ringgitgo-be/README.md)
- [Planned features and backlog](docs/kanban-plan-ringgitgo.md)
