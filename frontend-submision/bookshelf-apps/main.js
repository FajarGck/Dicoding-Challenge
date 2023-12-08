const bookTitle = document.getElementById('inputBookTitle');
const bookAuthor = document.getElementById('inputBookAuthor');
const bookYear = document.getElementById('inputBookYear');
const bookIsComplete = document.getElementById('inputBookIsComplete');
const completeBooksShelf = document.getElementById('completeBookshelfList')
const inCompleteBookShelf = document.getElementById('incompleteBookshelfList')
const form = document.getElementById('inputBook');
const searchForm = document.getElementById('searchBook');

form.addEventListener("submit", (e) => {
    e.preventDefault()
    validation();
});


searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const searchInput = document.getElementById('searchBookTitle').value.trim();
    const filteredBooks = searchBooks(searchInput);
    showBooks(filteredBooks)
})

const searchBooks = (searchInput) => {
    const storeBooks = JSON.parse(localStorage.getItem("Books")) || [];

    if (searchInput) {
        return storeBooks.filter(book => book.title.toLowerCase().includes(searchInput.toLowerCase()))
    } else {
        return storeBooks;
    }
}

let books = [{}]

 const validation = () => {
    const title = bookTitle.value.trim();
    const author = bookAuthor.value.trim();
    const year = bookYear.value.trim();
    const isComplete = bookIsComplete.checked

    if (title && author && year) {
        books.push({
            "id": +new Date(),
            "title": title,
            "author": author,
            "year": parseInt(year),
            "isComplete": isComplete
        });

        storebooks(books);
        showBooks();
        reset();
    } else {
        alert("tidak boleh kosong")
    }
}

const storebooks = (books) => {
    try {
        localStorage.setItem("Books", JSON.stringify(books));
    } catch(error) {
        console.error(error)
    }
}

const showBooks = (filteredBooks) => {
    const storeBooks = filteredBooks || JSON.parse(localStorage.getItem("Books")) || [];
    completeBooksShelf.innerHTML = '';
    inCompleteBookShelf.innerHTML = '';

    storeBooks.forEach(book => {
        const bookHtml = `
        <article class="book_item">
            <h3>${book.title}</h3>
            <p>Penulis: ${book.author}</p>
            <p>Tahun: ${book.year}</p>
        
            <div class="action">
                ${book.isComplete ?
                `<button class="green" onclick="moveToInComplete(${book.id})">Belum Selesai di Baca</button>`:
                `<button class="green" onclick="moveToComplete(${book.id})">Selesai di Baca</button>`
                }
            <button class="red" onclick="deleteBook(${book.id})">Hapus buku</button>
            </div>
      </article>
        `;

        if (book.isComplete) {
            completeBooksShelf.innerHTML += bookHtml;
        } else {
            inCompleteBookShelf.innerHTML += bookHtml;
        }

    });
};


const moveToComplete = (id) => {
    const updateBooks = books.map((book) => {
        if (book.id === id) {
            book.isComplete = true;
        }
        return book

    })
    books = updateBooks;
    storebooks(books);
    showBooks();
}

const moveToInComplete = (id) => {
    const updateBooks = books.map((book) => {
        if (book.id === id) {
            book.isComplete = false;
        }
        return book
    });
    books = updateBooks;
    storebooks(books);
    showBooks();
}

const deleteBook = (id) => {
    const updateBooks = books.filter((book) => book.id !== id)
    books = updateBooks;
    storebooks(books);
    showBooks();
}


const reset = () => {
    bookTitle.value = '';
    bookAuthor.value = '';
    bookYear.value = '';
    bookIsComplete.checked = false
}


(() => {
    books = JSON.parse(localStorage.getItem("Books")) || [];
    showBooks();
})();



