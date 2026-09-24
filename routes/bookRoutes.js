const express = require("express");
const router = express.Router();
const Book = require("../models/Book");

/**
 * @route   GET /api/books
 * @desc    Fetch all books from MongoDB
 * @access  Public
 */
router.get("/", async (req, res) => {
    try {
        const books = await Book.find().sort({ createdAt: -1 });
        res.status(200).json({
            success: true,
            count: books.length,
            data: books
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch books",
            error: error.message
        });
    }
});

/**
 * @route   GET /api/books/:id
 * @desc    Fetch a single book by ID
 * @access  Public
 */
router.get("/:id", async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).json({
                success: false,
                message: "Book not found"
            });
        }
        res.status(200).json({
            success: true,
            data: book
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch book",
            error: error.message
        });
    }
});

/**
 * @route   POST /api/books
 * @desc    Add a new book to MongoDB
 * @access  Public
 */
router.post("/", async (req, res) => {
    try {
        const { title, author, pages, status, currentPage, favorite, category, notes } = req.body;

        // Validation check
        if (!title || !author || !pages) {
            return res.status(400).json({
                success: false,
                message: "Please provide title, author, and number of pages"
            });
        }

        const newBook = await Book.create({
            title,
            author,
            pages: Number(pages),
            status: status || "want-to-read",
            currentPage: currentPage !== undefined ? Number(currentPage) : (status === "completed" ? Number(pages) : 0),
            favorite: Boolean(favorite),
            category: category || "Uncategorized",
            notes: notes || ""
        });

        res.status(201).json({
            success: true,
            message: "Book added successfully",
            data: newBook
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Failed to add book",
            error: error.message
        });
    }
});

/**
 * @route   PUT /api/books/:id
 * @desc    Update an existing book by ID
 * @access  Public
 */
router.put("/:id", async (req, res) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!updatedBook) {
            return res.status(404).json({
                success: false,
                message: "Book not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Book updated successfully",
            data: updatedBook
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Failed to update book",
            error: error.message
        });
    }
});

/**
 * @route   DELETE /api/books/:id
 * @desc    Delete a book by ID from MongoDB
 * @access  Public
 */
router.delete("/:id", async (req, res) => {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id);

        if (!deletedBook) {
            return res.status(404).json({
                success: false,
                message: "Book not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Book deleted successfully",
            data: { id: req.params.id }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to delete book",
            error: error.message
        });
    }
});

module.exports = router;

