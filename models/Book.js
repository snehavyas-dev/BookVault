const mongoose = require("mongoose");

/**
 * Mongoose Schema for BookVault
 */
const bookSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Book title is required"],
            trim: true
        },
        author: {
            type: String,
            required: [true, "Author name is required"],
            trim: true
        },
        pages: {
            type: Number,
            required: [true, "Number of pages is required"],
            min: [1, "Pages must be at least 1"]
        },
        status: {
            type: String,
            enum: ["want-to-read", "reading", "completed"],
            default: "want-to-read"
        },
        currentPage: {
            type: Number,
            default: 0,
            min: [0, "Current page cannot be negative"]
        },
        favorite: {
            type: Boolean,
            default: false
        },
        category: {
            type: String,
            default: "Uncategorized",
            trim: true
        },
        notes: {
            type: String,
            default: "",
            trim: true
        }
    },
    {
        timestamps: true,
        toJSON: {
            transform: (doc, ret) => {
                ret.id = ret._id.toString();
                return ret;
            }
        },
        toObject: {
            transform: (doc, ret) => {
                ret.id = ret._id.toString();
                return ret;
            }
        }
    }
);

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;

