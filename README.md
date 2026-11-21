# Adithiya B Vinu - Modern Animated React Portfolio

A modern, highly animated, dark-themed personal portfolio built with **React 19**, **Tailwind CSS v4**, and **Vite**, featuring ambient background glow meshes, role typewriter effects, and glassmorphic card architecture.

> **Junior Project Manager | ERP Software Functional | QA & UAT**  
> *Odoo Implementation & Business Process Delivery*

---

## ⚡ Live Deployment

👉 **[https://adithiyagit.github.io/PORTFOLIO/](https://adithiyagit.github.io/PORTFOLIO/)**

---

## 🛠 Tech Stack

- **Frontend Framework:** React 19
- **Build Tool:** Vite 6
- **Styling:** Tailwind CSS v4 + Custom Glassmorphism & Ambient Glow Meshes
- **Icons:** Lucide React
- **Typography:** Space Grotesk (Headings) + Plus Jakarta Sans (Body)
- **Deployment:** GitHub Pages (Automatic Relative Asset Pipeline)

---

## 💻 Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start Vite development server with Hot Module Replacement (HMR)
npm run dev

# 3. Build production bundle for deployment
npm run build
```

---

## 📁 Project Architecture

```
Portfolio/
├── index.html                   # Compiled production entry point (GitHub Pages ready)
├── package.json                 # Dependencies & build scripts
├── vite.config.js               # Vite + React + Tailwind v4 configuration
├── src/
│   ├── index.html               # Source HTML template
│   ├── main.jsx                 # React root mount
│   ├── App.jsx                  # Main application orchestrator
│   ├── index.css                # Tailwind imports + ambient glow animations
│   ├── data/
│   │   └── portfolioData.js     # Single source of truth for resume data
│   └── components/
│       ├── Navbar.jsx           # Floating glassmorphic pill navbar
│       ├── Hero.jsx             # Animated typewriter, arch portrait & floating stat cards
│       ├── Metrics.jsx          # 4-card KPI grid with glowing counters
│       ├── Competencies.jsx     # 6 glassmorphic service cards
│       ├── Experience.jsx       # Career timeline for Empire AE & Turqosoft
│       ├── Projects.jsx         # Jewellery 9-Store ERP Rollout & Fleet ERP cards
│       ├── EducationMobility.jsx# Academic & relocation readiness cards
│       ├── ContactHub.jsx       # 1-click email copy, WhatsApp, LinkedIn, Resume
│       └── Footer.jsx           # Clean dark footer with back-to-top
└── assets/                      # Static images, documents, and compiled bundles
```
