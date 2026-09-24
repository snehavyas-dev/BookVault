# 📚 BookVault — Full-Stack Book Library Web Application

BookVault is a full-stack personal library management system built with **Node.js**, **Express.js**, **MongoDB**, and vanilla **HTML5/CSS3/JavaScript**.

---

## 🚀 Features
- **Persistent Database Integration**: Books stored permanently in MongoDB via Mongoose.
- **RESTful API**: Clean REST endpoints for full CRUD operations.
- **Dynamic Frontend**: Real-time stats, cover themes, reading progress tracker, and custom notes.
- **Search, Filter & Sort**: Search by title/author, filter by status, and sort by pages/title.
- **Light & Dark Theme**: Persistent appearance preferences.

---

## 📁 Project Structure

```
02 - Projects/
├── config/
│   └── db.js                 # MongoDB connection using Mongoose
├── models/
│   └── Book.js               # Mongoose Book schema & model
├── routes/
│   └── bookRoutes.js         # REST API routes (GET, POST, PUT, DELETE)
├── index.html                # Main BookVault single-page application UI
├── script.js                 # Frontend logic consuming REST API via fetch()
├── style.css                 # Styling, responsive layout & themes
├── server.js                 # Express server entry point
├── package.json              # Project dependencies & scripts
├── .env                      # Environment variables (PORT, MONGODB_URI)
├── .env.example              # Template for environment variables
├── .gitignore                # Ignored files (node_modules, .env)
├── PRACTICAL_GUIDE.md        # Complete College Practical & Viva Guide
└── README.md                 # Project documentation
```

---

## 🛠️ Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure MongoDB
In `.env`, set your connection string:
- **Local MongoDB**: `MONGODB_URI=mongodb://127.0.0.1:27017/bookvault`
- **MongoDB Atlas Cloud**: `MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/bookvault?retryWrites=true&w=majority`

### 3. Run Server
```bash
npm start
```
Or for development with automatic restart:
```bash
npm run dev
```

### 4. Open in Browser
Visit **[http://localhost:5000](http://localhost:5000)**.

