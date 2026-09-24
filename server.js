const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const connectDB = require("./config/db");
const bookRoutes = require("./routes/bookRoutes");

// Initialize Express app
const app = express();

// Connect to MongoDB
connectDB();

// --------------------------
// Middlewares
// --------------------------
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve frontend static files
app.use(express.static(path.join(__dirname)));

// --------------------------
// API Routes
// --------------------------
app.use("/api/books", bookRoutes);

// Health check endpoint
app.get("/api/health", (req, res) => {
    res.status(200).json({
        status: "OK",
        message: "BookVault API is running smoothly",
        timestamp: new Date().toISOString()
    });
});

// Fallback to index.html for root or SPA navigation
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// --------------------------
// Global Error Handler
// --------------------------
app.use((err, req, res, next) => {
    console.error("Server Error:", err.stack);
    res.status(500).json({
        success: false,
        message: "An internal server error occurred",
        error: process.env.NODE_ENV === "production" ? undefined : err.message
    });
});

// --------------------------
// Start Server
// --------------------------
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`========================================`);
    console.log(`🚀 BookVault Server running on port ${PORT}`);
    console.log(`🌐 Local Web App: http://localhost:${PORT}`);
    console.log(`📚 REST API:     http://localhost:${PORT}/api/books`);
    console.log(`========================================`);
});

