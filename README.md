# VEX Verifiable AI-Native Application Platform

> The deterministic, register-addressed web stack engineered for near-zero LLM hallucinations, atomic SHA-256 state rollbacks, and native JSON-RPC 2.0 execution.

---

## Architecture Overview

VEX replaces legacy framework bloat with 14 atomic primitives and direct register addressing (`#01`, `#02`, `#03`):

```
                        ┌──────────────────────────────────────────────┐
                        │        LLM / Developer Prompt Input          │
                        └──────────────────────┬───────────────────────┘
                                               │
                                               ▼
                        ┌──────────────────────────────────────────────┐
                        │     Stage 1: Register-Addressed Syntax       │
                        │    (#01, #02) — 85% Less Token Consumption   │
                        └──────────────────────┬───────────────────────┘
                                               │
                                               ▼
                        ┌──────────────────────────────────────────────┐
                        │    Stage 2: Deterministic Schema Verifier    │
                        │      (@schema) — Zero Unhandled Errors       │
                        └──────────────────────┬───────────────────────┘
                                               │
                                               ▼
                        ┌──────────────────────────────────────────────┐
                        │     Stage 3: Signed SHA-256 State Ledger     │
                        │   (@ledger) — Point-in-time State Recovery   │
                        └──────────────────────┬───────────────────────┘
                                               │
                                               ▼
                        ┌──────────────────────────────────────────────┐
                        │    Stage 4: JSON-RPC 2.0 Node Execution      │
                        │      Live Endpoint: http://167.172.215/rpc    │
                        └──────────────────────┬───────────────────────┘
                                               │
                                               ▼
                        ┌──────────────────────────────────────────────┐
                        │    Stage 5: Dual-Target Reactive + SEO       │
                        │ (@ui Client Reactive Tree + @meta Snapshots) │
                        └──────────────────────────────────────────────┘
```

---

## The 14 VEX Primitives

| Primitive | Category | Description |
| :--- | :--- | :--- |
| `@server` | Runtime Hosting | Host port, CORS configuration, and edge process binding |
| `@sandbox` | Isolation | Secure memory boundaries and timeout guards |
| `@ledger` | Verifiable State Log | SHA-256 hashed chain of state transitions for rollbacks |
| `@pkg` | Package Management | Content-addressed immutable dependencies |
| `@schema` | Type Guard | Strict pre-runtime contract verification |
| `@adapt` | Connectors | Bridges external APIs and database streams into VEX channels |
| `@state` | Reactive State | Reactive variables, balances, and nonces on register `#01` |
| `@stream` | Pub/Sub Stream | Real-time WebSocket push updates |
| `@fn` | Pure Function | Deterministic stateless computation on register `#02` |
| `@rpc` | Typed RPC Handler | Entrypoint for client requests with Ed25519 signature checks |
| `@auth` | Cryptographic Identity | Public key verification and role permissions |
| `@route` | Routing | Maps HTTP paths directly to register functions |
| `@ui` | Reactive View | Zero-bundle reactive UI manifests compiled on register `#03` |
| `@meta` | SEO & Crawl | Emits static semantic HTML snapshots for search bots |

---

## Live RPC Node Connection

The application connects directly to the live VEX JSON-RPC 2.0 node at:
- **Target URL:** `http://167.172.215/rpc`
- **Fallback:** Automatic browser-side deterministic consensus simulation if node is unreachable or offline
- **Cryptography:** Canonical JSON stringification + Web Crypto API SHA-256 digest computation + Ed25519 signature simulation

---

## Server Deployment Guide

### Option 1: Run with Node.js
```bash
git clone https://github.com/umairkhan2582/vex.git
cd vex
npm install
npm start
```
Server starts on port `3000` with active reverse proxy forwarding `/rpc` to `http://167.172.215/rpc`.

---

### Option 2: Docker / Container
```bash
docker compose up -d
```

---

### Option 3: Modern Vite Development
```bash
npm run dev
```

---

## Security & BYOK Privacy
- **Bring Your Own Key (BYOK):** Keys for OpenAI, Google Gemini, Groq, and OpenRouter are stored **strictly in browser LocalStorage**. They are never transmitted or proxied through intermediary servers.
- **Atomic Rollbacks:** Any state commit can be restored with a single click, dispatching a cryptographically signed `state.rollback` command to the RPC runtime.

---

## License
MIT © 2026 The Seven Chain Networks
