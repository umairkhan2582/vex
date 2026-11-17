# VEX — The Verifiable Autonomous Application Framework & Assembly Language

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![VEX Engine](https://img.shields.io/badge/VEX%20Engine-v2.5%20Active-emerald)](http://167.172.215.253/)
[![Live Node](https://img.shields.io/badge/RPC%20Node-167.172.215.253-indigo)](http://167.172.215.253/rpc)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/umairkhan2582/vex/pulls)
[![Register Count](https://img.shields.io/badge/VEX%20Registers-1024%20Verified-blueviolet)](REGISTERS.md)

> **VEX replaces brute-force, fragile LLM code hallucination with a deterministic, addressed virtual register bank.**  
> Compile full-stack, responsive, verifiable web applications in under 350 tokens with zero wasted boilerplate.

---

## 🌐 Live Genesis Node & Studio
- **VEX Studio UI**: [http://167.172.215.253/](http://167.172.215.253/)
- **Live RPC Endpoint**: `http://167.172.215.253/rpc`
- **Engine Spec**: `vex-core-rust-wasm-v1` (Wasmi 0.36 WebAssembly Interpreter)

---

## 🏛️ Genesis Domain Sponsorship Wanted!
The VEX project is fully open-source and currently running on our live genesis bare-metal node (`http://167.172.215.253/`).  
**We invite developers, venture funds, and community builders to sponsor a domain name!**

### How to Sponsor:
1. Point your domain's DNS `A` records to `167.172.215.253`.
2. Open a Pull Request adding your domain and branding credit to the Genesis Sponsor Hall of Fame below!
3. All contributors and sponsors retain permanent attribution in the core repository.

---

## 💡 What Problem Does VEX Solve?
Existing coding agents output unstructured, verbose text files containing thousands of lines of JavaScript and HTML. When code generation fails, debugging requires non-deterministic re-prompting.

**VEX solves this through:**
1. **1,024 Deterministic Virtual Registers**: Structured into 10 banks covering `@server`, `@schema`, `@adapt`, `@rpc`, `@worker`, `@stream`, `@guard`, `@sandbox`, `@route`, and `@ui`. See [REGISTERS.md](REGISTERS.md).
2. **Deterministic Bytecode Compilation**: Compiling the same intent always produces the same cryptographic state root.
3. **Bring-Your-Own-Key (BYOK) Live Synthesis**: Direct in-browser connectors for **GitHub** and **ChatGPT (OpenAI)** with zero key logging or server-side telemetry.
4. **Isolate Sandbox Containment**: Real-time hot-reloading iframe sandboxes for safe execution.

---

## 🚀 Quick Start (Local Setup)

```bash
# 1. Clone the repository
git clone https://github.com/umairkhan2582/vex.git
cd vex

# 2. Run the production server
node server.js
```
Open `http://localhost:3000` to interact with VEX Studio.

---

## ⚡ RPC Node Quick Test

Verify the live genesis node state over JSON-RPC 2.0:

```bash
curl -X POST http://167.172.215.253/rpc \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"2.0","method":"health.ping","params":[],"id":1}'
```

**Expected Response:**
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

---

## 📚 Documentation Directory

- **[REGISTERS.md](REGISTERS.md)** — Complete 1,024 register specification and address map.
- **[ARCHITECTURE.md](ARCHITECTURE.md)** — Technical deep dive into compiler and Wasmi layers.
- **[CONTRIBUTING.md](CONTRIBUTING.md)** — Open source guidelines and PR review process.
- **[SECURITY.md](SECURITY.md)** — Vulnerability reporting and client-side BYOK privacy guarantees.
- **[CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md)** — Community standards and Contributor Covenant.

---

## 📄 License
MIT License. Open source and free for enterprise, academic, and community use.
