// Write a constructor for making “Book” objects.
// Your book objects should have the book’s title, author, the number of pages, and whether or not you have read the book
// Put a function into the constructor that can report the book info like so:
// theHobbit.info() // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"

function Book(title, author, pages, readBook) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readBook = readBook;
  this.info = () => `${title} by ${author},${pages} pages,${readBook}`;
}

function addBookToLibrary() {
  const title = prompt("Enter book title");
  let name = title;
  const author = prompt("Enter book author");
  const pages = prompt("Enter number of pagess in book");
  const readBook = prompt(
    "Enter if you have read the book(read yet/not read yet)"
  );
  name = new Book(title, author, pages, readBook);
  return name.info();
}

const myLibrary = [];
const books = prompt("How many books do you have in your library?");
// eslint-disable-next-line no-plusplus
for (let book = 0; book < books; book++) {
  myLibrary.push(addBookToLibrary());
}
console.log(myLibrary);
