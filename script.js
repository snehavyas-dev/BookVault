// ==========================
// BookVault
// ==========================

const myLibrary = [];

// --------------------------
// Book Constructor
// --------------------------

function Book(title, author, pages, status = "want-to-read") {

    this.id = crypto.randomUUID();

    this.title = title;

    this.author = author;

    this.pages = pages;

    this.status = status;

    this.favorite = false;

    this.currentPage = 0;

    this.category = "Uncategorized";
}

// --------------------------
// Prototype Methods
// --------------------------

Book.prototype.toggleStatus = function () {

    if (this.status === "want-to-read") {

        this.status = "reading";

    } else if (this.status === "reading") {

        this.status = "completed";

    } else {

        this.status = "reading";

    }

};

// --------------------------
// Add Book to Library
// --------------------------

function addBookToLibrary(title, author, pages, status) {

    const book = new Book(
        title,
        author,
        pages,
        status
    );

    myLibrary.push(book);

}

// --------------------------
// DOM Elements
// --------------------------

const bookContainer = document.querySelector(".book-container");
const searchInput = document.querySelector("#search-input");
const searchSuggestions =
    document.querySelector("#search-suggestions");
const searchMessage = document.querySelector("#search-message");

const bookForm = document.querySelector("#book-form");

const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const statusInput =
    document.querySelector("#book-status");

const totalCount =
    document.querySelector("#total-count");

const wantToReadCount =
    document.querySelector("#want-to-read-count");

const readingCount =
    document.querySelector("#reading-count");

const completedCount =
    document.querySelector("#completed-count");

const progressCount =
    document.querySelector("#progress-count");

const progressBar =
    document.querySelector("#progress-bar");

const allBtn = document.querySelector("#all-btn");

const wantToReadBtn =
    document.querySelector("#want-to-read-btn");

const readingBtn =
    document.querySelector("#reading-btn");

const completedBtn =
    document.querySelector("#completed-btn");

const favoritesBtn =
    document.querySelector("#favorites-btn");

const sortTitleBtn =
    document.querySelector("#sort-title-btn");

const sortPagesBtn =
    document.querySelector("#sort-pages-btn");

const modal = document.querySelector("#book-modal");
const openFormBtn = document.querySelector(".open-form-btn");
const closeModalBtn = document.querySelector(".close-modal");

const editModal = document.querySelector("#edit-book-modal");

const progressModal = document.querySelector("#progress-modal");

const expandNotesBtn =
    document.querySelector("#expand-notes-btn");

const bookDetailsModal =
    document.querySelector("#book-details-modal");

const detailsTitle =
    document.querySelector("#details-title");

const detailsAuthor =
    document.querySelector("#details-author");

const detailsPages =
    document.querySelector("#details-pages");

const detailsStatus =
    document.querySelector("#details-status");

const detailsProgress =
    document.querySelector("#details-progress");

const detailsProgressPage =
    document.querySelector("#details-progress-page");

const detailsProgressBar =
    document.querySelector("#details-progress-bar");

const detailsFavoriteBtn =
    document.querySelector("#details-favorite-btn");

const detailsNotes =
    document.querySelector("#details-notes");

const detailsSaveNotesBtn =
    document.querySelector("#details-save-notes-btn");

const detailsProgressBtn =
    document.querySelector("#details-progress-btn");

const detailsEditBtn =
    document.querySelector("#details-edit-btn");

const closeDetailsModal =
    document.querySelector(".close-details-modal");

let detailsBook = null;

const completedModal =
    document.querySelector("#completed-modal");

const completedBookTitle =
    document.querySelector("#completed-book-title");

const completionCancelBtn =
    document.querySelector("#completion-cancel-btn");

const completionConfirmBtn =
    document.querySelector("#completion-confirm-btn");

let completionBook = null;

const deleteConfirmModal =
    document.querySelector("#delete-confirm-modal");

const deleteConfirmMessage =
    document.querySelector("#delete-confirm-message");

const deleteCancelBtn =
    document.querySelector("#delete-cancel-btn");

const deleteConfirmBtn =
    document.querySelector("#delete-confirm-btn");

let bookToDelete = null;

completionCancelBtn.addEventListener("click", () => {

    completedModal.classList.remove("active");

    completionBook = null;

});

completionConfirmBtn.addEventListener("click", () => {

    if (!completionBook) return;

    completionBook.status = "completed";

    saveLibrary();

    updateStatistics();

    displayBooks(myLibrary);

    displayCurrentlyReading();

    completedModal.classList.remove("active");

    completionBook = null;

});

const progressForm = document.querySelector("#progress-form");

const currentPageInput = document.querySelector("#current-page");

const progressBookTitle = document.querySelector("#progress-book-title");

const progressPageInfo = document.querySelector(".progress-page-info");

const closeProgressModal =
    document.querySelector(".close-progress-modal");

let progressBook = null;

const editForm = document.querySelector("#edit-book-form");

const editTitleInput = document.querySelector("#edit-title");
const editAuthorInput = document.querySelector("#edit-author");
const editPagesInput = document.querySelector("#edit-pages");
const editStatusInput =
    document.querySelector("#edit-book-status");

const closeEditModalBtn =
    document.querySelector(".close-edit-modal");

let editingBook = null;

editForm.addEventListener("submit", (event) => {

    event.preventDefault();

    if (!editingBook) return;

    editingBook.title = editTitleInput.value;
    editingBook.author = editAuthorInput.value;
    editingBook.pages = Number(editPagesInput.value);
    editingBook.status = editStatusInput.value;

    saveLibrary();

    displayBooks(myLibrary);

    updateStatistics();

    editModal.classList.remove("active");

    editForm.reset();

    editingBook = null;

});

closeEditModalBtn.addEventListener("click", () => {

    editModal.classList.remove("active");

    editingBook = null;

});

editModal.addEventListener("click", (event) => {

    if (event.target === editModal) {

        editModal.classList.remove("active");

        editingBook = null;

    }

});

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        editModal.classList.remove("active");

        editingBook = null;

    }

});

// --------------------------
// Sidebar Navigation
// --------------------------

const sidebarNavItems = document.querySelectorAll(".sidebar-nav-item");

sidebarNavItems.forEach((item) => {
    item.addEventListener("click", () => {
        sidebarNavItems.forEach((navItem) => {
            navItem.classList.remove("active");
        });

        item.classList.add("active");

        const text = item.querySelector("span:last-child").textContent.trim();

        if (text === "Home") {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }

        if (text === "My Books") {
            document.querySelector(".books")?.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

        if (text === "Add Book") {
            modal.classList.add("active");
        }

        if (text === "Statistics") {
            document.querySelector(".statistics")?.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

        if (text === "Reading Goals") {
            document.querySelector("#reading-goals")?.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

        if (text === "Categories") {
            document.querySelector("#categories")?.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

        
        if (text === "Quotes") {
            document.querySelector("#quotes")?.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
        
        if (text === "Settings") {
            document.querySelector("#settings")?.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

function saveLibrary() {
    console.log("Saving library...", myLibrary);
    localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
}

function loadLibrary() {

    const storedBooks = localStorage.getItem("myLibrary");

    if (!storedBooks) return;

    const parsedBooks = JSON.parse(storedBooks);

    parsedBooks.forEach(book => {

        let status;

        if (book.status) {

            status = book.status;

        } else if (book.read) {

            status = "completed";

        } else {

            status = "want-to-read";

        }

        const newBook = new Book(
            book.title,
            book.author,
            book.pages,
            status
        );

        newBook.id = book.id;

        newBook.favorite = book.favorite ?? false;

        newBook.notes = book.notes || "";

        newBook.currentPage = book.currentPage ?? 0;

        newBook.category = book.category || "Uncategorized";

        myLibrary.push(newBook);

    });

}

// --------------------------
// Display Books
// --------------------------

function displayBooks(books) {

    bookContainer.innerHTML = "";

    books.forEach((book, index) => {

        const bookCard = document.createElement("div");

        bookCard.classList.add("book");

        const coverNumber =
            (myLibrary.findIndex(item => item.id === book.id) % 5) + 1;

        bookCard.classList.add(`cover-${coverNumber}`);

        const coverStyles = [
            "cover-1",
            "cover-2",
            "cover-3",
            "cover-4",
            "cover-5"
        ];

        bookCard.classList.add(
            coverStyles[index % coverStyles.length]
        );

        // Store unique id
        bookCard.dataset.id = book.id;

        bookCard.innerHTML = `

    <div class="book-cover">

        <h3>${book.title}</h3>

    </div>

    <div class="book-body">

        <p class="author">
    👤 ${book.author}
    </p>

    <hr class="book-divider">

    <p class="pages">
    📖 ${book.pages} Pages
    </p>

    <span class="status ${book.status === "completed"
                ? "completed"
                : book.status === "reading"
                    ? "reading"
                    : "want-to-read"
            }">
    ${book.status === "completed"
                ? "✓ Completed"
                : book.status === "reading"
                    ? "📖 Reading"
                    : "📚 Want to Read"
            }
    </span>

        <div class="book-actions">

    <button class="toggle-btn">

    ${book.status === "want-to-read"
                ? "Start Reading"
                : book.status === "reading"
                    ? "Mark Completed"
                    : "Read Again"
            }

    </button>

    <button class="edit-btn">
        ✏ Edit
    </button>

    <button class="delete-btn">
        🗑 Delete
    </button>

    <button class="favorite-btn ${book.favorite ? "active" : ""}">
        ${book.favorite ? "♥" : "♡"}
    </button>

</div>

    </div>

`;

        // Delete Button

        const deleteBtn = bookCard.querySelector(".delete-btn");

        deleteBtn.addEventListener("click", () => {

            bookToDelete = book;

            deleteConfirmMessage.textContent =
                `Are you sure you want to delete "${book.title}"? This action cannot be undone.`;

            deleteConfirmModal.classList.add("active");

        });

        // Toggle Button

        const toggleBtn = bookCard.querySelector(".toggle-btn");

        toggleBtn.addEventListener("click", () => {

            book.toggleStatus();
            saveLibrary();
            displayBooks(myLibrary);
            updateStatistics();
            displayCurrentlyReading();

        });

        const editBtn = bookCard.querySelector(".edit-btn");

        editBtn.addEventListener("click", () => {

            editingBook = book;

            editTitleInput.value = book.title;
            editAuthorInput.value = book.author;
            editPagesInput.value = book.pages;
            editStatusInput.value = book.status;

            editModal.classList.add("active");

        });

        const favoriteBtn = bookCard.querySelector(".favorite-btn");

        favoriteBtn.addEventListener("click", () => {

            book.favorite = !book.favorite;

            saveLibrary();

            displayBooks(myLibrary);
            updateStatistics();
            displayCurrentlyReading();

        });

        bookCard.addEventListener("click", (event) => {

            if (
                event.target.closest(
                    ".delete-btn, .toggle-btn, .edit-btn, .favorite-btn"
                )
            ) {
                return;
            }

            openBookDetails(book);

        });

        bookContainer.appendChild(bookCard);


    });
}

function openBookDetails(book) {

    detailsTitle.textContent = book.title;

    detailsAuthor.textContent = book.author;

    detailsPages.textContent = book.pages;

    const progress = book.pages > 0
        ? Math.round((book.currentPage / book.pages) * 100)
        : 0;

    detailsProgress.textContent = `${progress}%`;

    detailsProgressPage.textContent =
        `${book.currentPage} / ${book.pages} pages`;

    detailsProgressBar.style.width =
        `${progress}%`;

    detailsStatus.className = "details-status";

    if (book.status === "completed") {

        detailsStatus.textContent = "✓ Completed";
        detailsStatus.classList.add("completed");

    } else if (book.status === "reading") {

        detailsStatus.textContent = "📖 Reading";
        detailsStatus.classList.add("reading");

    } else {

        detailsStatus.textContent = "📚 Want to Read";
        detailsStatus.classList.add("want-to-read");

    }

    if (book.favorite) {

        detailsFavoriteBtn.textContent =
            "♥ Remove from Favorites";

    } else {

        detailsFavoriteBtn.textContent =
            "♡ Add to Favorites";

    }

    detailsNotes.value = book.notes || "";

    detailsBook = book;

    bookDetailsModal.classList.add("active");

}

closeDetailsModal.addEventListener("click", () => {

    bookDetailsModal.classList.remove("active");

    detailsBook = null;

});

bookDetailsModal.addEventListener("click", (event) => {

    if (event.target === bookDetailsModal) {

        bookDetailsModal.classList.remove("active");

        detailsBook = null;

    }

});

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        if (bookDetailsModal.classList.contains("active")) {

            bookDetailsModal.classList.remove("active");

            detailsBook = null;

        }

    }

});

detailsSaveNotesBtn.addEventListener("click", () => {

    if (!detailsBook) return;

    detailsBook.notes = detailsNotes.value.trim();

    saveLibrary();

    detailsSaveNotesBtn.textContent = "✓ Notes Saved";

    setTimeout(() => {

        detailsSaveNotesBtn.textContent = "💾 Save Notes";

    }, 1500);

});

detailsFavoriteBtn.addEventListener("click", () => {

    if (!detailsBook) return;

    detailsBook.favorite = !detailsBook.favorite;

    saveLibrary();

    if (detailsBook.favorite) {

        detailsFavoriteBtn.textContent =
            "♥ Remove from Favorites";

    } else {

        detailsFavoriteBtn.textContent =
            "♡ Add to Favorites";

    }

    displayBooks(myLibrary);
    updateStatistics();
    displayCurrentlyReading();

});

detailsProgressBtn.addEventListener("click", () => {

    if (!detailsBook) return;

    progressBook = detailsBook;

    progressBookTitle.textContent =
        `Update your progress for "${detailsBook.title}"`;

    currentPageInput.value =
        detailsBook.currentPage;

    currentPageInput.max =
        detailsBook.pages;

    progressPageInfo.textContent =
        `Page ${detailsBook.currentPage} of ${detailsBook.pages}`;

    bookDetailsModal.classList.remove("active");

    bookDetailsModal
        .querySelector(".close-details-modal")
        .blur();

    progressModal.classList.add("active");

    currentPageInput.focus();

});

detailsEditBtn.addEventListener("click", () => {

    if (!detailsBook) return;

    editingBook = detailsBook;

    editTitleInput.value =
        detailsBook.title;

    editAuthorInput.value =
        detailsBook.author;

    editPagesInput.value =
        detailsBook.pages;

    editStatusInput.value =
        detailsBook.status;

    bookDetailsModal.classList.remove("active");

    editModal.classList.add("active");

});

deleteConfirmBtn.addEventListener("click", () => {

    if (!bookToDelete) return;

    const index = myLibrary.findIndex(
        item => item.id === bookToDelete.id
    );

    if (index === -1) return;

    myLibrary.splice(index, 1);

    saveLibrary();

    displayBooks(myLibrary);
    updateStatistics();
    displayCurrentlyReading();

    deleteConfirmModal.classList.remove("active");

    bookToDelete = null;

});

deleteCancelBtn.addEventListener("click", () => {

    deleteConfirmModal.classList.remove("active");

    bookToDelete = null;

});

// --------------------------
// Currently Reading
// --------------------------

function displayCurrentlyReading() {

    const container = document.querySelector(
        "#currently-reading-container"
    );

    const countLabel = document.querySelector(
        "#reading-count-label"
    );

    const readingBooks = myLibrary.filter(
        book => book.status === "reading"
    );

    container.innerHTML = "";

    countLabel.textContent =
        `${readingBooks.length} ${readingBooks.length === 1 ? "book" : "books"
        }`;


    if (readingBooks.length === 0) {

        container.innerHTML = `
            <div class="empty-reading">

                <p>📚 No books currently being read.</p>

                <span>
                    Start reading a book from your library
                    to see it here.
                </span>

            </div>
        `;

        return;

    }


    readingBooks.forEach(book => {

        const card = document.createElement("article");

        card.classList.add("reading-card");

        card.innerHTML = `

            <h3>${book.title}</h3>

            <p class="reading-author">
            ${book.author}
            </p>

            <p class="reading-pages">
            ${book.currentPage} / ${book.pages} pages
            </p>

            <div class="reading-progress-info">

                <div class="reading-progress-header">

                    <span>Reading Progress</span>

                    <strong>
                        ${book.pages > 0
                ? Math.round(
                    (book.currentPage / book.pages) * 100
                )
                : 0
            }%
                    </strong>

                </div>

                <div class="reading-progress-track">

                    <div
                        class="reading-progress-bar"
                        style="
                            width: ${book.pages > 0
                ? Math.min(
                    (book.currentPage / book.pages) * 100,
                    100
                )
                : 0
            }%;
                        "
                    ></div>
        
                </div>
        
            </div>

            <span class="reading-status">
                📖 Reading
            </span>

            <button class="update-progress-btn">
                Update Progress
            </button>

        `;

        container.appendChild(card);

        const updateProgressBtn =
            card.querySelector(".update-progress-btn");

        updateProgressBtn.addEventListener("click", () => {

            progressBook = book;

            progressBookTitle.textContent =
                `Update your progress for "${book.title}"`;

            currentPageInput.value = book.currentPage;

            currentPageInput.max = book.pages;

            progressPageInfo.textContent =
                `Page ${book.currentPage} of ${book.pages}`;

            progressModal.classList.add("active");

            currentPageInput.focus();

        });

        closeProgressModal.addEventListener("click", () => {

            progressModal.classList.remove("active");

            progressBook = null;

        });

        progressForm.addEventListener("submit", (event) => {

            event.preventDefault();

            if (!progressBook) return;

            const page = Number(currentPageInput.value);

            if (
                Number.isNaN(page) ||
                page < 0 ||
                page > progressBook.pages
            ) {
                alert(
                    `Please enter a page between 0 and ${progressBook.pages}.`
                );

                return;
            }

            progressBook.currentPage = page;

            if (page === progressBook.pages) {

                progressBook.currentPage = page;

                saveLibrary();

                completedBookTitle.textContent =
                    `"${progressBook.title}" is ready to be marked as completed.`;

                completionBook = progressBook;

                progressModal.classList.remove("active");

                completedModal.classList.add("active");

                return;

            }

            saveLibrary();

            updateStatistics();

            displayBooks(myLibrary);

            displayCurrentlyReading();

            progressModal.classList.remove("active");

            progressBook = null;

        });

    });

}

expandNotesBtn.addEventListener("click", () => {

    detailsNotes.classList.toggle("expanded");

    if (detailsNotes.classList.contains("expanded")) {

        expandNotesBtn.textContent = "↙ Collapse";

    } else {

        expandNotesBtn.textContent = "↗ Expand";

    }

});


sortTitleBtn.addEventListener("click", () => {

    const sortedBooks = [...myLibrary];

    sortedBooks.sort((a, b) =>
        a.title.localeCompare(b.title)
    );

    displayBooks(sortedBooks);

});


sortPagesBtn.addEventListener("click", () => {

    const sortedBooks = [...myLibrary];

    sortedBooks.sort((a, b) =>
        a.pages - b.pages
    );

    displayBooks(sortedBooks);

});

openFormBtn.addEventListener("click", () => {

    modal.classList.add("active");

});

closeModalBtn.addEventListener("click", () => {

    modal.classList.remove("active");

});

modal.addEventListener("click", (event) => {

    if (event.target === modal) {

        modal.classList.remove("active");

    }

});

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        modal.classList.remove("active");

    }

});

// --------------------------
// Filter Menu
// --------------------------

const filterBtn = document.querySelector(".filter-btn");
const filterButtons = document.querySelector(".filter-buttons");

filterBtn?.addEventListener("click", () => {
    filterButtons?.classList.toggle("active");
});

// --------------------------
// Form Submit
// --------------------------

bookForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const title = titleInput.value;
    const author = authorInput.value;
    const pages = Number(pagesInput.value);
    const status = statusInput.value;

    addBookToLibrary(title, author, pages, status);

    saveLibrary();
    displayBooks(myLibrary);
    updateStatistics();

    // Clear Form
    bookForm.reset();
    modal.classList.remove("active");

});

searchInput.addEventListener("input", () => {

    const searchText = searchInput.value.trim().toLowerCase();

    searchSuggestions.innerHTML = "";

    if (searchText === "") {

        searchSuggestions.classList.remove("active");

        displayBooks(myLibrary);

        return;
    }

    const matchingBooks = myLibrary.filter(book => {

        return (
            book.title.toLowerCase().includes(searchText) ||
            book.author.toLowerCase().includes(searchText)
        );

    });

    displayBooks(matchingBooks);

    if (matchingBooks.length === 0) {

        searchSuggestions.classList.remove("active");

        return;
    }

    matchingBooks.slice(0, 6).forEach(book => {

        const suggestion =
            document.createElement("button");

        suggestion.type = "button";
        suggestion.className = "search-suggestion";

        suggestion.innerHTML = `
            <strong>${book.title}</strong>
            <span>${book.author}</span>
        `;

        suggestion.addEventListener("click", () => {

            searchInput.value = book.title;

            searchSuggestions.innerHTML = "";

            searchSuggestions.classList.remove("active");

            displayBooks([book]);

            document.querySelector(".books")
                .scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

        });

        searchSuggestions.appendChild(suggestion);

    });

    searchSuggestions.classList.add("active");

    document.querySelector(".books")
        .scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

});

document.addEventListener("click", (event) => {

    if (!event.target.closest(".nav-search")) {

        searchSuggestions.classList.remove("active");

    }

});

searchInput.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        searchSuggestions.classList.remove("active");

        searchInput.blur();

    }

});

function updateStatistics() {

    const totalBooks = myLibrary.length;

    const wantToReadBooks = myLibrary.filter(
        book => book.status === "want-to-read"
    ).length;

    const readingBooks = myLibrary.filter(
        book => book.status === "reading"
    ).length;

    const completedBooks = myLibrary.filter(
        book => book.status === "completed"
    ).length;


    totalCount.textContent = totalBooks;

    wantToReadCount.textContent = wantToReadBooks;

    readingCount.textContent = readingBooks;

    completedCount.textContent = completedBooks;


    let progress = 0;

    if (totalBooks > 0) {

        progress = Math.round(
            (completedBooks / totalBooks) * 100
        );

    }


    progressCount.textContent = `${progress}%`;

    progressBar.style.width = `${progress}%`;

}

updateStatistics();

// --------------------------
// Initial Render
// --------------------------

loadLibrary();

displayBooks(myLibrary);

updateStatistics();

displayCurrentlyReading();

// =========================================================
// QUOTES FUNCTIONALITY
// =========================================================

const quotes = [
    {
        text: "A room without books is like a body without a soul.",
        author: "Marcus Tullius Cicero"
    },
    {
        text: "So many books, so little time.",
        author: "Frank Zappa"
    },
    {
        text: "There is no friend as loyal as a book.",
        author: "Ernest Hemingway"
    },
    {
        text: "A reader lives a thousand lives before he dies.",
        author: "George R. R. Martin"
    },
    {
        text: "Books are a uniquely portable magic.",
        author: "Stephen King"
    },
    {
        text: "Reading is to the mind what exercise is to the body.",
        author: "Joseph Addison"
    },
    {
        text: "Until I feared I would lose it, I never loved to read. One does not love breathing.",
        author: "Harper Lee"
    },
    {
        text: "I have always imagined that Paradise will be a kind of library.",
        author: "Jorge Luis Borges"
    },
    {
        text: "We read to know we are not alone.",
        author: "C. S. Lewis"
    },
    {
        text: "Books are mirrors: you only see in them what you already have inside you.",
        author: "Carlos Ruiz Zafón"
    },
    {
        text: "Reading brings us unknown friends.",
        author: "Honoré de Balzac"
    },
    {
        text: "Wherever I am, if I've got a book with me, I have a place I can go and be happy.",
        author: "J. K. Rowling"
    }
];

const quoteNextBtn =
    document.querySelector(".quote-next-btn");

const quoteCard =
    document.querySelector(".quote-card");

const quoteText =
    quoteCard.querySelector("blockquote");

const quoteAuthor =
    quoteCard.querySelector(".quote-author");

const quoteFavoriteBtn =
    quoteCard.querySelector(".quote-favorite-btn");

const quoteShareBtn =
    quoteCard.querySelector(".quote-share-btn");


// --------------------------
// Favorite Quotes
// --------------------------

let favoriteQuotes =
    JSON.parse(localStorage.getItem("favoriteQuotes")) || [];


// --------------------------
// Current Quote
// --------------------------

let currentQuote = {
    text: quoteText.textContent.trim(),
    author: quoteAuthor.textContent
        .replace(/^—\s*/, "")
        .trim()
};


// --------------------------
// Check Favorite
// --------------------------

function isQuoteFavorite(quote) {

    return favoriteQuotes.some(
        favorite =>
            favorite.text === quote.text &&
            favorite.author === quote.author
    );

}


// --------------------------
// Update Favorite Button
// --------------------------

function updateQuoteFavoriteButton() {

    if (isQuoteFavorite(currentQuote)) {

        quoteFavoriteBtn.textContent =
            "♥ Favorited";

        quoteFavoriteBtn.classList.add("active");

    } else {

        quoteFavoriteBtn.textContent =
            "♡ Favorite";

        quoteFavoriteBtn.classList.remove("active");

    }

}


// --------------------------
// Display Quote
// --------------------------

function displayQuote(quote) {

    currentQuote = quote;

    quoteText.textContent = quote.text;

    quoteAuthor.textContent =
        `— ${quote.author}`;

    updateQuoteFavoriteButton();

}


// --------------------------
// Get New Quote
// --------------------------

function getNewQuote() {

    if (quotes.length === 0) return;

    let randomIndex;

    do {

        randomIndex =
            Math.floor(Math.random() * quotes.length);

    } while (
        quotes.length > 1 &&
        quotes[randomIndex].text === currentQuote.text
    );

    displayQuote(quotes[randomIndex]);

}


// --------------------------
// New Quote Button
// --------------------------

quoteNextBtn.addEventListener("click", () => {

    getNewQuote();

});


// --------------------------
// Favorite Button
// --------------------------

quoteFavoriteBtn.addEventListener("click", () => {

    const favoriteIndex =
        favoriteQuotes.findIndex(
            favorite =>
                favorite.text === currentQuote.text &&
                favorite.author === currentQuote.author
        );

    if (favoriteIndex === -1) {

        favoriteQuotes.push({
            text: currentQuote.text,
            author: currentQuote.author
        });

        quoteFavoriteBtn.textContent =
            "♥ Favorited";

        quoteFavoriteBtn.classList.add("active");

    } else {

        favoriteQuotes.splice(favoriteIndex, 1);

        quoteFavoriteBtn.textContent =
            "♡ Favorite";

        quoteFavoriteBtn.classList.remove("active");

    }

    localStorage.setItem(
        "favoriteQuotes",
        JSON.stringify(favoriteQuotes)
    );

});

function setActiveFilter(activeButton) {
    document
        .querySelectorAll(".filter-buttons button")
        .forEach(button => {
            button.classList.remove("active");
        });

    activeButton.classList.add("active");
}

allBtn.addEventListener("click", () => {
    setActiveFilter(allBtn);
    displayBooks(myLibrary);
});

wantToReadBtn.addEventListener("click", () => {
    setActiveFilter(wantToReadBtn);

    displayBooks(
        myLibrary.filter(
            book => book.status === "want-to-read"
        )
    );
});

readingBtn.addEventListener("click", () => {
    setActiveFilter(readingBtn);

    displayBooks(
        myLibrary.filter(
            book => book.status === "reading"
        )
    );
});

completedBtn.addEventListener("click", () => {
    setActiveFilter(completedBtn);

    displayBooks(
        myLibrary.filter(
            book => book.status === "completed"
        )
    );
});

favoritesBtn.addEventListener("click", () => {
    setActiveFilter(favoritesBtn);

    displayBooks(
        myLibrary.filter(
            book => book.favorite
        )
    );
});


// --------------------------
// Share Quote
// --------------------------

quoteShareBtn.addEventListener("click", async () => {

    const shareText =
        `"${currentQuote.text}" — ${currentQuote.author}`;

    if (navigator.share) {

        try {

            await navigator.share({
                title: "A Quote Worth Keeping",
                text: shareText
            });

        } catch (error) {

            if (error.name !== "AbortError") {
                console.error(
                    "Unable to share quote:",
                    error
                );
            }

        }

        return;
    }


    // --------------------------
    // Clipboard Fallback
    // --------------------------

    try {

        await navigator.clipboard.writeText(
            shareText
        );

        const originalText =
            quoteShareBtn.textContent;

        quoteShareBtn.textContent =
            "✓ Copied";

        setTimeout(() => {

            quoteShareBtn.textContent =
                originalText;

        }, 1500);

    } catch (error) {

        console.error(
            "Unable to copy quote:",
            error
        );

        alert(shareText);

    }

});


// --------------------------
// Initial Quote State
// --------------------------

updateQuoteFavoriteButton();

// =========================================================
// PROFILE POPUP
// =========================================================

const dashboardAvatar =
    document.querySelector(".dashboard-avatar");

const profilePopup =
    document.querySelector("#profile-popup");

const profileClose =
    document.querySelector("#profile-close");

const profileBookCount =
    document.querySelector("#profile-book-count");

const profileCompletedCount =
    document.querySelector("#profile-completed-count");

dashboardAvatar?.addEventListener("click", () => {

    profileBookCount.textContent =
        myLibrary.length;

    profileCompletedCount.textContent =
        myLibrary.filter(
            book => book.status === "completed"
        ).length;

    profilePopup.classList.add("active");

});

profileClose?.addEventListener("click", () => {

    profilePopup.classList.remove("active");

});

profilePopup?.addEventListener("click", (event) => {

    if (event.target === profilePopup) {
        profilePopup.classList.remove("active");
    }

});

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        profilePopup?.classList.remove("active");
    }

});

// =========================================================
// READING GOALS
// =========================================================

const goalTargetEl =
    document.querySelector("#goal-target");

const goalCompletedEl =
    document.querySelector("#goal-completed");

const goalPercentageEl =
    document.querySelector("#goal-percentage");

const goalProgressBar =
    document.querySelector("#goal-progress-bar");

const changeGoalBtn =
    document.querySelector("#change-goal-btn");


let readingGoal =
    Number(localStorage.getItem("readingGoal")) || 12;


function updateReadingGoal() {

    const completedBooks =
        myLibrary.filter(
            book => book.status === "completed"
        ).length;

    const percentage =
        readingGoal > 0
            ? Math.min(
                Math.round(
                    (completedBooks / readingGoal) * 100
                ),
                100
            )
            : 0;

    goalTargetEl.textContent = readingGoal;
    goalCompletedEl.textContent = completedBooks;
    goalPercentageEl.textContent = `${percentage}%`;
    goalProgressBar.style.width = `${percentage}%`;
}


changeGoalBtn?.addEventListener("click", () => {

    const newGoal = prompt(
        "How many books do you want to read this year?",
        readingGoal
    );

    if (newGoal === null) return;

    const goal = Number(newGoal);

    if (!Number.isInteger(goal) || goal < 1) {
        alert("Please enter a whole number greater than 0.");
        return;
    }

    readingGoal = goal;

    localStorage.setItem(
        "readingGoal",
        readingGoal
    );

    updateReadingGoal();
});


// =========================================================
// CATEGORIES
// =========================================================

const categoriesGrid =
    document.querySelector("#categories-grid");


const categoryIcons = {
    fiction: "📖",
    fantasy: "🧙",
    romance: "❤️",
    mystery: "🔎",
    thriller: "🌙",
    horror: "👻",
    biography: "👤",
    history: "🏛️",
    science: "🔬",
    selfhelp: "🌱",
    default: "📚"
};


function getCategoryIcon(category) {

    const key =
        category
            .toLowerCase()
            .replace(/\s+/g, "");

    return categoryIcons[key] ||
        categoryIcons.default;
}


function displayCategories() {

    if (!categoriesGrid) return;

    categoriesGrid.innerHTML = "";

    const categoryMap = {};

    myLibrary.forEach(book => {

        const category =
            book.category?.trim() ||
            "Uncategorized";

        if (!categoryMap[category]) {
            categoryMap[category] = 0;
        }

        categoryMap[category]++;
    });


    const categories =
        Object.entries(categoryMap);


    if (categories.length === 0) {

        categoriesGrid.innerHTML = `
            <div class="empty-category">
                <p>📚 No categories yet.</p>
                <span>
                    Add books to your library to see categories here.
                </span>
            </div>
        `;

        return;
    }


    categories.forEach(([category, count]) => {

        const card =
            document.createElement("article");

        card.className = "category-card";

        card.innerHTML = `
            <div class="category-icon">
                ${getCategoryIcon(category)}
            </div>

            <h3>${category}</h3>

            <p>
                ${count}
                ${count === 1 ? "book" : "books"}
            </p>
        `;


        card.addEventListener("click", () => {

            const books =
                myLibrary.filter(
                    book =>
                        (book.category?.trim() ||
                            "Uncategorized") === category
                );

            displayBooks(books);

            document.querySelector(".books")
                ?.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
        });


        categoriesGrid.appendChild(card);
    });
}


// =========================================================
// SETTINGS
// =========================================================

const darkModeToggle =
    document.querySelector("#dark-mode-toggle");


const deleteConfirmToggle =
    document.querySelector("#delete-confirm-toggle");


const resetLibraryBtn =
    document.querySelector("#reset-library-btn");


const savedDarkMode =
    localStorage.getItem("darkMode") === "true";


if (savedDarkMode) {

    document.body.classList.add("dark-mode");

    if (darkModeToggle) {
        darkModeToggle.checked = true;
    }
}


darkModeToggle?.addEventListener("change", () => {

    document.body.classList.toggle(
        "dark-mode",
        darkModeToggle.checked
    );

    localStorage.setItem(
        "darkMode",
        darkModeToggle.checked
    );
});


const savedDeleteSetting =
    localStorage.getItem("confirmDelete");


if (savedDeleteSetting !== null) {

    deleteConfirmToggle.checked =
        savedDeleteSetting === "true";
}


deleteConfirmToggle?.addEventListener("change", () => {

    localStorage.setItem(
        "confirmDelete",
        deleteConfirmToggle.checked
    );
});


resetLibraryBtn?.addEventListener("click", () => {

    const confirmed =
        confirm(
            "Are you sure you want to delete all books from your library?"
        );

    if (!confirmed) return;

    myLibrary.length = 0;

    localStorage.removeItem("myLibrary");

    displayBooks(myLibrary);
    updateStatistics();
    displayCurrentlyReading();
    updateReadingGoal();
    displayCategories();
});


// =========================================================
// INITIAL UPDATE
// =========================================================

updateReadingGoal();
displayCategories();

// ==========================
// MOBILE BOTTOM NAVIGATION
// ==========================

const mobileNavItems =
    document.querySelectorAll(".mobile-nav-item");

const mobileAddBtn =
    document.querySelector(".mobile-add-btn");

mobileNavItems.forEach((button) => {

    button.addEventListener("click", () => {

        mobileNavItems.forEach((item) => {
            item.classList.remove("active");
        });

        button.classList.add("active");

        const section = button.dataset.section;

        if (section === "home") {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }

        if (section === "books") {
            document.querySelector(".books")?.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

        if (section === "stats") {
            document.querySelector(".statistics")?.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

        if (section === "quotes") {
            document.querySelector("#quotes")?.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

    });

});

mobileAddBtn?.addEventListener("click", () => {
    modal?.classList.add("active");
});