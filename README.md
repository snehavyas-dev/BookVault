# 📚 BookVault — Full-Stack Digital Library

A modern, responsive, full-stack **Book Library Management Web Application** built with **Node.js**, **Express.js**, **MongoDB (Mongoose)**, and **HTML5/CSS3/JavaScript**.

BookVault allows users to manage a personal collection of books with full CRUD operations, live statistics, reading progress tracking, categories, quotes, and persistent cloud/local database storage.

---

## 🌐 Live Demo & GitHub
- 👉 [Live Demo on GitHub Pages](https://snehavyas-dev.github.io/BookVault/)
- 🐙 [GitHub Repository](https://github.com/snehavyas250-collab/BookVault)

---

## ✨ Features

- 📚 **Add New Books**: Enter title, author, total pages, and initial reading status (`Want to Read`, `Reading`, `Completed`).
- 🔄 **CRUD Operations via REST API**: Create, Read, Update, and Delete books stored permanently in MongoDB.
- 📊 **Reading Statistics**: Live counters for total books, books reading, books completed, and reading progress percentage.
- 📖 **Currently Reading Showcase**: Live dashboard widget highlighting books currently in progress.
- 🎯 **Reading Goals Tracker**: Set annual reading goals with dynamic visual progress bar.
- 🏷️ **Categorization**: Auto-categorizes books with icons and counts.
- 📝 **Book Details & Personal Notes**: Dedicated modal for writing, saving, and expanding book notes.
- 🔍 **Real-Time Search & Status Filtering**: Instant search suggestions and status filter tabs.
- 🌓 **Dark & Light Mode**: User interface theme toggle with persistent preferences.
- 📱 **Fully Responsive**: Optimized for desktop, tablet, and mobile devices.

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Frontend** | HTML5, CSS3, JavaScript (ES6+), DOM APIs |
| **Client-Server Comm.** | `fetch()` API (`async/await`) |
| **Backend Runtime** | Node.js (v24+) |
| **Server Framework** | Express.js (v4) |
| **Database** | MongoDB (Community Server / MongoDB Atlas Cloud) |
| **ODM** | Mongoose (v8) |
| **Configuration** | dotenv, CORS |

---

## 📁 Project Structure

```
02 - Projects/
├── config/
│   └── db.js                 # MongoDB connection handler (Mongoose)
├── models/
│   └── Book.js               # Mongoose Book Schema & Model
├── routes/
│   └── bookRoutes.js         # REST API routes (GET, POST, PUT, DELETE)
├── index.html                # Main BookVault single-page application UI
├── script.js                 # Client-side logic consuming REST API via fetch()
├── style.css                 # Responsive stylesheet with light/dark themes
├── server.js                 # Express server & static asset host
├── package.json              # Project dependencies and scripts
├── .env                      # Environment variables (PORT, MONGODB_URI)
├── .env.example              # Environment variables template
├── .gitignore                # Ignored files (node_modules, .env)
├── PRACTICAL_GUIDE.md        # Complete College Practical & Viva Examination Guide
└── README.md                 # Project documentation
```

---

## 💻 Quick Start & Running Locally

### 1. Clone the repository
```bash
git clone https://github.com/snehavyas250-collab/BookVault.git
cd BookVault
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure Database
Create a `.env` file in the root directory (or copy from `.env.example`):
```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/bookvault
```
*(If using MongoDB Atlas, replace `MONGODB_URI` with your cluster connection string).*

### 4. Start the Application
```bash
npm start
```
Or for development with automatic restart:
```bash
npm run dev
```

### 5. Open in Browser
Visit **[http://localhost:5000](http://localhost:5000)**.

---

## 🎓 College Practical & Viva Reference

For students and examiners evaluating this practical:
- See **[`PRACTICAL_GUIDE.md`](./PRACTICAL_GUIDE.md)** for:
  - Practical Aim & Objectives
  - System Architecture & Workflow Diagram
  - Database Schema & Data Types
  - RESTful Endpoints Table
  - CRUD Step-by-Step Walkthrough
  - 6 Common Viva Questions & Model Answers

---

## ‍💻 About the Developer

Hi! I'm **Sneha Vyas**, a B.Tech Computer Science & Engineering student and aspiring Full Stack Developer.

### 🔗 Connect With Me
- 🌐 [Portfolio](https://snehavyas-dev.github.io/sneha-vyas-dev-portfolio/)
- 💼 [LinkedIn](https://www.linkedin.com/in/sneha-vyas-94a0bb3a3/)
- 🐙 [GitHub](https://github.com/snehavyas-dev)
- 📧 **Email:** snehavyas250@gmail.com

---

⭐ Made with ❤️ by Sneha Vyas
