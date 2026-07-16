// ==========================
// BookVault
// ==========================

const myLibrary = [];

// --------------------------
// Book Constructor
// --------------------------

function Book(title, author, pages, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// --------------------------
// Prototype Methods
// --------------------------

Book.prototype.toggleRead = function () {
    this.read = !this.read;
};

// --------------------------
// Add Book to Library
// --------------------------

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

// --------------------------
// Sample Books
// --------------------------

addBookToLibrary("Atomic Habits", "James Clear", 320, true);
addBookToLibrary("Deep Work", "Cal Newport", 304, false);
addBookToLibrary("Clean Code", "Robert C. Martin", 464, true);

// --------------------------
// DOM Elements
// --------------------------

const bookContainer = document.querySelector(".book-container");

const bookForm = document.querySelector("#book-form");

const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const readInput = document.querySelector("#read");

const totalCount = document.querySelector("#total-count");
const readCount = document.querySelector("#read-count");
const unreadCount = document.querySelector("#unread-count");
const progressCount = document.querySelector("#progress-count");

// --------------------------
// Display Books
// --------------------------

function displayBooks() {

    bookContainer.innerHTML = "";

    myLibrary.forEach((book) => {

        const bookCard = document.createElement("div");
        bookCard.classList.add("book");

        // Store unique id
        bookCard.dataset.id = book.id;

        bookCard.innerHTML = `
            <h3>${book.title}</h3>

            <p><strong>Author:</strong> ${book.author}</p>

            <p><strong>Pages:</strong> ${book.pages}</p>

            <p><strong>Status:</strong> ${book.read ? "✅ Read" : "📖 Unread"
            }</p>

            <button class="toggle-btn">
                📖 Toggle Read
            </button>

            <button class="delete-btn">
                🗑 Delete
            </button>
        `;

        // Delete Button

        const deleteBtn = bookCard.querySelector(".delete-btn");

        deleteBtn.addEventListener("click", () => {

            const index = myLibrary.findIndex(
                item => item.id === book.id
            );

            myLibrary.splice(index, 1);

            displayBooks();

        });

        // Toggle Button

        const toggleBtn = bookCard.querySelector(".toggle-btn");

        toggleBtn.addEventListener("click", () => {

            book.toggleRead();

            displayBooks();

        });

        bookContainer.appendChild(bookCard);

    });

}
updateStatistics();

// --------------------------
// Form Submit
// --------------------------

bookForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const title = titleInput.value;
    const author = authorInput.value;
    const pages = Number(pagesInput.value);
    const read = readInput.checked;

    addBookToLibrary(title, author, pages, read);

    displayBooks();

    // Clear Form

    bookForm.reset();

});

function updateStatistics() {

    const totalBooks = myLibrary.length;
    const readBooks = myLibrary.filter(book => book.read).length;
    const unreadBooks = myLibrary.filter(book => !book.read).length;

    totalCount.textContent = totalBooks;
    readCount.textContent = readBooks;
    unreadCount.textContent = unreadBooks;
    readCount.textContent = myLibrary.filter(book => book.read).length;
    unreadCount.textContent = myLibrary.filter(book => !book.read).length;

    if (totalBooks === 0) {
        progressCount.textContent = "0%";
    } else {
        const progress = Math.round((readBooks / totalBooks) * 100);
        progressCount.textContent = `${progress}%`;
    }
}

updateStatistics();

// --------------------------
// Initial Render
// --------------------------

displayBooks();