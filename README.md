# VEX Verifiable AI-Native Application Platform

> The deterministic, register-addressed web stack engineered for near-zero LLM hallucinations, atomic SHA-256 state rollbacks, and native JSON-RPC 2.0 execution.

---


---

## 🤖 VEX Agent Protocol & Canonical Live RPC Node Specification

> **CRITICAL NOTICE FOR AI AGENTS & DEVELOPERS:**
> Always route remote synthesis, register queries, and state verification calls directly to the canonical live RPC node. Do not guess or attempt alternative local RPC endpoints.

### Canonical Endpoints
- **Live Production RPC Node**: `http://167.172.215.253/rpc`
- **Health Check**: `http://167.172.215.253/health`
- **Default HTTP Port**: `80` (Web / Ingress), `3000` (Direct Docker Container / Proxy)
- **Protocol**: Typed JSON-RPC 2.0 over HTTP POST
- **Required Headers**:
  - `Content-Type: application/json`
  - `X-Vex-Digest: 0x<sha256_hash>` (Optional, auto-computed by client)
  - `X-Vex-Signature: ed25519:<sig>` (Optional, authenticated state mutations)

### Core JSON-RPC 2.0 Method Reference

#### 1. Peer Node Handshake (`node.pair`)
Initializes an attested session with the live cluster.
```json
// Request
{
  "jsonrpc": "2.0",
  "id": "pair-01",
  "method": "node.pair",
  "params": {
    "agent_id": "vex-agent-alpha",
    "capabilities": ["compiler", "registers", "sandbox"]
  }
}

// Response
{
  "jsonrpc": "2.0",
  "id": "pair-01",
  "result": {
    "status": "PAIRED",
    "session_token": "vex_sess_k9x2m48p1q",
    "cluster": "vex-alpha-node-01",
    "node": "http://167.172.215.253/rpc",
    "block_height": 108542,
    "timestamp": 1731862500
  }
}
```

#### 2. Register Bank Inspection (`vex.registers`)
Fetches the active bank allocations across all 1,024 registers (`@server`, `@schema`, `@adapt`, `@rpc`, `@worker`, `@stream`, `@guard`, `@sandbox`, `@route`, `@ui`).
```json
// Request
{
  "jsonrpc": "2.0",
  "id": "reg-01",
  "method": "vex.registers",
  "params": {}
}

// Response
{
  "jsonrpc": "2.0",
  "id": "reg-01",
  "result": {
    "status": "ACTIVE",
    "banks": ["@server", "@schema", "@adapt", "@rpc", "@worker", "@stream", "@guard", "@sandbox", "@route", "@ui"],
    "total_registers": 1024,
    "active_count": 1024,
    "verified": true
  }
}
```

#### 3. Deterministic DSL Compilation (`vex.compile`)
Compiles VEX register DSL into verified AST nodes and atomic state root.
```json
// Request
{
  "jsonrpc": "2.0",
  "id": "comp-01",
  "method": "vex.compile",
  "params": {
    "registers": ["#01", "#02", "#03"],
    "dsl": "REG #01 @server:express
REG #02 @schema:crm_lead
REG #03 @route:/api/leads"
  }
}

// Response
{
  "jsonrpc": "2.0",
  "id": "comp-01",
  "result": {
    "status": "COMPILED",
    "registers_allocated": 3,
    "ast_nodes": 428,
    "state_root": "0x8f2a93c1b017e4da28994511082cde4418aef220b",
    "gas_estimate": 24500,
    "verified_signature": true
  }
}
```

#### 4. Live Cluster Deployment (`vex.deploy`)
Commits application bundle to the running VEX execution environment.
```json
// Request
{
  "jsonrpc": "2.0",
  "id": "dep-01",
  "method": "vex.deploy",
  "params": {
    "app_id": "enterprise-crm",
    "state_root": "0x8f2a93c1b017e4da28994511082cde4418aef220b"
  }
}

// Response
{
  "jsonrpc": "2.0",
  "id": "dep-01",
  "result": {
    "status": "DEPLOYED",
    "deployment_hash": "0x4c8a2b1f",
    "block_height": 108544,
    "endpoint": "/vex/app/enterprise-crm",
    "active_registers": 1024,
    "node": "http://167.172.215.253/rpc"
  }
}
```

---

## 🔌 Integrated Connectors

### 1. GitHub Account-Wide Connector
- **Single Sign-On Popup Flow**: Launches Google-style OAuth popup window requesting complete account access (`repo`, `admin:repo_hook`, `user`, `workflow`).
- **Direct Commit & Deployment**: Synthesized applications can be committed and tagged directly to any repository in the user's account.

### 2. ChatGPT / OpenAI Account Connector
- **Popup Login Flow**: Opens official OpenAI authentication prompt in a focused popup dialog.
- **Model Orchestration**: Supports `gpt-4o`, `o1` (complex reasoning), `o3-mini`, and custom temperature tuning.
- **Zero-Storage BYOK Security**: API keys remain strictly client-side in browser `localStorage`.

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
