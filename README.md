# Adithiya B Vinu - Personal Portfolio Website

Fast, professional, single-page portfolio tailored for recruiters and hiring managers across **India & UAE / GCC**. Positioned specifically as an **ERP Functional Consultant | Project Coordinator | QA & UAT**.

---

## 🚀 Live Preview & Quick Start

Because this website is built with clean semantic HTML5, modern CSS3, and vanilla JavaScript without any build steps or heavyweight dependencies:

- **Instant Local Preview:** Double-click `index.html` in your file explorer to open it in any modern browser.
- **Local Dev Server (Optional):**
  ```bash
  # Using Python
  python -m http.server 8000
  # Then open http://localhost:8000 in your browser
  ```

---

## 📁 Project Architecture

```
Portfolio/
├── index.html                   # Core semantic HTML5 structure, accessible, SEO & OG meta tags
├── css/
│   └── style.css                # Executive corporate theme (Navy + Gold), dark/light modes, responsive layout
├── js/
│   ├── content.js               # SINGLE SOURCE OF TRUTH: All text, metrics, case studies, certs & links
│   └── app.js                   # Application logic: Dark/Light toggle, modal inspector, copy toast, tabs
├── assets/
│   ├── images/
│   │   ├── profile-avatar.svg   # Executive monogram crest avatar
│   │   ├── og-card.svg          # Social sharing / Open Graph card
│   │   └── artifacts/           # Deliverable visual mockups (SOP, Approval Matrix, UAT Log, Fleet Workflow)
│   └── docs/
│       └── Adithiya_B_Vinu_Resume.pdf # Downloadable resume PDF
└── README.md                    # Documentation & deployment guide
```

---

## 📋 Missing Inputs Checklist (What You Need to Provide)

You can easily customize these items by editing **`js/content.js`** or replacing placeholder assets in **`assets/`**:

| # | Item | Location | Current Placeholder | Recommended Action |
|---|------|----------|---------------------|--------------------|
| 1 | **Resume PDF** | `assets/docs/Adithiya_B_Vinu_Resume.pdf` | Sample PDF document | Replace with your finalized, official 1-2 page Resume PDF |
| 2 | **Direct Email** | `js/content.js` & `index.html` | `adithiyabvinu@gmail.com` | Confirm or update to your preferred primary job search email |
| 3 | **Phone / WhatsApp** | `js/content.js` & `index.html` | `+91 98765 43210` | Update with your active WhatsApp and calling number |
| 4 | **LinkedIn Profile** | `js/content.js` & `index.html` | `linkedin.com/in/adithiyabvinu` | Replace with your exact LinkedIn vanity URL |
| 5 | **GitHub Profile** | `js/content.js` & `index.html` | `github.com/adithiyabvinu` | Replace with your exact GitHub username / link |
| 6 | **Profile Picture (Optional)** | `assets/images/profile-avatar.svg` | Stylized executive monogram crest (`ABV`) | If you have a formal corporate headshot, save it as `profile.jpg` and update the `src` in `index.html` |
| 7 | **Jewellery Client Name** | `js/content.js` & `index.html` | "Jewellery Retail Group (9 Stores)" | Keep anonymized unless you have written permission from the client to name them publicly |
| 8 | **Specific Metrics (Optional)**| `js/content.js` | 164 UAT cases, 70% faster bank reconciliation, 70+ staff trained | Adjust any figures in `js/content.js` if you have exact internal figures |

---

## 🌐 Free Deployment Guide

### Option A: GitHub Pages (Recommended - 3 Minutes)

1. **Create a GitHub Repository:**
   - Log in to your GitHub account at [github.com](https://github.com).
   - Click **New Repository**.
   - Name it `portfolio` (or `adithiyabvinu.github.io`).
   - Keep it **Public** and do not add a README (since this repository already has one).
2. **Push your code:**
   Open PowerShell or Terminal in `c:\Users\T470S\Desktop\Portfolio`:
   ```bash
   git init
   git add .
   git commit -m "Initial release of ERP Functional Consultant Portfolio"
   git branch -M main
   git remote add origin https://github.com/<YOUR_USERNAME>/portfolio.git
   git push -u origin main
   ```
3. **Enable GitHub Pages:**
   - Go to your repository on GitHub.
   - Click **Settings** $\to$ **Pages** (under Code and automation in the left sidebar).
   - Under **Build and deployment $\to$ Branch**, select `main` and `/ (root)`.
   - Click **Save**.
   - Within 60 seconds, your site will be live at:
     `https://<YOUR_USERNAME>.github.io/portfolio/`

---

### Option B: Vercel (1-Click Drag & Drop)

1. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
2. Click **Add New...** $\to$ **Project**.
3. Import your GitHub repository (or simply drag and drop the `Portfolio` folder).
4. Click **Deploy**.
5. Your site is instantly live with a global CDN and automatic SSL certificate.

---

## 🎨 Theme & Customization Notes

- **All Copy is Decoupled:** You do not need to hunt through HTML tags to change your skills or project descriptions. Simply open `js/content.js`, modify the text, and save.
- **Default Theme:** Configured to **Executive Corporate Light Mode** by default (clean off-white background with deep navy and gold accents) to project formal consulting authority for enterprise recruiters.
- **Dark Mode:** A persistent, accessible dark theme toggle is built into the navbar and remembers visitor preferences in `localStorage`.
- **Lighthouse Performance:** Built without render-blocking framework runtimes or external fonts to guarantee 95-100 scores in Performance, Accessibility, Best Practices, and SEO.
