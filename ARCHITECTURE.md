# VEX Technical Architecture

VEX is an enterprise-grade autonomous synthesis engine and runtime. It replaces brute-force LLM code hallucination with a deterministic, addressed register bank.

```
+-------------------------------------------------------------------------+
|                              USER INTENT                                |
|        (Natural Language Prompt, UI Event, or REST/RPC Invocation)       |
+-------------------------------------------------------------------------+
                                    |
                                    v
+-------------------------------------------------------------------------+
|                         VEX SYNTHESIS COMPILER                          |
|  - Token Parser & Intent Mapper                                         |
|  - Register Allocator (@server, @schema, @rpc, @guard, @ui, etc.)       |
|  - Invariant Checking & Collision Prevention Engine                     |
+-------------------------------------------------------------------------+
                                    |
                                    v
+-------------------------------------------------------------------------+
|                  VEX DETERMINISTIC REGISTER BANK (#0001-#1024)          |
|  - 10 Functional Banks / 1,024 Verified Address Slots                   |
|  - Cryptographic State Root & Digest Generation                         |
+-------------------------------------------------------------------------+
                                    |
                  +-----------------+-----------------+
                  |                                   |
                  v                                   v
+-----------------------------------+ +-----------------------------------+
|      WASMI WEBASSEMBLY ENGINE     | |      LIVE CLIENT SANDBOX          |
|  - Core Rust Runtime (wasmi-0.36) | |  - Iframe Isolate Containment     |
|  - Fuel/Gas Metering              | |  - Zero-Latency Preview Hot-Reload|
|  - JSON-RPC 2.0 Daemon Binding    | |  - Reactive State Store           |
+-----------------------------------+ +-----------------------------------+
```

---

## 🏛️ Core Architectural Pillars

### 1. Deterministic Virtual Registers
Traditional AI coding tools output hundreds of lines of variable text where subtle hallucination cascades into broken builds. VEX maps every application component to addressed registers (#0001 - #1024). Once intent is mapped to registers, the runtime guarantees deterministic execution.

### 2. Wasmi Runtime Integration
The genesis node (`167.172.215.253`) runs the `vex-core-rust-wasm-v1` engine powered by Wasmi 0.36.
- **Port**: 80 / 443
- **RPC Path**: `/rpc`
- **Protocol**: JSON-RPC 2.0
- **Supported Methods**: `health.ping`, `node.pair`, `vex.compile`, `vex.deploy`, `vex.registers`

### 3. Dual Integration Connectors
VEX Studio includes built-in, one-click connectors for:
- **GitHub Direct Connector**: Commit and deploy preview applications straight to repositories using user PATs.
- **ChatGPT & OpenAI Connector**: BYOK live model synthesis with GPT-4o, GPT-4o-mini, and o1-mini.

---

## 🌐 Genesis Bare-Metal Node Specs
- **IP**: `167.172.215.253`
- **OS**: Linux x86_64
- **Runtime**: Node.js + Rust Wasmi Bytecode Engine
- **State Root**: `0xe3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855`
- **Node Pubkey**: `0x1176c31e2a9095e1edc73fa425c9b3826f6d29865045c627eedea5755a1b0df7`
