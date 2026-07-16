const myLibrary = [];

function Book(title, author, pages, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

addBookToLibrary("Atomic Habits", "James Clear", 320, true);
addBookToLibrary("Deep Work", "Cal Newport", 304, false);
addBookToLibrary("Clean Code", "Robert C. Martin", 464, true);

console.log(myLibrary);

const bookContainer = document.querySelector(".book-container");

function displayBooks() {
    bookContainer.innerHTML = "";

    myLibrary.forEach((book) => {

        const bookCard = document.createElement("div");
        bookCard.classList.add("book");
        
        bookCard.innerHTML = `
        <h3>${book.title}</h3>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Pages:</strong> ${book.pages}</p>
        <p><strong>Status:</strong> ${book.read ? "✅ Read" : "📖 Unread"}</p>
        
        <button class="toggle-btn">📖 Toggle Read</button>
        <button class="delete-btn">🗑 Delete</button>
        `;
        
        const deleteBtn = bookCard.querySelector(".delete-btn");
        
        deleteBtn.addEventListener("click", () => {
            const index = myLibrary.findIndex((item) => item.id === book.id);
            myLibrary.splice(index, 1);
            displayBooks();
        });

        Book.prototype.toggleRead = function () {
         this.read = !this.read;
        };

        const toggleBtn = bookCard.querySelector(".toggle-btn");

        toggleBtn.addEventListener("click", () => {
        book.toggleRead();
        displayBooks();
        });

        bookContainer.appendChild(bookCard);
    });
}

displayBooks();
