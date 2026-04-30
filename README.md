# 🚀 Antony Sebastian — Portfolio

A modern, animated portfolio built with **React + Vite**, deployable for free on **GitHub Pages**.

---

## 📁 Folder Structure

```
antony-portfolio/
├── index.html                  # Entry HTML
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx                # React root
    ├── App.jsx                 # Main layout
    ├── data/
    │   └── portfolio.js        # ⭐ EDIT THIS FILE to update content
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Hero.jsx
    │   ├── Experience.jsx
    │   ├── Projects.jsx
    │   ├── Skills.jsx
    │   ├── Certifications.jsx
    │   ├── Contact.jsx
    │   └── Footer.jsx
    ├── hooks/
    │   └── useScrollReveal.js  # Scroll animation logic
    └── styles/
        └── global.css          # Design system & animations
```

---

## ✏️ How to Update Your Portfolio

**All content lives in one file: `src/data/portfolio.js`**

### Add a new experience:
```js
export const experience = [
  {
    id: 4,                          // Unique number
    company: "New Company Name",
    role: "Your Role",
    period: "May 2025 – Present",
    location: "City, Country",
    points: [
      "What you did",
      "What you achieved",
    ],
  },
  // ... existing entries
];
```

### Add a new project:
```js
export const projects = [
  {
    id: 5,
    title: "Project Name",
    subtitle: "Short tagline",
    tags: ["React", "Python", "AI"],
    description: "What the project does.",
    github: "https://github.com/yourrepo",
    live: "https://your-live-demo.com",
    featured: true,   // shows as large card
  },
  ...
];
```

### Add a certification:
```js
export const certifications = [
  { issuer: "Google", title: "Professional Machine Learning Engineer" },
  ...
];
```

---

## 🚀 Deploy to GitHub Pages (Free)

### Step 1 — Create a GitHub repo
1. Go to [github.com](https://github.com) → **New repository**
2. Name it `portfolio` (or anything you like)
3. Leave it public

### Step 2 — Push your code
```bash
cd antony-portfolio
git init
git add .
git commit -m "Initial portfolio"
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

### Step 3 — Install dependencies & deploy
```bash
npm install
npm run deploy
```

This builds the site and pushes to a `gh-pages` branch automatically.

### Step 4 — Enable GitHub Pages
1. Go to your repo → **Settings** → **Pages**
2. Under **Source**, select `gh-pages` branch
3. Your portfolio will be live at: `https://YOUR_USERNAME.github.io/portfolio`

---

## 🛠 Local Development

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`

---

## 🔄 Update Your Live Site

After editing `src/data/portfolio.js`:

```bash
git add .
git commit -m "Add new project / experience"
git push
npm run deploy
```

That's it — your live site updates in ~60 seconds.

---

## 🎨 Tech Stack

- **React 18** — UI framework
- **Vite** — Fast build tool
- **CSS Variables** — Design system
- **Intersection Observer API** — Scroll animations (no library needed)
- **Google Fonts** — Syne + DM Sans
- **gh-pages** — Free GitHub Pages deployment
