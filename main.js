let userLibrary = []

function Book(title, author, pages) {
  this.title = title
  this.author = author
  this.pages = pages
  this.addBook = function () {
    userLibrary.push(this)
  }
}

function addNewBook(title, author, pages) {
  let newBook = new Book(title, author, pages)
  newBook.addBook()
}

addNewBook('harry potter', 'tolkein', '380')
addNewBook('lord of the rings', 'jr rowling', '600')
addNewBook('game of thrones', 'george r r martin', '980')

console.log(userLibrary)

function openForm() {
  document.getElementById('popupForm').style.display = 'block'
}
function closeForm() {
  document.getElementById('popupForm').style.display = 'none'
}
