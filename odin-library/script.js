// Write a constructor for making “Book” objects.
// Your book objects should have the book’s title, author, the number of pages, and whether or not you have read the book
// Put a function into the constructor that can report the book info like so:
// theHobbit.info() // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.info = () => `${title} by ${author},${pages} pages`;
}

function addBookToLibrary() {
  const title = document.querySelector("#title").value;
  let name = title;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  name = new Book(title, author, pages);
  return [name.title, name.info()];
}

function displayBookInfo(bookID, myLibrary) {
  const books = document.querySelectorAll(".new-book-icon");
  for (const book of books) {
    book.addEventListener("click", () => {
      const key = bookID.indexOf(book.id);
      const info = myLibrary[key][1];
      alert(info);
    });
  }
}

function createIsRead(container) {
  const isRead = document.createElement("button");
  let readVal = false;
  isRead.style.display = "block";
  isRead.innerText = "Not Read";
  isRead.id = "read";
  isRead.addEventListener("click", () => {
    if (readVal === false) {
      isRead.style.backgroundColor = "lightseagreen";
      isRead.innerText = "Read";
    } else {
      isRead.style.backgroundColor = "maroon";
      isRead.innerText = "Not read";
    }
    readVal = !readVal;
    console.log(readVal);
  });
  container.appendChild(isRead);
}
const myLibrary = [];
const bookID = [];
const newBookForm = document.querySelector("#new-book-form");
const container = document.querySelector(".container");
let newBookIcon;
const newBook = document.querySelector("#new-book");
newBook.addEventListener("click", () => {
  newBookForm.style.display = "block";
});

const submit = document.querySelector("#submit");
submit.addEventListener("click", () => {
  const addNewBook = addBookToLibrary();
  const newBookID = addNewBook[0];
  bookID.push(addNewBook[0]);
  myLibrary.push(addNewBook);
  createIsRead(container);
  const bookTitle = document.createElement("p");
  bookTitle.classList.add("book-title");
  bookTitle.innerHTML = newBookID;
  newBookIcon = document.createElement("div");
  newBookIcon.classList.add("new-book-icon");
  newBookIcon.setAttribute("id", newBookID);
  container.appendChild(newBookIcon);
  newBookIcon.appendChild(bookTitle);
  displayBookInfo(bookID, myLibrary);
  newBookForm.style.display = "none";
});
