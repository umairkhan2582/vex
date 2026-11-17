# Security Policy

The VEX engineering team takes the security of our deterministic compiler, runtime isolates, and community repositories seriously.

---

## 🔒 Supported Versions

| Version | Supported |
| :--- | :--- |
| VEX v2.5.x | :white_check_mark: |
| VEX v2.0.x | :x: |
| VEX v1.x | :x: |

---

## 🛡️ Key Security Tenets

### 1. Client-Side BYOK (Bring Your Own Key) Protection
- VEX Studio uses a strict Bring-Your-Own-Key (BYOK) architecture for third-party AI engines (OpenAI ChatGPT, Groq, Anthropic).
- API keys entered into the UI are saved strictly in the user's browser `localStorage`.
- Keys are never logged, proxied through intermediate telemetry, or persisted to backend databases.

### 2. Wasmi Sandbox Isolation
- Preview applications execute inside WebAssembly (`wasmi-0.36`) memory isolates and sandboxed browser iframes (`sandbox="allow-scripts allow-modals allow-forms allow-same-origin"`).
- Isolated applications cannot access host file systems, local networks, or parent frame credentials.

### 3. Zero Credential Exposure
- No SSH keys, root passwords, or environment credentials are included in repository code or client bundles.

---

## 🚨 Reporting a Vulnerability

If you discover a security vulnerability in VEX, **do not open a public issue**.  
Please report it privately to our security team:

- **Email**: `safety@talkastranger.com`
- **Response Time**: We acknowledge receipt of vulnerability reports within 24 hours and provide status updates as fixes are validated.

---

## 🏆 Responsible Disclosure
We appreciate the efforts of security researchers who work with us in good faith. Valid, responsibly disclosed findings will be credited in our release notes.
