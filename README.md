# ⚡ VEX — The Verifiable Autonomous Enterprise Framework & Assembly Language

<div align="center">

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![VEX Engine](https://img.shields.io/badge/VEX%20Engine-v2.5%20Active-059669?style=for-the-badge)](http://167.172.215.253/)
[![Live RPC Node](https://img.shields.io/badge/Genesis%20RPC-167.172.215.253-4f46e5?style=for-the-badge)](http://167.172.215.253/rpc)
[![Register Count](https://img.shields.io/badge/VEX%20Registers-1024%20Verified-7c3aed?style=for-the-badge)](REGISTERS.md)
[![Rust Runtime](https://img.shields.io/badge/Rust%20Runtime-Wasmi%200.36-ea580c?style=for-the-badge)](ARCHITECTURE.md)
[![Zero-Telemetry BYOK](https://img.shields.io/badge/Privacy-100%25%20Zero--Telemetry-16a34a?style=for-the-badge)](SECURITY.md)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge)](https://github.com/umairkhan2582/vex/pulls)

**VEX replaces brute-force, fragile LLM code hallucination with a deterministic, addressed virtual register bank.**  
*Synthesize full-stack, responsive, verifiable web applications in under 350 tokens with zero boilerplate waste.*

[🌐 Live Studio](http://167.172.215.253/) • [⚡ Genesis RPC](http://167.172.215.253/rpc) • [📖 Architecture](#-deep-dive-vex-technical-architecture) • [🗺️ 1,024 Register Map](REGISTERS.md) • [🚀 Quick Start](#-quick-start-local-development) • [🌐 P2P Roadmap](#-decentralized-agent-roadmap)

---

</div>

## 📑 Table of Contents

- [🌟 Live Genesis Node & Studio](#-live-genesis-node--studio)
- [🎯 The Problem: Why Current AI Coding Fails](#-the-problem-why-current-ai-coding-fails)
- [🏛️ Deep-Dive: VEX Technical Architecture](#-deep-dive-vex-technical-architecture)
  - [1. Intent Mapping & Virtual Register Synthesis](#1-intent-mapping--virtual-register-synthesis)
  - [2. The 10 Functional Register Banks (#0001 - #1024)](#2-the-10-functional-register-banks-0001---1024)
  - [3. Deterministic Wasmi Execution Engine](#3-deterministic-wasmi-execution-engine)
  - [4. Zero-Latency Sandboxed Preview Engine](#4-zero-latency-sandboxed-preview-engine)
  - [5. Zero-Knowledge BYOK Sandboxing](#5-zero-knowledge-byok-sandboxing)
- [🌐 Decentralized Agent Roadmap](#-decentralized-agent-roadmap)
- [⚡ JSON-RPC 2.0 API Specification](#-json-rpc-20-api-specification)
- [🚀 Quick Start (Local Development)](#-quick-start-local-development)
- [👑 Genesis Domain Sponsorship & Community](#-genesis-domain-sponsorship--community)
- [🛡️ Security, Verification & Accessibility](#-security-verification--accessibility)
- [📜 License](#-license)

---

## 🌟 Live Genesis Node & Studio

The VEX network is live and operational on our bare-metal genesis node:

| Attribute | Genesis Node Specification |
| :--- | :--- |
| **🌐 VEX Studio Web UI** | [http://167.172.215.253/](http://167.172.215.253/) |
| **⚡ JSON-RPC 2.0 Gateway** | `http://167.172.215.253/rpc` (Port `80` / `443`) |
| **⚙️ Core Execution Engine** | `vex-core-rust-wasm-v1` (`wasmi-0.36` WebAssembly Interpreter) |
| **🔑 Genesis Public Key** | `0x1176c31e2a9095e1edc73fa425c9b3826f6d29865045c627eedea5755a1b0df7` |
| **📦 Initial Cryptographic State Root** | `0xe3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855` |
| **🟢 Live Status** | `VERIFIED_ONLINE` (Continuous block height tracking) |

---

## 🎯 The Problem: Why Current AI Coding Fails

Traditional generative AI coding agents (Copilot, Devin, generic LLM prompts) suffer from fundamental architectural flaws:

1. **Non-Deterministic Token Bloat**: LLMs emit thousands of lines of boilerplate HTML, CSS, and JavaScript. A single misaligned bracket or outdated dependency breaks the entire application.
2. **Context Window Exhaustion**: Multi-file software generation consumes 50,000+ tokens per modification, leading to high latency and catastrophic hallucination.
3. **No Verifiable State**: You cannot mathematically verify if generated code satisfies security invariants, routing rules, or data schemas without running untrusted code.

### 💡 The VEX Solution
Instead of generating unconstrained free-form text, **VEX compiles natural language intent into an addressed 1,024-slot Virtual Register Bank**. 

```
Natural Language Intent ──▶ VEX Intent Mapper ──▶ 1,024 Virtual Registers ──▶ Deterministic WASM / HTML5
   ("Build SaaS CRM")         (350 tokens)           (@server, @schema, @ui)       (Zero Hallucination)
```

---

## 🏛️ Deep-Dive: VEX Technical Architecture

```
+───────────────────────────────────────────────────────────────────────────────+
│                                 USER INTENT                                   │
│           (Natural Language Prompt, UI Interaction, or RPC Dispatch)          │
+───────────────────────────────────────────────────────────────────────────────+
                                       │
                                       ▼
+───────────────────────────────────────────────────────────────────────────────+
│                            VEX SYNTHESIS COMPILER                             │
│  ├─ Lexical Token Parser & Semantic Intent Matcher                            │
│  ├─ Multi-Model BYOK Adapter (OpenAI GPT-4o, Claude 3.7, DeepSeek R1, Ollama) │
│  └─ Invariant & Conflict Detection Engine                                     │
+───────────────────────────────────────────────────────────────────────────────+
                                       │
                                       ▼
+───────────────────────────────────────────────────────────────────────────────+
│               VEX DETERMINISTIC REGISTER BANKS (#0001 - #1024)                │
│  ├─ @server  (#0001-#0100)   ├─ @stream   (#0501-#0600)                       │
│  ├─ @schema  (#0101-#0200)   ├─ @guard    (#0601-#0700)                       │
│  ├─ @adapt   (#0201-#0300)   ├─ @sandbox  (#0701-#0800)                       │
│  ├─ @rpc     (#0301-#0400)   ├─ @route    (#0801-#0900)                       │
│  └─ @worker  (#0401-#0500)   └─ @ui       (#0901-#1024)                       │
+───────────────────────────────────────────────────────────────────────────────+
                   │                                           │
                   ▼                                           ▼
+─────────────────────────────────────+     +───────────────────────────────────+
│      WASMI WASM ENGINE (RUST)       │     │     ISOLATED CLIENT SANDBOX       │
│  ├─ Core wasmi-0.36 Bytecode Daemon │     │  ├─ Dynamic iframe Isolation      │
│  ├─ Gas & Fuel Allocation Limiter   │     │  ├─ Tailwind CSS 4.0 Layout JIT   │
│  ├─ Cryptographic State Root Hash   │     │  ├─ Instant Hot-Reload Loop       │
│  └─ Native Linux Systemd Service    │     │  └─ Zero-Latency DOM Injection    │
+─────────────────────────────────────+     +───────────────────────────────────+
```

### 1. Intent Mapping & Virtual Register Synthesis
The user supplies a high-level goal (e.g., *"Add authentication with OAuth, a customers database table, and an analytics dashboard"*).
The compiler synthesizes this into clean, typed VEX Register definitions:
```vex
@server #0001 { listen: 8080, tls: true, cors: ["*"] }
@schema #0101 { table: "customers", primary: "id", fields: ["name:str", "email:str", "plan:str"] }
@guard  #0601 { auth: "jwt", roles: ["admin", "developer"], rate_limit: "100/min" }
@ui     #0901 { view: "dashboard", layout: "sidebar_grid", theme: "dark_enterprise" }
```

### 2. The 10 Functional Register Banks (#0001 - #1024)
VEX partitions the application state into **10 dedicated architectural banks**, each strictly audited to prevent overlapping concerns:

| Bank Prefix | Offset Range | Architectural Role | Example Responsibilities |
| :--- | :--- | :--- | :--- |
| **`@server`** | `#0001 - #0100` | Host & Network Bindings | Port listening, TLS termination, CORS policy, process threads |
| **`@schema`** | `#0101 - #0200` | Data Structures & Entities | Typed database models, indexes, foreign keys, migrations |
| **`@adapt`** | `#0201 - #0300` | External Third-Party Adapters | Stripe payments, SendGrid email, AWS S3 storage adapters |
| **`@rpc`** | `#0301 - #0400` | Communication Protocols | JSON-RPC 2.0 methods, WebSocket channels, gRPC endpoints |
| **`@worker`** | `#0401 - #0500` | Background Queues & Tasks | Asynchronous queue dispatch, scheduled cron cycles, batch jobs |
| **`@stream`** | `#0501 - #0600` | Event Pipes & Reactive Feeds | SSE (Server-Sent Events), pub/sub messaging, telemetry pipes |
| **`@guard`** | `#0601 - #0700` | Zero-Trust Security & Policies | JWT verification, RBAC permissions, CSP headers, rate limiters |
| **`@sandbox`** | `#0701 - #0800` | Virtual Isolates & Execution | WASM runtime isolates, memory fuel limits, sandbox containment |
| **`@route`** | `#0801 - #0900` | Navigation & Middleware Flow | URL routing, deep-linking, auth guards, fallback redirects |
| **`@ui`** | `#0901 - #1024` | Component Trees & Visuals | Design systems, responsive layouts, data grids, themes |

👉 *For the complete register specification, inspect [REGISTERS.md](REGISTERS.md).*

### 3. Deterministic Wasmi Execution Engine
The backend engine is implemented in Rust using `wasmi-0.36`.
- **Gas / Fuel Metering**: Every register compilation step consumes deterministic gas units. Infinite loops and runaway recursions are halted at the bytecode boundary.
- **State Root Verification**: Every compilation produces a cryptographic SHA-256 state root:
  $$	ext{StateRoot} = \mathcal{H}(	ext{Reg}_{0001} \mathbin{\Vert} \dots \mathbin{\Vert} 	ext{Reg}_{1024})$$
  Any two nodes compiling the same register set arrive at the exact same root hash.

### 4. Zero-Latency Sandboxed Preview Engine
VEX Studio executes compiled code directly within a securely isolated browser iframe:
- **Hot-Reload in < 15ms**: Changes to `@ui` registers instantly re-render the preview without page reloads.
- **Sandboxed DOM**: Untrusted scripts cannot access outer cookies, parent window tokens, or host storage.
- **Responsive Viewport Toggles**: Seamless mobile (375px), tablet (768px), and desktop (1280px) testing.

### 5. Zero-Knowledge BYOK Sandboxing
- **100% Client-Side Credentials**: Your GitHub Personal Access Tokens and OpenAI/ChatGPT API keys are stored strictly in browser `localStorage`.
- **Zero Logging**: Credentials are never transmitted to, logged by, or cached on the VEX genesis node.
- **Direct Edge Routing**: LLM completions stream directly between your browser and OpenAI's API endpoints.

---

## 🌐 Decentralized Agent Roadmap

VEX is transitioning into a **100% free, community-powered decentralized coding agent**:

```
           [ VEX Genesis Node #01 ]
                     ▲
            libp2p GossipSub Swarm
          ┌──────────┴──────────┐
          ▼                     ▼
[ Community Node #02 ]   [ Community Node #03 ]
 (Local Ollama Engine)    (WebGPU In-Browser LLM)
          │                     │
          ▼                     ▼
[ IPFS Immutable CID ]   [ Arweave Permanent Host ]
```

- **[#8] P2P Node Swarm (libp2p)**: Volunteer nodes cluster via gossipsub to verify register compilation blocks and eliminate reliance on any central server.
- **[#9] Local LLM Engine Bridge**: Zero-cost offline coding via `http://localhost:11434` (Ollama Llama 3.3, Qwen 2.5 Coder, DeepSeek) and WebGPU in-browser models.
- **[#10] IPFS & Arweave Decentralized Deployment**: One-click deployment of compiled apps to IPFS CIDs and Arweave permaweb with decentralized ENS / IPNS routing.
- **[#11] Autonomous Multi-Agent Consensus**: Tri-agent loop where Synthesizer, Validator, and Critic agents autonomously test, fuzz, and self-heal applications.

---

## ⚡ JSON-RPC 2.0 API Specification

The Genesis Node exposes a compliant JSON-RPC 2.0 server at `/rpc`:

### 1. `health.ping` — Node Health & Engine Verification
```bash
curl -X POST http://167.172.215.253/rpc   -H "Content-Type: application/json"   -d '{"jsonrpc":"2.0","method":"health.ping","params":[],"id":1}'
```
**Response:**
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "block_height": 8,
    "engine": "vex-core-rust-wasm-v1",
    "node_pubkey": "0x1176c31e2a9095e1edc73fa425c9b3826f6d29865045c627eedea5755a1b0df7",
    "state_root": "0xe3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
    "status": "VERIFIED_ONLINE",
    "wasm_module_count": 7,
    "wasmtime_version": "wasmi-0.36 (Wasmi interpreter; not Wasmtime)"
  }
}
```

### 2. `vex.registers` — Fetch Registered Allocations
```bash
curl -X POST http://167.172.215.253/rpc   -H "Content-Type: application/json"   -d '{"jsonrpc":"2.0","method":"vex.registers","params":{"bank":"@ui"},"id":2}'
```

---

## 🚀 Quick Start (Local Development)

### Prerequisites
- Node.js >= 18.0.0
- Rust & Cargo (optional, for compiling `vex-core`)

### 1. Clone & Run with Node.js
```bash
# Clone the official repository
git clone https://github.com/umairkhan2582/vex.git
cd vex

# Install dependencies and start server
npm install
node server.js
```
Visit `http://localhost:3000` in your browser.

### 2. Run with Docker Compose
```bash
docker compose up -d
```

---

## 👑 Genesis Domain Sponsorship & Community

The VEX genesis node currently operates at `http://167.172.215.253/`.  
**We invite developers, projects, and domain sponsors to connect a custom domain!**

### How to Sponsor:
1. Point your domain's DNS `A` record to `167.172.215.253`.
2. Submit a Pull Request adding your domain and branding to our [Sponsors Directory](https://github.com/umairkhan2582/vex/blob/main/README.md).
3. Automated TLS certificates are provisioned for verified domains via Certbot.

---

## 🛡️ Security, Verification & Accessibility

- **[SECURITY.md](SECURITY.md)**: Zero-knowledge BYOK encryption, client-side isolation, and vulnerability disclosure policies.
- **[ACCESSIBILITY.md](ACCESSIBILITY.md)**: WCAG 2.1 AA conformance commitment, keyboard navigable register trees, high-contrast dark themes.
- **[CONTRIBUTING.md](CONTRIBUTING.md)**: Architecture standards, PR checklists, and testing protocols.
- **[CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md)**: Contributor Covenant v2.1.

---

## 📜 License

Distributed under the **MIT License**. Free and open-source for personal, enterprise, and decentralized community use.  
Built with pride by [Umair Khan](https://github.com/umairkhan2582) and the open-source community.
