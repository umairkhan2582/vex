# Contributing to VEX

Thank you for your interest in contributing to **VEX — The Verifiable Autonomous Application Framework**!  
We are building a deterministic, zero-hallucination compiler and runtime for enterprise web software.

---

## 📜 Code of Conduct
This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

---

## 🚀 Getting Started

1. **Fork the Repository**: Create your personal fork on GitHub.
2. **Clone Locally**:
   ```bash
   git clone https://github.com/<your-username>/vex.git
   cd vex
   ```
3. **Run Locally**:
   ```bash
   # Run the production server
   node server.js
   ```
   Open `http://localhost:3000` in your browser.

---

## 🌿 Branching Strategy

- `main`: The production, deployable release branch.
- `feature/<name>`: New capabilities (e.g. `feature/wasmi-jit-optimizer`).
- `fix/<name>`: Bug fixes and security patches (e.g. `fix/mobile-drawer-overflow`).
- `rfc/<name>`: Architectural proposals and register bank expansions.

---

## 🤝 Contribution Guidelines

### 1. Register Integrity
When adding features that touch VEX registers:
- Ensure your changes follow the [Register Specification](REGISTERS.md).
- Never reallocate or collide existing register addresses (#0001-#1024).
- Maintain deterministic state roots across compilations.

### 2. Zero Secret Exposure
- Never commit private keys, SSH keys, passwords, or personal access tokens.
- All third-party AI keys (OpenAI, Anthropic, Groq) must remain client-side (BYOK) in browser storage.

### 3. Pull Request Process
1. Keep PRs focused on a single change or issue.
2. Include clear descriptions and test procedures in the PR body.
3. Verify responsive design on mobile (320px - 425px) and desktop viewports.
4. **Maintainer Review**: All pull requests require review and approval from `@umairkhan2582` prior to merging into `main`.

---

## 🐛 Reporting Issues
Use the GitHub Issues tracker to report bugs or submit feature proposals. Please search existing issues before opening a new one.
