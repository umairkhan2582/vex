# VEX — The Verifiable Autonomous Application Framework & Assembly Language

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![VEX Engine](https://img.shields.io/badge/VEX%20Engine-v2.5%20Active-emerald)](http://167.172.215.253/)
[![Live Node](https://img.shields.io/badge/RPC%20Node-167.172.215.253-indigo)](http://167.172.215.253/rpc)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/umairkhan2582/vex/pulls)

> **VEX replaces brute-force, fragile LLM code hallucination with a deterministic, addressed virtual register bank.**  
> Compile full-stack, responsive, verifiable web applications in under 350 tokens with zero wasted boilerplate.

---

## 🌐 Live Genesis Node & Studio
- **VEX Studio UI**: [http://167.172.215.253/](http://167.172.215.253/)
- **VEX RPC Endpoint**: `http://167.172.215.253/rpc`

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
Existing coding agents write thousands of lines of verbose HTML, React, and server boilerplate on every prompt. This causes:
1. **Severe Token Waste**: 8,000+ tokens consumed per minor modification.
2. **Hallucination Cascades**: Unstable dependency versions and missing imports.
3. **Non-Verifiability**: No deterministic way to validate application state before deployment.

### The VEX Solution: 1,024 Addressed Virtual Registers
VEX treats software synthesis as hardware register assignment:
- `@server` (#0001–#0100): HTTP routes, API endpoints, microservices.
- `@schema` (#0101–#0200): Database entities, relational models, validation guards.
- `@adapt`  (#0201–#0300): Third-party API wrappers, webhooks, Resend mail relay.
- `@rpc`    (#0301–#0400): Sub-millisecond JSON-RPC dispatch to the VEX node.
- `@worker` (#0401–#0500): Async background queues and scheduled tasks.
- `@stream` (#0501–#0600): Real-time WebSockets and SSE telemetry feeds.
- `@guard`  (#0601–#0700): Role-Based Access Control and zero-trust policies.
- `@sandbox` (#0701–#0800): Isolated JS memory execution environments.
- `@route`  (#0801–#0900): Client-side navigation, deep links, URL states.
- `@ui`     (#0901–#1024): Tailwind layout engines, responsive tables, reactive modals.

---

## 🔑 AI Engine & ChatGPT Connector
VEX Studio supports direct integration with frontier AI models:
- **ChatGPT / OpenAI**: Connect directly using your API key from [platform.openai.com/api-keys](https://platform.openai.com/api-keys).
  > *Note: OpenAI does not support consumer OAuth redirects for third-party web apps. Enter your API key securely into VEX Studio; it is stored strictly in your browser's local sandbox.*
- **Groq & OpenRouter**: Free sub-second compilation with Llama 3.3 and Claude 3.5.

---

## 🚀 Quickstart

### Run with Docker Compose
```bash
git clone https://github.com/umairkhan2582/vex.git
cd vex
docker compose up -d --build
```
Access VEX Studio at `http://localhost:3000`.

---

## 🗺️ Community Roadmap & Open Issues
We are building the first decentralized, ultra-low-cost coding agent ecosystem:
- [ ] **Issue #1**: WASM / RISC-V Bytecode verification for register state transitions.
- [ ] **Issue #2**: Decentralized gossip protocol for peer-to-peer VEX nodes.
- [ ] **Issue #3**: Automated Let's Encrypt TLS certificate provisioning for sponsored custom domains.
- [ ] **Issue #4**: Native VS Code and Cursor extension for `.vex` assembly files.

---

## 📜 License
VEX is open-source software licensed under the **MIT License**.
