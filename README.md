# 🧩 React + Vite Frontend Project: Task Manager & API Explorer

A modern, responsive React application built with **Vite** and styled using **Tailwind CSS**. It includes a Task Manager with full CRUD functionality and an API Explorer that fetches and displays public data with filtering, pagination, and search features.

## 📸 Live Demo

🌐 [🔗 View the deployed app here](https://your-app-url.vercel.app)  
_(Replace with your actual deployed URL)_

---

## 🚀 Features

### ✅ Task Manager
- Add, complete, delete, and filter tasks
- Data persistence using `localStorage`
- Theme support (Light/Dark mode)

### ✅ API Explorer
- Fetches posts from JSONPlaceholder
- Includes search, pagination, and loading/error states

### ✅ UI Components
- Reusable `Button`, `Card`, `Navbar`, `Footer`, `Layout`
- Built with Tailwind utility classes and responsive design

---

## 🏗️ Project Structure

```bash
my-front-end-app/
├── public/
├── src/
│   ├── assets/              # Static files (images, logos)
│   ├── components/          # Reusable UI components
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── Layout.jsx
│   ├── context/             # ThemeContext
│   ├── hooks/               # Custom hooks (e.g., useLocalStorage)
│   ├── pages/               # Page components
│   │   ├── Home.jsx
│   │   ├── Tasks.jsx
│   │   └── APIExplorer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
