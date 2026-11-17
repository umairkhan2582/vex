# VEX RPC Studio

> Verifiable AI-Native Application Ecosystem — Typed JSON-RPC 2.0 Developer Console

A clean, modern, dark technical developer console engineered for managing, inspecting, and testing typed JSON-RPC 2.0 endpoints, register state transitions (`@state`, `@rpc`, `@ui`), Ed25519 signature simulation, and deterministic verification.

---

## Core Features

1. **RPC Connection Manager**
   - Live target RPC Endpoint input with optional Bearer / Ed25519 Signature Header.
   - Interactive Ping / Handshake status indicator with real-time RTT latency badge.
   - Profile switcher: VEX Devnet, Localhost Node (`:8545`), VEX Alpha Testnet, or Custom endpoints with localStorage persistence.

2. **VEX Register & RPC Composer**
   - **Register Editor**: Syntax support for `@state #01`, `@rpc #02`, `@ui #03`, and `@bus #04` registers with live syntax parsing.
   - **One-Click Presets**:
     - `health.ping` (#00 System Heartbeat)
     - `state.commit` (#01 Core State Delta)
     - `ui.render` (#03 Reactive UI Manifest)
   - **Request Inspector**: Structured JSON-RPC 2.0 payload buffer with automatic SHA-256 deterministic content digest computation.
   - **Ed25519 Signature Simulator**: Cryptographic signature generation and verification toggle over request digests.
   - **Response Viewer & Atomic State Timeline**: Formatted JSON response envelope with gas consumption, state root attestations, block height tracking, and a **1-click Revert State** rollback engine.

3. **Documentation & Protocol Specification**
   - Comprehensive reference covering the VEX JSON-RPC 2.0 wire format, 5-stage verification lifecycle, register addressing `#01-#04`, and standard error codes (`-32700`, `-32600`, `-32001`, `-32002`).

4. **Real-time Event Stream**
   - Minimizable bottom drawer streaming timestamped RPC handshakes, signature checks, and block commitments.

---

## Quick Start on Your Server

### Option 1: Standalone Single-File (Zero Build Dependencies)
Run immediately with any static file server or Python:
```bash
# Clone the repository
git clone https://github.com/umairkhan2582/vex.git
cd vex

# Run with Python
python3 -m http.server 3000

# Or run with Node.js built-in server
node server.js
```
Open `http://localhost:3000` in your browser.

---

### Option 2: Node.js / Express Server
```bash
npm install
npm start
```

---

### Option 3: Docker Deployment
```bash
docker compose up -d
```
Access the console at `http://<your-server-ip>:3000`.

---

## License
MIT © 2026 Muhammad Khan / The Seven Chain Networks
